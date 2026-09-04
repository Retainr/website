import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { runInNewContext } from "node:vm";
import ts from "typescript";

const component = readFileSync(new URL("../src/components/RotatingKicker.astro", import.meta.url), "utf8");
const script = component.match(/<script>([\s\S]*?)<\/script>/)?.[1];
assert.ok(script, "The tested script must be the one shipped by the Astro component");
const { outputText } = ts.transpileModule(script, { compilerOptions: { target: ts.ScriptTarget.ES2022 } });

function fixture({ reducedMotion = false, hidden = false, count = 4, interval = "4800" } = {}) {
  const media = Object.assign(new EventTarget(), { matches: reducedMotion });
  const document = Object.assign(new EventTarget(), { hidden });
  const timers = new Map();
  let nextTimer = 0;
  const window = Object.assign(new EventTarget(), {
    matchMedia: () => media,
    setTimeout: (callback, delay) => {
      timers.set(++nextTimer, { callback, delay });
      return nextTimer;
    },
    clearTimeout: (timer) => timers.delete(timer),
  });
  const registered = new Map();
  class Element extends EventTarget {
    dataset = {};
    attributes = new Map();
    setAttribute(name, value) { this.attributes.set(name, value); }
    querySelector() { return this.toggle; }
    querySelectorAll() { return this.messages; }
  }
  const context = {
    window, document, AbortController, HTMLElement: Element,
    customElements: {
      get: (name) => registered.get(name),
      define: (name, element) => {
        assert.ok(!registered.has(name), "Custom element must register only once");
        registered.set(name, element);
      },
    },
  };
  runInNewContext(outputText, context);
  const Kicker = registered.get("rotating-kicker");
  const kicker = new Kicker();
  kicker.dataset.interval = interval;
  kicker.messages = Array.from({ length: count }, (_, index) => ({
    textContent: `Message ${index}`,
    dataset: { active: String(index === 0) },
  }));
  kicker.toggle = new Element();
  kicker.toggle.disabled = true;
  kicker.connectedCallback();

  return {
    kicker, media, document, window, timers,
    active: () => kicker.messages.findIndex((message) => message.dataset.active === "true"),
    tick: () => {
      assert.equal(timers.size, 1);
      const [id, { callback }] = timers.entries().next().value;
      timers.delete(id);
      callback();
    },
    toggle: () => kicker.toggle.dispatchEvent(new Event("click")),
    changeMotion: (matches) => { media.matches = matches; media.dispatchEvent(new Event("change")); },
    changeVisibility: (hidden) => { document.hidden = hidden; document.dispatchEvent(new Event("visibilitychange")); },
  };
}

test("cycles each message with one timer while keeping all layout-sizing text intact", () => {
  const app = fixture();
  assert.equal(app.active(), 0);
  for (const expected of [1, 2, 3, 0]) {
    app.tick();
    assert.equal(app.active(), expected);
    assert.equal(app.kicker.messages.filter((message) => message.dataset.active === "true").length, 1);
  }
  assert.deepEqual(app.kicker.messages.map((message) => message.textContent), ["Message 0", "Message 1", "Message 2", "Message 3"]);
});

test("pause persists through visibility changes and resume continues at the next message", () => {
  const app = fixture();
  app.tick();
  app.toggle();
  assert.equal(app.timers.size, 0);
  assert.equal(app.kicker.dataset.rotationState, "paused");
  assert.equal(app.kicker.toggle.attributes.get("aria-label"), "Resume rotating message");
  app.changeVisibility(true);
  app.changeVisibility(false);
  assert.equal(app.timers.size, 0);
  assert.equal(app.active(), 1);
  app.toggle();
  assert.equal(app.kicker.toggle.attributes.get("aria-label"), "Pause rotating message");
  app.tick();
  assert.equal(app.active(), 2);
});

test("reduced motion is static at startup and preference changes stop pending updates", () => {
  const app = fixture({ reducedMotion: true });
  assert.equal(app.timers.size, 0);
  assert.equal(app.active(), 0);
  assert.equal(app.kicker.toggle.disabled, true);
  app.changeMotion(false);
  assert.equal(app.kicker.toggle.disabled, false);
  app.tick();
  app.changeMotion(true);
  assert.equal(app.timers.size, 0);
  assert.equal(app.active(), 0);
  assert.equal(app.kicker.dataset.rotationState, "static");
});

test("hidden documents do not start or continue background timers", () => {
  const app = fixture({ hidden: true });
  assert.equal(app.timers.size, 0);
  app.changeVisibility(false);
  app.tick();
  app.changeVisibility(true);
  assert.equal(app.timers.size, 0);
  app.changeVisibility(false);
  assert.equal(app.timers.size, 1);
});

test("back-forward cache suspension preserves the message without duplicate timers", () => {
  const app = fixture();
  app.tick();
  app.window.dispatchEvent(new Event("pagehide"));
  assert.equal(app.timers.size, 0);
  app.window.dispatchEvent(new Event("pageshow"));
  assert.equal(app.active(), 1);
  assert.equal(app.timers.size, 1);
});

test("disconnect removes timers and listeners; reconnect initializes exactly once", () => {
  const app = fixture();
  app.kicker.disconnectedCallback();
  app.changeMotion(true);
  app.changeMotion(false);
  app.changeVisibility(false);
  assert.equal(app.timers.size, 0);
  app.kicker.connectedCallback();
  app.kicker.connectedCallback();
  assert.equal(app.timers.size, 1);
  app.toggle();
  assert.equal(app.timers.size, 0);
});

test("zero or one message needs no animation control or timer", () => {
  for (const count of [0, 1]) {
    const app = fixture({ count });
    assert.equal(app.timers.size, 0);
    assert.equal(app.kicker.toggle.disabled, true);
  }
});

test("invalid intervals fall back safely; overly short intervals are clamped", () => {
  for (const [interval, expected] of [["invalid", 4800], ["Infinity", 4800], ["1", 2400], ["6000", 6000]]) {
    const app = fixture({ interval });
    assert.equal([...app.timers.values()][0].delay, expected);
  }
});

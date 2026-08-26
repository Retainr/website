#!/usr/bin/env python3
"""Generate Retainr's evergreen freelance-skills workbook."""

from __future__ import annotations

import shutil
from pathlib import Path

from reportlab.lib.colors import HexColor, Color
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "Retainr.io-skills-you-need-to-know.pdf"
ALIASES = (
    ROOT / "public" / "Retainr.io-skills-you-need-to-know-in-2025.pdf",
    ROOT / "public" / "guides" / "agency-freelancing-skills-you-need-to-know-in-2025.pdf",
)

PAGE = 810
MARGIN = 62
CONTENT = PAGE - (MARGIN * 2)

INK = HexColor("#1d2130")
ORANGE = HexColor("#FF4D18")
YELLOW = HexColor("#FFD540")
WHITE = HexColor("#FFFFFF")
ICE = HexColor("#EDF8FD")
GREEN = HexColor("#B7CD4B")
MUTED = HexColor("#606574")
LINE = HexColor("#D9DEE5")
BLACK = HexColor("#050505")

ARIAL = "/System/Library/Fonts/Supplemental/Arial.ttf"
ARIAL_BOLD = "/System/Library/Fonts/Supplemental/Arial Bold.ttf"
ARIAL_BLACK = "/System/Library/Fonts/Supplemental/Arial Black.ttf"

pdfmetrics.registerFont(TTFont("Retainr", ARIAL))
pdfmetrics.registerFont(TTFont("Retainr-Bold", ARIAL_BOLD))
pdfmetrics.registerFont(TTFont("Retainr-Black", ARIAL_BLACK))


def split_lines(text: str, font: str, size: float, width: float) -> list[str]:
    words = text.split()
    lines: list[str] = []
    current = ""
    for word in words:
        candidate = f"{current} {word}".strip()
        if pdfmetrics.stringWidth(candidate, font, size) <= width:
            current = candidate
        else:
            if current:
                lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines


def text_block(
    c: canvas.Canvas,
    text: str,
    x: float,
    y: float,
    width: float,
    *,
    font: str = "Retainr",
    size: float = 15,
    leading: float | None = None,
    color=INK,
) -> float:
    leading = leading or size * 1.35
    c.setFont(font, size)
    c.setFillColor(color)
    for line in split_lines(text, font, size, width):
        c.drawString(x, y, line)
        y -= leading
    return y


def label(c: canvas.Canvas, text: str, x: float, y: float, color=ORANGE) -> None:
    c.setFillColor(GREEN)
    c.roundRect(x, y - 2, 9, 9, 2, fill=1, stroke=0)
    c.setFillColor(color)
    c.setFont("Retainr-Bold", 10)
    c.drawString(x + 18, y, text.upper())


def page_header(c: canvas.Canvas, section: str, page_number: int, *, dark: bool = False) -> None:
    ink = WHITE if dark else INK
    c.setStrokeColor(Color(1, 1, 1, alpha=0.28) if dark else LINE)
    c.setLineWidth(1)
    c.line(MARGIN, PAGE - 45, PAGE - MARGIN, PAGE - 45)
    c.setFillColor(ink)
    c.setFont("Retainr-Bold", 10)
    c.drawString(MARGIN, PAGE - 32, "RETAINR FIELD GUIDE")
    c.drawRightString(PAGE - MARGIN, PAGE - 32, section.upper())
    c.setFillColor(Color(1, 1, 1, alpha=0.58) if dark else MUTED)
    c.setFont("Retainr", 9)
    c.drawString(MARGIN, 28, "retainr.io/guides/agency-freelancing-skills-you-need-to-know/")
    c.drawRightString(PAGE - MARGIN, 28, f"{page_number:02d}")


def page_title(c: canvas.Canvas, eyebrow: str, title: str, intro: str, page_number: int) -> float:
    page_header(c, eyebrow, page_number)
    label(c, eyebrow, MARGIN, PAGE - 88)
    y = text_block(c, title, MARGIN, PAGE - 122, CONTENT, font="Retainr-Black", size=32, leading=36)
    y = text_block(c, intro, MARGIN, y - 12, CONTENT, size=14, leading=20, color=MUTED)
    return y - 22


def card(
    c: canvas.Canvas,
    x: float,
    y: float,
    width: float,
    height: float,
    *,
    title: str,
    body: str,
    accent=YELLOW,
    number: str | None = None,
) -> None:
    c.setFillColor(accent)
    c.roundRect(x + 7, y - height - 7, width, height, 6, fill=1, stroke=0)
    c.setFillColor(WHITE)
    c.setStrokeColor(INK)
    c.setLineWidth(1.6)
    c.roundRect(x, y - height, width, height, 6, fill=1, stroke=1)
    if number:
        c.setFillColor(accent)
        c.roundRect(x + 16, y - 41, 38, 25, 4, fill=1, stroke=0)
        c.setFillColor(INK)
        c.setFont("Retainr-Black", 11)
        c.drawCentredString(x + 35, y - 33, number)
        title_x = x + 66
        title_width = width - 82
    else:
        title_x = x + 18
        title_width = width - 36
    title_y = y - 30
    title_lines = split_lines(title, "Retainr-Bold", 14, title_width)
    c.setFillColor(INK)
    c.setFont("Retainr-Bold", 14)
    for line in title_lines[:2]:
        c.drawString(title_x, title_y, line)
        title_y -= 17
    text_block(c, body, x + 18, y - 68, width - 36, size=11.2, leading=15.2, color=MUTED)


def bullet_list(c: canvas.Canvas, items: list[str], x: float, y: float, width: float, *, size: float = 13) -> float:
    for item in items:
        c.setFillColor(GREEN)
        c.circle(x + 5, y - 4, 4, fill=1, stroke=0)
        y = text_block(c, item, x + 20, y, width - 20, size=size, leading=size * 1.4, color=INK) - 9
    return y


def draw_cover(c: canvas.Canvas) -> None:
    c.setFillColor(BLACK)
    c.rect(0, 0, PAGE, PAGE, fill=1, stroke=0)
    c.setFillColor(ORANGE)
    c.rect(0, PAGE - 14, PAGE * 0.34, 14, fill=1, stroke=0)
    c.setFillColor(YELLOW)
    c.rect(PAGE * 0.34, PAGE - 14, PAGE * 0.33, 14, fill=1, stroke=0)
    c.setFillColor(GREEN)
    c.rect(PAGE * 0.67, PAGE - 14, PAGE * 0.33, 14, fill=1, stroke=0)

    c.setFillColor(WHITE)
    c.setFont("Retainr-Black", 32)
    c.drawString(MARGIN, PAGE - 84, "Retainr")
    c.setFillColor(YELLOW)
    c.roundRect(MARGIN, PAGE - 132, 185, 29, 5, fill=1, stroke=0)
    c.setFillColor(INK)
    c.setFont("Retainr-Bold", 11)
    c.drawCentredString(MARGIN + 92.5, PAGE - 122, "FREE EVERGREEN WORKBOOK")

    y = text_block(
        c,
        "High-demand freelance skills you need to know",
        MARGIN,
        PAGE - 208,
        CONTENT - 30,
        font="Retainr-Black",
        size=48,
        leading=51,
        color=WHITE,
    )
    text_block(
        c,
        "Choose one valuable skill, package a clear outcome, and turn successful projects into recurring client revenue.",
        MARGIN,
        y - 20,
        590,
        size=18,
        leading=25,
        color=HexColor("#C9CBD2"),
    )

    c.setFillColor(ICE)
    c.roundRect(MARGIN, 82, CONTENT, 132, 7, fill=1, stroke=0)
    c.setFillColor(INK)
    c.setFont("Retainr-Bold", 13)
    c.drawString(MARGIN + 22, 184, "INSIDE")
    text_block(c, "12 skill tracks  |  offer examples  |  scorecard  |  7-day validation sprint  |  30-day plan", MARGIN + 22, 154, CONTENT - 44, size=15, leading=21)
    c.setFillColor(ORANGE)
    c.setFont("Retainr-Bold", 12)
    c.drawString(MARGIN + 22, 104, "Built for niche freelancers, digital creators, and independent experts")
    c.showPage()


def draw_evidence(c: canvas.Canvas) -> None:
    y = page_title(
        c,
        "How to use this guide",
        "Demand is a signal. A useful offer is the decision.",
        "Do not choose a skill because it appears on a list. Choose a client problem you can solve repeatedly, prove, and support after the first result.",
        2,
    )
    card(c, MARGIN, y, 213, 154, title="Market signal", body="Buyers are already paying for the capability, not only discussing it.", accent=ORANGE, number="01")
    card(c, MARGIN + 236, y, 213, 154, title="Service shape", body="The work can become a named offer with a boundary, deliverable, and decision point.", accent=YELLOW, number="02")
    card(c, MARGIN + 472, y, 213, 154, title="Recurring need", body="The result needs monitoring, iteration, support, education, or continued production.", accent=GREEN, number="03")

    y -= 196
    c.setFillColor(INK)
    c.setFont("Retainr-Bold", 19)
    c.drawString(MARGIN, y, "Three research signals worth knowing")
    y -= 34
    y = bullet_list(
        c,
        [
            "Upwork's 2025 platform analysis highlights AI specializations, scripting and automation, web and UX design, video production, campaign management, email marketing, coaching, and training.",
            "The World Economic Forum expects AI and big data, technological literacy, creative thinking, analytical thinking, adaptability, leadership, and collaboration to rise in importance through 2030.",
            "LinkedIn's Skills on the Rise analysis repeatedly surfaces AI literacy alongside strategic thinking, communication, and adaptability.",
        ],
        MARGIN,
        y,
        CONTENT,
        size=12.5,
    )
    c.setFillColor(ICE)
    c.roundRect(MARGIN, 72, CONTENT, 62, 6, fill=1, stroke=0)
    text_block(c, "Interpretation: combine a technical or domain skill with judgment, communication, and a reliable client process. That combination is harder to replace and easier to retain.", MARGIN + 18, 112, CONTENT - 36, size=11.5, leading=15.5)
    c.showPage()


def draw_scorecard(c: canvas.Canvas) -> None:
    y = page_title(
        c,
        "Skill selection scorecard",
        "Score the opportunity before you build the offer.",
        "Rate each line from 1 (weak) to 5 (strong). A high score is not proof of demand, but it tells you which idea deserves a real client conversation first.",
        3,
    )
    rows = [
        ("Pain", "Does the problem cost the client time, revenue, risk, or confidence?"),
        ("Urgency", "Would a buyer reasonably want progress within the next 30 days?"),
        ("Proof", "Can you show a before/after state or another credible result?"),
        ("Repeatability", "Can 60-80% of the delivery follow a repeatable method?"),
        ("Access", "Can you reach 10 plausible buyers without buying a large audience?"),
        ("Continuity", "Does the client need monitoring, iteration, support, or production?"),
        ("Energy", "Can you deliver this well without resenting the work?"),
    ]
    row_h = 64
    for index, (name, question) in enumerate(rows, start=1):
        top = y - ((index - 1) * row_h)
        c.setFillColor(ICE if index % 2 else WHITE)
        c.setStrokeColor(LINE)
        c.roundRect(MARGIN, top - 52, CONTENT, 52, 4, fill=1, stroke=1)
        c.setFillColor(ORANGE)
        c.setFont("Retainr-Black", 11)
        c.drawString(MARGIN + 16, top - 22, f"{index:02d}")
        c.setFillColor(INK)
        c.setFont("Retainr-Bold", 13)
        c.drawString(MARGIN + 54, top - 22, name)
        text_block(c, question, MARGIN + 154, top - 20, 390, size=10.5, leading=14, color=MUTED)
        c.setFont("Retainr-Bold", 11)
        c.setFillColor(INK)
        c.drawRightString(PAGE - MARGIN - 18, top - 22, "1   2   3   4   5")
    c.setFillColor(YELLOW)
    c.roundRect(MARGIN, 66, CONTENT, 48, 5, fill=1, stroke=0)
    c.setFillColor(INK)
    c.setFont("Retainr-Bold", 12)
    c.drawString(MARGIN + 18, 84, "Decision rule: interview buyers for the two highest-scoring ideas before creating a website, course, or automation.")
    c.showPage()


SKILL_TRACKS = [
    ("AI workflow audits", "Map a repeated workflow, identify safe automation points, and prototype one measurable improvement.", "Monthly optimization, governance, prompt or workflow maintenance."),
    ("SEO and AI visibility", "Audit technical search health, content gaps, entities, citations, and answer-ready pages.", "Monthly search monitoring, content briefs, updates, and reporting."),
    ("Web and conversion design", "Improve one high-intent page, signup path, or client buying journey.", "Care plan, conversion experiments, accessibility, and content updates."),
    ("Email lifecycle systems", "Build one useful sequence: onboarding, nurture, activation, renewal, or re-engagement.", "Monthly campaigns, testing, segmentation, and deliverability reviews."),
    ("Video and content repurposing", "Turn one source recording into a defined set of publishable assets.", "Recurring production calendar, editing, packaging, and analytics review."),
    ("Analytics and reporting", "Create a decision-ready baseline dashboard tied to a specific business question.", "Monthly data checks, insight summaries, and experiment recommendations."),
    ("Operations and virtual assistance", "Document and stabilize one recurring operational workflow.", "Weekly operations, inbox or project coordination, and process improvement."),
    ("Community programmes", "Design onboarding, rituals, moderation rules, and a useful member journey.", "Community operations, events, member insights, and retention work."),
    ("Coaching and education", "Package a defined transformation with boundaries, milestones, and supporting material.", "Ongoing cohort, accountability, review, or specialist support."),
    ("Course and info-product production", "Turn existing expertise into a structured curriculum, workbook, or launch-ready asset.", "Updates, learner support, cohort operations, and content maintenance."),
    ("Illustration and brand systems", "Create a defined visual package for a campaign, product, or recurring content format.", "Monthly asset production, brand stewardship, and campaign variants."),
    ("Technical delivery and automation", "Build or repair one scoped integration, internal tool, or product workflow.", "Monitoring, maintenance, iterative improvements, and support."),
]


def draw_tracks(c: canvas.Canvas, start: int, page_number: int, title: str) -> None:
    y = page_title(
        c,
        "High-value skill tracks",
        title,
        "Each track becomes easier to sell when the first offer is narrow and the recurring offer protects or compounds the result.",
        page_number,
    )
    entries = SKILL_TRACKS[start : start + 4]
    for local_index, (name, starter, recurring) in enumerate(entries):
        top = y - (local_index * 132)
        c.setFillColor([ICE, HexColor("#FFF8DA"), HexColor("#F3F7E2"), WHITE][local_index])
        c.setStrokeColor(INK)
        c.setLineWidth(1.2)
        c.roundRect(MARGIN, top - 112, CONTENT, 112, 6, fill=1, stroke=1)
        c.setFillColor([ORANGE, YELLOW, GREEN, INK][local_index])
        c.roundRect(MARGIN + 16, top - 42, 42, 26, 4, fill=1, stroke=0)
        c.setFillColor(WHITE if local_index in (0, 3) else INK)
        c.setFont("Retainr-Black", 11)
        c.drawCentredString(MARGIN + 37, top - 34, f"{start + local_index + 1:02d}")
        c.setFillColor(INK)
        c.setFont("Retainr-Bold", 16)
        c.drawString(MARGIN + 74, top - 35, name)
        c.setFont("Retainr-Bold", 9)
        c.setFillColor(ORANGE)
        c.drawString(MARGIN + 18, top - 64, "STARTER OFFER")
        text_block(c, starter, MARGIN + 112, top - 63, 545, size=10.2, leading=13.5, color=MUTED)
        c.setFont("Retainr-Bold", 9)
        c.setFillColor(GREEN)
        c.drawString(MARGIN + 18, top - 94, "RECURRING")
        text_block(c, recurring, MARGIN + 112, top - 93, 545, size=10.2, leading=13.5, color=MUTED)
    c.showPage()


def draw_stacks(c: canvas.Canvas) -> None:
    y = page_title(
        c,
        "Skill stacks",
        "The strongest freelance positioning combines three layers.",
        "A delivery skill gets attention. Domain context earns trust. A client-system skill makes the work easier to buy and retain.",
        7,
    )
    stacks = [
        ("AI operations partner", "Automation", "Team workflow context", "Training and monthly optimization"),
        ("Search growth partner", "SEO and AI visibility", "Buyer-intent knowledge", "Reporting and content operations"),
        ("Creator revenue designer", "Web and conversion design", "Creator business context", "Testing and care plan"),
        ("Expert-content operator", "Editing and repurposing", "Subject-matter context", "Publishing rhythm and analytics"),
    ]
    for index, (name, delivery, domain, continuity) in enumerate(stacks):
        top = y - (index * 122)
        c.setFillColor(WHITE)
        c.setStrokeColor(INK)
        c.roundRect(MARGIN, top - 100, CONTENT, 100, 6, fill=1, stroke=1)
        c.setFillColor(INK)
        c.setFont("Retainr-Bold", 16)
        c.drawString(MARGIN + 18, top - 28, name)
        chips = [("DELIVER", delivery, ORANGE), ("UNDERSTAND", domain, YELLOW), ("CONTINUE", continuity, GREEN)]
        chip_x = MARGIN + 18
        for chip_label, value, accent in chips:
            c.setFillColor(accent)
            c.roundRect(chip_x, top - 78, 74, 24, 4, fill=1, stroke=0)
            c.setFillColor(INK)
            c.setFont("Retainr-Bold", 8)
            c.drawCentredString(chip_x + 37, top - 70, chip_label)
            text_block(c, value, chip_x + 84, top - 63, 118, size=9.5, leading=12, color=MUTED)
            chip_x += 222
    c.setFillColor(ICE)
    c.roundRect(MARGIN, 70, CONTENT, 64, 6, fill=1, stroke=0)
    text_block(c, "Positioning prompt: I help [specific buyer] achieve [observable outcome] through [delivery skill], informed by [domain context], with [recurring support].", MARGIN + 18, 111, CONTENT - 36, size=11.5, leading=15.5)
    c.showPage()


def draw_offer_ladder(c: canvas.Canvas) -> None:
    y = page_title(
        c,
        "Offer architecture",
        "Turn one skill into a client journey, not a menu.",
        "Three connected offers reduce buying friction and make recurring work a logical continuation of a successful first result.",
        8,
    )
    widths = [190, 226, 248]
    titles = ["01  Diagnose", "02  Implement", "03  Continue"]
    accents = [ORANGE, YELLOW, GREEN]
    bodies = [
        "A paid audit, assessment, or strategy sprint that names the problem and produces a prioritized plan.",
        "A fixed-scope implementation that creates the first visible result and documents the operating method.",
        "A recurring plan for monitoring, iteration, production, support, education, or optimization.",
    ]
    x = MARGIN
    for width, title, accent, body in zip(widths, titles, accents, bodies):
        c.setFillColor(accent)
        c.roundRect(x, y - 230, width, 230, 7, fill=1, stroke=0)
        c.setFillColor(INK)
        c.setFont("Retainr-Black", 17)
        c.drawString(x + 18, y - 34, title)
        text_block(c, body, x + 18, y - 76, width - 36, size=12, leading=17)
        x += width + 11
    y -= 280
    c.setFillColor(INK)
    c.setFont("Retainr-Bold", 20)
    c.drawString(MARGIN, y, "Write the handoff before you sell the first offer")
    y -= 32
    y = bullet_list(
        c,
        [
            "At the end of Diagnose, which implementation decision should be obvious?",
            "At the end of Implement, what valuable condition needs continued attention?",
            "Which recurring cadence matches the client's real operating rhythm?",
            "What evidence will show that the recurring plan remains useful?",
        ],
        MARGIN,
        y,
        CONTENT,
        size=12.5,
    )
    c.showPage()


def draw_validation(c: canvas.Canvas) -> None:
    y = page_title(
        c,
        "7-day validation sprint",
        "Validate the problem before polishing the package.",
        "The goal is not to collect compliments. It is to learn whether a specific buyer will spend time, introduce context, or pay to solve the problem.",
        9,
    )
    days = [
        ("Day 1", "Choose one buyer and one expensive repeated problem."),
        ("Day 2", "Write a one-sentence outcome and a strict delivery boundary."),
        ("Day 3", "List 15 plausible buyers you can contact credibly."),
        ("Day 4", "Run three problem interviews. Ask about the last real occurrence."),
        ("Day 5", "Draft the smallest paid diagnostic or implementation offer."),
        ("Day 6", "Show it to five relevant buyers and ask for a concrete next step."),
        ("Day 7", "Decide: sell, revise the problem, narrow the buyer, or stop."),
    ]
    for index, (day, action) in enumerate(days):
        top = y - (index * 63)
        c.setFillColor(ICE if index % 2 == 0 else WHITE)
        c.setStrokeColor(LINE)
        c.roundRect(MARGIN, top - 48, CONTENT, 48, 5, fill=1, stroke=1)
        c.setFillColor([ORANGE, YELLOW, GREEN][index % 3])
        c.roundRect(MARGIN + 14, top - 36, 68, 25, 4, fill=1, stroke=0)
        c.setFillColor(INK)
        c.setFont("Retainr-Bold", 10)
        c.drawCentredString(MARGIN + 48, top - 28, day.upper())
        text_block(c, action, MARGIN + 98, top - 22, 565, size=11.5, leading=15)
    c.setFillColor(YELLOW)
    c.roundRect(MARGIN, 70, CONTENT, 62, 6, fill=1, stroke=0)
    text_block(c, "A useful signal is behavior: a buyer shares data, books the next conversation, introduces the decision-maker, requests scope, or pays. Interest without action is weak evidence.", MARGIN + 18, 109, CONTENT - 36, size=11.2, leading=15)
    c.showPage()


def draw_month(c: canvas.Canvas) -> None:
    y = page_title(
        c,
        "30-day action plan",
        "Build the smallest credible freelance system.",
        "One month is enough to create a real offer, test it with real buyers, deliver the first version, and identify the recurring need.",
        10,
    )
    weeks = [
        ("Week 1", "Problem", ["Interview five buyers", "Name the repeated pain", "Collect their exact language"]),
        ("Week 2", "Offer", ["Define outcome and boundary", "Set price and timeline", "Create intake questions"]),
        ("Week 3", "Sell", ["Send ten relevant invitations", "Run focused calls", "Close one small paid engagement"]),
        ("Week 4", "Deliver", ["Show progress visibly", "Capture decisions and proof", "Present the logical next plan"]),
    ]
    card_w = (CONTENT - 18) / 2
    for index, (week, focus, actions) in enumerate(weeks):
        col = index % 2
        row = index // 2
        x = MARGIN + col * (card_w + 18)
        top = y - row * 224
        c.setFillColor([ICE, HexColor("#FFF8DA"), HexColor("#F3F7E2"), WHITE][index])
        c.setStrokeColor(INK)
        c.roundRect(x, top - 202, card_w, 202, 7, fill=1, stroke=1)
        c.setFillColor([ORANGE, YELLOW, GREEN, INK][index])
        c.roundRect(x + 18, top - 42, 70, 26, 4, fill=1, stroke=0)
        c.setFillColor(WHITE if index in (0, 3) else INK)
        c.setFont("Retainr-Bold", 10)
        c.drawCentredString(x + 53, top - 34, week.upper())
        c.setFillColor(INK)
        c.setFont("Retainr-Black", 22)
        c.drawString(x + 18, top - 79, focus)
        bullet_list(c, actions, x + 18, top - 113, card_w - 36, size=10.8)
    c.showPage()


def draw_canvas(c: canvas.Canvas) -> None:
    y = page_title(
        c,
        "Offer canvas",
        "Draft one offer on one page.",
        "Keep the first version concrete. You can refine the wording after buyers understand the outcome and agree the problem matters.",
        11,
    )
    prompts = [
        "Specific buyer",
        "Repeated problem",
        "Observable outcome",
        "Starter deliverables",
        "What is explicitly excluded",
        "Evidence or proof available",
        "Recurring need after success",
        "Next validation action",
    ]
    card_w = (CONTENT - 18) / 2
    card_h = 108
    for index, prompt in enumerate(prompts):
        col = index % 2
        row = index // 2
        x = MARGIN + col * (card_w + 18)
        top = y - row * (card_h + 14)
        c.setFillColor(WHITE)
        c.setStrokeColor(INK)
        c.roundRect(x, top - card_h, card_w, card_h, 6, fill=1, stroke=1)
        c.setFillColor(ORANGE if index % 3 == 0 else GREEN if index % 3 == 1 else YELLOW)
        c.roundRect(x + 14, top - 36, 30, 22, 4, fill=1, stroke=0)
        c.setFillColor(INK)
        c.setFont("Retainr-Black", 9)
        c.drawCentredString(x + 29, top - 29, f"{index + 1:02d}")
        c.setFont("Retainr-Bold", 12)
        c.drawString(x + 54, top - 29, prompt)
        c.setStrokeColor(LINE)
        c.line(x + 16, top - 62, x + card_w - 16, top - 62)
        c.line(x + 16, top - 84, x + card_w - 16, top - 84)
    c.showPage()


def draw_retainr(c: canvas.Canvas) -> None:
    c.setFillColor(BLACK)
    c.rect(0, 0, PAGE, PAGE, fill=1, stroke=0)
    page_header(c, "Put the method to work", 12, dark=True)
    label(c, "Free forever", MARGIN, PAGE - 90, YELLOW)
    y = text_block(c, "Turn the skill into a client system.", MARGIN, PAGE - 130, 640, font="Retainr-Black", size=40, leading=45, color=WHITE)
    text_block(c, "Retainr gives independent professionals one place to package the offer, collect payment and context, onboard the client, manage delivery, and introduce recurring value.", MARGIN, y - 18, 620, size=16, leading=22, color=HexColor("#C9CBD2"))

    steps = ["Package", "Sell", "Onboard", "Deliver", "Retain"]
    x = MARGIN
    for index, step in enumerate(steps, start=1):
        accent = [ORANGE, YELLOW, GREEN, ICE, ORANGE][index - 1]
        c.setFillColor(accent)
        c.roundRect(x, 332, 120, 116, 6, fill=1, stroke=0)
        c.setFillColor(INK)
        c.setFont("Retainr-Black", 12)
        c.drawString(x + 15, 418, f"{index:02d}")
        c.setFont("Retainr-Bold", 14)
        c.drawString(x + 15, 362, step)
        x += 136

    c.setFillColor(YELLOW)
    c.roundRect(MARGIN, 144, 330, 66, 6, fill=1, stroke=0)
    c.setFillColor(INK)
    c.setFont("Retainr-Black", 16)
    c.drawString(MARGIN + 20, 181, "Build your free workspace")
    c.setFont("Retainr-Bold", 12)
    c.drawString(MARGIN + 20, 160, "app.retainr.io/signup")
    c.setFillColor(WHITE)
    c.setFont("Retainr-Bold", 12)
    c.drawString(MARGIN + 365, 184, "Read the evergreen web guide")
    c.setFillColor(HexColor("#C9CBD2"))
    c.setFont("Retainr", 10)
    text_block(c, "retainr.io/guides/agency-freelancing-skills-you-need-to-know/", MARGIN + 365, 162, 315, size=10, leading=13, color=HexColor("#C9CBD2"))
    c.showPage()


def draw_sources(c: canvas.Canvas) -> None:
    y = page_title(
        c,
        "Sources and method",
        "Use current evidence without turning it into a promise.",
        "Demand varies by market, geography, seniority, buyer access, and proof. These sources inform the categories in this guide; they do not guarantee work, pricing, or income.",
        13,
    )
    sources = [
        ("Upwork, 2025 In-Demand Skills", "investors.upwork.com/news-releases/news-release-details/upwork-unveils-2025s-most-demand-skills", "Platform earnings and job-posting analysis, US demand, Jan-Oct 2024."),
        ("World Economic Forum, Future of Jobs 2025", "weforum.org/publications/the-future-of-jobs-report-2025/", "Employer expectations for evolving jobs and skills through 2030."),
        ("LinkedIn, Skills on the Rise 2025", "linkedin.com/business/talent/blog/learning-and-development/skills-on-the-rise", "Fast-growing skills observed across regions and job functions."),
    ]
    for index, (title, url, note) in enumerate(sources, start=1):
        top = y - ((index - 1) * 132)
        c.setFillColor(ICE if index % 2 else WHITE)
        c.setStrokeColor(INK)
        c.roundRect(MARGIN, top - 112, CONTENT, 112, 6, fill=1, stroke=1)
        c.setFillColor([ORANGE, YELLOW, GREEN][index - 1])
        c.roundRect(MARGIN + 16, top - 42, 38, 25, 4, fill=1, stroke=0)
        c.setFillColor(INK)
        c.setFont("Retainr-Black", 10)
        c.drawCentredString(MARGIN + 35, top - 34, f"{index:02d}")
        c.setFont("Retainr-Bold", 15)
        c.drawString(MARGIN + 68, top - 34, title)
        text_block(c, note, MARGIN + 18, top - 66, CONTENT - 36, size=10.5, leading=14, color=MUTED)
        text_block(c, url, MARGIN + 18, top - 92, CONTENT - 36, size=8.5, leading=11, color=ORANGE)

    c.setFillColor(YELLOW)
    c.roundRect(MARGIN, 72, CONTENT, 90, 7, fill=1, stroke=0)
    c.setFillColor(INK)
    c.setFont("Retainr-Black", 16)
    c.drawString(MARGIN + 20, 137, "Keep this guide evergreen")
    text_block(c, "Revisit the research, but update your offer from client conversations. The most valuable skill connects to a real problem, reliable delivery, and evidence.", MARGIN + 20, 111, CONTENT - 40, size=10.8, leading=14.5)
    c.showPage()


def build() -> None:
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    c = canvas.Canvas(
        str(OUTPUT),
        pagesize=(PAGE, PAGE),
        pageCompression=1,
        invariant=1,
    )
    c.setTitle("Retainr: High-Demand Freelance Skills You Need to Know")
    c.setAuthor("Retainr")
    c.setSubject("An evergreen workbook for choosing, packaging, validating, and retaining a high-value freelance skill.")
    c.setKeywords("Retainr, freelancing, high-demand skills, productized services, recurring revenue")
    draw_cover(c)
    draw_evidence(c)
    draw_scorecard(c)
    draw_tracks(c, 0, 4, "Technical and growth skills buyers can connect to outcomes.")
    draw_tracks(c, 4, 5, "Creative and operational skills that compound with a system.")
    draw_tracks(c, 8, 6, "Human expertise that becomes stronger through specialization.")
    draw_stacks(c)
    draw_offer_ladder(c)
    draw_validation(c)
    draw_month(c)
    draw_canvas(c)
    draw_retainr(c)
    draw_sources(c)
    c.save()

    for alias in ALIASES:
        alias.parent.mkdir(parents=True, exist_ok=True)
        shutil.copyfile(OUTPUT, alias)


if __name__ == "__main__":
    build()

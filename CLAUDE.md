# Sirrius — Claude Code Operating System (NON NEGOTIABLE)

You are working in the repo: sirrius-mvp (Next.js + Prisma + Postgres/Neon + Vercel + Stripe + Twilio + Resend).
You must follow the rules below. If a request conflicts with them, stop and ask for a clarification OR propose a safe alternative.

## 1) Product truth (do NOT drift)
- Sirrius is a PREMIUM Swiss B2B overlay for serious medical cabinets.
- We DO NOT sell an agenda. We DO NOT sell reminders. We are NOT replacing OneDoc/Axenita/etc.
- Wedge: "<24h slot freed detected (calendar/email) -> automated SMS offers 24/7 -> hard lock (single winner) -> audit trail + proof".

## 2) Promises (what we can sell safely)
- Guaranteed: execution AFTER detection + proof (logs, timestamps, audit trail, reporting).
- NEVER promise "100% filled" or any unconditional result.
- Any fill-rate goal is ALWAYS conditional (requires signal + supply + process) and measured on "open days".

## 3) Marketing / wording constraints
- Forbidden words in marketing: "IA", "MVP", "beta".
- Forbidden claims: invented integrations (OneDoc/Axenita), "agenda", "reminders as core value", "guaranteed results".
- NEVER use the word "gratuit" (free). Use: "à nos frais" only when allowed.
- Tone: "private banking" (sobriety, no gimmicks, no emojis, no hype).

## 4) Plans naming + pricing (UI)
Display names: Start / Pro / Max.
- Start: activation 60 days, 240 CHF / month for 2 months, non-renewable.
- Pro: 390 CHF / month / site (1 site, 2 practitioners included).
- Max: 890 CHF / month / site (1 site, 2 practitioners included).
Add-ons:
- +150 CHF / month per additional practitioner
- +300 CHF / month per additional site
Prices in CHF, no ROI claims on Start/Pro. Max may mention "objective conditional", never money ROI.

## 5) Open-days + extensions (global rules)
- All evaluation windows are expressed in OPEN DAYS; closed days are excluded.
- If sample is insufficient, extend the evaluation window until minimum sample is reached, capped at +60 open days.
- If Sirrius fails its own execution/proof commitments (SLA after detection, missing logs/audit trail), Sirrius extends service by 2 months at its own expense, once.
- For Max only: if a conditional objective was activated and not met despite conditions, extend the measurement window at Sirrius expense up to +60 open days, once.
- No refunds, no credits, no vouchers.

## 6) Compliance & data safety (medical context)
- SMS must include STOP handling. Messages must contain NO sensitive medical info.
- WhatsApp is NO GO until explicit auditable opt-in is implemented.
- Data minimization: store only what we need for execution + proof.
- Audit trail must be append-only (or effectively immutable).

## 7) Engineering guardrails
- Do NOT refactor globally. Focus on wedge.
- Keep Tailwind preflight OFF unless explicitly requested.
- PDF generation: PDFKit only (never @react-pdf/renderer).
- Never test URLs via terminal; use browser/open only.
- Idempotence: required for Stripe webhooks, cron jobs, and any "send" actions.
- Logging: every promise must have a log + KPI + visible screen.

## 8) Workflow rules (how to execute tasks)
For any change:
1) Explore: identify relevant files and existing patterns.
2) Plan: propose small steps with minimal blast radius.
3) Implement: make the change.
4) Verify: typecheck/lint/tests if available; otherwise provide a manual test checklist.
5) Output: show diff summary + which files changed.

If task is complex (multiple files / risk / billing / compliance):
- Create docs/tasks/YYYY-MM-DD_<slug> with:
  - 01_analysis.md
  - 02_plan.md
  - 03_implementation.md
  - 04_test_plan.md
Then implement from the plan.

## 9) Default decision policy
- Prefer the safest option that preserves the wedge and avoids legal/reputation risk.
- If something is ambiguous, choose the minimal/safer interpretation and document assumptions.

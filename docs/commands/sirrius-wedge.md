# /sirrius-wedge

Goal: ship wedge features safely: signal -> offers -> lock -> proof.

Rules:
- Every promise must have: logs + KPI + screen proof.
- Idempotence required for detection, sending, locks, confirmations.
- STOP handling mandatory; no sensitive content.

Deliverables template:
1) Data model (Prisma) + migrations
2) API routes with idempotence
3) UI proof (dashboard / logs)
4) Test plan (happy path + failure modes)

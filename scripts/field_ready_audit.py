#!/usr/bin/env python3
"""
FIELD-READY Audit Script
========================
READ-ONLY audit of docs and canonical parameters.
No dependencies (stdlib only).

Usage:
    python scripts/field_ready_audit.py
"""

import os
import re
import sys
from pathlib import Path

# Colors for terminal output
GREEN = "\033[92m"
RED = "\033[91m"
YELLOW = "\033[93m"
RESET = "\033[0m"
BOLD = "\033[1m"

def pass_msg(msg):
    return f"{GREEN}[PASS]{RESET} {msg}"

def fail_msg(msg):
    return f"{RED}[FAIL]{RESET} {msg}"

def warn_msg(msg):
    return f"{YELLOW}[WARN]{RESET} {msg}"

def manual_msg(msg):
    return f"{YELLOW}[MANUAL]{RESET} {msg}"

# Find repo root
def find_repo_root():
    current = Path(__file__).resolve().parent
    while current != current.parent:
        if (current / ".git").exists() or (current / "CLAUDE.md").exists():
            return current
        current = current.parent
    return Path(__file__).resolve().parent.parent

REPO_ROOT = find_repo_root()

# Docs to check
REQUIRED_DOCS = [
    "docs/product/spec-wedge-v0.md",
    "docs/ops/DOC_DEFINITION_OF_DONE.md",
    "docs/commands/sirrius-field-ready.md",
]

# Canonical parameters to find (in any of the docs)
PARAM_CHECKS = [
    {
        "name": "Fenêtre 08:00-20:00",
        "patterns": [r"08[:h]?00.*20[:h]?00", r"08:00–20:00", r"08:00-20:00"],
        "action_if_fail": "Add SMS window 08:00-20:00 to docs"
    },
    {
        "name": "Europe/Zurich timezone",
        "patterns": [r"Europe/Zurich"],
        "action_if_fail": "Add Europe/Zurich timezone reference"
    },
    {
        "name": "Anti-spam 1 offre/jour",
        "patterns": [r"max(?:imum)?\s*1\s*(?:offre|offer).*(?:jour|day)", r"1\s*(?:offre|offer).*(?:jour|day)"],
        "action_if_fail": "Add anti-spam rule: max 1 offer/day/patient"
    },
    {
        "name": "Anti-spam 3 offres/7 jours",
        "patterns": [r"max(?:imum)?\s*3\s*(?:offres?|offers?).*7\s*(?:jours|days)", r"3\s*(?:offres?|offers?).*7\s*(?:jours|days)"],
        "action_if_fail": "Add anti-spam rule: max 3 offers/7 days/patient"
    },
]

# TTL checks (5 paliers)
TTL_CHECKS = [
    ("TTL 12-24h → 3h", [r"12.24h.*3h", r"12–24h.*3h"]),
    ("TTL 6-12h → 2h", [r"6.12h.*2h", r"6–12h.*2h"]),
    ("TTL 4-6h → 60-90 min", [r"4.6h.*60", r"4–6h.*60"]),
    ("TTL 2-4h → 45-60 min", [r"2.4h.*45", r"2–4h.*45"]),
    ("TTL <2h → 20-30 min", [r"<\s*2h.*20", r"< 2h.*20"]),
]

# SMS Templates (exact or normalized match)
SMS_TEMPLATES = {
    "Offre": r"\{CABINET\}.*créneau.*libéré.*\{DATE\}.*\{HEURE\}.*Confirmez.*\{LIEN\}.*STOP",
    "Rappel": r"\{CABINET\}.*toujours disponible.*\{DATE\}.*\{HEURE\}.*Confirmez.*\{LIEN\}.*STOP",
    "Indisponible": r"\{CABINET\}.*n'est plus disponible.*STOP",
    "STOP": r"\{CABINET\}.*ne recevrez plus.*messages.*Merci",
}

# Confirmation checks
CONFIRM_CHECKS = [
    ("Confirmé = événement écrit dans l'agenda", [r"[Cc]onfirmé.*événement.*écrit.*agenda", r"[Cc]onfirmé.*=.*écrit.*agenda"]),
    ("eventId référencé", [r"eventId"]),
    ("TTL démarre à l'envoi", [r"TTL.*démarre.*envoi", r"TTL.*commence.*envoi"]),
]


def read_file(path):
    """Read file content, return empty string if not found."""
    full_path = REPO_ROOT / path
    if not full_path.exists():
        return None
    try:
        with open(full_path, "r", encoding="utf-8") as f:
            return f.read()
    except Exception:
        return None


def find_in_docs(patterns, docs_content):
    """Search for patterns in docs, return (found, file, line_number)."""
    for doc_path, content in docs_content.items():
        if content is None:
            continue
        lines = content.split("\n")
        for i, line in enumerate(lines, 1):
            for pattern in patterns:
                if re.search(pattern, line, re.IGNORECASE):
                    return True, doc_path, i
    return False, None, None


def run_audit():
    print(f"\n{BOLD}=== AUDIT FIELD-READY ==={RESET}\n")

    results = {"pass": 0, "fail": 0, "manual": 0}

    # === DOCS CHECK ===
    print(f"{BOLD}DOCS:{RESET}")
    docs_content = {}
    for doc in REQUIRED_DOCS:
        content = read_file(doc)
        docs_content[doc] = content
        if content is not None:
            print(pass_msg(doc))
            results["pass"] += 1
        else:
            print(fail_msg(f"{doc} — Action: Create this doc"))
            results["fail"] += 1

    # Also load other canonical docs for param checks
    other_docs = [
        "docs/strategy/wedge_v13.md",
        "docs/engagements/engagements_v13.md",
        "docs/pricing/start-pro-max_v13.md",
    ]
    for doc in other_docs:
        content = read_file(doc)
        if content:
            docs_content[doc] = content

    print()

    # === PARAMS CANONIQUES ===
    print(f"{BOLD}PARAMS CANONIQUES:{RESET}")
    for check in PARAM_CHECKS:
        found, file, line = find_in_docs(check["patterns"], docs_content)
        if found:
            print(pass_msg(f"{check['name']} ({file}:{line})"))
            results["pass"] += 1
        else:
            print(fail_msg(f"{check['name']} — Action: {check['action_if_fail']}"))
            results["fail"] += 1

    print()

    # === TTL CHECKS ===
    print(f"{BOLD}TTL DYNAMIQUE:{RESET}")
    for name, patterns in TTL_CHECKS:
        found, file, line = find_in_docs(patterns, docs_content)
        if found:
            print(pass_msg(f"{name} ({file}:{line})"))
            results["pass"] += 1
        else:
            print(fail_msg(f"{name} — Action: Add TTL rule to docs"))
            results["fail"] += 1

    print()

    # === SMS TEMPLATES ===
    print(f"{BOLD}TEMPLATES SMS:{RESET}")
    for name, pattern in SMS_TEMPLATES.items():
        found, file, line = find_in_docs([pattern], docs_content)
        if found:
            print(pass_msg(f"{name} ({file}:{line})"))
            results["pass"] += 1
        else:
            print(fail_msg(f"{name} — Action: Add canonical template"))
            results["fail"] += 1

    print()

    # === CONFIRMATION CHECKS ===
    print(f"{BOLD}CONFIRMATION:{RESET}")
    for name, patterns in CONFIRM_CHECKS:
        found, file, line = find_in_docs(patterns, docs_content)
        if found:
            print(pass_msg(f"{name} ({file}:{line})"))
            results["pass"] += 1
        else:
            print(fail_msg(f"{name} — Action: Add confirmation rule"))
            results["fail"] += 1

    print()

    # === MANUAL CHECKS ===
    print(f"{BOLD}MANUAL CHECKS (require human verification):{RESET}")
    manual_items = [
        "Signal sync (Google/Outlook) fonctionnel",
        "Replay/diagnostic admin disponible",
        "Moteur vagues idempotent (pas de doublons)",
        "Conflits gérés (slot repris/déplacé/double)",
        "STOP blacklist immédiate",
        "Dashboard wedge complet",
        "Billing entitlements OK + runbook",
    ]
    for item in manual_items:
        print(manual_msg(item))
        results["manual"] += 1

    print()

    # === VERDICT ===
    total_auto = results["pass"] + results["fail"]
    print(f"{BOLD}=== VERDICT ==={RESET}")
    print(f"Auto checks: {results['pass']}/{total_auto} PASS")
    print(f"Manual checks: {results['manual']} (require human verification)")

    if results["fail"] == 0:
        print(f"\n{GREEN}{BOLD}AUTO AUDIT: PASS{RESET}")
        print("Run manual checks before confirming FIELD-READY.")
        return 0
    else:
        print(f"\n{RED}{BOLD}AUTO AUDIT: FAIL ({results['fail']} issues){RESET}")
        print("Fix the FAIL items above and re-run the audit.")
        return 1


if __name__ == "__main__":
    sys.exit(run_audit())

# /sirrius-field-ready

## Objectif

Audit FIELD-READY : vérifier que le système wedge est prêt terrain.

## Source unique

**DoD canon** : `docs/ops/DOC_DEFINITION_OF_DONE.md`

Ce document est la référence unique pour la définition de "FIELD-READY". En cas de conflit avec tout autre texte, le DoD prime.

## Procédure d'audit

### 1. Pré-requis

Vérifier que ces docs existent :
- `docs/product/spec-wedge-v0.md`
- `docs/ops/DOC_DEFINITION_OF_DONE.md`

### 2. Gate FIELD-READY (12 critères)

| # | Critère | Comment vérifier | Preuve attendue | Type | Statut | Action si FAIL |
|---|---------|------------------|-----------------|------|--------|----------------|
| 1 | Signal <24h détecté | Test sync calendar + email fallback | Log détection + alerte | MANUAL | | Corriger sync / ajouter monitoring |
| 2 | Replay/diagnostic | Tester outil admin | Capture écran replay | MANUAL | | Créer script diagnostic |
| 3 | SLA externe ≤2 min | Mesurer délai dans logs | Logs horodatés <2 min | AUTO | | Optimiser pipeline |
| 4 | Fenêtre SMS | Vérifier config | Config 08:00-20:00 + option 24/7 | AUTO | | Corriger config |
| 5 | TTL démarre à l'envoi | Vérifier code/logs | TTL depuis envoi, pas détection | MANUAL | | Corriger calcul TTL |
| 6 | Moteur vagues | Test vague + expiration | Pas de doublons, escalade OK | MANUAL | | Fix idempotence |
| 7 | Conflits gérés | Test slot repris/déplacé/double | Chaque cas logué proprement | MANUAL | | Ajouter gestion conflits |
| 8 | Confirmé = agenda | Test écriture + échec | eventId stocké, log si échec | MANUAL | | Fix écriture agenda |
| 9 | STOP natif | Envoyer STOP | Patient blacklisté immédiatement | MANUAL | | Fix blacklist |
| 10 | Logs preuve | Vérifier tous logs présents | Export disponible | AUTO | | Ajouter logs manquants |
| 11 | Dashboard wedge | Vérifier écran | Toutes métriques visibles | MANUAL | | Ajouter widgets |
| 12 | Billing entitlements | Test plans/caps/add-ons | Tous scénarios OK + runbook | MANUAL | | Corriger entitlements |

### 3. Règles de vérification AUTO

Script `scripts/field_ready_audit.py` vérifie automatiquement :
- Présence des docs canoniques
- Paramètres canoniques (fenêtre, TTL, anti-spam)
- Templates SMS exacts
- Références confirmation/eventId

### 4. Output attendu

```
=== AUDIT FIELD-READY ===

DOCS:
[PASS] docs/product/spec-wedge-v0.md
[PASS] docs/ops/DOC_DEFINITION_OF_DONE.md
[PASS] docs/commands/sirrius-field-ready.md

PARAMS CANONIQUES:
[PASS] Fenêtre 08:00-20:00 Europe/Zurich
[PASS] Anti-spam 1/jour, 3/7jours
[PASS] TTL dynamique (5 paliers)

TEMPLATES SMS:
[PASS] Offre
[PASS] Rappel
[PASS] Indisponible
[PASS] STOP

CONFIRMATION:
[PASS] "Confirmé = événement écrit dans l'agenda"
[PASS] eventId référencé
[PASS] "TTL démarre à l'envoi"

VERDICT: PASS / FAIL (X/Y critères OK)
```

### 5. Règles

- 1 preuve par critère (capture, log, ou référence doc)
- AUTO = vérifiable par script
- MANUAL = vérification humaine requise
- Si un critère FAIL → action corrective obligatoire avant go-live

## Exécution

```bash
# Activer venv si nécessaire
source .venv/bin/activate

# Lancer l'audit
python scripts/field_ready_audit.py
```

## Post-audit

1. Si tous PASS → FIELD-READY confirmé
2. Si FAIL → corriger + relancer audit
3. Documenter le résultat dans un ticket ou changelog

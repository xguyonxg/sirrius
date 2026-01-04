# Sirrius — Definition of Done (Documentation)

## Objectif

Éliminer les oublis et garantir la cohérence de toute documentation wedge.

**Règle** : toute spec, doc ou backlog wedge doit se terminer par un **Completeness Report PASS/FAIL** avec références (sections/lignes). Si FAIL, corriger et refaire le report.

---

## Sources canoniques

Toute documentation wedge doit être cohérente avec ces 3 fichiers de référence :

| Document | Chemin | Contenu |
|----------|--------|---------|
| Wedge | `docs/strategy/wedge_v13.md` | Positionnement, signal, supply, anti-chaos, paramètres V0, confirmation, templates SMS |
| Engagements | `docs/engagements/engagements_v13.md` | SLA, garanties, objectif mesuré Max, extensions "à nos frais" |
| Pricing | `docs/pricing/start-pro-max_v13.md` | Plans Start/Pro/Max, inclus, add-ons, vocabulaire |

---

## Checklist obligatoire (Acceptance Criteria)

### 1. Ton "banque privée"

- [ ] Aucun jargon technique visible : pas de "append-only", "audit trail", "p95", "orchestration", "idempotence", "pipeline"
- [ ] Vocabulaire sobre et professionnel
- [ ] Pas de mots interdits : "IA", "MVP/beta", "gratuit", "remboursement/avoir/crédit"
- [ ] Formulation "à nos frais" (pas "gratuit")

### 2. Wedge — Points non négociables

- [ ] **Fenêtre SMS** : 08:00–20:00, 7 jours/7 (Europe/Zurich) par défaut + option 24/7 mentionnée
- [ ] **TTL dynamique** : table complète (12–24h→3h, 6–12h→2h, 4–6h→60–90min, 2–4h→45–60min, <2h→20–30min)
- [ ] **Rappel** : 1 rappel unique à 50% du TTL, pas de rappel si TTL < 30 min
- [ ] **Petite supply (≤5 opt-ins)** : 1 vague, pas d'escalade artificielle, manque visible au dashboard
- [ ] **Anti-spam** : 1 offre/jour/patient, 3 offres/7 jours/patient
- [ ] **Équité Max** : tri "moins sollicités d'abord" + cooldown post-confirmation 7–14 jours

### 3. Confirmation

- [ ] **Confirmé = événement écrit dans l'agenda (Google/Outlook) + eventId stocké côté Sirrius**
- [ ] **Write fail = pas confirmé** : si l'écriture échoue, la confirmation n'est pas comptée
- [ ] **Sirrius-ID** : stocké en métadonnée non visible si possible, fallback discret (jamais le titre)

### 4. Hors fenêtre / Trop tard

- [ ] Si créneau trop proche pour TTL utile → pas d'envoi
- [ ] Log "trop tard / hors fenêtre" visible au dashboard
- [ ] Exécution horodatée même si envoi planifié (hors fenêtre)

### 5. Templates SMS canoniques

- [ ] **Offre** : `{CABINET} : un créneau s'est libéré le {DATE} à {HEURE}. Confirmez si cela vous convient : {LIEN}. Merci. Pour ne plus recevoir ce SMS, répondez STOP.`
- [ ] **Rappel** : `{CABINET} : ce créneau est toujours disponible ({DATE} {HEURE}). Confirmez ici : {LIEN}. Merci. Pour ne plus recevoir ce SMS, répondez STOP.`
- [ ] **Indisponible** : `{CABINET} : ce créneau n'est plus disponible. Merci. Pour ne plus recevoir ce SMS, répondez STOP.`
- [ ] **STOP** : `{CABINET} : vous ne recevrez plus de messages. Merci.`
- [ ] **Règle** : "Indisponible" envoyé uniquement aux patients qui cliquent trop tard

### 6. Preuve et rétention

- [ ] **Preuve horodatée** : chaque action tracée avec timestamp
- [ ] **Rétention** : 12 mois minimum
- [ ] **Export** : historique exportable sur demande

---

## Format du Completeness Report

À la fin de chaque document wedge, inclure :

```markdown
## Completeness Report

| # | Critère | Statut | Référence |
|---|---------|--------|-----------|
| 1 | Ton banque privée | PASS/FAIL | Section X, ligne Y |
| 2 | Fenêtre SMS | PASS/FAIL | Section X, ligne Y |
| 3 | TTL dynamique | PASS/FAIL | Section X, ligne Y |
| 4 | Petite supply | PASS/FAIL | Section X, ligne Y |
| 5 | Anti-spam | PASS/FAIL | Section X, ligne Y |
| 6 | Équité Max | PASS/FAIL | Section X, ligne Y |
| 7 | Confirmation = agenda | PASS/FAIL | Section X, ligne Y |
| 8 | Hors fenêtre logué | PASS/FAIL | Section X, ligne Y |
| 9 | Templates SMS exacts | PASS/FAIL | Section X, ligne Y |
| 10 | Preuve + rétention | PASS/FAIL | Section X, ligne Y |

**VERDICT : PASS / FAIL**
```

---

## Quand appliquer ce DoD

- Création ou modification de spec wedge
- Création ou modification de doc client/commercial
- Mise à jour des docs canoniques (wedge_v13, engagements_v13, start-pro-max_v13)
- Rédaction de backlog/user stories wedge
- Revue de documentation avant mise en production

---

## Si FAIL

1. Identifier les critères non respectés
2. Corriger le document
3. Refaire le Completeness Report
4. Répéter jusqu'à PASS

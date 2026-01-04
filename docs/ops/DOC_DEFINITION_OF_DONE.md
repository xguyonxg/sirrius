# Sirrius — Definition of Done (FIELD-READY)

> **Ce document est la définition unique de « FIELD-READY » (prêt terrain).**
> **En cas de conflit, ce document prime sur tout autre texte.**
> **Référence produit : `docs/product/spec-wedge-v0.md`**

---

## Résumé exécutif (30 secondes)

- **Sirrius = surcouche** : pas agenda, pas rappels, pas remplacement OneDoc/Axenita.
- **Wedge <24h** : créneau libéré détecté → offres SMS automatiques → réservation unique → preuve horodatée.
- **Plans v1.3** : Start / Pro / Max. Objectif mesuré = Max uniquement (conditionnel).
- **Engagement** : exécution + preuve. Si non respect → +2 mois à nos frais (1×).
- **SMS-only** : WhatsApp NO GO tant que consentement auditable non implémenté.
- **Barber V2** : gelé jusqu'à preuve médicale (≥1–3 clients en prod + résultats).

---

## Gate FIELD-READY (PASS/FAIL)

| # | Critère | Comment vérifier | PASS si | FAIL si |
|---|---------|------------------|---------|---------|
| 1 | **Signal <24h détecté** | Vérifier sync calendar (Google/Outlook) + fallback email + monitoring actif | Détection fonctionnelle + alertes en place | Sync KO ou pas de monitoring |
| 2 | **Replay/diagnostic** | Tester qu'un admin peut rejouer un événement et voir les logs | Outil/script disponible et documenté | Impossible de diagnostiquer un échec |
| 3 | **SLA externe ≤2 min** | Mesurer délai détection → job horodaté + vague 1 planifiée/envoyée | Logs prouvent ≤2 min + preuve horodatée | Délai >2 min ou pas de preuve |
| 4 | **Fenêtre SMS** | Vérifier config 08:00–20:00 Europe/Zurich + option 24/7 | Fenêtre correcte + option disponible | Fenêtre incorrecte ou pas d'option |
| 5 | **TTL démarre à l'envoi** | Vérifier que TTL compte depuis envoi SMS, pas détection + règles hors fenêtre | TTL correct + log "trop tard/hors fenêtre" visible | TTL depuis détection ou pas de log |
| 6 | **Moteur vagues** | Tester : vagues → réservation unique → expiration → escalade | Comportement idempotent, pas de doublons | Doublons ou échec escalade |
| 7 | **Conflits gérés** | Tester : slot repris / déplacé / double confirmation | Chaque cas géré proprement + logué | Conflit non détecté ou mal géré |
| 8 | **Confirmé = agenda** | Vérifier écriture agenda + eventId stocké ; write fail = pas confirmé | Événement créé + eventId en base + log si échec | Confirmation sans écriture agenda |
| 9 | **STOP natif** | Envoyer STOP, vérifier blacklist immédiate + preuve opt-out | Patient blacklisté + log opt-out | STOP ignoré ou délai blacklist |
| 10 | **Logs preuve end-to-end** | Vérifier présence logs : détection → envoi → clic → confirmation + export | Tous événements logués + export disponible | Logs incomplets ou pas d'export |
| 11 | **Dashboard wedge** | Vérifier affichage : libérés/proposés/confirmés/délai/hors fenêtre/supply | Toutes métriques visibles | Métriques manquantes |
| 12 | **Billing entitlements** | Tester : Start/Pro/Max + caps + add-ons + upgrade/downgrade + runbook support | Tous scénarios fonctionnels + runbook documenté | Entitlement incorrect ou runbook absent |

---

## Règles terrain canoniques (V0)

Copie exacte de la spec (`docs/product/spec-wedge-v0.md`) :

### SLA

- **SLA externe (promesse)** : ≤ 2 minutes entre détection et création/horodatage du job + planification/envoi de la vague 1 selon fenêtre.
- **Monitoring interne** : ≤ 5 minutes (incidents tolérés mais tracés).

### Moteur et fenêtre

- Moteur actif **24/7**. Détection et horodatage continus.
- Fenêtre SMS par défaut : **08:00–20:00, 7 jours/7 (Europe/Zurich)**.
- Option : envoi **strict 24/7** activable sur demande du cabinet.

### Vagues

- Taille vague : **5 patients** (ajustable).
- Maximum : **3 vagues**.

### TTL dynamique

| Temps avant créneau | TTL |
|---------------------|-----|
| 12–24h | 3h |
| 6–12h | 2h |
| 4–6h | 60–90 min |
| 2–4h | 45–60 min |
| < 2h | 20–30 min |

### Rappel

- **1 rappel unique** à 50% du TTL (si patient n'a pas répondu et créneau dispo).
- **Pas de rappel** si TTL < 30 min.

### Petite supply (≤ 5 opt-ins)

- 1 vague = tout le monde.
- Rappel à 50% TTL si applicable.
- Pas d'escalade artificielle.
- Si zéro opt-in → "supply insuffisante" visible au dashboard.

### Hors fenêtre

- Job créé + horodaté en ≤ 2 min.
- Envoi planifié pour prochaine ouverture de fenêtre.
- Si créneau trop proche pour laisser un TTL utile → **pas d'envoi**, log "trop tard / hors fenêtre".

---

## Anti-spam & Équité

### Anti-spam (tous plans)

| Règle | Limite |
|-------|--------|
| Offres par jour par patient | Maximum 1 |
| Offres par 7 jours par patient | Maximum 3 |
| STOP reçu | Blacklist immédiate |

### Équité (Max uniquement)

| Règle | Description |
|-------|-------------|
| Tri prioritaire | "Moins sollicités d'abord" dans chaque vague |
| Cooldown post-confirmation | 7–14 jours avant nouvelle sollicitation (configurable) |

### Option future (hors V0)

Pause automatique 30 jours si abus d'annulations détecté.

---

## Templates SMS canoniques

Les 4 templates **mot pour mot** :

### Offre (vague 1)
```
{CABINET} : un créneau s'est libéré le {DATE} à {HEURE}. Confirmez si cela vous convient : {LIEN}. Merci. Pour ne plus recevoir ce SMS, répondez STOP.
```

### Rappel (50% TTL)
```
{CABINET} : ce créneau est toujours disponible ({DATE} {HEURE}). Confirmez ici : {LIEN}. Merci. Pour ne plus recevoir ce SMS, répondez STOP.
```

### Indisponible (clic tardif)
```
{CABINET} : ce créneau n'est plus disponible. Merci. Pour ne plus recevoir ce SMS, répondez STOP.
```

### STOP confirmation
```
{CABINET} : vous ne recevrez plus de messages. Merci.
```

### Règle "Indisponible"

Le message "Indisponible" est envoyé **uniquement** aux patients qui cliquent sur le lien alors que le créneau a déjà été attribué. Ce n'est pas un broadcast à tous les patients de la vague.

---

## MUST-HAVE vs NICE-TO-HAVE

### MUST-HAVE (bloquant pour FIELD-READY)

Tout critère de la Gate FIELD-READY (12 points) :
1. Signal <24h détecté + monitoring
2. Replay/diagnostic possible
3. SLA externe ≤2 min + preuve
4. Fenêtre 08:00–20:00 + option 24/7
5. TTL démarre à l'envoi + règles hors fenêtre
6. Moteur vagues idempotent
7. Conflits gérés (slot repris/déplacé/double)
8. Confirmé = écriture agenda + eventId
9. STOP natif + blacklist immédiate
10. Logs preuve end-to-end + export
11. Dashboard wedge minimal
12. Billing entitlements + runbook support

### NICE-TO-HAVE (non bloquant V0)

- A/B testing wording SMS
- Scénarios messages supplémentaires (>3)
- Pause 30 jours si abus annulations
- Enrichissements dashboard (graphs, tendances)
- Canaux supply additionnels (QR code, post-visite auto)
- Rotation avancée praticiens
- Personnalisation poussée par cabinet
- Export CSV/PDF automatique programmé

---

## Pourquoi ça augmente le MRR net

1. **Conversion ↑** : preuve horodatée + réduction risque perçu → plus de signatures.
2. **Rétention ↑** : anti-chaos + anti-spam → moins de churn, image cabinet protégée.
3. **Marge préservée** : entitlements/caps → gros comptes ne mangent pas la marge.
4. **Support ↓** : monitoring + replay + runbook → coûts support réduits.
5. **Expansion ↑** : Max justifié par équité + objectif → upsell naturel.

---

## Work packages (non-tech)

Chantiers pour driver l'exécution sans code :

| # | Chantier | Livrables attendus |
|---|----------|-------------------|
| 1 | **Spec** | `docs/product/spec-wedge-v0.md` validé PASS |
| 2 | **Signal** | Doc : sources supportées (Google/Outlook/email) + monitoring + alertes |
| 3 | **Moteur** | Doc : flux vagues/TTL/rappel/expiration + écrans dashboard |
| 4 | **Conflits** | Doc : cas limites (repris/déplacé/double) + logs attendus |
| 5 | **Preuve/Billing** | Doc : logs requis + rétention + export + entitlements + runbook support |

---

## Sources canoniques

| Document | Chemin | Contenu |
|----------|--------|---------|
| Spec produit | `docs/product/spec-wedge-v0.md` | Définition complète wedge V0 |
| Wedge | `docs/strategy/wedge_v13.md` | Positionnement, signal, supply, anti-chaos, confirmation, templates |
| Engagements | `docs/engagements/engagements_v13.md` | SLA, garanties, objectif Max, extensions |
| Pricing | `docs/pricing/start-pro-max_v13.md` | Plans Start/Pro/Max, inclus, add-ons |

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
- Mise à jour des docs canoniques
- Rédaction de backlog/user stories wedge
- Revue de documentation avant mise en production
- **Validation FIELD-READY avant go-live**

---

## Si FAIL

1. Identifier les critères non respectés
2. Corriger le document / l'implémentation
3. Refaire le Completeness Report / Gate check
4. Répéter jusqu'à PASS

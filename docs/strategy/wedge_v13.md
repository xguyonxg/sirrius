# Sirrius — Wedge v1.3

## Positionnement

Sirrius est une **surcouche premium** pour cabinets médicaux suisses.

- **Ce que nous sommes** : un service de récupération des créneaux libérés en dernière minute (<24h).
- **Ce que nous ne sommes pas** : un agenda, un système de rappels, un remplacement de OneDoc/Axenita.

## Wedge end-to-end

```
Signal (créneau libéré <24h)
    ↓
Offres SMS automatisées 24/7
    ↓
Réservation unique (1 confirmation)
    ↓
Preuve horodatée (audit trail)
```

## Signal

### Sources prioritaires (intégrations réelles)

1. **Google Calendar** : sync bidirectionnelle, détection des annulations/modifications.
2. **Outlook Calendar** : idem via API Microsoft Graph.

### Fallback

- **Email forwarding** : le cabinet transfère les notifications d'annulation vers une adresse Sirrius dédiée.

## Supply (constitution de la liste patients)

Canaux **non dépendants de la secrétaire** :

| Canal | Description |
|-------|-------------|
| Missed-call SMS | Appel manqué → SMS automatique proposant inscription liste d'attente. |
| Lien "créneau plus tôt" | Lien envoyé post-RDV : "Un créneau plus tôt vous intéresse ?" |
| Campagne opt-in batch | Import liste existante avec consentement auditable. |
| Post-visite | Si signal fiable : proposition d'inscription après la consultation. |

## Anti-chaos

| Mécanisme | Description |
|-----------|-------------|
| Réservation unique | Un seul patient peut réserver un créneau. La première confirmation valide le créneau. |
| Expiration | Si pas de réponse dans le délai, le créneau passe au suivant ou expire. |
| Escalade en vagues | Offres envoyées par vagues successives (pas de spam de masse). |
| Gestion des conflits | Si créneau repris manuellement avant exécution Sirrius → créneau retiré. |
| Audit trail | Chaque action horodatée, append-only, exportable. |

## Conformité

- **STOP obligatoire** : tout SMS inclut la possibilité de se désabonner.
- **Zéro donnée sensible** : aucune information médicale dans les SMS.
- **WhatsApp** : NO GO tant que le consentement auditable n'est pas implémenté.
- **Data minimization** : seules les données nécessaires à l'exécution et la preuve sont stockées.

## Paramètres V0 (opérationnels)

### SLA (détection → déclenchement vague 1)

| Type | Valeur | Notes |
|------|--------|-------|
| SLA externe (promesse) | ≤ 2 minutes | Logs horodatés comme preuve. |
| SLA interne p95 (monitoring) | ≤ 5 minutes | Tolérance incidents mineurs. |

**24/7** : moteur actif 24/7, fenêtre de contact configurable (par défaut raisonnable), envoi 24/7 activable si le cabinet le souhaite.

### Vagues & TTL (V0)

| Paramètre | Valeur par défaut |
|-----------|-------------------|
| Taille vague | 5 (ajustable) |
| Max vagues | 3 |

**TTL dynamique** selon temps avant le créneau :

| Temps avant créneau | TTL |
|---------------------|-----|
| 4–6h | 60 min |
| 2–4h | 45 min |
| < 2h | 20–30 min |

**Petite supply (≤ 5 opt-ins)** :
- 1 seule vague = tout le monde
- 1 relance à H+60 min (si créneau encore pertinent)
- Pas d'escalade artificielle

### Anti-sollicitation (anti-spam)

| Règle | Limite |
|-------|--------|
| Max offres / jour / patient | 1 |
| Max offres / 7 jours / patient | 3 |

**But** : protéger l'image du cabinet + réduire STOP + éviter que les mêmes monopolisent.

## Ce que Sirrius ne promet jamais

- "100% des créneaux remplis"
- Un taux de remplissage garanti sans conditions
- Des résultats sans signal fiable + supply active + process de confirmation

# Sirrius — Wedge v1.3

## Positionnement

Sirrius est une **surcouche premium** pour cabinets médicaux suisses.

- **Ce que nous sommes** : un service de récupération des créneaux libérés en dernière minute (<24h).
- **Ce que nous ne sommes pas** : un agenda, un système de rappels, un remplacement de OneDoc/Axenita.

## Wedge end-to-end

```
Signal (créneau libéré <24h)
    ↓
Offres SMS automatisées (08:00–20:00 par défaut, option 24/7)
    ↓
Réservation unique (1 confirmation)
    ↓
Preuve horodatée (historique complet)
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
| Expiration | Si pas de réponse dans le délai (TTL), le créneau passe au suivant ou expire. |
| Escalade en vagues | Offres envoyées par vagues successives (pas de spam de masse). |
| Gestion des conflits | Si créneau repris manuellement avant exécution Sirrius → créneau retiré. |
| Historique horodaté | Chaque action est tracée avec horodatage, exportable. |

## Conformité

- **STOP obligatoire** : tout SMS inclut la possibilité de se désabonner.
- **Zéro donnée sensible** : aucune information médicale dans les SMS.
- **WhatsApp** : NO GO tant que le consentement auditable n'est pas implémenté.
- **Data minimization** : seules les données nécessaires à l'exécution et la preuve sont stockées.

## Paramètres V0 (opérationnels)

### SLA (après détection)

Après détection d'un créneau libéré, Sirrius crée et horodate l'exécution, puis planifie ou envoie la vague 1 en ≤ 2 minutes (selon fenêtre d'envoi).

| Type | Valeur | Notes |
|------|--------|-------|
| SLA externe (promesse) | ≤ 2 minutes | Preuve par logs horodatés. |
| Monitoring interne | ≤ 5 minutes | Incidents tolérés mais tracés. |

**Fenêtre d'envoi par défaut** : 08:00–20:00, 7 jours/7 (Europe/Zurich). Option 24/7 activable sur demande.

**Règle hors fenêtre** : si le créneau commence trop tôt pour laisser un TTL utile, pas d'envoi ; log "trop tard / hors fenêtre".

### TTL (temps de réponse patient)

Le TTL démarre à l'envoi du SMS, pas à la détection.

| Temps avant créneau | TTL |
|---------------------|-----|
| 12–24h | 3h |
| 6–12h | 2h |
| 4–6h | 60–90 min |
| 2–4h | 45–60 min |
| < 2h | 20–30 min |

### Vagues

| Paramètre | Valeur par défaut |
|-----------|-------------------|
| Taille vague | 5 (ajustable) |
| Max vagues | 3 |
| Rappel | 1 rappel unique à 50% du TTL (si disponible). Pas de rappel si TTL < 30 min. |

**Petite supply (≤ 5 opt-ins)** :
- 1 seule vague = tout le monde
- Pas d'escalade artificielle
- Manque de supply visible au dashboard

### Anti-sollicitation (anti-spam)

| Règle | Limite |
|-------|--------|
| Max offres / jour / patient | 1 |
| Max offres / 7 jours / patient | 3 |

**But** : protéger l'image du cabinet + réduire STOP + éviter que les mêmes monopolisent.

### Équité (Max uniquement)

- Tri "moins sollicités d'abord" dans chaque vague.
- Cooldown post-confirmation : 7–14 jours avant nouvelle sollicitation.

## Confirmation (V0)

**Confirmé = événement écrit dans l'agenda (Google/Outlook) + eventId stocké côté Sirrius.**

Si l'écriture dans l'agenda échoue → pas confirmé.

Calendar write obligatoire dès Start (sinon NO GO onboarding).

### Stockage de l'identifiant Sirrius

L'identifiant Sirrius est stocké en métadonnée technique non visible lorsque le fournisseur d'agenda le permet, afin de ne laisser aucune information sensible dans le calendrier.

Si non disponible, utiliser le champ le moins exposé possible (jamais le titre), sans donnée sensible.

## SMS — modèles canoniques (sobres, sans données sensibles)

### Offre (v1)
```
{CABINET} : un créneau s'est libéré le {DATE} à {HEURE}. Confirmez si cela vous convient : {LIEN}. Merci. Pour ne plus recevoir ce SMS, répondez STOP.
```

### Rappel
```
{CABINET} : ce créneau est toujours disponible ({DATE} {HEURE}). Confirmez ici : {LIEN}. Merci. Pour ne plus recevoir ce SMS, répondez STOP.
```

### Indisponible
```
{CABINET} : ce créneau n'est plus disponible. Merci. Pour ne plus recevoir ce SMS, répondez STOP.
```

**Note** : "Indisponible" n'est envoyé qu'aux patients qui cliquent trop tard.

### STOP
```
{CABINET} : vous ne recevrez plus de messages. Merci.
```

## Ce que Sirrius ne promet jamais

- "100% des créneaux remplis"
- Un taux de remplissage garanti sans conditions
- Des résultats sans signal fiable + supply active + process de confirmation

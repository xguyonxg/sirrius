# Sirrius — Barber Add-on (V2, à faire plus tard)

**Statut : GELÉ.**
Aucun développement "barber" avant preuve médicale (≥ 1–3 cabinets médicaux en production + résultats + runbook support).

## Objectif
Ne pas remplacer Salonkee (agenda). Ajouter une surcouche qui :
1) récupère des leads perdus (appels manqués, messages),
2) remplit des créneaux libérés (liste d'attente + remplissage),
3) sécurise les nouveaux leads captés par Sirrius (dépôt/carte), puis redirige vers Salonkee.

## Positionnement (simple)
- Sirrius n'est pas un agenda.
- Sirrius n'invente ni disponibilités, ni tarifs.
- Sirrius crée du "stock" (opt-in), propose proprement, et prouve ce qui a été fait.

## V1 future (100% opérationnelle) — périmètre
### 1) Smart missed-call → SMS (Twilio)
But : capter sans spam.
Règles :
- Si le même numéro rappelle dans les 5–10 min : ne pas envoyer.
- Si le salon rappelle et que ça décroche : ne pas envoyer.
- Si appel manqué hors horaires : SMS + lien + option "être rappelé demain".
- Si numéro déjà connu (déjà opt-in) : message plus court + lien direct.

Message SMS (sobre, sans données sensibles) :
- "Réserver maintenant"
- "Créneau plus tôt (liste d'attente)"
- "STOP"

Logs obligatoires : appel → SMS → clic → réponse → statut opt-in/out.

### 2) Campagnes opt-in "liste d'attente"
But : créer une liste sans dépendre du staff.
- Campagne SMS en batch contrôlé : "Répondez OUI pour être contacté si un créneau se libère."
- STOP natif + audit trail.
Seuils (indicatifs) :
- activation : ≥ 30 opt-ins
- objectif mesurable : ≥ 100 opt-ins

### 3) Waitlist + remplissage automatique (le cœur)
Principe :
- Proposition en vagues (3–5 personnes).
- **Réservation unique** : la première confirmation valide le créneau.
- Expiration + message "créneau déjà attribué" aux autres.
- Gestion anti-chaos : conflits / double confirmation / créneau repris.
Stats minimum : proposé / confirmé / délai / taux.

### 4) "2 clics" (pas de conversation)
Chaque SMS/DM renvoie vers une page Sirrius avec 2 choix :
1) Réserver maintenant → lien Salonkee
2) Créneau plus tôt → waitlist Sirrius (opt-in)

Pas de discussion. Pas de prix dans les messages.

## Social (option, V1)
### Instagram DM (option)
- Réponse automatique template + liens (réserver / waitlist)
- Mots-clés simples (pas de conversation libre)
Pré-requis : compte Business + connexion Meta.

### WhatsApp (option)
- Messages template + liens
- Opt-in explicite obligatoire + traçabilité
Pré-requis : WhatsApp Business Platform actif.
(NB : peut rester désactivé tant que le cadre opt-in n'est pas béton.)

## Dépôt / carte (option V1) — uniquement pour leads Sirrius
But : sécuriser les NOUVEAUX leads captés par Sirrius sans toucher à l'agenda.
Flux :
1) Lead capté → clique "Réserver"
2) Page Sirrius : carte requise ou petit dépôt (Stripe)
3) Après validation → bouton "Réserver maintenant" → redirection Salonkee

Garde-fous :
- Ne couvre pas les réservations faites directement dans Salonkee.
- Pas de recouvrement, pas de litiges gérés par Sirrius.

## Proof dashboard (minimum)
Objectif : prouver la valeur Sirrius (sinon comparaison au "79 CHF").
- appels manqués captés
- clics vers réservation
- opt-ins waitlist
- propositions / confirmations / délai moyen
- dépôts collectés (si activé) + conversions vers Salonkee

## Anti-abus (important)
- Cooldown automatique : si une personne confirme plusieurs fois puis ne vient pas (signalé par le salon), mise en pause X jours.
- Rotation : éviter de solliciter toujours les mêmes.
- STOP respecté partout.

## Ce qu'on ne fait pas en V1
- Pas d'agenda
- Pas d'intégration profonde Salonkee
- Pas de relances de paiement / recouvrement
- Pas de messages contenant des prix "certains"

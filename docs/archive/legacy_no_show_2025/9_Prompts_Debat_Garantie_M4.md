---
ARCHIVE — Stratégie no-show (2025), obsolète depuis pivot wedge <24h (v1.3).
Ne pas utiliser en vente / marketing.
Références actuelles :
- docs/strategy/wedge_v13.md
- docs/pricing/start-pro-max_v13.md
- docs/engagements/engagements_v13.md
---

# 9 PROMPTS DÉBAT GARANTIE M4

**Objectif :** Soumettre chaque prompt au rôle correspondant dans ChatGPT pour obtenir 9 avis d'experts sur la viabilité de la Garantie M4.

**Question centrale :** La garantie "ROI 1.2× sur 120 jours ou remboursement" est-elle viable pour SIRRIUS ?

---

## PROMPT 1 — GROWTH MANAGER

```
DÉBAT GARANTIE M4 — ANALYSE GROWTH

CONTEXTE :
SIRRIUS propose une garantie unique en Suisse romande : "ROI 1.2× sur 120 jours ou remboursement intégral".

C'est notre principal différenciateur vs la concurrence (Spark.ch, iTherapeut, Salonkee, OneDoc) qui ne proposent aucune garantie.

PRICING :
- Business+ : 389/379/359 CHF/mois (4/6/12 mois)
- Performance+ : 889/849/829 CHF/mois (4/6/12 mois)

QUESTIONS POUR TOI :

1. IMPACT ACQUISITION : Quel est l'impact attendu de cette garantie sur le taux de conversion ? Chiffre-le si possible.

2. POSITIONNEMENT : Cette garantie renforce-t-elle notre positionnement "assurance revenus" ou crée-t-elle de la confusion ?

3. MESSAGING : Comment communiquer cette garantie pour attirer les BONS clients et repousser les profiteurs ?

4. RISQUE PERCEPTION : Un prix 5-10× plus cher + garantie = est-ce perçu comme "confiance" ou "desperation" ?

5. ALTERNATIVES : Si la garantie est trop risquée, quel autre différenciateur pourrais-tu proposer ?

DEMANDE :
Analyse ces points et donne ta recommandation finale :
- GO : Lancer la garantie telle quelle
- NO GO : Ne pas lancer de garantie ROI
- REFORMULER : Proposer une formulation alternative

Justifie ta position avec des arguments concrets.
```

---

## PROMPT 2 — PRODUCT MANAGER

```
DÉBAT GARANTIE M4 — ANALYSE PRODUIT

CONTEXTE :
SIRRIUS envisage une garantie "ROI 1.2× sur 120 jours ou remboursement".

PROBLÈME DE MESURABILITÉ :

Ce que SIRRIUS PEUT mesurer objectivement :
- Nombre de RDV (intégration agenda ICS/Google)
- Rappels SMS envoyés (logs Twilio)
- Confirmations OUI/NON reçues (webhook)
- No-shows traçables (confirmé OUI mais pas de check-in QR)
- Taux de réponse SMS

Ce que SIRRIUS NE PEUT PAS mesurer :
- Panier moyen réel (déclaratif client)
- Revenus CHF récupérés (déclaratif client)
- Présence physique du patient (sauf check-in QR volontaire)
- Baseline "avant SIRRIUS" fiable

QUESTIONS POUR TOI :

1. FAISABILITÉ TECHNIQUE : Peut-on calculer un "ROI 1.2×" de manière objective et indiscutable avec nos données ?

2. USER STORIES : Quelles features faudrait-il développer pour rendre la garantie mesurable ? (effort estimé)

3. ONBOARDING IMPACT : Quelles données devrait-on collecter à J0 pour établir une baseline fiable ?

4. REFORMULATION PRODUIT : Peut-on reformuler la garantie sur ce qu'on PEUT mesurer ?
   Ex: "Réduction de 30% des no-shows" au lieu de "ROI 1.2× en CHF"

5. ROADMAP IMPACT : Si on lance cette garantie, quel impact sur les Sessions 6-10 restantes ?

DEMANDE :
Analyse la faisabilité technique et donne ta recommandation :
- GO : Faisable techniquement, on peut mesurer objectivement
- NO GO : Impossible à mesurer objectivement, trop de déclaratif
- REFORMULER : Proposer une garantie basée sur des métriques mesurables

Justifie avec des critères d'acceptation concrets.
```

---

## PROMPT 3 — SALES MANAGER

```
DÉBAT GARANTIE M4 — ANALYSE COMMERCIALE

CONTEXTE :
SIRRIUS propose une garantie "ROI 1.2× sur 120 jours ou remboursement" pour se différencier.

PRICING :
- Business+ : 389 CHF/mois (5× plus cher que Spark.ch)
- Performance+ : 889 CHF/mois (11× plus cher que iTherapeut)

CONCURRENCE (aucune garantie ROI) :
- Spark.ch : 80 CHF/mois
- iTherapeut : 34 CHF/mois
- Salonkee : ~35 CHF/mois
- OneDoc : inclus dans leur offre

QUESTIONS POUR TOI :

1. LEVIER COMMERCIAL : Cette garantie est-elle un argument de closing puissant ? Comment l'utiliser en démo ?

2. OBJECTIONS : Quelles objections cette garantie va-t-elle créer ? ("C'est louche", "Y'a un piège", etc.)

3. QUALIFICATION : Comment qualifier les prospects pour éviter les profiteurs qui signent POUR se faire rembourser ?

4. SCRIPT : Donne-moi un script de 30 secondes pour présenter la garantie de façon convaincante.

5. NÉGOCIATION : Les clients vont-ils négocier le prix en disant "de toute façon y'a la garantie" ?

6. PROFIL RISQUE : Quels profils de clients sont les plus susceptibles de demander un remboursement abusif ?

DEMANDE :
Analyse l'impact commercial et donne ta recommandation :
- GO : Argument de vente puissant, les bons clients vont signer
- NO GO : Attire les mauvais clients, crée plus de problèmes que de ventes
- REFORMULER : Proposer une formulation commercialement plus efficace

Justifie avec des arguments de terrain.
```

---

## PROMPT 4 — FINANCE MANAGER

```
DÉBAT GARANTIE M4 — ANALYSE FINANCIÈRE

CONTEXTE :
SIRRIUS envisage une garantie "ROI 1.2× sur 120 jours ou remboursement intégral des 4 premiers mois".

DONNÉES FINANCIÈRES :

Pricing :
- Business+ 4m : 389 CHF/mois → Remboursement max = 1'556 CHF
- Performance+ 4m : 889 CHF/mois → Remboursement max = 3'556 CHF

COGS estimés : 50-70 CHF/mois/client
Marge brute : ~85%

Objectifs :
- 55 clients fin 2027
- MRR cible : 24-25k CHF

Situation fondateur :
- Cash limité au démarrage
- Job temps plein dès janvier 2026

QUESTIONS POUR TOI :

1. PROVISIONS : Quelle provision dois-je constituer par client signé pour couvrir le risque de remboursement ?

2. SCÉNARIOS : Modélise l'impact cash-flow avec :
   - 5% de remboursements
   - 10% de remboursements
   - 20% de remboursements
   - 30% de remboursements

3. POINT DE BASCULE : À quel % de remboursements SIRRIUS devient-il non viable financièrement ?

4. TIMING : Avec un cash limité, peut-on se permettre cette garantie dès le lancement ?

5. ALTERNATIVES : Proposer des mécanismes pour limiter l'exposition financière (plafond, franchise, avoir au lieu de remboursement, etc.)

DEMANDE :
Analyse la viabilité financière et donne ta recommandation :
- GO : Financièrement viable avec les provisions adéquates
- NO GO : Trop risqué pour le cash-flow, risque de faillite
- REFORMULER : Proposer des ajustements pour réduire le risque financier

Donne des chiffres précis et des tableaux.
```

---

## PROMPT 5 — DATA ANALYST SAAS

```
DÉBAT GARANTIE M4 — ANALYSE DONNÉES

CONTEXTE :
SIRRIUS propose une garantie "ROI 1.2× sur 120 jours".

DÉFINITION ROI PROPOSÉE :
ROI = (CA généré/sauvé par SIRRIUS) / (Coût abonnement 4 mois)
Si ROI < 1.2 → Remboursement

DONNÉES DISPONIBLES (objectives) :
- Nombre de RDV dans l'agenda (intégration ICS)
- Rappels SMS envoyés (logs Twilio)
- Confirmations OUI reçues
- Confirmations NON reçues (annulations évitées)
- No-shows traçables (OUI confirmé, pas de check-in)
- Taux de réponse SMS

DONNÉES NON DISPONIBLES (déclaratives) :
- Panier moyen réel du client
- Revenus CHF réellement récupérés
- Présence physique du patient
- Taux de no-show "avant SIRRIUS" (baseline)

QUESTIONS POUR TOI :

1. FORMULE OBJECTIVE : Propose une formule de calcul du ROI basée UNIQUEMENT sur les données objectives. Est-ce possible ?

2. BASELINE : Comment établir un taux de no-show "avant SIRRIUS" de manière fiable ?

3. FAILLES : Comment un client malhonnête pourrait-il manipuler les données pour déclencher un remboursement ?

4. REFORMULATION : Propose une garantie basée sur des métriques 100% mesurables.
   Ex: "Réduction de X% des no-shows" ou "Taux de confirmation > Y%"

5. DASHBOARD : Quels KPIs afficher au client pour qu'il suive sa progression vers le ROI ?

DEMANDE :
Analyse la mesurabilité et donne ta recommandation :
- GO : On peut mesurer objectivement le ROI 1.2×
- NO GO : Impossible à mesurer objectivement, garantie basée sur du déclaratif
- REFORMULER : Proposer une garantie basée sur des métriques mesurables (avec formule)

Sois précis sur les formules et les sources de données.
```

---

## PROMPT 6 — CUSTOMER SUCCESS MANAGER

```
DÉBAT GARANTIE M4 — ANALYSE SUCCESS CLIENT

CONTEXTE :
SIRRIUS propose une garantie "ROI 1.2× sur 120 jours ou remboursement".

PHILOSOPHIE :
"Un client qui demande un remboursement = un échec du Customer Success, pas du produit."

CONTRAINTES :
- Xavier est seul (pas d'équipe CSM)
- Job temps plein dès janvier 2026
- Le CSM doit être le plus automatisé possible

QUESTIONS POUR TOI :

1. PARCOURS 120 JOURS : Définis le parcours client optimal pour GARANTIR qu'il atteigne le ROI.
   - Semaine 1 : ?
   - Mois 1 : ?
   - Mois 2 : ?
   - Mois 3 : ?
   - Mois 4 (fin garantie) : ?

2. RED FLAGS : Quels signaux d'alerte indiquent qu'un client risque de NE PAS atteindre le ROI ?

3. INTERVENTIONS : Que faire quand on détecte un client "à risque" ? (automatisable)

4. PRÉVENTION : Comment s'assurer que les clients qui signent PEUVENT atteindre le ROI ? (qualification)

5. EMAILS AUTOMATIQUES : Propose les emails clés à envoyer pendant les 120 jours pour maximiser le succès.

6. RÉALITÉ : Avec 1 personne seule + job temps plein, ce parcours est-il réaliste ?

DEMANDE :
Analyse la faisabilité du Customer Success et donne ta recommandation :
- GO : On peut accompagner les clients vers le ROI de manière automatisée
- NO GO : Impossible sans équipe CSM dédiée, trop de clients vont échouer
- REFORMULER : Proposer des conditions de garantie plus faciles à atteindre

Sois concret sur les automatisations possibles.
```

---

## PROMPT 7 — RISK MANAGER / ACTUAIRE

```
DÉBAT GARANTIE M4 — ANALYSE ACTUARIELLE

CONTEXTE :
SIRRIUS propose une garantie "ROI 1.2× sur 120 jours ou remboursement intégral".

DONNÉES :

Pricing :
- Business+ : 389 CHF/mois → Remboursement = 1'556 CHF (4 mois)
- Performance+ : 889 CHF/mois → Remboursement = 3'556 CHF (4 mois)

COGS : ~50-70 CHF/mois/client
Objectif : 55 clients fin 2027

Marché :
- Taux no-show moyen : 5-10%
- Réduction attendue avec SMS : 40-60%
- Panier moyen : 80-150 CHF

QUESTIONS POUR TOI :

1. PROBABILITÉ : Estime la probabilité qu'un client demande un remboursement (scénarios 5%, 10%, 20%, 30%).

2. MODÉLISATION : Calcule l'impact financier pour chaque scénario sur 55 clients.

3. PROVISIONS : Quelle provision par client signé pour couvrir le risque ?

4. POINT DE BASCULE : À quel % de remboursements SIRRIUS fait faillite ?

5. MITIGATION : Propose des mécanismes actuariels pour réduire le risque :
   - Franchise ?
   - Plafond de remboursement ?
   - Avoir au lieu de cash ?
   - Exclusions ?

6. VIABILITÉ STATISTIQUE : À partir de combien de clients la garantie devient-elle statistiquement viable (loi des grands nombres) ?

DEMANDE :
Modélise le risque et donne ta recommandation :
- GO : Risque acceptable avec provisions adéquates
- NO GO : Risque trop élevé, potentiel de faillite
- REFORMULER : Proposer des ajustements actuariels (franchise, plafond, conditions)

Donne des tableaux chiffrés avec scénarios.
```

---

## PROMPT 8 — JURISTE CGV & CONTRATS

```
DÉBAT GARANTIE M4 — ANALYSE JURIDIQUE

CONTEXTE :
SIRRIUS propose une garantie "ROI 1.2× sur 120 jours ou remboursement intégral".

RISQUES JURIDIQUES IDENTIFIÉS :
1. Client ment sur ses données pour se faire rembourser
2. Interprétation différente de "ROI atteint"
3. Client utilise 4 mois à nos frais, demande remboursement, recommence
4. Litige sur la méthode de calcul

DROIT APPLICABLE :
- Droit suisse des obligations (CO)
- LPD (protection des données)
- CGV B2B en Suisse

QUESTIONS POUR TOI :

1. CONDITIONS D'ÉLIGIBILITÉ : Rédige les conditions pour qu'un client puisse activer la garantie.
   (Ex: activation 95%, paiements à jour, volumes minimums, etc.)

2. EXCLUSIONS : Rédige les exclusions de garantie (cas où on ne rembourse PAS).

3. PROCÉDURE : Rédige la procédure de demande de remboursement (preuves requises, délais, etc.)

4. ANTI-ABUS : Rédige une clause "1 seul remboursement par client / entité juridique".

5. LIMITATION : Peut-on limiter le remboursement à un "avoir" plutôt qu'un remboursement cash ?

6. LITIGES : Quelle juridiction et mécanisme de règlement des litiges recommandes-tu ?

7. FAILLES : Quelles failles juridiques vois-tu dans cette garantie ?

DEMANDE :
Analyse les risques juridiques et donne ta recommandation :
- GO : Juridiquement solide avec les clauses proposées
- NO GO : Trop de failles juridiques, garantie inexécutable
- REFORMULER : Proposer une formulation juridiquement plus sûre

Donne des clauses prêtes à copier-coller dans les CGV.
```

---

## PROMPT 9 — EXPERT ASSURANCE & ANTI-FRAUDE

```
DÉBAT GARANTIE M4 — ANALYSE ANTI-FRAUDE

CONTEXTE :
SIRRIUS propose une garantie "ROI 1.2× sur 120 jours ou remboursement".

ANALOGIE ASSURANCE :
- Prime = abonnement mensuel
- Sinistre = ROI non atteint
- Indemnisation = remboursement 4 mois

CE QUE SIRRIUS PEUT VÉRIFIER :
- Nombre de RDV (si intégration agenda)
- SMS envoyés et réponses
- Confirmations OUI/NON
- Check-ins QR (optionnel)

CE QUE SIRRIUS NE PEUT PAS VÉRIFIER :
- Panier moyen réel (déclaratif)
- Revenus CHF (déclaratif)
- Présence physique du patient
- Honnêteté du client

SCÉNARIOS DE FRAUDE POSSIBLES :
1. Client déclare un panier moyen gonflé à l'inscription, puis le "réel" (bas) pour le remboursement
2. Client n'active pas vraiment SIRRIUS (SMS désactivés) pour garantir l'échec
3. Client monte une structure juridique différente pour resigner après remboursement
4. Client partage l'astuce sur des forums de professionnels

QUESTIONS POUR TOI :

1. DÉTECTION : Comment détecter une demande de remboursement frauduleuse ?

2. PRÉVENTION : Quels mécanismes anti-fraude mettre en place AVANT signature ?

3. PREUVES : Quelles preuves exiger avant d'accepter un remboursement ?

4. PROFILS À RISQUE : Quels profils de clients représentent un risque élevé de fraude ?

5. DÉCHÉANCE : Rédige les cas de déchéance de garantie (comportements qui annulent le droit au remboursement).

6. EXCLUSIONS MÉTIER : Y a-t-il des secteurs/profils à exclure de la garantie ?

DEMANDE :
Analyse les risques de fraude et donne ta recommandation :
- GO : Risque de fraude gérable avec les mécanismes proposés
- NO GO : Trop de failles, fraude quasi garantie
- REFORMULER : Proposer des conditions anti-fraude strictes

Sois précis sur les mécanismes de détection et prévention.
```

---

## SYNTHÈSE — APRÈS LES 9 RÉPONSES

Une fois que tu as les 9 réponses, envoie-les moi et je ferai la synthèse :

| Rôle               | Recommandation          | Arguments clés |
| ------------------ | ----------------------- | -------------- |
| Growth Manager     | GO / NO GO / REFORMULER | ...            |
| Product Manager    | GO / NO GO / REFORMULER | ...            |
| Sales Manager      | GO / NO GO / REFORMULER | ...            |
| Finance Manager    | GO / NO GO / REFORMULER | ...            |
| Data Analyst       | GO / NO GO / REFORMULER | ...            |
| Customer Success   | GO / NO GO / REFORMULER | ...            |
| Risk Manager       | GO / NO GO / REFORMULER | ...            |
| Juriste            | GO / NO GO / REFORMULER | ...            |
| Expert Anti-Fraude | GO / NO GO / REFORMULER | ...            |

**Décision finale :**

- Si majorité GO → On lance la garantie M4
- Si majorité NO GO → On trouve un autre différenciateur
- Si majorité REFORMULER → On ajuste la garantie selon les recommandations

---

**FIN DES 9 PROMPTS**

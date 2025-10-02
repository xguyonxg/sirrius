# Make.com Scenarios

Ce dossier contiendra les exports JSON des scénarios Make.com pour automatiser les workflows Sirrius.

## Scénarios Prévus

### 1. Facebook Lead → Google Sheets + SMS
- Trigger: Webhook Facebook Lead Ads
- Actions:
  - Extraire les données du lead
  - Créer ligne dans Google Sheets (onglet Leads)
  - Envoyer SMS de bienvenue
  - Mettre à jour Capacity

### 2. Stripe Checkout → Conversion Lead
- Trigger: Webhook Stripe `checkout.session.completed`
- Actions:
  - Identifier le lead via metadata
  - Mettre à jour status="converted"
  - Ajouter stripe_customer_id
  - Incrémenter KPI_Daily

### 3. Stripe Subscription Events
- Trigger: Webhooks `subscription.updated` et `subscription.deleted`
- Actions:
  - Mettre à jour statut client
  - Logger churn si deleted
  - Mettre à jour KPI_Daily

### 4. Capacité Auto-Pause
- Trigger: Google Sheets watch (Capacity)
- Condition: remaining_capacity < 10%
- Actions:
  - Pause campagnes Facebook via API
  - Mettre à jour Ads_Control
  - Envoyer notification admin

### 5. Incident Detection
- Trigger: Schedule (toutes les 5 minutes)
- Actions:
  - Vérifier webhooks Stripe reçus
  - Vérifier sync Facebook
  - Logger anomalies dans Incidents

---

## Instructions

Pour exporter un scénario Make.com:
1. Ouvrir le scénario dans Make.com
2. Cliquer sur les 3 points > Export blueprint
3. Sauvegarder le fichier JSON ici
4. Nommer: `scenario_[nom].json`

Pour importer:
1. Make.com > Create new scenario
2. Cliquer sur les 3 points > Import blueprint
3. Sélectionner le fichier JSON


# Lookers - Dashboards & Visualisations

Ce dossier contiendra les exports et configurations des dashboards de visualisation de données.

## Dashboards Prévus

### 1. Dashboard Opérationnel (Quotidien)
- Source: Google Sheets (tous onglets)
- KPIs:
  - Leads du jour
  - Capacité restante
  - Conversions
  - ROI journalier
  - Incidents actifs

### 2. Dashboard Performance Ads
- Source: Ads_Control + KPI_Daily
- Métriques:
  - CPL par campagne
  - Performance score
  - Budget spent vs budget
  - Évolution leads par campagne

### 3. Dashboard Financier
- Source: KPI_Daily + Stripe
- Métriques:
  - MRR evolution
  - Churn rate
  - CAC (Customer Acquisition Cost)
  - LTV projection
  - Revenue vs Ad Spend

### 4. Dashboard Incidents
- Source: Incidents
- Visualisations:
  - Incidents par type
  - Time to resolution
  - Severity distribution
  - Services les plus impactés

---

## Technologies Possibles

- **Looker Studio** (ex Google Data Studio): Connexion native Google Sheets
- **Metabase**: Open-source, si migration vers DB
- **Tableau**: Puissant mais payant
- **Grafana**: Pour monitoring technique

---

## Structure

Chaque dashboard aura:
- `[nom]_config.json`: Configuration exportée
- `[nom]_screenshot.png`: Capture d'écran
- `[nom]_README.md`: Documentation du dashboard


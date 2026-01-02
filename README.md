# Sirrius

**Surcouche premium de récupération des créneaux libérés <24h pour cabinets médicaux suisses.**

> Voir [docs/strategy/wedge_v13.md](docs/strategy/wedge_v13.md) pour le positionnement complet.

---

## 📋 Vue d'ensemble

Sirrius automatise la génération de leads via Facebook Ads, leur qualification, et la gestion des abonnements Stripe, avec une régulation intelligente de la capacité de traitement.

### Fonctionnalités Clés

- ✅ Capture automatique de leads Facebook Ads
- ✅ SMS de bienvenue automatisé
- ✅ Gestion des abonnements Stripe
- ✅ Auto-régulation de capacité (pause ads si saturation)
- ✅ Tracking KPIs temps réel
- ✅ Gestion des incidents
- ✅ Dashboard opérationnel
- ✅ Conformité RGPD (opt-out SMS)

---

## 🏗️ Architecture

```
┌─────────────┐
│ Facebook    │
│  Lead Ads   │
└──────┬──────┘
       │ webhook
       ▼
┌─────────────┐      ┌──────────────┐
│  Make.com   │◄────►│ Google       │
│  Scenarios  │      │  Sheets      │
└──────┬──────┘      └──────────────┘
       │
       │ SMS
       ▼
┌─────────────┐      ┌──────────────┐
│  Twilio /   │      │   Stripe     │
│  SMS API    │      │   Payments   │
└─────────────┘      └──────┬───────┘
                            │ webhooks
                            ▼
                     ┌──────────────┐
                     │  Next.js     │
                     │  Web App     │
                     └──────────────┘
```

---

## 📁 Structure du Projet

```
sirrius/
├── contracts/         # Specs webhooks & payloads exemples
├── docs/              # Documentation technique
├── lookers/           # Dashboards & visualisations
├── make-scenarios/    # Exports Make.com
├── schemas/           # JSON Schemas + exemples (6 onglets Sheets)
├── sops/              # Procédures opérationnelles & runbooks
└── web/               # Application Next.js 14
    ├── app/           # App Router (pages)
    ├── components/    # Composants React
    └── lib/           # Utilitaires
```

---

## 🚀 Quick Start

### Prérequis

- Node.js v22+ (voir `.nvmrc`)
- npm ou pnpm
- Compte Stripe (mode test)
- Compte Facebook Ads
- Compte Make.com
- Google Sheets configuré

### Installation

```bash
# 1. Cloner le repo
git clone <repo-url>
cd sirrius

# 2. Utiliser la bonne version Node
nvm use

# 3. Installer l'app web
cd web
npm install

# 4. Configurer les variables d'environnement
cp ../.env.example .env.local
# Éditer .env.local avec vos clés

# 5. Lancer en développement
npm run dev
```

L'application sera accessible sur `http://localhost:3000`

---

## 🔧 Configuration

### Variables d'Environnement

Copier `.env.example` vers `.env.local` et remplir:

- `STRIPE_WEBHOOK_SECRET`: Secret webhook Stripe
- `STRIPE_SECRET_KEY`: Clé API Stripe
- `META_APP_SECRET`: Secret app Facebook
- `DATABASE_URL`: URL de la base de données (si utilisée)

### Google Sheets

Le Google Sheets contient 6 onglets (voir `/schemas/` pour les structures):
1. **Settings**: Configuration globale
2. **Leads**: Leads générés
3. **Capacity**: Suivi capacité quotidienne
4. **Incidents**: Journal des incidents
5. **Ads_Control**: État des campagnes pub
6. **KPI_Daily**: KPIs consolidés

---

## 📖 Documentation

- [SOPs & Runbooks](/sops/README.md) - Procédures opérationnelles
- [Webhooks & Contracts](/contracts/README.md) - Spécifications API
- [Schemas](/schemas/) - Structures de données
- [Make.com Scenarios](/make-scenarios/README.md) - Automatisations
- [Documentation Technique](/docs/README.md) - Docs complètes

---

## 🛠️ Technologies

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **UI Components**: shadcn/ui
- **Payments**: Stripe
- **Ads**: Facebook Lead Ads
- **Automation**: Make.com
- **Data Storage**: Google Sheets (phase initiale) → PostgreSQL (v2)
- **SMS**: Twilio ou similaire

---

## 📊 KPIs Suivis

- Leads reçus / jour
- Taux de conversion (%)
- Coût par lead (CPL)
- Coût par acquisition (CPA)
- ROAS (Return on Ad Spend)
- MRR (Monthly Recurring Revenue)
- Churn rate
- Capacité utilisée (%)

---

## 🚨 Gestion des Incidents

Voir `/sops/README.md` pour:
- 3 KO (incidents critiques) avec procédures
- 3 OK (procédures standards)
- Contacts d'urgence

---

## 🔐 Conformité & Sécurité

- **RGPD**: Gestion opt-out SMS obligatoire
- **Webhooks**: Vérification signature Stripe
- **Secrets**: Utiliser variables d'environnement
- **Data**: Backup quotidien Google Sheets

---

## 📅 Roadmap

### Phase 1 - Fondations (Actuel)
- [x] Structure projet
- [ ] App Next.js fonctionnelle
- [ ] Intégration Stripe webhooks
- [ ] Intégration Facebook Lead Ads
- [ ] Make.com scenarios
- [ ] Dashboard opérationnel

### Phase 2 - Optimisation
- [ ] Migration vers PostgreSQL
- [ ] API REST complète
- [ ] Dashboard analytics avancé
- [ ] Tests automatisés
- [ ] CI/CD

### Phase 3 - Scale
- [ ] Multi-tenant
- [ ] Machine learning (prédiction conversion)
- [ ] A/B testing ads automatique
- [ ] App mobile

---

## 🤝 Contributing

1. Fork le projet
2. Créer une branche (`git checkout -b feature/AmazingFeature`)
3. Commit conventionnel (`git commit -m 'feat: add amazing feature'`)
4. Push (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

### Commits Conventionnels

- `feat:` Nouvelle fonctionnalité
- `fix:` Correction de bug
- `docs:` Documentation
- `style:` Formatage
- `refactor:` Refactoring
- `test:` Tests
- `chore:` Maintenance

---

## 📝 License

[À définir]

---

## 📧 Contact

Pour toute question: [contact@sirrius.com](#)

---

**Made with ❤️ for efficient lead management**

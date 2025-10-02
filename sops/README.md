# SOPs - Standard Operating Procedures

## 📋 Routine Quotidienne

### Matin (9h00)

1. **Vérifier le Dashboard Sirrius**
   - [ ] Consulter les KPIs de la veille (onglet KPI_Daily)
   - [ ] Vérifier le statut des campagnes publicitaires (onglet Ads_Control)
   - [ ] Consulter la capacité du jour (onglet Capacity)

2. **Traiter les Leads de la Nuit**
   - [ ] Ouvrir l'onglet Leads
   - [ ] Filtrer les leads avec status="new"
   - [ ] Vérifier que les SMS ont été envoyés (colonne sms_sent)
   - [ ] Traiter les leads prioritaires (< 12h)

3. **Vérifier les Incidents**
   - [ ] Consulter l'onglet Incidents
   - [ ] Résoudre tous les incidents status="open" ou "investigating"
   - [ ] Documenter les résolutions

4. **Monitoring Stripe**
   - [ ] Vérifier les webhooks reçus dans les dernières 24h
   - [ ] Contrôler les souscriptions actives
   - [ ] Identifier les paiements échoués

### Midi (12h00)

5. **Ajustement Capacité**
   - [ ] Mettre à jour current_leads dans l'onglet Capacity
   - [ ] Si remaining_capacity < 20%, vérifier les campagnes
   - [ ] Ajuster ads_paused si nécessaire

### Après-midi (15h00)

6. **Suivi Commercial**
   - [ ] Contacter les leads status="new" (< 6h)
   - [ ] Mettre à jour status vers "contacted"
   - [ ] Noter les feedbacks dans la colonne notes

### Fin de Journée (18h00)

7. **Consolidation KPIs**
   - [ ] Calculer et remplir l'onglet KPI_Daily
   - [ ] Comparer avec objectifs du jour
   - [ ] Préparer les ajustements pour demain

8. **Backup & Vérifications**
   - [ ] Vérifier que toutes les souscriptions Stripe sont synchronisées
   - [ ] Contrôler les opt-outs SMS (mettre à jour status="opted_out")
   - [ ] Exporter backup Google Sheets

---

## 🚨 Runbook Incidents

### 3 KO (Incidents Critiques)

#### KO #1: Webhook Stripe Non Reçu

**Symptômes:**
- Souscription créée dans Stripe mais pas de lead converti dans Sheets
- Notification manquante de checkout.session.completed

**Actions:**
1. Vérifier les logs Stripe: Dashboard > Développeurs > Webhooks
2. Identifier l'événement manqué et son ID
3. Rejouer manuellement l'événement via Stripe CLI ou API
4. Mettre à jour manuellement l'onglet Leads avec stripe_customer_id
5. Logger dans Incidents (type: webhook_failure, severity: high)

**Prévention:**
- Configurer retry automatique sur Make.com
- Alertes email si webhook > 5min sans réponse

---

#### KO #2: Capacité Dépassée (Leads > Max)

**Symptômes:**
- current_leads > max_leads dans Capacity
- Publicités toujours actives

**Actions:**
1. Pause immédiate des campagnes Facebook via Ads Manager
2. Mettre ads_paused=true dans Ads_Control
3. Marquer status="full" dans Capacity
4. Évaluer les leads en backlog
5. Décision: augmenter capacité OU rejeter leads excédentaires
6. Logger incident (type: capacity_overflow, severity: high)

**Prévention:**
- Automatisation Make.com: pause auto à 90% capacité
- Alertes SMS à 80% capacité

---

#### KO #3: Paiement Stripe Échoué (Récurrent)

**Symptômes:**
- Webhook customer.subscription.updated avec status="past_due"
- Client actif mais non payé

**Actions:**
1. Vérifier l'état dans Stripe Dashboard
2. Identifier le client dans onglet Leads (via stripe_customer_id)
3. Envoyer email de relance (template: paiement_echoue)
4. Si 3 tentatives échouées: suspendre service et mettre status="rejected"
5. Logger incident (type: payment_failed, severity: medium)

**Prévention:**
- Smart Retries activés dans Stripe
- Notifications proactives avant expiration carte

---

### 3 OK (Procédures Standards)

#### OK #1: Ajout Manuel d'un Lead

**Quand:** Lead reçu hors Facebook (téléphone, email direct)

**Procédure:**
1. Ouvrir l'onglet Leads
2. Ajouter nouvelle ligne avec:
   - id: lead_[timestamp]
   - fb_lead_id: "MANUAL"
   - status: "new"
   - Remplir phone, email, first_name, last_name
3. NE PAS envoyer SMS automatique (sms_sent=false)
4. Contacter manuellement
5. Logger dans notes: "Lead manuel - source: [préciser]"

---

#### OK #2: Opt-Out SMS d'un Lead

**Quand:** Lead demande STOP SMS ou signale spam

**Procédure:**
1. Trouver le lead dans l'onglet Leads (via phone)
2. Mettre status="opted_out"
3. Ajouter dans notes: "STOP SMS - date: [date] - raison: [si connue]"
4. **IMPORTANT:** Ne JAMAIS réenvoyer de SMS à ce numéro
5. Retirer de toute liste de diffusion
6. Vérifier conformité RGPD

---

#### OK #3: Conversion Lead → Client

**Quand:** Paiement Stripe réussi (checkout.session.completed)

**Procédure:**
1. Recevoir webhook Stripe via Make.com
2. Extraire customer_id et session_id
3. Mettre à jour onglet Leads:
   - status="converted"
   - stripe_customer_id=[customer_id]
   - conversion_date=[date]
4. Incrémenter leads_converted dans KPI_Daily
5. Calculer MRR ajouté (montant abonnement)
6. Envoyer email de bienvenue client
7. Ajouter aux rapports de succès

---

## 📞 Contacts d'Urgence

- **Stripe Support:** [support.stripe.com](https://support.stripe.com)
- **Facebook Ads Support:** Business Support dans Ads Manager
- **Make.com Support:** support@make.com
- **Développeur Principal:** [À définir]

---

## 🔗 Ressources

- [Google Sheets Sirrius](#)
- [Stripe Dashboard](#)
- [Facebook Ads Manager](#)
- [Make.com Scenarios](#)
- [Documentation API](#)


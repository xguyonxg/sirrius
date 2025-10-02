# Contracts - Webhooks & API Specifications

## 📡 Webhooks Stripe

### Liste des Webhooks Utilisés

#### 1. `checkout.session.completed`

**Déclenchement:** Quand un client finalise son paiement avec succès

**Usage:** Convertir un lead en client, créer l'abonnement dans le système

**Payload:** Voir `stripe_checkout_session_completed.json`

---

#### 2. `customer.subscription.updated`

**Déclenchement:** Quand un abonnement est modifié (plan, statut, etc.)

**Usage:** Mettre à jour le statut de l'abonnement client, gérer les changements de plan

**Payload:** Voir `stripe_subscription_updated.json`

---

#### 3. `customer.subscription.deleted`

**Déclenchement:** Quand un client annule son abonnement

**Usage:** Mettre à jour le statut client, logger le churn, arrêter les services

**Payload:** Voir `stripe_subscription_deleted.json`

---

#### 4. `invoice.payment_failed`

**Déclenchement:** Quand un paiement récurrent échoue

**Usage:** Relancer le client, suspendre le service si échec répété

**Payload:** Voir `stripe_payment_failed.json`

---

## 📲 Webhooks SMS Inbound (À définir)

### IMPORTANT: Gestion des Opt-Outs

**Mots-clés STOP reconnus:**
- STOP
- ARRETER
- ARRET
- DESABONNER
- UNSUBSCRIBE

**Actions requises lors d'un STOP:**
1. ✅ Mettre immédiatement à jour le lead: `status="opted_out"`
2. ✅ Blacklister le numéro dans le provider SMS
3. ✅ Ne JAMAIS réenvoyer de SMS à ce numéro
4. ✅ Confirmer l'opt-out par SMS: "Vous êtes désabonné. Plus de SMS."
5. ✅ Logger dans l'onglet Incidents si nécessaire
6. ✅ Conformité RGPD: documenter la date d'opt-out

**Payload inbound SMS:** Voir `sms_inbound.example.json`

---

## 🔄 Facebook Lead Ads Webhooks

### Webhook `leadgen`

**Déclenchement:** Nouveau lead généré via formulaire Facebook

**Usage:** Créer le lead dans Google Sheets, envoyer SMS de bienvenue

**Payload:** Voir `facebook_leadgen.json`

---

## 📄 Configuration Stripe Webhook

### Endpoint
```
https://your-app.com/api/webhooks/stripe
```

### Événements à activer
- `checkout.session.completed`
- `customer.subscription.created`
- `customer.subscription.updated`
- `customer.subscription.deleted`
- `invoice.payment_succeeded`
- `invoice.payment_failed`

### Sécurité
- Utiliser la signature Stripe pour vérifier l'authenticité
- Variable d'environnement: `STRIPE_WEBHOOK_SECRET`
- Vérifier `stripe-signature` header

---

## 📝 Notes Importantes

1. **Idempotence:** Tous les webhooks doivent être traités de manière idempotente (même événement reçu plusieurs fois = même résultat)

2. **Retry:** Stripe retry automatiquement pendant 3 jours. Assurer une réponse 200 OK rapide.

3. **Order:** Les webhooks peuvent arriver dans le désordre. Utiliser les timestamps.

4. **Testing:** Utiliser Stripe CLI pour tester localement:
   ```bash
   stripe listen --forward-to localhost:3000/api/webhooks/stripe
   stripe trigger checkout.session.completed
   ```


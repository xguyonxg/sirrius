# Security Basics

## Ne jamais committer de secrets

Les fichiers suivants ne doivent **jamais** être committés :

- `.env`, `.env.development`, `.env.staging`, `.env.production`
- Clés privées : `*.pem`, `*.key`, `*.p12`, `*.pfx`
- Certificats : `*.crt`
- Keystores : `*.jks`, `*.keystore`
- Fichiers credentials : `*credentials*.json`, `*secret*.json`

Si un secret est accidentellement committé :
1. Révoquer/rotation immédiate du secret
2. `git rm --cached <fichier>` pour retirer du tracking
3. Vérifier l'historique avec `git log -p -- <fichier>`

## Variables NEXT_PUBLIC_*

**Attention** : Toute variable préfixée `NEXT_PUBLIC_` est exposée côté client.

```
NEXT_PUBLIC_API_URL=...     # Visible dans le bundle JS
STRIPE_SECRET_KEY=...        # Côté serveur uniquement
```

Ne jamais mettre dans `NEXT_PUBLIC_*` :
- Clés API secrètes
- Tokens d'authentification
- Credentials base de données

## Rotation des tokens après Wi-Fi public

Après connexion à un réseau Wi-Fi public (café, aéroport, hôtel) :

1. **Rotation immédiate** des tokens suivants :
   - `STRIPE_SECRET_KEY` et `STRIPE_WEBHOOK_SECRET`
   - `META_ACCESS_TOKEN` et `META_APP_SECRET`
   - `DATABASE_URL` (changer mot de passe)

2. **Vérifier les sessions actives** sur :
   - Dashboard Stripe
   - Meta Business Suite
   - Console Neon/base de données

3. **Mettre à jour** le fichier `.env` local et les variables Vercel/production

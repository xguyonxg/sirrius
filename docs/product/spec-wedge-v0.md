# Spec Wedge V0 — Sirrius

Version : 1.0
Date : 2026-01-03
Statut : Canon

---

## 1. Résumé en 10 secondes

Sirrius détecte les créneaux libérés en dernière minute (<24h) dans l'agenda du cabinet, propose automatiquement ces créneaux aux patients inscrits par SMS, et confirme la réservation par écriture dans l'agenda. Chaque action est tracée avec preuve horodatée.

---

## 2. Non-objectifs V0 (NO GO)

Ce que Sirrius **ne fait pas** en V0 :

- Pas d'agenda : Sirrius ne remplace pas l'agenda du cabinet.
- Pas de rappels vendus : Sirrius n'est pas un service de rappels de rendez-vous.
- Pas de WhatsApp : canal désactivé tant que le consentement auditable n'est pas implémenté.
- Pas d'objectif mesuré hors Max : seul le plan Max peut activer un objectif conditionnel.
- Pas d'intégrations non prouvées : aucune promesse d'intégration avec des logiciels tiers non validés.

---

## 3. Définitions

| Terme | Définition |
|-------|------------|
| **Détection** | Moment où Sirrius identifie un créneau libéré (<24h) via le calendrier (Google/Outlook) ou email forwarding. |
| **Exécution** | Action de Sirrius après détection : création du job, horodatage, planification ou envoi de la vague 1. |
| **Fenêtre** | Plage horaire pendant laquelle les SMS peuvent être envoyés. Par défaut : 08:00–20:00. |
| **Vague** | Groupe de patients contactés simultanément pour un créneau donné. Taille par défaut : 5. |
| **TTL** | Temps de réponse accordé au patient. Démarre à l'envoi du SMS. Variable selon le temps avant le créneau. |
| **Rappel** | Second SMS envoyé à 50% du TTL si le patient n'a pas répondu et si le TTL est ≥ 30 min. |
| **Confirmé** | Créneau attribué : événement écrit dans l'agenda + eventId stocké côté Sirrius. |
| **Indisponible** | Message envoyé au patient qui clique trop tard (créneau déjà attribué). |

---

## 4. Paramètres canoniques V0

### 4.1 SLA (Service Level Agreement)

| Type | Valeur | Description |
|------|--------|-------------|
| SLA externe (promesse) | ≤ 2 minutes | Après détection, Sirrius crée et horodate l'exécution, puis planifie ou envoie la vague 1 selon la fenêtre. Preuve par logs horodatés. |
| Monitoring interne | ≤ 5 minutes | Incidents tolérés mais tracés. Non visible au client. |

### 4.2 Moteur

Le moteur Sirrius fonctionne **24 heures sur 24, 7 jours sur 7**. La détection et l'horodatage sont continus.

### 4.3 Fenêtre d'envoi SMS

| Paramètre | Valeur |
|-----------|--------|
| Fenêtre par défaut | 08:00–20:00, 7 jours/7 (Europe/Zurich) |
| Option | Envoi 24/7 activable sur demande du cabinet |

### 4.4 TTL et envoi

Le TTL (temps de réponse) démarre à l'envoi du SMS, pas à la détection.

### 4.5 Règle hors fenêtre

Si le créneau libéré est détecté **hors fenêtre** :
- L'exécution est horodatée immédiatement.
- L'envoi est planifié pour l'ouverture de la fenêtre suivante.

Si le créneau commence **trop tôt** pour laisser un TTL utile après ouverture de la fenêtre :
- Pas d'envoi.
- Log "trop tard / hors fenêtre".
- Visible au dashboard.

---

## 5. Vagues / TTL / Rappel

### 5.1 Paramètres des vagues

| Paramètre | Valeur par défaut |
|-----------|-------------------|
| Taille de vague | 5 patients |
| Maximum de vagues | 3 |

### 5.2 TTL dynamique

Le TTL varie selon le temps restant avant le créneau :

| Temps avant créneau | TTL |
|---------------------|-----|
| 12–24h | 3h |
| 6–12h | 2h |
| 4–6h | 60–90 min |
| 2–4h | 45–60 min |
| < 2h | 20–30 min |

### 5.3 Rappel

- **1 rappel unique** envoyé à 50% du TTL si le patient n'a pas répondu et si le créneau est toujours disponible.
- **Pas de rappel** si le TTL est inférieur à 30 minutes.

### 5.4 Petite supply (≤ 5 opt-ins)

Si la liste de patients opt-in contient 5 personnes ou moins :
- 1 seule vague contenant tous les patients.
- Pas d'escalade artificielle (pas de vagues multiples avec les mêmes personnes).
- Le manque de supply est visible au dashboard.

---

## 6. Anti-spam et équité

### 6.1 Anti-spam (tous plans)

| Règle | Limite |
|-------|--------|
| Offres par jour par patient | Maximum 1 |
| Offres par semaine (7 jours) par patient | Maximum 3 |
| STOP reçu | Blacklist immédiate, plus aucun SMS |

**But** : protéger l'image du cabinet, réduire les désabonnements, éviter que les mêmes patients monopolisent les créneaux.

### 6.2 Équité (Max uniquement)

Pour le plan Max, des règles d'équité s'appliquent :

| Règle | Description |
|-------|-------------|
| Tri prioritaire | "Moins sollicités d'abord" dans chaque vague. |
| Cooldown post-confirmation | 7–14 jours avant nouvelle sollicitation (configurable). |

**Option future (hors V0)** : pause automatique de 30 jours si abus d'annulations détecté.

---

## 7. Templates SMS canoniques

### 7.1 Messages

Les messages SMS sont sobres, sans données sensibles, avec STOP obligatoire.

**Offre (vague 1)**
```
{CABINET} : un créneau s'est libéré le {DATE} à {HEURE}. Confirmez si cela vous convient : {LIEN}. Merci. Pour ne plus recevoir ce SMS, répondez STOP.
```

**Rappel (50% TTL)**
```
{CABINET} : ce créneau est toujours disponible ({DATE} {HEURE}). Confirmez ici : {LIEN}. Merci. Pour ne plus recevoir ce SMS, répondez STOP.
```

**Indisponible (clic tardif)**
```
{CABINET} : ce créneau n'est plus disponible. Merci. Pour ne plus recevoir ce SMS, répondez STOP.
```

**STOP confirmation**
```
{CABINET} : vous ne recevrez plus de messages. Merci.
```

### 7.2 Règle "Indisponible"

Le message "Indisponible" est envoyé **uniquement** aux patients qui cliquent sur le lien alors que le créneau a déjà été attribué. Ce n'est pas un broadcast à tous les patients de la vague.

---

## 8. Confirmation et calendrier

### 8.1 Définition de "Confirmé"

Un créneau est **confirmé** si et seulement si :
1. Un événement a été écrit dans l'agenda du cabinet (Google Calendar ou Outlook).
2. L'eventId retourné par l'API est stocké côté Sirrius.

### 8.2 Échec d'écriture

Si l'écriture dans l'agenda échoue :
- Le créneau n'est **pas confirmé**.
- L'échec est logué.
- Une tentative de retry est effectuée.
- Si l'échec persiste, clôture propre sans fausse confirmation.

### 8.3 Pré-requis onboarding

L'accès en écriture au calendrier (Calendar write) est **obligatoire dès le plan Start**.
Si l'accès n'est pas accordé → **NO GO onboarding**.

### 8.4 Format de l'événement

| Paramètre | Valeur |
|-----------|--------|
| Titre | "Réservé" ou "Rendez-vous (réservé)" |
| Timezone | Europe/Zurich |

### 8.5 Stockage de l'identifiant Sirrius

L'identifiant Sirrius est stocké en métadonnée technique non visible lorsque le fournisseur d'agenda le permet, afin de ne laisser aucune information sensible dans le calendrier.

Si la métadonnée non visible n'est pas disponible, utiliser le champ le moins exposé possible (jamais le titre), sans donnée sensible.

---

## 9. Différences par plan (V0)

| Plan | Inclus V0 |
|------|-----------|
| **Start** | Moteur + exécution + preuve horodatée. Pas d'objectif mesuré. |
| **Pro** | Moteur + exécution + preuve horodatée + anti-spam. Pas d'objectif mesuré. |
| **Max** | Tout Pro + équité (tri + cooldown) + règles avancées + 2–3 scénarios messages + objectif mesuré (si éligible). |

**Note** : l'objectif mesuré Max est conditionnel. Il nécessite signal fiable + 30 opt-ins minimum + process de confirmation opérationnel. Voir engagements_v13.md pour les détails.

---

## 10. Preuve horodatée et rétention

### 10.1 Événements logués

Chaque action est tracée avec horodatage :

- Détection du créneau libéré
- Création du job d'exécution
- Envoi de chaque SMS (vague, rappel, indisponible, STOP)
- Clic patient sur le lien
- Confirmation (écriture agenda réussie)
- Échec d'écriture agenda
- Expiration TTL
- Clôture du créneau

### 10.2 Reporting

Un dashboard affiche les métriques principales :
- Créneaux détectés / proposés / confirmés
- Délai moyen de confirmation
- Taux de STOP
- Créneaux "trop tard / hors fenêtre"

### 10.3 Rétention et export

| Paramètre | Valeur |
|-----------|--------|
| Rétention par défaut | 12 mois |
| Export | Disponible sur demande |
| Suppression | Sur demande, en conservant le minimum légal nécessaire |

---

## 11. Exclusions et cas limites

Les situations suivantes ne comptent pas dans le calcul de performance (si objectif activé) :

| Exclusion | Raison |
|-----------|--------|
| Jours fermés | Vacances, jours fériés, fermetures exceptionnelles du cabinet. |
| Force majeure | Panne opérateur télécom, incident technique majeur hors contrôle. |
| Créneau repris manuellement | Le cabinet a rempli le créneau avant exécution Sirrius. |
| Créneau déplacé | Le créneau a été modifié après détection. |
| Volume insuffisant | Moins de 10 créneaux libérés sur la période de mesure. |
| Supply insuffisante | Moins de 30 opt-ins actifs (objectif non activable). |

---

## Acceptance Checklist

| # | Critère | Statut |
|---|---------|--------|
| 1 | Résumé wedge clair (10 sec) | PASS |
| 2 | Non-objectifs V0 listés | PASS |
| 3 | Définitions complètes | PASS |
| 4 | SLA externe ≤ 2 min documenté | PASS |
| 5 | Monitoring interne ≤ 5 min documenté | PASS |
| 6 | Fenêtre 08:00–20:00 + option 24/7 | PASS |
| 7 | TTL démarre à l'envoi | PASS |
| 8 | Règle hors fenêtre / trop tard | PASS |
| 9 | TTL dynamique complet (5 paliers) | PASS |
| 10 | Rappel à 50% TTL, pas si < 30 min | PASS |
| 11 | Petite supply ≤ 5 opt-ins documentée | PASS |
| 12 | Anti-spam : 1/jour, 3/7 jours | PASS |
| 13 | STOP = blacklist immédiate | PASS |
| 14 | Équité Max : tri + cooldown | PASS |
| 15 | Templates SMS exacts (4 messages) | PASS |
| 16 | "Indisponible" au clic tardif uniquement | PASS |
| 17 | Confirmé = écriture agenda + eventId | PASS |
| 18 | Write fail = pas confirmé + log | PASS |
| 19 | Sirrius-ID en métadonnée non visible | PASS |
| 20 | Logs + rétention 12 mois + export | PASS |

**VERDICT : PASS**

---

## Notes d'implémentation (technique)

> Ces notes sont à usage interne et ne font pas partie de la communication client.

- Moteur : cron ou event-driven selon infrastructure.
- Calendar API : Google Calendar API v3, Microsoft Graph API.
- SMS : Twilio ou équivalent, avec gestion STOP native.
- Stockage eventId : champ dédié en base, lié au slot.
- Retry écriture agenda : max 3 tentatives avec backoff exponentiel.

---

*Document canonique. Toute modification doit passer par le processus de revue et respecter le DOC_DEFINITION_OF_DONE.*

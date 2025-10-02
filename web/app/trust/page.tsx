import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function TrustPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-4xl font-bold">Trust & Sécurité</h1>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>🔒 Sécurité des Paiements</CardTitle>
            <CardDescription>
              Vos paiements sont 100% sécurisés
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Nous utilisons <strong>Stripe</strong>, le leader mondial du
              paiement en ligne, pour gérer tous vos abonnements et paiements.
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Certification PCI-DSS Level 1</strong> (plus haut niveau
                de sécurité)
              </li>
              <li>
                Vos coordonnées bancaires ne transitent jamais par nos serveurs
              </li>
              <li>Chiffrement SSL/TLS de bout en bout</li>
              <li>Authentification 3D Secure pour les paiements</li>
              <li>Détection automatique de la fraude</li>
            </ul>
            <div className="mt-4 rounded-lg border border-green-200 bg-green-50 p-4">
              <p className="font-semibold text-green-800">
                ✓ Nous ne stockons JAMAIS vos coordonnées bancaires
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>🛡️ Protection des Données</CardTitle>
            <CardDescription>Conformité RGPD totale</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="list-disc space-y-2 pl-6">
              <li>Hébergement des données en Union Européenne</li>
              <li>Respect strict du RGPD (Règlement Général sur la Protection des Données)</li>
              <li>Opt-out SMS immédiat sur simple demande (répondez "STOP")</li>
              <li>Droit à l'effacement de vos données à tout moment</li>
              <li>Accès, rectification et portabilité de vos données</li>
              <li>Audit de sécurité régulier par des tiers</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>📊 Transparence</CardTitle>
            <CardDescription>
              Nous sommes transparents sur notre fonctionnement
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div>
                <h3 className="mb-2 font-semibold">
                  Comment nous utilisons vos données :
                </h3>
                <ul className="list-disc space-y-1 pl-6 text-sm">
                  <li>Traitement de vos demandes de contact</li>
                  <li>Envoi de SMS de bienvenue (avec opt-out facile)</li>
                  <li>Gestion de votre abonnement et facturation</li>
                  <li>
                    Amélioration de nos services (analyse anonymisée des KPIs)
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 font-semibold">
                  Ce que nous ne faisons JAMAIS :
                </h3>
                <ul className="list-disc space-y-1 pl-6 text-sm">
                  <li>Vendre vos données à des tiers</li>
                  <li>Partager votre numéro de téléphone</li>
                  <li>Envoyer des SMS après un opt-out</li>
                  <li>
                    Utiliser vos données pour d'autres services sans votre
                    consentement
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>🔐 Webhooks et Intégrations</CardTitle>
            <CardDescription>
              Sécurité des échanges avec nos partenaires
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Toutes nos intégrations (Stripe, Facebook, SMS) utilisent les
              meilleures pratiques de sécurité :
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Vérification de signature</strong> pour tous les
                webhooks entrants
              </li>
              <li>
                <strong>Secrets chiffrés</strong> stockés dans des variables
                d'environnement sécurisées
              </li>
              <li>
                <strong>HTTPS obligatoire</strong> pour tous les endpoints
              </li>
              <li>
                <strong>Rate limiting</strong> pour prévenir les abus
              </li>
              <li>
                <strong>Logs d'audit</strong> pour tracer tous les événements
                sensibles
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>🚨 Gestion des Incidents</CardTitle>
            <CardDescription>
              Comment nous gérons les problèmes de sécurité
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Monitoring 24/7 de tous nos systèmes critiques
              </li>
              <li>
                Procédures documentées de gestion d'incidents (voir /sops/)
              </li>
              <li>
                Notification immédiate en cas de faille de sécurité (conformément
                au RGPD : 72h max)
              </li>
              <li>Backups quotidiens chiffrés avec rétention 30 jours</li>
              <li>Plan de reprise d'activité (DRP) testé régulièrement</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>📞 Signaler un Problème</CardTitle>
            <CardDescription>
              Vous avez détecté une faille ou un problème ?
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Nous prenons la sécurité très au sérieux. Si vous découvrez une
              vulnérabilité ou un problème de sécurité :
            </p>
            <div className="rounded-lg bg-muted p-4">
              <p className="mb-2 font-semibold">Contactez-nous immédiatement :</p>
              <ul className="space-y-1 text-sm">
                <li>
                  <strong>Email sécurisé :</strong> security@sirrius.com
                </li>
                <li>
                  <strong>Réponse garantie :</strong> sous 24h
                </li>
              </ul>
            </div>
            <p className="text-sm text-muted-foreground">
              Nous sommes reconnaissants envers les chercheurs en sécurité qui
              signalent de manière responsable les vulnérabilités.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}


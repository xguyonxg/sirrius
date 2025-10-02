import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function StatusPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-4xl font-bold">Status Système</h1>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Statut Global</CardTitle>
            <CardDescription>
              État actuel de tous les services Sirrius
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-3">
              <div className="h-4 w-4 rounded-full bg-green-500"></div>
              <span className="text-lg font-semibold text-green-700">
                Tous les systèmes opérationnels
              </span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Dernière mise à jour : 2 octobre 2025, 14:30 UTC
            </p>
          </CardContent>
        </Card>

        <div className="mb-6 space-y-4">
          <h2 className="text-2xl font-semibold">Services</h2>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Application Web</CardTitle>
                  <CardDescription>Next.js Frontend</CardDescription>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  <span className="text-sm font-medium text-green-700">
                    Opérationnel
                  </span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Uptime (30j)</span>
                  <span className="font-medium">99.98%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">
                    Temps de réponse moyen
                  </span>
                  <span className="font-medium">142ms</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Webhooks Stripe</CardTitle>
                  <CardDescription>Paiements et abonnements</CardDescription>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  <span className="text-sm font-medium text-green-700">
                    Opérationnel
                  </span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">
                    Dernière réception
                  </span>
                  <span className="font-medium">Il y a 3 minutes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">
                    Événements traités (24h)
                  </span>
                  <span className="font-medium">142</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Facebook Lead Ads</CardTitle>
                  <CardDescription>Capture de leads</CardDescription>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  <span className="text-sm font-medium text-green-700">
                    Opérationnel
                  </span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">
                    Dernière synchronisation
                  </span>
                  <span className="font-medium">Il y a 5 minutes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">
                    Leads reçus (24h)
                  </span>
                  <span className="font-medium">32</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>SMS Gateway</CardTitle>
                  <CardDescription>Notifications SMS</CardDescription>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  <span className="text-sm font-medium text-green-700">
                    Opérationnel
                  </span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Dernier SMS envoyé</span>
                  <span className="font-medium">Il y a 8 minutes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">
                    Taux de livraison (24h)
                  </span>
                  <span className="font-medium">99.2%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Google Sheets Sync</CardTitle>
                  <CardDescription>
                    Synchronisation base de données
                  </CardDescription>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  <span className="text-sm font-medium text-green-700">
                    Opérationnel
                  </span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Dernière écriture</span>
                  <span className="font-medium">Il y a 2 minutes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">
                    Opérations (24h)
                  </span>
                  <span className="font-medium">1,247</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Make.com Scenarios</CardTitle>
                  <CardDescription>Automatisations</CardDescription>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  <span className="text-sm font-medium text-green-700">
                    Opérationnel
                  </span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">
                    Scénarios actifs
                  </span>
                  <span className="font-medium">5 / 5</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">
                    Exécutions (24h)
                  </span>
                  <span className="font-medium">987</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Incidents Récents</CardTitle>
            <CardDescription>
              Historique des 7 derniers jours
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Aucun incident signalé ces 7 derniers jours. 🎉
            </p>
          </CardContent>
        </Card>

        <div className="mt-6 text-center text-sm text-muted-foreground">
          <p>
            Besoin d'aide ? Contactez-nous à{' '}
            <a href="mailto:support@sirrius.com" className="underline">
              support@sirrius.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}


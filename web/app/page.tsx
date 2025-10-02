import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-5xl font-bold">
          Bienvenue sur <span className="text-primary">Sirrius</span>
        </h1>
        <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
          Système intelligent de gestion de leads et d'abonnements avec
          auto-régulation de capacité
        </p>
      </div>

      <div className="mb-12 grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>📱 Capture Automatique</CardTitle>
            <CardDescription>
              Intégration Facebook Ads et SMS automatisé
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Récupérez vos leads en temps réel depuis vos campagnes Facebook
              et contactez-les immédiatement par SMS.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>💳 Paiements Stripe</CardTitle>
            <CardDescription>
              Gestion complète des abonnements
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Webhooks Stripe intégrés pour un suivi en temps réel des
              souscriptions, paiements et churns.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>🎯 Auto-Régulation</CardTitle>
            <CardDescription>
              Contrôle intelligent de la capacité
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Les publicités se mettent automatiquement en pause quand vous
              atteignez votre capacité maximale.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle>📊 KPIs en Temps Réel</CardTitle>
            <CardDescription>
              Suivez vos performances au quotidien
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-4">
              <div className="rounded-lg border p-4">
                <p className="text-sm text-muted-foreground">Leads Aujourd'hui</p>
                <p className="text-3xl font-bold">32</p>
              </div>
              <div className="rounded-lg border p-4">
                <p className="text-sm text-muted-foreground">Taux Conversion</p>
                <p className="text-3xl font-bold">12.5%</p>
              </div>
              <div className="rounded-lg border p-4">
                <p className="text-sm text-muted-foreground">Coût par Lead</p>
                <p className="text-3xl font-bold">2.99€</p>
              </div>
              <div className="rounded-lg border p-4">
                <p className="text-sm text-muted-foreground">ROI</p>
                <p className="text-3xl font-bold text-green-600">167%</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="text-center">
        <Button size="lg" className="mr-4">
          Voir le Dashboard
        </Button>
        <Button size="lg" variant="outline">
          Documentation
        </Button>
      </div>
    </div>
  );
}


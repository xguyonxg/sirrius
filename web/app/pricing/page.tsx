import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function PricingPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold">Tarification</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Récupération automatisée des créneaux libérés sous 24h.
            SLA d'exécution et preuve d'action.
          </p>
        </div>

        {/* Start */}
        <Card className="mb-8 border-2 border-primary">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl">Start</CardTitle>
                <CardDescription className="mt-1">
                  Activation 60 jours (non renouvelable) — Mise en service en conditions réelles
                </CardDescription>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold">240 CHF</p>
                <p className="text-sm text-muted-foreground">par mois pendant 2 mois</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="mb-3 font-semibold">Livrables inclus</h3>
              <ul className="grid gap-2 text-sm md:grid-cols-2">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  Signal calendrier (Google/Outlook) ou email forwarding
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  Séquence SMS automatisée + gestion STOP
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  Lock dur (1 gagnant par créneau)
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  Audit trail complet (preuve d'exécution)
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  Dashboard wedge minimal
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  Rapport hebdomadaire
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  Kit supply (QR/lien + scripts)
                </li>
              </ul>
            </div>

            <div className="rounded-lg bg-muted p-3 text-xs text-muted-foreground">
              <strong>Scope strict :</strong> 1 site, jusqu'à 2 praticiens, 1 séquence standard.
              Aucune personnalisation. Aucun objectif de taux.
            </div>
          </CardContent>
        </Card>

        {/* Plans grid */}
        <div className="mb-8 grid gap-6 md:grid-cols-2">
          {/* Pro */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Pro</CardTitle>
              <CardDescription>Automatisation fiable, preuve incluse.</CardDescription>
              <div className="pt-2">
                <p className="text-3xl font-bold">290 CHF</p>
                <p className="text-sm text-muted-foreground">par mois / site</p>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  Créneau libéré &lt;24h → offres SMS 24/7
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  1 créneau = 1 confirmation (réservation unique)
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  Preuve horodatée + reporting
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  Réglages simples (horaires, exceptions de base)
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  Jusqu'à 2 praticiens (max 3)
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Max */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-xl">Max</CardTitle>
              <CardDescription>Contrôle avancé + objectif mesuré (si éligible).</CardDescription>
              <div className="pt-2">
                <p className="text-3xl font-bold">590 CHF</p>
                <p className="text-sm text-muted-foreground">par mois / site</p>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  Tout Pro inclus
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  2–3 scénarios de messages
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  Répartition équitable (évite de solliciter toujours les mêmes)
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  Exceptions avancées + pause entre messages
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  Tableau de bord complet + support prioritaire
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  Jusqu'à 5 praticiens
                </li>
              </ul>

              <div className="space-y-2 rounded-lg bg-muted p-3 text-xs">
                <p>
                  <strong>Prérequis :</strong> signal fiable, supply active (opt-ins), processus de confirmation en place.
                </p>
                <p>
                  <strong>Exclusions :</strong> jours fermés, force majeure, créneau repris manuellement, volume insuffisant.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Add-ons */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-lg">Extensions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 text-sm">
              <div className="flex items-center justify-between rounded-lg border p-4">
                <div>
                  <span className="font-medium">Praticien supplémentaire (Pro)</span>
                  <p className="text-xs text-muted-foreground">Max 1 add-on sur Pro (3 praticiens max)</p>
                </div>
                <span className="font-semibold">+150 CHF/mois</span>
              </div>
              <div className="flex items-center justify-between rounded-lg border p-4">
                <div>
                  <span className="font-medium">Praticien supplémentaire (Max)</span>
                  <p className="text-xs text-muted-foreground">Au-delà des 5 praticiens inclus</p>
                </div>
                <span className="font-semibold">+120 CHF/mois</span>
              </div>
              <div className="flex items-center justify-between rounded-lg border p-4">
                <span className="font-medium">Site supplémentaire</span>
                <span className="font-semibold">+300 CHF/mois</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Conditions */}
        <div className="rounded-lg border bg-muted/50 p-6 text-sm text-muted-foreground">
          <h3 className="mb-4 font-semibold text-foreground">Conditions générales</h3>
          <ul className="space-y-3">
            <li>
              <strong>Jours d'ouverture :</strong> toutes les fenêtres d'évaluation sont exprimées en jours d'ouverture du cabinet. Les jours fermés (week-ends, congés, fermetures exceptionnelles) sont exclus du décompte.
            </li>
            <li>
              <strong>Échantillon insuffisant :</strong> si le volume de créneaux détectés est insuffisant pour une évaluation fiable, la fenêtre est prolongée jusqu'à atteindre le minimum requis, plafonnée à +60 jours d'ouverture.
            </li>
            <li>
              <strong>Engagement d'exécution :</strong> si Sirrius ne respecte pas ses engagements d'exécution et de traçabilité (SLA après détection, logs manquants), Sirrius prolonge la période de service de 2 mois à ses frais (une seule fois).
            </li>
            <li>
              <strong>Max — objectif conditionnel :</strong> si l'objectif conditionnel est activé et non atteint malgré le respect des conditions (signal, supply, process), Sirrius prolonge la fenêtre de mesure à ses frais jusqu'à +60 jours d'ouverture supplémentaires (une seule fois).
            </li>
          </ul>
        </div>

        {/* Footer note */}
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>
            Tous les prix sont en CHF, hors taxes applicables.
            Facturation mensuelle. Résiliation possible à chaque échéance.
          </p>
        </div>
      </div>
    </div>
  );
}

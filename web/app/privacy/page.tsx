import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-4xl font-bold">
          Politique de Confidentialité
        </h1>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>1. Collecte des Données</CardTitle>
            <CardDescription>
              Quelles données nous collectons et pourquoi
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Dans le cadre de notre service Sirrius, nous collectons les
              données suivantes :
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Informations de contact :</strong> nom, prénom, email,
                numéro de téléphone, code postal
              </li>
              <li>
                <strong>Données de navigation :</strong> adresse IP, cookies,
                pages visitées
              </li>
              <li>
                <strong>Données de paiement :</strong> gérées exclusivement par
                Stripe (nous ne stockons pas vos coordonnées bancaires)
              </li>
              <li>
                <strong>Données publicitaires :</strong> ID de campagne
                Facebook, source du lead
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>2. Utilisation des Données</CardTitle>
            <CardDescription>Comment nous utilisons vos données</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="list-disc space-y-2 pl-6">
              <li>Traiter et qualifier vos demandes de contact</li>
              <li>Vous envoyer des SMS de bienvenue et de suivi</li>
              <li>Gérer vos abonnements et paiements via Stripe</li>
              <li>Améliorer nos services et nos campagnes publicitaires</li>
              <li>
                Respecter nos obligations légales et réglementaires (RGPD)
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>3. Opt-Out SMS</CardTitle>
            <CardDescription>
              Comment vous désabonner des communications
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Vous pouvez vous désabonner de nos communications SMS à tout
              moment :
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Répondez "STOP"</strong> à n'importe quel SMS que vous
                recevez
              </li>
              <li>Votre numéro sera immédiatement retiré de notre liste</li>
              <li>Vous recevrez un SMS de confirmation</li>
              <li>Nous ne vous enverrons plus jamais de SMS</li>
            </ul>
            <div className="mt-4 rounded-lg border border-yellow-200 bg-yellow-50 p-4">
              <p className="font-semibold">⚠️ Important</p>
              <p className="text-sm">
                Conformément au RGPD, votre opt-out est définitif et
                irréversible sans nouvelle autorisation explicite de votre part.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>4. Vos Droits RGPD</CardTitle>
            <CardDescription>
              Droits d'accès, rectification et suppression
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Conformément au RGPD, vous disposez des droits suivants :</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Droit d'accès :</strong> obtenir une copie de vos
                données
              </li>
              <li>
                <strong>Droit de rectification :</strong> corriger vos données
                inexactes
              </li>
              <li>
                <strong>Droit à l'effacement :</strong> supprimer vos données
                (droit à l'oubli)
              </li>
              <li>
                <strong>Droit à la portabilité :</strong> recevoir vos données
                dans un format lisible
              </li>
              <li>
                <strong>Droit d'opposition :</strong> refuser le traitement de
                vos données
              </li>
            </ul>
            <p className="mt-4">
              Pour exercer ces droits, contactez-nous à :{' '}
              <strong>privacy@sirrius.com</strong>
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>5. Sécurité et Conservation</CardTitle>
            <CardDescription>
              Comment nous protégeons vos données
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="list-disc space-y-2 pl-6">
              <li>Chiffrement des données sensibles (HTTPS, TLS)</li>
              <li>Hébergement sécurisé conforme RGPD</li>
              <li>
                Conservation des données limitée à la durée nécessaire (max 3
                ans après dernière interaction)
              </li>
              <li>Accès restreint aux données (principe du moindre privilège)</li>
              <li>Backups quotidiens sécurisés</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>6. Contact</CardTitle>
            <CardDescription>
              Des questions sur vos données ?
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Pour toute question concernant cette politique de confidentialité
              ou vos données personnelles :
            </p>
            <ul className="space-y-2">
              <li>
                <strong>Email :</strong> privacy@sirrius.com
              </li>
              <li>
                <strong>DPO :</strong> dpo@sirrius.com
              </li>
              <li>
                <strong>Dernière mise à jour :</strong> 2 octobre 2025
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}


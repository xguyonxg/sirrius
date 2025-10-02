import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sirrius - Gestion Intelligente de Leads',
  description:
    'Système intelligent de gestion de leads et d\'abonnements avec auto-régulation de capacité',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <footer className="border-t py-6">
          <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
            <p>© 2025 Sirrius. Tous droits réservés.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}


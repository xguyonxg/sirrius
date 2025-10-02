import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="border-b bg-background">
      <div className="container mx-auto flex h-16 items-center px-4">
        <Link href="/" className="mr-8 flex items-center space-x-2">
          <span className="text-2xl font-bold">🌟 Sirrius</span>
        </Link>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center space-x-6">
            <Link
              href="/"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Accueil
            </Link>
            <Link
              href="/status"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Status
            </Link>
            <Link
              href="/trust"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Trust
            </Link>
            <Link
              href="/privacy"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Confidentialité
            </Link>
          </nav>
        </div>
      </div>
    </nav>
  );
}


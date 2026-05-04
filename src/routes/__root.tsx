import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Lebanon Fund — Global Crypto Access to Lebanese Markets" },
      { name: "description", content: "LFUND is a Solana-based utility & governance token mobilizing diaspora capital into transparent, blockchain-auditable Lebanon-focused opportunities." },
      { property: "og:title", content: "Lebanon Fund — Global Crypto Access to Lebanese Markets" },
      { property: "og:description", content: "LFUND is a Solana-based utility & governance token mobilizing diaspora capital into transparent, blockchain-auditable Lebanon-focused opportunities." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Lebanon Fund — Global Crypto Access to Lebanese Markets" },
      { name: "twitter:description", content: "LFUND is a Solana-based utility & governance token mobilizing diaspora capital into transparent, blockchain-auditable Lebanon-focused opportunities." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/501a5aa2-6582-485f-b672-14eb0bfeaff4/id-preview-ec36da33--ac97595e-7643-4c78-9921-e9abdfa1dea6.lovable.app-1777179152107.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/501a5aa2-6582-485f-b672-14eb0bfeaff4/id-preview-ec36da33--ac97595e-7643-4c78-9921-e9abdfa1dea6.lovable.app-1777179152107.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}

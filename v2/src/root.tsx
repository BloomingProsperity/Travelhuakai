import { useState, type ReactNode } from "react";
import { Links, Meta, Outlet, Scripts, ScrollRestoration, useLocation } from "react-router";
import LanguageProvider, { htmlLangFor, readInitialLanguage } from "./store/LanguageProvider";
import AtlasProvider from "./store/AtlasProvider";
import SiteHeader from "./components/layout/SiteHeader";
import SiteFooter from "./components/layout/SiteFooter";
import { absoluteUrl } from "./lib/jsonLd";
import "./styles/globals.css";

const SITE_NAME = "Travel China";
const SOCIAL_IMAGE = absoluteUrl("/assets/china-map-gs2022-4309.jpg");

function currentHref(pathname: string, search: string, hash: string): string {
  const path = `${pathname}${search}${hash}` || "/";
  return absoluteUrl(path);
}

export function Layout({ children }: { children: ReactNode }) {
  const location = useLocation();
  const [initialLang] = useState(readInitialLanguage);
  const href = currentHref(location.pathname, location.search, location.hash);

  return (
    <html lang={htmlLangFor(initialLang)} suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>旅行中国</title>
        <link rel="alternate" hrefLang="x-default" href={href} />
        <link rel="alternate" hrefLang="en" href={href} />
        <link rel="alternate" hrefLang="zh-Hans" href={href} />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={SOCIAL_IMAGE} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={SOCIAL_IMAGE} />
        <link
          rel="icon"
          href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='10' fill='%2318201d'/%3E%3Ctext x='32' y='42' text-anchor='middle' font-size='34' fill='white'%3E%E6%97%85%3C/text%3E%3C/svg%3E"
        />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AtlasProvider>
        <SiteHeader />
        <Outlet />
        <SiteFooter />
      </AtlasProvider>
    </LanguageProvider>
  );
}

import type { Metadata, Viewport } from "next";
import { Archivo, Hanken_Grotesk } from "next/font/google";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { JsonLd } from "@/components/seo/json-ld";
import { site } from "@/content/site";
import { organizationJsonLd } from "@/lib/seo";

import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Byggföretag i Stockholm – LBC Entreprenad",
    template: `%s | ${site.name}`,
  },
  description:
    "LBC Entreprenad är ett byggföretag i Stockholm som utför nybyggnation, renovering, fasad- och putsarbeten, måleri, kakel, sten- och betongarbeten samt trädgårdsanläggning. Begär kostnadsfri offert.",
  applicationName: site.name,
  formatDetection: { telephone: false },
  openGraph: {
    type: "website",
    locale: "sv_SE",
    siteName: site.name,
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#f2f0ea",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="sv" className={`${archivo.variable} ${hanken.variable}`}>
      <body>
        <a
          href="#innehall"
          className="fixed top-3 left-3 z-[60] -translate-y-24 bg-graphite px-5 py-3 text-sm font-semibold text-limestone transition-transform focus:translate-y-0"
        >
          Hoppa till innehållet
        </a>
        <SiteHeader />
        <main id="innehall" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <SiteFooter />
        <JsonLd data={organizationJsonLd()} />
      </body>
    </html>
  );
}

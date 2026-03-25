import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { brand } from "@/config/brand";
import { getOrganizationSchema, getWebSiteSchema } from "@/lib/schema";

import "./globals.css";

const COLOR_RE = /^(oklch\([^)]+\)|#[\da-fA-F]{3,8}|rgb\(\d{1,3},\s*\d{1,3},\s*\d{1,3}\)|hsl\(\d{1,3},\s*\d{1,3}%?,\s*\d{1,3}%?\))$/;

function sanitizeColor(value: string, fallback: string): string {
  return COLOR_RE.test(value.trim()) ? value.trim() : fallback;
}

function resolveOgImage(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  const base = brand.website.replace(/\/$/, "");
  return `${base}${path.startsWith("/") ? "" : "/"}${path}`;
}

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const geist = Geist({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-mono-family",
  subsets: ["latin"],
  display: "swap",
});

function getMetadataBase() {
  try {
    return new URL(brand.website);
  } catch {
    return new URL("https://example.com");
  }
}

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: {
    default: `${brand.name} — South Florida's Commanding HVAC Authority`,
    template: `%s | ${brand.name} — South Florida HVAC Experts`,
  },
  description: `${brand.yearsInBusiness} years of chief-level AC repair, installation & maintenance in Boca Raton & Fort Lauderdale. 24/7 emergency service, upfront pricing.`,
  openGraph: {
    title: `${brand.name} — South Florida's Commanding HVAC Authority`,
    description: brand.tagline,
    type: "website",
    siteName: brand.name,
    url: brand.website,
    locale: "en_US",
    images: [
      {
        url: resolveOgImage(brand.images.hero),
        width: 1200,
        height: 630,
        alt: `${brand.name} hero image`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: brand.name,
    description: brand.tagline,
    images: [resolveOgImage(brand.images.hero)],
  },
  alternates: {
    canonical: brand.website,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f7f8" },
    { media: "(prefers-color-scheme: dark)", color: "#f5f7f8" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bricolageGrotesque.variable} ${geist.variable} ${geistMono.variable}`}
    >
      <head>
        <style
          dangerouslySetInnerHTML={{
            __html: `:root { --theme-primary: ${sanitizeColor(brand.theme.primary, "oklch(0.62 0.04 200)")}; --theme-accent: ${sanitizeColor(brand.theme.accent, "oklch(0.66 0.12 60)")}; }`,
          }}
        />
      </head>
      <body className="min-h-screen bg-background pb-20 font-sans text-foreground antialiased md:pb-0">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary"
        >
          Skip to main content
        </a>
        {children}
        <Analytics />
        <SpeedInsights />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getOrganizationSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getWebSiteSchema()),
          }}
        />
      </body>
    </html>
  );
}

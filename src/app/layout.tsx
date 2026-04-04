import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SITE } from "@/lib/constants";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} | Expert HVAC Services in Fort Lauderdale, FL`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords:
    "AC repair Fort Lauderdale, HVAC services, air conditioning repair, AC installation, emergency AC repair, duct cleaning, Fort Lauderdale FL, Broward County HVAC",
  openGraph: {
    title: `${SITE.name} - Professional HVAC Services`,
    description: SITE.description,
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.name,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    telephone: SITE.phone,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.state,
      postalCode: SITE.address.zip,
      addressCountry: "US",
    },
    areaServed: SITE.serviceAreas.map((area) => ({
      "@type": "City",
      name: `${area}, FL`,
    })),
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    name: SITE.name,
    url: SITE.url,
    telephone: SITE.phone,
    email: SITE.email,
    image: `${SITE.url}/images/hero/hvac-hero.jpg`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.state,
      postalCode: SITE.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.lat,
      longitude: SITE.geo.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "17:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "387",
      reviewCount: "312",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "HVAC Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "AC Repair" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "AC Installation" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "HVAC Maintenance" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Emergency AC Service" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Duct Cleaning" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Thermostat Installation" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Indoor Air Quality" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial HVAC" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Heat Pump Services" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "AC Refrigerant Recharge" } },
      ],
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

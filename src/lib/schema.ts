import { brand } from "@/config/brand";
import { services } from "@/config/services";
import { locations, type LocationData } from "@/config/locations";

function baseUrl() {
  return brand.website.replace(/\/$/, "");
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${baseUrl()}/#organization`,
    name: brand.name,
    legalName: brand.legalName,
    url: brand.website,
    telephone: locations[0].phone,
    email: brand.email,
    description: brand.tagline,
    logo: `${baseUrl()}/images/logo.png`,
    image: `${baseUrl()}${brand.images.hero}`,
    foundingDate: `${new Date().getFullYear() - brand.yearsInBusiness}`,
    founders: [
      {
        "@type": "Person",
        name: "HVAC Repair Chief Team",
        jobTitle: "Founder",
      },
    ],
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 15,
      maxValue: 30,
    },
    knowsAbout: [
      "HVAC system repair and maintenance",
      "Air conditioning installation",
      "Heat pump diagnostics",
      "Ductwork cleaning and sealing",
      "Indoor air quality",
      "Energy-efficient cooling systems",
      "Refrigerant management",
      "Commercial and residential HVAC",
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "license",
        name: "Florida HVAC Contractor License",
        recognizedBy: {
          "@type": "Organization",
          name: "Florida Department of Business and Professional Regulation",
        },
        identifier: "CAC1816259",
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "certification",
        name: "EPA Section 608 Universal Certification",
        recognizedBy: {
          "@type": "Organization",
          name: "United States Environmental Protection Agency",
        },
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "certification",
        name: "NATE Certified HVAC Technicians",
        recognizedBy: {
          "@type": "Organization",
          name: "North American Technician Excellence",
        },
      },
    ],
    award: [
      "BBB A+ Accredited Business",
      "Carrier Factory Authorized Dealer",
      "Angi Super Service Award",
    ],
    memberOf: [
      {
        "@type": "Organization",
        name: "Air Conditioning Contractors of America (ACCA)",
      },
      {
        "@type": "Organization",
        name: "North American Technician Excellence (NATE)",
      },
      {
        "@type": "Organization",
        name: "Better Business Bureau",
      },
    ],
    areaServed: locations.map((loc) => ({
      "@type": "City",
      name: loc.city,
      "@id": `https://www.wikidata.org/wiki/${loc.city === "Boca Raton" ? "Q201516" : "Q165972"}`,
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: brand.rating,
      bestRating: 5,
      worstRating: 1,
      ratingCount: brand.reviewCount,
      reviewCount: brand.reviewCount,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "HVAC Services",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          url: `${baseUrl()}/services/${service.slug}`,
        },
      })),
    },
    sameAs: Object.values(brand.socialLinks),
  };
}

export function getLocalBusinessSchema(location: LocationData) {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HVACBusiness"],
    "@id": `${baseUrl()}/locations/${location.slug}#localbusiness`,
    name: `${brand.name} - ${location.city}`,
    description: location.description,
    telephone: location.phone,
    email: brand.email,
    url: `${baseUrl()}/locations/${location.slug}`,
    image: `${baseUrl()}${location.image}`,
    naicsCode: "238220",
    priceRange: "$$",
    currenciesAccepted: "USD",
    paymentAccepted: "Cash, Credit Card, Check",
    address: {
      "@type": "PostalAddress",
      addressLocality: location.city,
      addressRegion: "FL",
      postalCode: location.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: location.coordinates.lat,
      longitude: location.coordinates.lng,
    },
    areaServed: location.serviceAreas.map((area) => ({
      "@type": "City",
      name: area,
    })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "07:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "09:00",
        closes: "17:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: brand.rating,
      bestRating: 5,
      worstRating: 1,
      reviewCount: brand.reviewCount,
    },
    review: location.reviews.map((review, index) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: review.name,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.rating,
        bestRating: 5,
      },
      reviewBody: review.quote,
      datePublished: `${new Date().getFullYear()}-${String(Math.max(1, new Date().getMonth() - index)).padStart(2, "0")}-15`,
    })),
    sameAs: Object.values(brand.socialLinks),
    parentOrganization: {
      "@type": "Organization",
      "@id": `${baseUrl()}/#organization`,
      name: brand.name,
    },
  };
}

export function getServiceSchema(serviceSlug: string) {
  const service = services.find((s) => s.slug === serviceSlug);
  if (!service) return null;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${baseUrl()}/services/${service.slug}#service`,
    serviceType: service.name,
    name: `${service.name} - ${brand.name}`,
    url: `${baseUrl()}/services/${service.slug}`,
    description: service.shortDescription,
    image: `${baseUrl()}${service.image}`,
    provider: {
      "@type": ["Organization", "HVACBusiness"],
      "@id": `${baseUrl()}/#organization`,
      name: brand.name,
      telephone: locations[0].phone,
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "license",
          name: "Florida HVAC Contractor License",
          identifier: "CAC1816259",
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "certification",
          name: "EPA Section 608 Certification",
        },
      ],
    },
    areaServed: locations.map((loc) => ({
      "@type": "City",
      name: loc.city,
    })),
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "USD",
      },
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: service.name,
      itemListElement: service.benefits.map((benefit) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: benefit,
        },
      })),
    },
  };
}

export function getAllServicesSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": services.map((service) => ({
      "@type": "Service",
      "@id": `${baseUrl()}/services/${service.slug}#service`,
      serviceType: service.name,
      name: service.name,
      url: `${baseUrl()}/services/${service.slug}`,
      description: service.shortDescription,
      image: `${baseUrl()}${service.image}`,
      provider: {
        "@type": "Organization",
        "@id": `${baseUrl()}/#organization`,
        name: brand.name,
      },
    })),
  };
}

export function getFaqSchema(items: { question: string; answer: string }[]) {
  if (items.length === 0) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function getBreadcrumbSchema(
  items: { label: string; href?: string }[]
) {
  const allItems = [{ label: "Home", href: "/" }, ...items];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `${baseUrl()}${item.href}` } : {}),
    })),
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl()}/#website`,
    name: brand.name,
    url: baseUrl(),
    description: brand.tagline,
    publisher: {
      "@type": "Organization",
      "@id": `${baseUrl()}/#organization`,
      name: brand.name,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `${baseUrl()}/services/{search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function getAboutPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${baseUrl()}/about#aboutpage`,
    name: `About ${brand.name}`,
    url: `${baseUrl()}/about`,
    description: `${brand.yearsInBusiness} years of chief-level HVAC expertise in South Florida. FL-licensed, EPA-certified, fully insured crews serving Boca Raton and Fort Lauderdale.`,
    mainEntity: {
      "@type": "Organization",
      "@id": `${baseUrl()}/#organization`,
      name: brand.name,
    },
    isPartOf: {
      "@type": "WebSite",
      "@id": `${baseUrl()}/#website`,
    },
  };
}

export function getReviewsPageSchema() {
  const allReviews = locations.flatMap((loc) => loc.reviews);
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${baseUrl()}/reviews#reviewspage`,
    name: `Customer Reviews — ${brand.name}`,
    url: `${baseUrl()}/reviews`,
    description: `${brand.reviewCount}+ verified Google reviews from Boca Raton and Fort Lauderdale homeowners. ${brand.rating}-star rated HVAC service.`,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: allReviews.length,
      itemListElement: allReviews.map((review, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Review",
          author: { "@type": "Person", name: review.name },
          reviewRating: {
            "@type": "Rating",
            ratingValue: review.rating,
            bestRating: 5,
          },
          reviewBody: review.quote,
          datePublished: `${new Date().getFullYear()}-${String(Math.max(1, new Date().getMonth() - index)).padStart(2, "0")}-15`,
          itemReviewed: {
            "@type": "Organization",
            "@id": `${baseUrl()}/#organization`,
            name: brand.name,
          },
        },
      })),
    },
    isPartOf: {
      "@type": "WebSite",
      "@id": `${baseUrl()}/#website`,
    },
  };
}

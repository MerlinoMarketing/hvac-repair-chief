import { bocaRaton } from "./boca-raton";
import { fortLauderdale } from "./fort-lauderdale";

export interface LocationData {
  city: string;
  slug: string;
  phone: string;
  cid: string;
  cidUrl: string;
  address: string;
  zip: string;
  coordinates: { lat: number; lng: number };
  mapUrl: string;
  serviceAreas: string[];
  description: string;
  metaTitle: string;
  metaDescription: string;
  reviews: { name: string; service: string; quote: string; rating: number }[];
  faq: { question: string; answer: string }[];
  image: string;
}

export const locations: LocationData[] = [
  bocaRaton,
  fortLauderdale,
];

export function getLocationBySlug(slug: string): LocationData | undefined {
  return locations.find((loc) => loc.slug === slug);
}

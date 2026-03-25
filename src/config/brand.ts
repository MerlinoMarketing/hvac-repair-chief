export const brand = {
  name: "HVAC Repair Chief",
  legalName: "HVAC Repair Chief LLC",
  tagline: "Commanding Comfort Across South Florida",
  category: "HVAC",
  email: "info@chiefhvacrepair.com",
  website: "https://hvac-repair-chief.vercel.app",
  rating: 4.8,
  reviewCount: 85,
  hours: "Mon-Sat: 7AM-8PM, Sun: 9AM-5PM",
  yearsInBusiness: 12,
  license: "FL State Licensed",
  insurance: "Fully Insured",
  emergencyLabel: "24/7 Emergency HVAC",
  turnaroundLabel: "Same-Day Repairs",

  theme: {
    primary: "oklch(0.62 0.04 200)",
    accent: "oklch(0.66 0.12 60)",
    background: "oklch(0.975 0.003 200)",
  },

  trustBadges: [
    { label: "FL State Licensed", value: "HVAC Contractor License" },
    { label: "Fully Insured", value: "Liability + Workers' Comp" },
    { label: "12+ Years", value: "Serving South Florida" },
    { label: "4.8★ Rating", value: "85+ Verified Reviews" },
  ],

  socialLinks: {
    facebook: "https://facebook.com/hvacrepairchief",
    instagram: "https://instagram.com/hvacrepairchief",
    google: "https://g.co/kgs/hvac-repair-chief",
  },

  images: {
    hero: "/images/hero-hvac-technician.png",
    about: "/images/team-hvac-crew.png",
    emergency: "/images/service-emergency.png",
    contact: "/images/team-hvac-crew.png",
  },
} as const;

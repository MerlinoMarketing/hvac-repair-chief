export const SITE = {
  name: 'HVAC Repair Chief',
  shortName: 'HVAC Repair Chief',
  phone: '(954) 555-0123',
  phoneHref: 'tel:+19545550123',
  email: 'info@hvacrepairchief.com',
  address: {
    street: '550 W Main St',
    city: 'Fort Lauderdale',
    state: 'FL',
    zip: '12345',
    full: '1480 SW 1st Ave, Pompano Beach, FL 33060',
  },
  hours: {
    weekday: 'Mon-Fri: 7:00 AM - 7:00 PM',
    saturday: 'Sat: 8:00 AM - 5:00 PM',
    sunday: 'Sun: Emergency Only',
  },
  license: 'CAC1827659',
  url: 'https://pompano-beach-house-ac-repair.vercel.app',
  description:
    'Professional AC repair, HVAC installation, and cooling services in Pompano Beach, FL. Licensed and insured technicians with 20+ years of experience serving Broward County.',
  geo: {
    lat: 26.1224,
    lng: -80.1373,
  },
  serviceAreas: [
    'Fort Lauderdale',
    'Deerfield Beach',
    'Lighthouse Point',
    'Coconut Creek',
    'Margate',
    'Coral Springs',
    'Parkland',
    'Fort Lauderdale',
    'Boca Raton',
    'Tamarac',
  ],
} as const;

export const SERVICES = [
  {
    slug: 'ac-repair',
    title: 'AC Repair',
    shortDesc: 'Fast, reliable air conditioning repairs for all makes and models. Same-day service available.',
    icon: 'Wrench',
  },
  {
    slug: 'ac-installation',
    title: 'AC Installation',
    shortDesc: 'Professional installation of high-efficiency AC systems with manufacturer warranties.',
    icon: 'AirVent',
  },
  {
    slug: 'hvac-maintenance',
    title: 'HVAC Maintenance',
    shortDesc: 'Preventive tune-ups and maintenance plans to keep your system running at peak efficiency.',
    icon: 'Settings',
  },
  {
    slug: 'emergency-ac-service',
    title: 'Emergency AC Service',
    shortDesc: '24/7 emergency AC repair when your system breaks down unexpectedly. Fast response guaranteed.',
    icon: 'Zap',
  },
  {
    slug: 'duct-cleaning',
    title: 'Duct Cleaning',
    shortDesc: 'Professional air duct cleaning to improve indoor air quality and system efficiency.',
    icon: 'Wind',
  },
  {
    slug: 'thermostat-installation',
    title: 'Thermostat Installation',
    shortDesc: 'Smart and programmable thermostat installation for energy savings and comfort control.',
    icon: 'Thermometer',
  },
  {
    slug: 'indoor-air-quality',
    title: 'Indoor Air Quality',
    shortDesc: 'Air purification, filtration, and humidity control solutions for healthier indoor environments.',
    icon: 'Leaf',
  },
  {
    slug: 'commercial-hvac',
    title: 'Commercial HVAC',
    shortDesc: 'Complete commercial HVAC solutions for offices, retail, restaurants, and industrial facilities.',
    icon: 'Building2',
  },
  {
    slug: 'heat-pump-services',
    title: 'Heat Pump Services',
    shortDesc: 'Installation, repair, and maintenance of energy-efficient heat pump systems.',
    icon: 'RefreshCw',
  },
  {
    slug: 'ac-refrigerant-recharge',
    title: 'AC Refrigerant Recharge',
    shortDesc: 'Expert refrigerant leak detection, repair, and recharge services for optimal cooling.',
    icon: 'Gauge',
  },
] as const;

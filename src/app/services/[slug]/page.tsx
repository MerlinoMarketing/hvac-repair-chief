import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getServiceWithHtml, getServiceSlugs } from '@/lib/services';
import { Navigation } from '@/components/landing/Navigation';
import { Footer } from '@/components/landing/Footer';
import { BeforeAfterSlider } from '@/components/landing/BeforeAfterSlider';
import { TestimonialCard } from '@/components/landing/TestimonialCard';
import { InlineCTA } from '@/components/landing/InlineCTA';
import { Phone, Shield, Clock, Award, CheckCircle, Star, Users, ArrowRight } from 'lucide-react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Service-specific data
const serviceData: Record<string, {
  heroImage: string;
  beforeAfter: { before: string; after: string; title: string };
  features: string[];
  testimonial: { quote: string; name: string; location: string };
  stats: { value: string; label: string }[];
}> = {
  'ac-installation': {
    heroImage: '/images/services/ac-installation.jpg',
    beforeAfter: {
      before: '/images/before-after/replacement-before-1.jpg',
      after: '/images/before-after/replacement-after-1.jpg',
      title: 'Complete AC System Replacement',
    },
    features: [
      'Manual J load calculation for proper sizing',
      'All major brands: Carrier, Trane, Lennox, Rheem',
      'Up to 25-year manufacturer warranties',
      'High-efficiency SEER rated systems',
      'Ductwork inspection and modification',
      'Job site cleanup guarantee',
    ],
    testimonial: {
      quote: 'They replaced our old 10 SEER system with a 16 SEER unit. Our electric bill dropped by over $80 a month. Professional crew, clean install, highly recommend.',
      name: 'Robert & Susan M.',
      location: 'Pompano Beach, FL',
    },
    stats: [
      { value: '500+', label: 'Systems Installed' },
      { value: '1-2', label: 'Day Completion' },
      { value: '25yr', label: 'Warranty' },
    ],
  },
  'ac-repair': {
    heroImage: '/images/services/ac-repair.jpg',
    beforeAfter: {
      before: '/images/before-after/repair-before-1.jpg',
      after: '/images/before-after/repair-after-1.jpg',
      title: 'AC System Repair',
    },
    features: [
      'Same-day emergency repairs',
      'Electronic diagnostic testing',
      'All major brands serviced',
      'Capacitor, compressor, and motor repairs',
      'Refrigerant leak detection and recharge',
      '1-year repair warranty',
    ],
    testimonial: {
      quote: 'AC stopped working on the hottest day of the year. They came out the same afternoon, found a blown capacitor, and had us cool again in under an hour. Great service!',
      name: 'Jennifer K.',
      location: 'Deerfield Beach, FL',
    },
    stats: [
      { value: '24hr', label: 'Response Time' },
      { value: '98%', label: 'First-Fix Rate' },
      { value: '1yr', label: 'Warranty' },
    ],
  },
  'emergency-ac-service': {
    heroImage: '/images/services/emergency-hvac.jpg',
    beforeAfter: {
      before: '/images/before-after/storm-before-1.jpg',
      after: '/images/before-after/storm-after-1.jpg',
      title: 'Emergency AC Restoration',
    },
    features: [
      '24/7 emergency response',
      'Rapid 60-90 minute dispatch',
      'Fully stocked service vehicles',
      'Temporary cooling solutions available',
      'All common parts carried on truck',
      'No overtime fees for plan members',
    ],
    testimonial: {
      quote: 'Our AC died at 11 PM on a Friday night with a houseful of guests. They had a tech here in just over an hour and fixed the compressor issue on the spot. Lifesavers!',
      name: 'Michael T.',
      location: 'Pompano Beach, FL',
    },
    stats: [
      { value: '60min', label: 'Avg Response' },
      { value: '24/7', label: 'Availability' },
      { value: '95%', label: 'Same-Visit Fix' },
    ],
  },
  'hvac-maintenance': {
    heroImage: '/images/services/hvac-maintenance.jpg',
    beforeAfter: {
      before: '/images/before-after/repair-before-1.jpg',
      after: '/images/before-after/repair-after-1.jpg',
      title: 'Professional AC Tune-Up',
    },
    features: [
      'Comprehensive 21-point inspection',
      'Coil cleaning and refrigerant check',
      'Electrical testing and tightening',
      'Condensate drain treatment',
      'Filter replacement included',
      'Written system condition report',
    ],
    testimonial: {
      quote: 'Their maintenance plan caught a failing capacitor before it left us without AC in August. The annual tune-up has definitely saved us from emergency repairs.',
      name: 'David & Lisa R.',
      location: 'Coconut Creek, FL',
    },
    stats: [
      { value: '15%', label: 'Energy Savings' },
      { value: '21pt', label: 'Inspection' },
      { value: '3-5yr', label: 'Life Extension' },
    ],
  },
  'commercial-hvac': {
    heroImage: '/images/services/commercial-hvac.jpg',
    beforeAfter: {
      before: '/images/before-after/commercial-before-1.jpg',
      after: '/images/before-after/commercial-after-1.jpg',
      title: 'Commercial HVAC Installation',
    },
    features: [
      'Rooftop unit service and installation',
      'Minimal business disruption',
      'Preventive maintenance contracts',
      'After-hours and weekend service',
      'Multi-location capabilities',
      'Building automation integration',
    ],
    testimonial: {
      quote: 'They service all three of our office locations under one contract. Response time is always fast and they work around our business hours. Reliable partner for our company.',
      name: 'Thompson Properties LLC',
      location: 'Pompano Beach, FL',
    },
    stats: [
      { value: '200+', label: 'Businesses Served' },
      { value: '4hr', label: 'Emergency Response' },
      { value: '0', label: 'Days Downtime' },
    ],
  },
  'duct-cleaning': {
    heroImage: '/images/services/duct-cleaning.jpg',
    beforeAfter: {
      before: '/images/before-after/storm-before-1.jpg',
      after: '/images/before-after/storm-after-1.jpg',
      title: 'Professional Duct Cleaning',
    },
    features: [
      'NADCA-recommended source removal method',
      'Camera inspection before and after',
      'Supply and return duct cleaning',
      'Air handler and coil cleaning',
      'Optional antimicrobial treatment',
      'Detailed photo documentation',
    ],
    testimonial: {
      quote: 'Had our ducts cleaned after renovations and the difference in air quality was immediate. No more construction dust smell. They even showed us camera footage of the before and after.',
      name: 'Patricia W.',
      location: 'Parkland, FL',
    },
    stats: [
      { value: '99%', label: 'Contaminant Removal' },
      { value: '3-5hr', label: 'Service Time' },
      { value: '3-5yr', label: 'Recommended Interval' },
    ],
  },
  'thermostat-installation': {
    heroImage: '/images/services/ac-installation.jpg',
    beforeAfter: {
      before: '/images/before-after/repair-before-1.jpg',
      after: '/images/before-after/repair-after-1.jpg',
      title: 'Smart Thermostat Upgrade',
    },
    features: [
      'Ecobee, Nest, and Honeywell certified',
      'Wi-Fi setup and app configuration',
      'Wiring compatibility assessment',
      'Optimal placement evaluation',
      'Schedule programming assistance',
      'Integration with home automation',
    ],
    testimonial: {
      quote: 'Upgraded to a Nest thermostat and can now control our AC from the office. Energy bills dropped noticeably the first month. Simple upgrade, big impact.',
      name: 'Angela R.',
      location: 'Lighthouse Point, FL',
    },
    stats: [
      { value: '23%', label: 'Avg Energy Savings' },
      { value: '1hr', label: 'Installation Time' },
      { value: '100%', label: 'Smart Home Ready' },
    ],
  },
  'indoor-air-quality': {
    heroImage: '/images/services/ac-repair.jpg',
    beforeAfter: {
      before: '/images/before-after/repair-before-1.jpg',
      after: '/images/before-after/repair-after-1.jpg',
      title: 'Air Quality Improvement',
    },
    features: [
      'Whole-home air purification systems',
      'UV germicidal light installation',
      'Advanced MERV and HEPA filtration',
      'Whole-home dehumidifier installation',
      'Energy recovery ventilator setup',
      'Air quality testing and monitoring',
    ],
    testimonial: {
      quote: 'My daughter has asthma and since they installed the air purifier and UV light, her symptoms have improved dramatically. The air in our home feels completely different.',
      name: 'Carmen L.',
      location: 'Margate, FL',
    },
    stats: [
      { value: '99.98%', label: 'Particle Removal' },
      { value: '5x', label: 'Cleaner Air' },
      { value: '45-55%', label: 'Ideal Humidity' },
    ],
  },
  'heat-pump-services': {
    heroImage: '/images/services/hvac-maintenance.jpg',
    beforeAfter: {
      before: '/images/before-after/replacement-before-1.jpg',
      after: '/images/before-after/replacement-after-1.jpg',
      title: 'Heat Pump Installation',
    },
    features: [
      'Air-source and ductless options',
      'Heating and cooling in one system',
      '50% lower heating energy costs',
      'All major brands available',
      'Proper sizing with load calculations',
      'Year-round comfort solution',
    ],
    testimonial: {
      quote: 'Switched from our old AC and electric heat strips to a heat pump. Our winter electric bills dropped significantly and the cooling works just as well. Wish we had done it sooner.',
      name: 'Frank & Diane S.',
      location: 'Coral Springs, FL',
    },
    stats: [
      { value: '50%', label: 'Heating Savings' },
      { value: '2-in-1', label: 'Heat + Cool' },
      { value: '15yr', label: 'Avg Lifespan' },
    ],
  },
  'ac-refrigerant-recharge': {
    heroImage: '/images/services/ac-repair.jpg',
    beforeAfter: {
      before: '/images/before-after/repair-before-1.jpg',
      after: '/images/before-after/repair-after-1.jpg',
      title: 'Refrigerant Leak Repair',
    },
    features: [
      'Electronic leak detection equipment',
      'UV dye and nitrogen pressure testing',
      'EPA-certified refrigerant handling',
      'R-410A and R-22 system service',
      'Precise manufacturer-spec recharge',
      'Superheat and subcooling verification',
    ],
    testimonial: {
      quote: 'Two other companies just added refrigerant without finding the leak. These guys found a pinhole in the evaporator coil, repaired it, and the system has held charge perfectly for over a year.',
      name: 'Steve H.',
      location: 'Pompano Beach, FL',
    },
    stats: [
      { value: '100%', label: 'Leak Found Rate' },
      { value: 'EPA', label: 'Certified Techs' },
      { value: '1yr', label: 'Leak Warranty' },
    ],
  },
};

export async function generateStaticParams() {
  const slugs = getServiceSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const service = await getServiceWithHtml(slug);

  if (!service) {
    return { title: 'Service Not Found' };
  }

  return {
    title: service.metaTitle || `${service.title} | Pompano Beach House AC Repair`,
    description: service.metaDescription || service.description,
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = await getServiceWithHtml(slug);

  if (!service) {
    notFound();
  }

  const data = serviceData[slug] || serviceData['ac-installation'];
  const cleanTitle = service.title.replace(/<[^>]*>/g, '').replace(/^#\s*/, '').split('\n')[0];

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white pt-20">
        <div className="absolute inset-0">
          <Image
            src={data.heroImage}
            alt={cleanTitle}
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-cyan-600 mb-4">
              <Star className="w-5 h-5 fill-cyan-600" />
              <span className="font-semibold">4.9 Rating</span>
              <span className="text-slate-500">|</span>
              <span className="text-slate-600">200+ Reviews</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {cleanTitle}
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              {service.description?.substring(0, 150)}...
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:+19542896718"
                className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-slate-900 font-bold px-8 py-4 rounded-xl transition shadow-lg"
              >
                <Phone className="w-5 h-5" />
                Get Free Estimate
              </a>
              <div className="flex items-center gap-3 text-slate-600">
                <Clock className="w-5 h-5 text-cyan-600" />
                <span>Response within 24 hours</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-slate-100 py-6 border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-green-600" />
              <span className="font-semibold text-slate-700">Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-6 h-6 text-cyan-700" />
              <span className="font-semibold text-slate-700">20+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-6 h-6 text-blue-600" />
              <span className="font-semibold text-slate-700">500+ Happy Customers</span>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              See The Transformation
            </h2>
            <p className="text-xl text-slate-600">
              Real results from our recent {cleanTitle.toLowerCase()} projects
            </p>
          </div>
          <BeforeAfterSlider
            before={data.beforeAfter.before}
            after={data.beforeAfter.after}
            title={data.beforeAfter.title}
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white text-slate-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-3 gap-8">
            {data.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-5xl font-bold text-cyan-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-500 uppercase text-sm tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features + CTA Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Features */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
                What&apos;s Included
              </h2>
              <div className="space-y-4">
                {data.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Get Your Free Quote
                </h3>
                <p className="text-slate-600">
                  No obligation. Fast response guaranteed.
                </p>
              </div>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-4 rounded-xl border-2 border-slate-200 focus:border-cyan-600 focus:outline-none transition text-lg"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-4 rounded-xl border-2 border-slate-200 focus:border-cyan-600 focus:outline-none transition text-lg"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-4 rounded-xl border-2 border-slate-200 focus:border-cyan-600 focus:outline-none transition text-lg"
                />
                <button
                  type="submit"
                  className="w-full bg-cyan-600 hover:bg-cyan-500 text-slate-900 font-bold py-4 rounded-xl transition text-lg flex items-center justify-center gap-2"
                >
                  Get My Free Quote
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
              <div className="mt-6 text-center">
                <p className="text-slate-500 text-sm">
                  Or call us directly
                </p>
                <a href="tel:+19542896718" className="text-2xl font-bold text-slate-900 hover:text-cyan-700 transition">
                  (954) 289-6718
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What Our Customers Say
            </h2>
          </div>
          <TestimonialCard
            quote={data.testimonial.quote}
            name={data.testimonial.name}
            location={data.testimonial.location}
          />
        </div>
      </section>

      {/* Content Section - Streamlined */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <div
            className="prose prose-lg max-w-none
              prose-headings:text-slate-900 prose-headings:font-bold
              prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
              prose-p:text-slate-600 prose-p:leading-relaxed
              prose-a:text-cyan-700 prose-a:no-underline hover:prose-a:underline
              prose-strong:text-slate-900
              prose-ul:text-slate-600
              prose-li:marker:text-cyan-600
            "
            dangerouslySetInnerHTML={{ __html: service.htmlContent || '' }}
          />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <InlineCTA
            title="Ready to Get Started?"
            subtitle="Schedule your free inspection today. No obligation."
            variant="primary"
          />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}

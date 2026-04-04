import Link from 'next/link';
import Image from 'next/image';
import { getAllServices } from '@/lib/services';
import { CheckCircle, Zap, Diamond, Shield, Phone, Mail, Building2, Home, Search, Hammer, CloudLightning, FileText, Wind, Thermometer, Leaf, RefreshCw, Gauge } from 'lucide-react';

export const metadata = {
  title: 'Our Services | Pompano Beach House AC Repair',
  description: 'Comprehensive HVAC services including residential repairs, commercial HVAC, AC installation, inspections, emergency HVAC repair, and duct cleaning assistance.',
};

export default function ServicesPage() {
  const services = getAllServices();

  // Service icons component mapping
  const ServiceIcon = ({ slug }: { slug: string }) => {
    const iconClass = "h-8 w-8 text-cyan-600";
    switch (slug) {
      case 'ac-repair': return <Hammer className={iconClass} aria-hidden="true" />;
      case 'ac-installation': return <Home className={iconClass} aria-hidden="true" />;
      case 'hvac-maintenance': return <Search className={iconClass} aria-hidden="true" />;
      case 'emergency-ac-service': return <Zap className={iconClass} aria-hidden="true" />;
      case 'duct-cleaning': return <Wind className={iconClass} aria-hidden="true" />;
      case 'thermostat-installation': return <Thermometer className={iconClass} aria-hidden="true" />;
      case 'indoor-air-quality': return <Leaf className={iconClass} aria-hidden="true" />;
      case 'commercial-hvac': return <Building2 className={iconClass} aria-hidden="true" />;
      case 'heat-pump-services': return <RefreshCw className={iconClass} aria-hidden="true" />;
      case 'ac-refrigerant-recharge': return <Gauge className={iconClass} aria-hidden="true" />;
      default: return <Home className={iconClass} aria-hidden="true" />;
    }
  };

  const serviceImages: Record<string, string> = {
    'ac-repair': '/images/services/ac-repair.jpg',
    'ac-installation': '/images/services/ac-installation.jpg',
    'hvac-maintenance': '/images/services/hvac-maintenance.jpg',
    'emergency-ac-service': '/images/services/emergency-hvac.jpg',
    'duct-cleaning': '/images/services/duct-cleaning.jpg',
    'thermostat-installation': '/images/services/ac-installation.jpg',
    'indoor-air-quality': '/images/services/ac-repair.jpg',
    'commercial-hvac': '/images/services/commercial-hvac.jpg',
    'heat-pump-services': '/images/services/hvac-maintenance.jpg',
    'ac-refrigerant-recharge': '/images/services/ac-repair.jpg',
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Navigation */}
      <nav className="py-4 px-4 border-b border-slate-700">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="text-cyan-600 hover:text-cyan-500 transition flex items-center gap-2">
            ← Back to Home
          </Link>
        </div>
      </nav>

      {/* Hero Section with Background */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/hvac-hero.jpg"
            alt="Professional HVAC services"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-white/80"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/60 to-slate-900"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Our HVAC Services
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto">
            Professional HVAC solutions for residential and commercial properties.
            From repairs to complete replacements, we've got you covered.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-slate-100/80 border border-slate-700 rounded-xl overflow-hidden hover:border-cyan-500/50 hover:bg-slate-50 transition-all duration-300 shadow-lg hover:shadow-cyan-600/10 hover:-translate-y-1"
              >
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={serviceImages[service.slug] || '/images/services/ac-repair.jpg'}
                    alt={`${service.title} - Professional HVAC service`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent"></div>

                  {/* Icon Overlay */}
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-white/80 rounded-full p-3 backdrop-blur-sm">
                      <ServiceIcon slug={service.slug} />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  {/* Title */}
                  <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors">
                    {service.title.replace(/^#\s+/, '').split('\n')[0]}
                  </h2>

                  {/* Description */}
                  {service.description && (
                    <p className="text-slate-600 leading-relaxed mb-4 line-clamp-3">
                      {service.description.substring(0, 150)}...
                    </p>
                  )}

                  {/* Read More Link */}
                  <div className="flex items-center gap-2 text-cyan-600 font-semibold group-hover:gap-3 transition-all">
                    Learn More
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 bg-slate-100/80 border-y border-slate-700">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-12">
            Why Choose Our HVAC Services?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <CheckCircle className="h-12 w-12 text-cyan-600" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Licensed & Insured</h3>
              <p className="text-slate-600">
                Fully licensed professionals with comprehensive insurance coverage
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Zap className="h-12 w-12 text-cyan-600" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Fast Response</h3>
              <p className="text-slate-600">
                Quick turnaround times and 24/7 emergency services
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Diamond className="h-12 w-12 text-cyan-600" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Quality Materials</h3>
              <p className="text-slate-600">
                Premium materials from trusted manufacturers
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Shield className="h-12 w-12 text-cyan-600" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Warranty Protected</h3>
              <p className="text-slate-600">
                Comprehensive warranties on all workmanship
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Get in touch today for a free consultation and estimate. Our team is ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+19542896718"
              className="inline-flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-slate-900 font-bold px-8 py-4 rounded-lg transition shadow-lg shadow-cyan-600/20 text-lg"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              Call Now: (954) 289-6718
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold px-8 py-4 rounded-lg transition border border-slate-600 text-lg"
            >
              <Mail className="h-5 w-5" aria-hidden="true" />
              Request Free Estimate
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-slate-700">
        <div className="max-w-7xl mx-auto text-center">
          <Link href="/" className="text-cyan-600 hover:text-cyan-500 transition text-lg">
            ← Back to Home
          </Link>
          <p className="text-slate-500 mt-4">
            &copy; {new Date().getFullYear()} Pompano Beach House AC Repair. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}

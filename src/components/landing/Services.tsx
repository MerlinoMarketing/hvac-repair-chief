import { Wrench, AirVent, Settings, Zap, Wind, Thermometer, Leaf, Building2, RefreshCw, Gauge, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { SERVICES } from '@/lib/constants';

const iconMap: Record<string, React.ElementType> = {
  Wrench,
  AirVent,
  Settings,
  Zap,
  Wind,
  Thermometer,
  Leaf,
  Building2,
  RefreshCw,
  Gauge,
};

export function Services() {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-[#FF8C42] font-semibold text-sm uppercase tracking-wider mb-3">Our Services</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Complete HVAC Solutions for
            <span className="text-[#1B6B93]"> Pompano Beach</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            From routine maintenance to emergency repairs, our NATE-certified technicians handle every
            aspect of your home and commercial cooling needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon] || Wrench;
            return (
              <Link
                key={index}
                href={`/services/${service.slug}`}
                className="group bg-white border border-slate-200 hover:border-[#1B6B93]/30 rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-[#1B6B93]/5 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="mb-5">
                  <div className="bg-[#1B6B93]/5 group-hover:bg-[#1B6B93]/10 w-14 h-14 rounded-xl flex items-center justify-center transition-colors">
                    <Icon className="h-7 w-7 text-[#1B6B93]" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#1B6B93] transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                  {service.shortDesc}
                </p>

                {/* CTA */}
                <div className="flex items-center gap-1.5 text-[#1B6B93] font-semibold text-sm group-hover:gap-2.5 transition-all">
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            );
          })}

          {/* View All CTA Card */}
          <Link
            href="/services"
            className="group bg-gradient-to-br from-[#1B6B93] to-[#155A7D] rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-center items-center text-center"
          >
            <div className="bg-white/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
              <ArrowRight className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">View All Services</h3>
            <p className="text-white/70 text-sm">See our complete range of HVAC solutions</p>
          </Link>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <p className="text-slate-500 mb-4">Not sure which service you need?</p>
          <a
            href="#contact"
            className="inline-block bg-[#FF8C42] hover:bg-[#E67A35] text-white font-bold px-8 py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-orange-200/50"
          >
            Schedule a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}

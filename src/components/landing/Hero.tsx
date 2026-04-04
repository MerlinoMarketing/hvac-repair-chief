import { Phone, CheckCircle, Shield, Clock, Star } from 'lucide-react';
import { SITE } from '@/lib/constants';

export function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-gradient-to-br from-[#1B6B93] via-[#155A7D] to-[#0F4A67]">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#FF8C42]/5 rounded-full -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/5 rounded-full translate-y-1/3 -translate-x-1/4"></div>
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-[#FF8C42]/30 rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-white/10 rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-[#FF8C42]/20 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20 relative z-10 w-full">
        <div className="max-w-4xl">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full mb-8">
            <Shield className="h-4 w-4 text-[#FF8C42]" />
            <span className="text-sm font-semibold">Licensed & Insured -- NATE Certified Technicians</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Expert AC Repair &
            <span className="block text-[#FF8C42] mt-2">HVAC Services</span>
            <span className="block text-white/90 text-3xl sm:text-4xl md:text-5xl mt-2">in Pompano Beach, FL</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl leading-relaxed">
            Keep your home comfortable year-round with Pompano Beach&apos;s most trusted HVAC professionals.
            From emergency repairs to new installations, we deliver reliable cooling solutions backed
            by warranties you can count on.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-14">
            <a
              href="#contact"
              className="bg-[#FF8C42] hover:bg-[#E67A35] text-white font-bold text-lg px-10 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 hover:-translate-y-0.5 text-center"
            >
              Get Free Estimate
            </a>
            <a
              href={SITE.phoneHref}
              className="bg-white/10 hover:bg-white/20 text-white font-bold text-lg px-10 py-4 rounded-xl transition-all duration-200 border border-white/25 hover:border-white/40 flex items-center justify-center gap-2 backdrop-blur-sm"
            >
              <Phone className="h-5 w-5" />
              Call: {SITE.phone}
            </a>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-8">
            <div className="flex items-center gap-3">
              <div className="bg-white/10 p-2.5 rounded-lg">
                <CheckCircle className="h-5 w-5 text-[#FF8C42]" />
              </div>
              <div>
                <div className="font-bold text-white text-sm">Licensed & Insured</div>
                <div className="text-xs text-white/60">FL License #{SITE.license}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-white/10 p-2.5 rounded-lg">
                <Clock className="h-5 w-5 text-[#FF8C42]" />
              </div>
              <div>
                <div className="font-bold text-white text-sm">Same-Day Service</div>
                <div className="text-xs text-white/60">24/7 Emergency</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-white/10 p-2.5 rounded-lg">
                <Star className="h-5 w-5 text-[#FF8C42]" />
              </div>
              <div>
                <div className="font-bold text-white text-sm">4.9/5 Rating</div>
                <div className="text-xs text-white/60">300+ Reviews</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="mt-16 pt-10 border-t border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#FF8C42]">20+</div>
              <div className="text-sm text-white/60 mt-1">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#FF8C42]">8,000+</div>
              <div className="text-sm text-white/60 mt-1">Systems Serviced</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#FF8C42]">4.9/5</div>
              <div className="text-sm text-white/60 mt-1">Customer Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#FF8C42]">100%</div>
              <div className="text-sm text-white/60 mt-1">Satisfaction Guaranteed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

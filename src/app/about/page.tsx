import { Navigation } from '@/components/landing/Navigation';
import { Footer } from '@/components/landing/Footer';
import { Shield, Award, Users, Heart, CheckCircle, Star } from 'lucide-react';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Pompano Beach House AC Repair | Trusted HVAC Contractor',
  description: 'Meet Pompano Beach House AC Repair - your trusted HVAC Contractor since 1998. Licensed, A+ BBB rated, 25+ years experience. Family-owned, locally committed. Learn our story!',
};

const stats = [
  { number: '25+', label: 'Years in Business', color: 'text-cyan-600' },
  { number: '5,000+', label: 'Systems Serviced', color: 'text-blue-400' },
  { number: '98%', label: 'Customer Satisfaction', color: 'text-green-400' },
  { number: '4.9/5', label: 'Average Rating', color: 'text-purple-400' },
];

const values = [
  {
    icon: Shield,
    title: 'Honesty Above All',
    description: 'We recommend what you need, not what maximizes our profit. If your HVAC system doesn\'t need replacement, we tell you. Transparent pricing with no hidden fees.',
  },
  {
    icon: Award,
    title: 'Quality Without Compromise',
    description: 'Following manufacturer specifications exactly. Using premium materials from trusted brands. Proper installation, never shortcuts. Multiple quality inspections throughout projects.',
  },
  {
    icon: Users,
    title: 'Respect for Your Home',
    description: 'Treating your property like it\'s our own. Protecting landscaping and belongings. Working efficiently to minimize disruption. Daily cleanup during projects.',
  },
  {
    icon: Heart,
    title: 'Community Investment',
    description: 'Supporting local schools, sports, and charities. Hiring locally and paying fair wages. Partnering with local suppliers. Giving back to our community.',
  },
];

const certifications = [
  'NATE-Certified Technicians (Top Industry Standard)',
  'Carrier Factory Authorized Dealer',
  'Trane Comfort Specialist',
  'Licensed & Bonded',
  'A+ BBB Rating',
  'NRCA Member (National HVAC Contractors Association)',
];

const testimonials = [
  {
    name: 'John & Mary S.',
    location: 'Pompano Beach',
    quote: 'We\'ve used Pompano Beach House AC Repair three times over the years - our home, our rental property, and my mother-in-law\'s house. Every experience has been exceptional. They\'re honest, professional, and their work is impeccable.',
    service: 'AC Installation (2), Emergency HVAC Service',
    years: 'Customer Since 2015',
  },
  {
    name: 'Michael T.',
    location: 'Deerfield Beach',
    quote: 'After getting four quotes, Pompano Beach House AC Repair wasn\'t the cheapest. But they were the most thorough and transparent. The crew was incredible - clean, respectful, and the quality is obvious. Worth every penny.',
    service: 'Complete AC Installation',
    years: 'Customer Since 2021',
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      <Navigation />

      {/* Hero Section with Background */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/about/team-hero.jpg"
            alt="Professional HVAC team"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-white/80"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/60 to-slate-900"></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About <span className="text-cyan-400">Pompano Beach House AC Repair</span>
            </h1>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
              Your trusted HVAC partner since 1998. We're not a national chain or storm chasers -
              we're your neighbors, locally owned and deeply committed to this community.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`text-5xl md:text-6xl font-bold ${stat.color} mb-2`}>
                  {stat.number}
                </div>
                <div className="text-slate-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 bg-slate-100/80">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Column */}
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about/office.jpg"
                alt="Pompano Beach House AC Repair team and company headquarters"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-cyan-600/90 backdrop-blur-sm rounded-lg p-4 text-slate-900">
                  <div className="font-bold text-lg mb-1">Since 1998</div>
                  <div className="text-sm">Serving our community for over 25 years</div>
                </div>
              </div>
            </div>

            {/* Text Column */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Pompano Beach House AC Repair was founded in 1998 by a local contractor who saw a gap in the market:
                  homeowners wanted honest, quality HVAC services from contractors who'd be around for the long haul.
                </p>
                <p>
                  Starting with a single crew and a commitment to excellence, we built our reputation one service call
                  at a time. Our first customer took a chance on a new company because we took the time to
                  explain options honestly and stood behind the work with a personal guarantee.
                </p>
                <p>
                  Over 25 years later, that customer still refers friends to us, and that's the foundation
                  we built this company on: exceptional work, honest service, and relationships that last.
                </p>
                <p className="font-semibold text-slate-900">
                  Today, we employ skilled HVAC professionals, operate multiple crews, and have installed
                  or repaired over 5,000+ AC systems across our service area.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-600/10 to-teal-500/10 border-2 border-cyan-600/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">What Sets Us Apart</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-cyan-600 flex-shrink-0 mt-1" />
                  <span className="text-slate-600">
                    <strong className="text-slate-900">Family-Owned & Locally Committed</strong> -
                    We're invested in this community for the long haul
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-cyan-600 flex-shrink-0 mt-1" />
                  <span className="text-slate-600">
                    <strong className="text-slate-900">Licensed & Certified Experts</strong> -
                    NATE-Certified (industry gold standard)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-cyan-600 flex-shrink-0 mt-1" />
                  <span className="text-slate-600">
                    <strong className="text-slate-900">Transparent Pricing</strong> -
                    No hidden fees, detailed estimates before work starts
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-cyan-600 flex-shrink-0 mt-1" />
                  <span className="text-slate-600">
                    <strong className="text-slate-900">Comfort Guarantee Warranty</strong> -
                    We stand behind our work for decades, not just years
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              These aren't just words on a wall - they're the principles that guide every decision we make.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-slate-100/80 border border-slate-700/50 rounded-xl p-8 hover:border-cyan-600/30 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-cyan-600/10 p-3 rounded-lg flex-shrink-0">
                    <value.icon className="h-8 w-8 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 px-4 bg-slate-100/80">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Credentials & Certifications
            </h2>
            <p className="text-xl text-slate-600">
              We maintain the highest industry standards and certifications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-700/50 to-slate-600/50 border border-slate-600/50 rounded-lg p-6 flex items-center gap-4"
              >
                <Award className="h-8 w-8 text-cyan-600 flex-shrink-0" />
                <span className="text-slate-900 font-semibold">{cert}</span>
              </div>
            ))}
          </div>

          {/* License Info */}
          <div className="mt-12 bg-gradient-to-r from-cyan-600/10 to-teal-500/10 border-2 border-cyan-600/30 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Fully Licensed, Bonded & Insured
            </h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              License #334326 • $2M General Liability • Full Workers' Compensation Coverage
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-500">
              <span className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-cyan-600" />
                Your protection guaranteed
              </span>
              <span className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-cyan-600" />
                Manufacturer warranties valid
              </span>
              <span className="flex items-center gap-2">
                <Award className="h-4 w-4 text-cyan-600" />
                BBB A+ Rating
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-slate-600">
              Don't just take our word for it - hear from homeowners who trusted us.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-slate-100/80 border border-slate-700/50 rounded-xl p-8"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-cyan-600 fill-cyan-600" />
                  ))}
                </div>
                <p className="text-slate-600 leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-slate-700 pt-4">
                  <div className="font-semibold text-slate-900">{testimonial.name}</div>
                  <div className="text-sm text-slate-500">{testimonial.location}</div>
                  <div className="text-sm text-cyan-600 mt-2">{testimonial.service}</div>
                  <div className="text-xs text-slate-500 mt-1">{testimonial.years}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Rating Summary */}
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 border border-slate-600/50 rounded-2xl p-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold text-cyan-600 mb-2">4.9/5</div>
                <div className="text-slate-600">Average Rating</div>
                <div className="flex justify-center gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-cyan-600 fill-cyan-600" />
                  ))}
                </div>
              </div>
              <div>
                <div className="text-5xl font-bold text-blue-400 mb-2">500+</div>
                <div className="text-slate-600">5-Star Reviews</div>
                <div className="text-sm text-slate-500 mt-2">Google & Facebook</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-green-400 mb-2">85%</div>
                <div className="text-slate-600">Referral Business</div>
                <div className="text-sm text-slate-500 mt-2">Customer Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-slate-100/80">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Ready to Experience the Pompano Beach House AC Repair Difference?
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Whether you need emergency repairs, routine maintenance, or complete AC installation,
            we're here to serve you with honesty, quality, and professionalism.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-cyan-600 hover:bg-cyan-700 text-slate-900 font-bold text-lg px-10 py-4 rounded-lg transition-all duration-200 hover:scale-105"
            >
              Get Free Estimate
            </a>
            <a
              href="tel:+19542896718"
              className="bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-lg px-10 py-4 rounded-lg transition-all duration-200 border-2 border-slate-600 hover:border-slate-500"
            >
              Call: (954) 289-6718
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

import { Shield, Award, Users, Clock, DollarSign, ThumbsUp } from 'lucide-react';

const reasons = [
  {
    icon: Shield,
    title: 'Licensed & Insured',
    description: 'Fully licensed, bonded, and insured HVAC professionals for your complete protection and peace of mind.',
  },
  {
    icon: Award,
    title: 'NATE Certified',
    description: 'Our technicians hold NATE certification, the gold standard in HVAC expertise and professionalism.',
  },
  {
    icon: DollarSign,
    title: 'Upfront Pricing',
    description: 'Transparent pricing with no hidden fees. Know the cost before work begins with our written estimates.',
  },
  {
    icon: Clock,
    title: 'Same-Day Service',
    description: 'Fast response times with same-day service available. We arrive on time, every time.',
  },
  {
    icon: Users,
    title: 'Local Experts',
    description: 'Family-owned and operated in Pompano Beach. We understand South Florida cooling needs.',
  },
  {
    icon: ThumbsUp,
    title: 'Satisfaction Guaranteed',
    description: 'We stand behind every repair and installation. If you are not satisfied, we make it right.',
  },
];

const stats = [
  { number: '20+', label: 'Years in Business', color: 'text-[#FF8C42]' },
  { number: '8,000+', label: 'Systems Serviced', color: 'text-[#1B6B93]' },
  { number: '98%', label: 'Customer Satisfaction', color: 'text-green-600' },
  { number: '4.9/5', label: 'Average Rating', color: 'text-[#FF8C42]' },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-[#FF8C42] font-semibold text-sm uppercase tracking-wider mb-3">Why Choose Us</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Pompano Beach&apos;s Most <span className="text-[#1B6B93]">Trusted HVAC Team</span>
          </h2>
          <p className="text-lg text-slate-600">
            We are more than just AC technicians. We are your partners in maintaining a comfortable, healthy home environment.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-slate-50 rounded-xl">
              <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>
                {stat.number}
              </div>
              <div className="text-slate-500 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-xl p-8 hover:border-[#1B6B93]/20 transition-all duration-300 hover:shadow-lg hover:shadow-[#1B6B93]/5"
            >
              <div className="mb-6">
                <div className="bg-gradient-to-br from-[#1B6B93]/10 to-[#1B6B93]/5 w-14 h-14 rounded-xl flex items-center justify-center">
                  <reason.icon className="h-7 w-7 text-[#1B6B93]" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{reason.title}</h3>
              <p className="text-slate-500 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom Highlight */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-[#1B6B93]/5 to-[#FF8C42]/5 border-2 border-[#1B6B93]/15 rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              100% Satisfaction Guarantee
            </h3>
            <p className="text-lg text-slate-600 mb-6">
              We stand behind every job with a written satisfaction guarantee.
              When you choose us, you are choosing quality workmanship that lasts.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500">
              <span className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-[#1B6B93]" />
                FL License #CAC1820053
              </span>
              <span className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-[#1B6B93]" />
                Insured & Bonded
              </span>
              <span className="flex items-center gap-2">
                <Award className="h-4 w-4 text-[#1B6B93]" />
                BBB A+ Rating
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

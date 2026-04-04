import { Star, Quote } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Sarah Johnson',
    location: 'Pompano Beach',
    rating: 5,
    quote: 'Outstanding service from start to finish! They replaced our entire AC system in just one day. The crew was professional, cleaned up perfectly, and the quality is exceptional. Highly recommend!',
    project: 'Complete AC Installation',
    image: '/images/testimonials/houses/house-1.jpg',
    avatar: '/images/testimonials/avatars/avatar-1.jpg'
  },
  {
    name: 'Michael Chen',
    location: 'Deerfield Beach',
    rating: 5,
    quote: 'After an emergency HVAC breakdown, they worked directly with our warranty company and made the whole process stress-free. Great communication and excellent workmanship. Our AC runs perfectly now!',
    project: 'Emergency HVAC Service',
    image: '/images/testimonials/houses/house-2.jpg',
    avatar: '/images/testimonials/avatars/avatar-2.jpg'
  },
  {
    name: 'Jennifer Martinez',
    location: 'Coral Springs',
    rating: 5,
    quote: 'We had a persistent cooling issue that other companies couldn\'t fix. They found and solved the problem quickly. Five years later, no issues! True HVAC experts.',
    project: 'AC Repair & Diagnostics',
    image: '/images/testimonials/houses/house-3.jpg',
    avatar: '/images/testimonials/avatars/avatar-3.jpg'
  },
  {
    name: 'David Thompson',
    location: 'Margate',
    rating: 5,
    quote: 'Fair pricing, quality materials, and honest service. They didn\'t try to upsell us and completed the job on time and on budget. This is how all HVAC companies should operate.',
    project: 'HVAC Inspection & Repair',
    image: '/images/testimonials/houses/house-4.jpg',
    avatar: '/images/testimonials/avatars/avatar-4.jpg'
  },
  {
    name: 'Lisa Anderson',
    location: 'Lighthouse Point',
    rating: 5,
    quote: 'The annual maintenance plan saved us thousands! They caught issues early before they became major problems. Incredibly knowledgeable and trustworthy team.',
    project: 'Annual HVAC Inspection',
    image: '/images/testimonials/houses/house-5.jpg',
    avatar: '/images/testimonials/avatars/avatar-5.jpg'
  },
  {
    name: 'Robert Garcia',
    location: 'Parkland',
    rating: 5,
    quote: 'Emergency AC repair after our system completely broke down during a heatwave. They came out the same day and had it diagnosed and running again. Then completed the full repair perfectly. Absolutely reliable!',
    project: 'Emergency AC Repair',
    image: '/images/testimonials/houses/house-6.jpg',
    avatar: '/images/testimonials/avatars/avatar-6.jpg'
  }
];

export function Testimonials() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-slate-600">
            Don't just take our word for it - hear from homeowners who trusted us with their HVAC systems.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-slate-100/80 border border-slate-600/50 rounded-xl overflow-hidden hover:border-cyan-600/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-600/5 group"
            >
              {/* House/Project Image */}
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={testimonial.image}
                  alt={`${testimonial.project} by ${testimonial.name}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>

                {/* Quote Icon Overlay */}
                <div className="absolute top-4 right-4 opacity-30">
                  <Quote className="h-12 w-12 text-cyan-600" />
                </div>
              </div>

              <div className="p-6 relative">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-cyan-600 fill-cyan-600" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-slate-600 leading-relaxed mb-6 relative z-10">
                  "{testimonial.quote}"
                </p>

                {/* Project Type */}
                <div className="text-sm text-cyan-600 font-semibold mb-4">
                  {testimonial.project}
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-slate-600">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-slate-500">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Rating Summary */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-slate-700/50 to-slate-600/50 border border-slate-600/50 rounded-2xl p-8 md:p-12">
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
                <div className="text-5xl font-bold text-green-400 mb-2">98%</div>
                <div className="text-slate-600">Would Recommend</div>
                <div className="text-sm text-slate-500 mt-2">Customer Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-slate-600 mb-6 text-lg">
            Join hundreds of satisfied homeowners
          </p>
          <a
            href="#contact"
            className="inline-block bg-cyan-600 hover:bg-cyan-700 text-slate-900 font-bold text-lg px-8 py-4 rounded-lg transition-all duration-200 hover:scale-105"
          >
            Get Your Free Estimate
          </a>
        </div>
      </div>
    </section>
  );
}

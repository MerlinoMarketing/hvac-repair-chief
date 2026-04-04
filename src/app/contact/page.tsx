import { Navigation } from '@/components/landing/Navigation';
import { Footer } from '@/components/landing/Footer';
import { Contact } from '@/components/landing/Contact';
import { Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Pompano Beach House AC Repair | Free AC Estimate',
  description: 'Contact Pompano Beach House AC Repair for expert HVAC services. Free estimates, 24/7 emergency service. Call (954) 289-6718, text, or request quote online. Licensed & insured!',
};

const contactMethods = [
  {
    icon: Phone,
    title: 'Call Us Today',
    value: '(954) 289-6718',
    href: 'tel:+19542896718',
    description: 'Mon-Fri: 7:00 AM - 6:00 PM',
  },
  {
    icon: Mail,
    title: 'Email Us',
    value: 'info@pompanobeachhouseacrepair.com',
    href: 'mailto:info@pompanobeachhouseacrepair.com',
    description: 'Response within 4 hours',
  },
  {
    icon: MapPin,
    title: 'Visit Our Office',
    value: '123 Main Street, Pompano Beach, FL 33432',
    href: '#',
    description: 'Mon-Fri: 7:00 AM - 6:00 PM',
  },
];

const benefits = [
  'Free, no-obligation estimates',
  'Same-day response guaranteed',
  'Licensed & insured professionals',
  'Transparent pricing, no hidden fees',
  '24/7 emergency service available',
  'Lifetime workmanship warranty',
];

const processSteps = [
  {
    step: '1',
    title: 'Contact Us',
    description: 'Call, email, or submit the form. We respond within 2 hours during business hours.',
  },
  {
    step: '2',
    title: 'Fast Response',
    description: 'Licensed professional inspects your HVAC system thoroughly and documents findings.',
  },
  {
    step: '3',
    title: 'Detailed Estimate',
    description: 'Receive clear, itemized pricing with multiple options and warranty information.',
  },
  {
    step: '4',
    title: 'Quality Work',
    description: 'Expert installation on schedule with daily cleanup and final walkthrough.',
  },
];

const faqs = [
  {
    question: 'Is the inspection and estimate really free?',
    answer: 'Yes! All inspections and estimates are completely free with no obligation. We don\'t charge consultation fees or use high-pressure sales tactics.',
  },
  {
    question: 'How quickly can you schedule an inspection?',
    answer: 'Most inspections are scheduled within 2-5 business days. We offer flexible scheduling including early morning, evening, and Saturday appointments.',
  },
  {
    question: 'Do you offer emergency services?',
    answer: 'Absolutely. Our 24/7 emergency line connects you with on-call technicians for urgent AC breakdowns and system failures. We typically arrive within 2-4 hours.',
  },
  {
    question: 'Do you work with insurance companies?',
    answer: 'Yes! We work with all major insurance companies and provide free claim assistance including documentation, adjuster meetings, and claim negotiation.',
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      <Navigation />

      {/* Hero Section with Background */}
      <section className="relative pt-32 pb-12 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/contact/office-hero.jpg"
            alt="Contact Pompano Beach House AC Repair - Professional office"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-white/88"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/88 to-slate-900"></div>
        </div>

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Get Your <span className="text-cyan-600">Free Estimate</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Ready to keep your home cool and comfortable? Contact us today for a free,
            no-obligation HVAC estimate from our expert team.
          </p>
        </div>
      </section>

      {/* Quick Contact Methods */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.href}
                className="bg-slate-100/80 border border-slate-700/50 hover:border-cyan-600/50 rounded-xl p-6 transition-all hover:shadow-lg hover:shadow-cyan-600/10 group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-cyan-600/10 group-hover:bg-cyan-600/20 p-4 rounded-lg mb-4 transition-colors">
                    <method.icon className="h-8 w-8 text-cyan-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{method.title}</h3>
                  <p className="text-cyan-600 font-semibold mb-2 group-hover:text-cyan-500 transition-colors">
                    {method.value}
                  </p>
                  <p className="text-sm text-slate-500">{method.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <Contact />

      {/* What Happens Next */}
      <section className="py-20 px-4 bg-slate-100/80">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What Happens Next?
            </h2>
            <p className="text-xl text-slate-600">
              Our simple 4-step process makes getting your HVAC service easy and stress-free.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((item, index) => (
              <div
                key={index}
                className="relative"
              >
                <div className="bg-slate-100/80 border border-slate-600/50 rounded-xl p-6 h-full">
                  <div className="absolute -top-4 -left-4 bg-cyan-600 text-slate-900 font-bold text-2xl w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 mt-4">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 text-cyan-600 text-2xl">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Map/Location Image */}
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/contact/service-area.jpg"
                alt="Pompano Beach House AC Repair service area map"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-white/70"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-cyan-600/95 backdrop-blur-sm rounded-xl p-6 text-slate-900 text-center shadow-2xl">
                  <MapPin className="h-12 w-12 mx-auto mb-3" />
                  <div className="font-bold text-xl mb-1">Serving Your Area</div>
                  <div className="text-sm">Pompano Beach & Surrounding Communities</div>
                </div>
              </div>
            </div>

            {/* Service Area Text */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Serving Your Area
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                We proudly serve homeowners and businesses throughout the greater Pompano Beach area
                and surrounding communities. Our central location allows us to respond quickly to
                emergencies and service calls.
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Primary Service Areas:</h3>
                  <div className="grid grid-cols-2 gap-2 text-slate-600">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-cyan-600" />
                      Pompano Beach
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-cyan-600" />
                      Deerfield Beach
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-cyan-600" />
                      Coral Springs
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-cyan-600" />
                      Margate
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-cyan-600" />
                      Lighthouse Point
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-cyan-600" />
                      Parkland
                    </div>
                  </div>
                </div>

                <p className="text-slate-500 text-sm pt-4">
                  Don't see your city? Call us at (954) 289-6718 - we often extend service for
                  projects and may have crews in your area.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-600/10 to-teal-500/10 border-2 border-cyan-600/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Office Hours</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="h-6 w-6 text-cyan-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-slate-900 font-semibold mb-2">Regular Hours:</div>
                    <div className="text-slate-600 space-y-1">
                      <div>Monday - Friday: 7:00 AM - 6:00 PM</div>
                      <div>Saturday: 8:00 AM - 4:00 PM</div>
                      <div>Sunday: Closed</div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-cyan-600/30 pt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-block h-2 w-2 bg-red-500 rounded-full animate-pulse"></span>
                    <span className="text-slate-900 font-semibold">Emergency Service</span>
                  </div>
                  <div className="text-slate-600">
                    Available 24/7/365 for urgent HVAC emergencies
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Contact Us */}
      <section className="py-20 px-4 bg-slate-100/80">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Contact Pompano Beach House AC Repair?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-slate-100/80 border border-slate-600/50 rounded-lg p-6 flex items-start gap-3"
              >
                <CheckCircle className="h-6 w-6 text-cyan-600 flex-shrink-0 mt-1" />
                <span className="text-slate-600">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-slate-100/80 border border-slate-700/50 rounded-xl p-6"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-3">{faq.question}</h3>
                <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-slate-100/80">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Don't wait until a small problem becomes a major expense. Contact us today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+19542896718"
              className="bg-cyan-600 hover:bg-cyan-700 text-slate-900 font-bold text-lg px-10 py-4 rounded-lg transition-all duration-200 hover:scale-105"
            >
              Call: (954) 289-6718
            </a>
            <a
              href="#contact"
              className="bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-lg px-10 py-4 rounded-lg transition-all duration-200 border-2 border-slate-600 hover:border-slate-500"
            >
              Fill Out Form
            </a>
          </div>
          <p className="text-sm text-slate-500 mt-6">
            Licensed | Insured | A+ BBB Rated | Lifetime Warranties | 24/7 Emergency Service
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}

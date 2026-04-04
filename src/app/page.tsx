import { Navigation } from '@/components/landing/Navigation';
import { Hero } from '@/components/landing/Hero';
import { Services } from '@/components/landing/Services';
import { WhyChooseUs } from '@/components/landing/WhyChooseUs';
import { Testimonials } from '@/components/landing/Testimonials';
import { Contact } from '@/components/landing/Contact';
import { Footer } from '@/components/landing/Footer';
import Link from 'next/link';
import { BookOpen, FileText } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Services />
      <WhyChooseUs />

      {/* Knowledge Center Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              HVAC Knowledge <span className="text-cyan-600">Center</span>
            </h2>
            <p className="text-xl text-slate-600">
              Expert guides and comprehensive resources to help you make informed HVAC decisions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Services Section */}
            <Link
              href="/services"
              className="group bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600/50 hover:border-cyan-600/50 rounded-2xl p-10 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-600/10 hover:-translate-y-1"
            >
              <div className="flex items-start gap-6">
                <div className="bg-cyan-600/10 group-hover:bg-cyan-600/20 p-4 rounded-xl transition-colors">
                  <FileText className="h-10 w-10 text-cyan-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors">
                    Service Guides
                  </h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    Detailed guides on AC repair, replacement, emergency HVAC restoration, and more.
                  </p>
                  <div className="text-cyan-600 font-semibold flex items-center gap-2">
                    Browse Services
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Articles Section */}
            <Link
              href="/articles"
              className="group bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600/50 hover:border-cyan-600/50 rounded-2xl p-10 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-600/10 hover:-translate-y-1"
            >
              <div className="flex items-start gap-6">
                <div className="bg-cyan-600/10 group-hover:bg-cyan-600/20 p-4 rounded-xl transition-colors">
                  <BookOpen className="h-10 w-10 text-cyan-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors">
                    Articles & Resources
                  </h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    In-depth articles, cost guides, material comparisons, and expert answers to common questions.
                  </p>
                  <div className="text-cyan-600 font-semibold flex items-center gap-2">
                    Read Articles
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}

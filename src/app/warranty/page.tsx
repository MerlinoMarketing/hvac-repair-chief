import Link from 'next/link';
import { Navigation } from '@/components/landing/Navigation';
import { Footer } from '@/components/landing/Footer';
import { PageHero } from '@/components/landing/PageHero';
import { Shield, CheckCircle, Clock, FileText, Phone, Mail } from 'lucide-react';

export const metadata = {
  title: 'Warranty Information | Pompano Beach House AC Repair',
  description: 'Learn about our comprehensive HVAC warranties. We stand behind our work with industry-leading workmanship and material warranties.',
};

export default function WarrantyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      <Navigation />
      <PageHero
        title="Warranty Protection"
        subtitle="We stand behind every job with comprehensive warranties that protect your investment"
      />

      <main className="py-16 px-4">
        <div className="max-w-5xl mx-auto">

          {/* Warranty Types */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Workmanship Warranty */}
            <div className="bg-slate-100/80 border border-slate-700 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-cyan-600/10 p-3 rounded-lg">
                  <CheckCircle className="h-8 w-8 text-cyan-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Workmanship Warranty</h2>
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Our labor warranty guarantees the quality of our installation and craftsmanship. If any
                defects in our work are discovered within the warranty period, we'll make it right at no
                cost to you.
              </p>
              <div className="bg-slate-50/80 border border-slate-700 rounded-lg p-6">
                <h3 className="text-lg font-bold text-cyan-600 mb-4">Coverage Includes:</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-600 mt-1">•</span>
                    <span>Installation defects and errors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-600 mt-1">•</span>
                    <span>Improper fastening or sealing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-600 mt-1">•</span>
                    <span>Flashing and ventilation issues</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-600 mt-1">•</span>
                    <span>Leaks due to workmanship</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-600 mt-1">•</span>
                    <span>Premature material failure due to installation</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Manufacturer Warranty */}
            <div className="bg-slate-100/80 border border-slate-700 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-cyan-600/10 p-3 rounded-lg">
                  <FileText className="h-8 w-8 text-cyan-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Manufacturer Warranty</h2>
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed">
                All HVAC materials come with manufacturer warranties that protect against material
                defects. We work with top-rated manufacturers to ensure you receive the best protection
                available.
              </p>
              <div className="bg-slate-50/80 border border-slate-700 rounded-lg p-6">
                <h3 className="text-lg font-bold text-cyan-600 mb-4">Coverage Includes:</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-600 mt-1">•</span>
                    <span>Material defects and failures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-600 mt-1">•</span>
                    <span>Premature deterioration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-600 mt-1">•</span>
                    <span>Manufacturing defects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-600 mt-1">•</span>
                    <span>Algae resistance (select products)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-600 mt-1">•</span>
                    <span>Wind damage protection (select products)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Warranty Terms */}
          <section className="bg-slate-100/80 border border-slate-700 rounded-xl p-8 md:p-12 mb-12">
            <div className="flex items-center gap-3 mb-8">
              <Clock className="h-8 w-8 text-cyan-600" />
              <h2 className="text-3xl font-bold text-slate-900">Warranty Duration</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-slate-50/80 border border-slate-700 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-cyan-600 mb-2">5-10 Years</div>
                <div className="text-lg font-semibold text-slate-900 mb-2">Workmanship Warranty</div>
                <div className="text-sm text-slate-500">Varies by project type and scope</div>
              </div>
              <div className="bg-slate-50/80 border border-slate-700 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-cyan-600 mb-2">15-50 Years</div>
                <div className="text-lg font-semibold text-slate-900 mb-2">Material Warranty</div>
                <div className="text-sm text-slate-500">Depends on manufacturer and product</div>
              </div>
              <div className="bg-slate-50/80 border border-slate-700 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-cyan-600 mb-2">Lifetime</div>
                <div className="text-lg font-semibold text-slate-900 mb-2">Premium Options</div>
                <div className="text-sm text-slate-500">Available on select products</div>
              </div>
            </div>

            <div className="bg-cyan-600/10 border border-cyan-500/30 rounded-lg p-6">
              <p className="text-slate-600 leading-relaxed">
                <strong className="text-slate-900">Note:</strong> Specific warranty terms, duration, and coverage
                will be detailed in your service contract. We'll help you understand all warranty options
                available for your HVAC project.
              </p>
            </div>
          </section>

          {/* What's Covered */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">What's Covered</h2>
            <div className="bg-slate-100/80 border border-slate-700 rounded-xl p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold text-cyan-600 mb-4">Covered Issues</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>Leaks due to installation defects</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>Material manufacturing defects</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>Premature material deterioration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>Improper ventilation issues</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>Flashing failures</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-red-400 mb-4">Not Covered</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5 flex-shrink-0">✗</span>
                      <span>Damage from severe weather events (covered by insurance)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5 flex-shrink-0">✗</span>
                      <span>Normal wear and tear</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5 flex-shrink-0">✗</span>
                      <span>Damage from external forces (falling trees, etc.)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5 flex-shrink-0">✗</span>
                      <span>Improper maintenance or neglect</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5 flex-shrink-0">✗</span>
                      <span>Modifications by non-authorized parties</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Making a Warranty Claim */}
          <section className="bg-slate-100/80 border border-slate-700 rounded-xl p-8 md:p-12 mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Making a Warranty Claim</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              If you discover an issue that may be covered under warranty, follow these simple steps:
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-cyan-600 text-slate-900 rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Contact Us</h3>
                  <p className="text-slate-600">
                    Call us at <a href="tel:+19542896718" className="text-cyan-600 hover:text-cyan-500">(954) 289-6718</a> or
                    email <a href="mailto:warranty@pompanobeachhouseacrepair.com" className="text-cyan-600 hover:text-cyan-500">warranty@pompanobeachhouseacrepair.com</a> to
                    report the issue.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-cyan-600 text-slate-900 rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Document the Issue</h3>
                  <p className="text-slate-600">
                    Take photos of the problem area and note when you first discovered the issue. This helps us
                    assess the situation quickly.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-cyan-600 text-slate-900 rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Schedule Inspection</h3>
                  <p className="text-slate-600">
                    We'll schedule a convenient time to inspect your HVAC system and determine the cause of the issue.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-cyan-600 text-slate-900 rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Resolution</h3>
                  <p className="text-slate-600">
                    If the issue is covered under warranty, we'll repair or replace the affected area at no cost to you.
                    Most warranty work is completed within 5-7 business days.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* NATE Certified */}
          <section className="bg-gradient-to-br from-cyan-600/10 to-slate-800/50 border border-cyan-500/30 rounded-xl p-8 md:p-12 mb-12 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">NATE Certified Contractor</h2>
            <p className="text-slate-600 text-lg mb-6 max-w-3xl mx-auto leading-relaxed">
              As a NATE Certified Contractor, we can offer enhanced warranty options including GAF's exclusive
              System Plus and Golden Pledge warranties - some of the best protection in the industry.
            </p>
            <div className="inline-flex items-center gap-2 bg-slate-50/80 border border-slate-700 rounded-lg px-6 py-3">
              <Shield className="h-6 w-6 text-cyan-600" />
              <span className="text-slate-900 font-semibold">Top 3% of HVAC Contractors in North America</span>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-slate-100/80 border border-slate-700 rounded-xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Questions About Our Warranties?
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Our team is happy to explain all warranty options and help you choose the best protection for your investment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+19542896718"
                className="inline-flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-slate-900 font-bold px-8 py-4 rounded-lg transition shadow-lg shadow-cyan-600/20"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                Call: (954) 289-6718
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold px-8 py-4 rounded-lg transition border border-slate-600"
              >
                <Mail className="h-5 w-5" aria-hidden="true" />
                Get Free Estimate
              </Link>
            </div>
          </section>

          <div className="mt-12 pt-8 border-t border-slate-700 text-center">
            <Link
              href="/"
              className="text-cyan-600 hover:text-cyan-500 transition inline-flex items-center gap-2"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

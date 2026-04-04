import Link from 'next/link';
import { Navigation } from '@/components/landing/Navigation';
import { Footer } from '@/components/landing/Footer';
import { PageHero } from '@/components/landing/PageHero';

export const metadata = {
  title: 'Terms of Service | Pompano Beach House AC Repair',
  description: 'Terms and conditions for using Pompano Beach House AC Repair services. Review our service agreements and policies.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      <Navigation />
      <PageHero
        title="Terms of Service"
        subtitle="Please review our service terms and conditions"
      />

      <main className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-slate-500 mb-8">
            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </div>

          <div className="prose prose-lg prose-invert max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-cyan-600 mb-4">Agreement to Terms</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                By accessing or using Pompano Beach House AC Repair's services, you agree to be bound by these Terms of Service.
                If you disagree with any part of these terms, please do not use our services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-cyan-600 mb-4">Services Overview</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Pompano Beach House AC Repair provides professional HVAC services including:
              </p>
              <ul className="text-slate-600 space-y-2 mb-6">
                <li>Residential AC repair and replacement</li>
                <li>Commercial HVAC services</li>
                <li>HVAC inspections and assessments</li>
                <li>Duct cleaning and indoor air quality services</li>
                <li>Insurance claim assistance</li>
                <li>Emergency HVAC services</li>
              </ul>
              <p className="text-slate-600 leading-relaxed mb-4">
                All services are subject to availability and proper licensing requirements in your area.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-cyan-600 mb-4">Estimates and Quotes</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Free estimates are provided based on information you supply and our initial assessment. Final pricing
                may vary based on:
              </p>
              <ul className="text-slate-600 space-y-2 mb-6">
                <li>Detailed inspection findings</li>
                <li>Material costs and availability</li>
                <li>Unforeseen structural issues</li>
                <li>Weather-related delays</li>
                <li>Changes to project scope</li>
              </ul>
              <p className="text-slate-600 leading-relaxed mb-4">
                All final pricing will be documented in a written contract before work begins.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-cyan-600 mb-4">Service Contracts</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Once you accept our proposal, a service contract will be executed that includes:
              </p>
              <ul className="text-slate-600 space-y-2 mb-6">
                <li>Detailed scope of work</li>
                <li>Project timeline and milestones</li>
                <li>Total cost and payment schedule</li>
                <li>Materials and specifications</li>
                <li>Warranty information</li>
                <li>Cancellation and modification terms</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-cyan-600 mb-4">Payment Terms</h2>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Payment Schedule</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Payment terms vary by project size and will be outlined in your contract. Typical terms include:
              </p>
              <ul className="text-slate-600 space-y-2 mb-6">
                <li>Deposit required to schedule work</li>
                <li>Progress payments at specific milestones</li>
                <li>Final payment upon completion and inspection</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-900 mb-3">Accepted Payment Methods</h3>
              <ul className="text-slate-600 space-y-2 mb-6">
                <li>Cash, check, or money order</li>
                <li>Credit and debit cards</li>
                <li>Financing options (subject to approval)</li>
                <li>Insurance payments (when applicable)</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-900 mb-3">Late Payments</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Late payments may result in project suspension and additional fees as outlined in your contract.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-cyan-600 mb-4">Warranties and Guarantees</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We stand behind our work with comprehensive warranties:
              </p>
              <ul className="text-slate-600 space-y-2 mb-6">
                <li><strong>Workmanship Warranty:</strong> Our labor is guaranteed against defects</li>
                <li><strong>Materials Warranty:</strong> Manufacturer warranties on all materials used</li>
                <li><strong>Extended Protection:</strong> Optional extended warranty plans available</li>
              </ul>
              <p className="text-slate-600 leading-relaxed mb-4">
                Specific warranty terms and durations will be provided in your service contract.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-cyan-600 mb-4">Cancellations and Changes</h2>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Cancellation Policy</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                You may cancel scheduled services with written notice. Cancellation fees may apply based on:
              </p>
              <ul className="text-slate-600 space-y-2 mb-6">
                <li>Timing of cancellation notice</li>
                <li>Materials already ordered or purchased</li>
                <li>Work already completed</li>
                <li>Scheduling commitments made</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-900 mb-3">Project Modifications</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Changes to the project scope must be documented in writing and may affect pricing and timelines.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-cyan-600 mb-4">Liability and Insurance</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Pompano Beach House AC Repair maintains:
              </p>
              <ul className="text-slate-600 space-y-2 mb-6">
                <li>General liability insurance</li>
                <li>Workers' compensation insurance</li>
                <li>Professional licensing and bonding</li>
              </ul>
              <p className="text-slate-600 leading-relaxed mb-4">
                Our liability is limited to the terms outlined in your service contract. We are not responsible for
                damages resulting from pre-existing conditions, acts of nature, or issues beyond our control.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-cyan-600 mb-4">Customer Responsibilities</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                As a customer, you agree to:
              </p>
              <ul className="text-slate-600 space-y-2 mb-6">
                <li>Provide accurate information about your property</li>
                <li>Ensure access to the work area</li>
                <li>Remove or protect personal property as needed</li>
                <li>Secure pets during work hours</li>
                <li>Notify us of any concerns promptly</li>
                <li>Make payments according to the agreed schedule</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-cyan-600 mb-4">Dispute Resolution</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                In the event of a dispute, we encourage direct communication to resolve issues. If necessary:
              </p>
              <ul className="text-slate-600 space-y-2 mb-6">
                <li>Complaints should be submitted in writing</li>
                <li>We will respond within 5 business days</li>
                <li>Mediation may be required before legal action</li>
                <li>Disputes will be governed by local state laws</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-cyan-600 mb-4">Intellectual Property</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                All content on our website, including text, graphics, logos, and images, is the property of Pompano Beach House AC Repair
                and protected by copyright laws. Unauthorized use is prohibited.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-cyan-600 mb-4">Limitation of Liability</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Pompano Beach House AC Repair's total liability for any claim shall not exceed the total amount paid for the specific
                service in question. We are not liable for indirect, incidental, or consequential damages.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-cyan-600 mb-4">Changes to Terms</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately
                upon posting to our website. Continued use of our services constitutes acceptance of modified terms.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-cyan-600 mb-4">Contact Information</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-slate-100/80 border border-slate-700 rounded-lg p-6 mb-6">
                <ul className="text-slate-600 space-y-3">
                  <li><strong className="text-slate-900">Email:</strong> info@pompanobeachhouseacrepair.com</li>
                  <li><strong className="text-slate-900">Phone:</strong> (954) 289-6718</li>
                  <li><strong className="text-slate-900">Address:</strong> 123 Main Street, Pompano Beach, FL 62701</li>
                </ul>
              </div>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-700">
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

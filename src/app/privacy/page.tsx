import Link from 'next/link';
import { Navigation } from '@/components/landing/Navigation';
import { Footer } from '@/components/landing/Footer';
import { PageHero } from '@/components/landing/PageHero';

export const metadata = {
  title: 'Privacy Policy | Pompano Beach House AC Repair',
  description: 'Privacy policy for Pompano Beach House AC Repair services. Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      <Navigation />
      <PageHero
        title="Privacy Policy"
        subtitle="Your privacy and data security are our top priorities"
      />

      <main className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-slate-500 mb-8">
            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </div>

          <div className="prose prose-lg prose-invert max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-cyan-600 mb-4">Introduction</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                At Pompano Beach House AC Repair, we are committed to protecting your privacy and ensuring the security of your personal information.
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website
                or use our services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-cyan-600 mb-4">Information We Collect</h2>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Personal Information</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="text-slate-600 space-y-2 mb-6">
                <li>Request a quote or estimate</li>
                <li>Contact us for service inquiries</li>
                <li>Subscribe to our newsletter</li>
                <li>Submit a review or testimonial</li>
                <li>Apply for employment</li>
              </ul>
              <p className="text-slate-600 leading-relaxed mb-4">
                This information may include your name, email address, phone number, mailing address, and property details.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mb-3">Automatically Collected Information</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                When you visit our website, we may automatically collect certain information about your device, including:
              </p>
              <ul className="text-slate-600 space-y-2 mb-6">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages visited and time spent on our site</li>
                <li>Referring website</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-cyan-600 mb-4">How We Use Your Information</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="text-slate-600 space-y-2 mb-6">
                <li>Provide HVAC services and respond to your inquiries</li>
                <li>Process service requests and schedule appointments</li>
                <li>Send you updates about your service requests</li>
                <li>Improve our website and services</li>
                <li>Send promotional communications (with your consent)</li>
                <li>Comply with legal obligations</li>
                <li>Prevent fraud and enhance security</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-cyan-600 mb-4">Information Sharing and Disclosure</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information with:
              </p>
              <ul className="text-slate-600 space-y-2 mb-6">
                <li><strong>Service Providers:</strong> Third-party companies that help us operate our business (e.g., payment processors, scheduling software)</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-cyan-600 mb-4">Data Security</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information
                from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the
                internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-cyan-600 mb-4">Your Privacy Rights</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Depending on your location, you may have the following rights:
              </p>
              <ul className="text-slate-600 space-y-2 mb-6">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Object to processing of your personal information</li>
              </ul>
              <p className="text-slate-600 leading-relaxed mb-4">
                To exercise these rights, please contact us using the information provided below.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-cyan-600 mb-4">Cookies and Tracking Technologies</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We use cookies and similar tracking technologies to enhance your browsing experience and analyze website traffic.
                You can control cookies through your browser settings, but disabling them may affect website functionality.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-cyan-600 mb-4">Children's Privacy</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information
                from children. If you believe we have collected information from a child, please contact us immediately.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-cyan-600 mb-4">Changes to This Privacy Policy</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
                Privacy Policy on this page and updating the "Last Updated" date.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-cyan-600 mb-4">Contact Us</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                If you have questions or concerns about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="bg-slate-100/80 border border-slate-700 rounded-lg p-6 mb-6">
                <ul className="text-slate-600 space-y-3">
                  <li><strong className="text-slate-900">Email:</strong> privacy@pompanobeachhouseacrepair.com</li>
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

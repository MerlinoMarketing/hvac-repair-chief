import type { Metadata } from "next";

import { brand } from "@/config/brand";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { MobileCallBar } from "@/components/layout/mobile-call-bar";
import { Breadcrumb } from "@/components/shared/breadcrumb";
import { getBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Privacy Policy | HVAC Repair Chief",
  description: `Privacy policy for ${brand.name}. Learn how we collect, use, and protect your personal information when you use our website and HVAC services.`,
};

export default function PrivacyPolicyPage() {
  const breadcrumbSchema = getBreadcrumbSchema([{ label: "Privacy Policy" }]);
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Navbar />
      <main id="main-content">
        <section className="relative overflow-hidden border-b-2 border-border pb-16 pt-32 sm:pt-36">
          <div
            className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] via-transparent to-accent/[0.03]"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Breadcrumb items={[{ label: "Privacy Policy" }]} />
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              Legal
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-balance font-semibold tracking-tight text-gray-900">
              Privacy Policy
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-600">
              Last updated: January 1, {currentYear}
            </p>
          </div>
        </section>

        <section className="section-shell">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="prose prose-gray max-w-none space-y-10 text-sm leading-7 text-gray-600">
              <div className="space-y-4">
                <h2 className="font-display text-xl font-semibold text-gray-900">
                  1. Introduction
                </h2>
                <p>
                  {brand.legalName} (&quot;{brand.name},&quot; &quot;we,&quot;
                  &quot;us,&quot; or &quot;our&quot;) respects your privacy and
                  is committed to protecting the personal information you share
                  with us. This Privacy Policy explains how we collect, use,
                  disclose, and safeguard your information when you visit our
                  website at{" "}
                  <a
                    href={brand.website}
                    className="text-primary underline"
                  >
                    {brand.website}
                  </a>{" "}
                  or use our HVAC services in South Florida.
                </p>
                <p>
                  By using our website or requesting our services, you consent
                  to the data practices described in this policy. If you do not
                  agree with the terms of this Privacy Policy, please do not
                  access the website or submit personal information.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-display text-xl font-semibold text-gray-900">
                  2. Information We Collect
                </h2>
                <h3 className="text-base font-semibold text-gray-900">
                  Information You Provide
                </h3>
                <p>
                  We collect personal information that you voluntarily provide
                  to us when you:
                </p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    Fill out a contact form or service request on our website
                    (name, email address, phone number, property address, and
                    description of your HVAC issue)
                  </li>
                  <li>
                    Call our office or emergency dispatch line (phone number,
                    call recordings for quality assurance)
                  </li>
                  <li>
                    Schedule a service appointment (service address, preferred
                    dates, system information)
                  </li>
                  <li>
                    Apply for financing (financial information as required by
                    our lending partners — processed by the lender, not stored
                    by us)
                  </li>
                  <li>
                    Leave a review or testimonial (name and review content)
                  </li>
                </ul>

                <h3 className="text-base font-semibold text-gray-900">
                  Information Collected Automatically
                </h3>
                <p>
                  When you visit our website, we automatically collect certain
                  information about your device and browsing activity:
                </p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    IP address, browser type, operating system, and device
                    information
                  </li>
                  <li>
                    Pages viewed, time spent on pages, and navigation patterns
                  </li>
                  <li>Referring website or search terms that led you to us</li>
                  <li>Geographic location (city/region level, not precise)</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="font-display text-xl font-semibold text-gray-900">
                  3. How We Use Your Information
                </h2>
                <p>We use the information we collect to:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    Respond to your service inquiries and schedule appointments
                  </li>
                  <li>
                    Provide HVAC repair, installation, and maintenance services
                  </li>
                  <li>
                    Send appointment confirmations, service reminders, and
                    follow-up communications
                  </li>
                  <li>Process payments and facilitate financing applications</li>
                  <li>
                    Improve our website, services, and customer experience
                  </li>
                  <li>
                    Comply with legal obligations and protect our rights
                  </li>
                  <li>
                    Send marketing communications (only with your consent, and
                    you may opt out at any time)
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="font-display text-xl font-semibold text-gray-900">
                  4. Cookies and Tracking Technologies
                </h2>
                <p>
                  Our website uses cookies and similar tracking technologies to
                  enhance your browsing experience and analyze site traffic.
                </p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    <strong>Essential cookies:</strong> Required for website
                    functionality, such as session management and security
                    features. These cannot be disabled.
                  </li>
                  <li>
                    <strong>Analytics cookies:</strong> We use Vercel Analytics
                    and Vercel Speed Insights to understand how visitors
                    interact with our site. These tools collect anonymized usage
                    data and do not track users across other websites.
                  </li>
                  <li>
                    <strong>Third-party cookies:</strong> If you interact with
                    embedded content from third parties (such as Google Maps),
                    those services may set their own cookies subject to their
                    own privacy policies.
                  </li>
                </ul>
                <p>
                  You can control cookie preferences through your browser
                  settings. Disabling cookies may affect certain website
                  functionality.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-display text-xl font-semibold text-gray-900">
                  5. Third-Party Services
                </h2>
                <p>
                  We use the following third-party services that may collect or
                  process your data:
                </p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    <strong>Vercel:</strong> Website hosting and analytics
                    (usage data, performance metrics)
                  </li>
                  <li>
                    <strong>Google Maps:</strong> Embedded maps for our
                    location pages (subject to Google&apos;s Privacy Policy)
                  </li>
                  <li>
                    <strong>Financing Partners:</strong> Credit applications are
                    processed directly by our lending partners and subject to
                    their privacy policies. We do not store your financial
                    information.
                  </li>
                </ul>
                <p>
                  We do not sell, rent, or trade your personal information to
                  third parties for marketing purposes.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-display text-xl font-semibold text-gray-900">
                  6. Data Security
                </h2>
                <p>
                  We implement appropriate technical and organizational
                  security measures to protect your personal information,
                  including:
                </p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    SSL/TLS encryption for all data transmitted between your
                    browser and our website
                  </li>
                  <li>
                    Secure storage of contact form submissions with restricted
                    access
                  </li>
                  <li>
                    Regular security reviews of our website and hosting
                    infrastructure
                  </li>
                </ul>
                <p>
                  While we strive to protect your personal information, no
                  method of electronic transmission or storage is 100% secure.
                  We cannot guarantee absolute security of your data.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-display text-xl font-semibold text-gray-900">
                  7. Your Rights
                </h2>
                <p>
                  Depending on your location, you may have the following rights
                  regarding your personal information:
                </p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    <strong>Access:</strong> Request a copy of the personal
                    information we hold about you
                  </li>
                  <li>
                    <strong>Correction:</strong> Request that we correct
                    inaccurate or incomplete information
                  </li>
                  <li>
                    <strong>Deletion:</strong> Request that we delete your
                    personal information, subject to legal retention
                    requirements
                  </li>
                  <li>
                    <strong>Opt-out:</strong> Unsubscribe from marketing
                    communications at any time
                  </li>
                </ul>
                <p>
                  To exercise any of these rights, contact us at{" "}
                  <a
                    href={`mailto:${brand.email}`}
                    className="text-primary underline"
                  >
                    {brand.email}
                  </a>
                  . We will respond to your request within 30 days.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-display text-xl font-semibold text-gray-900">
                  8. Data Retention
                </h2>
                <p>
                  We retain your personal information for as long as necessary
                  to provide our services and fulfill the purposes described in
                  this policy. Service records are retained for a minimum of 7
                  years as required by Florida state business regulations.
                  Contact form submissions are retained for 2 years unless you
                  request earlier deletion.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-display text-xl font-semibold text-gray-900">
                  9. Children&apos;s Privacy
                </h2>
                <p>
                  Our website and services are not directed to individuals
                  under the age of 18. We do not knowingly collect personal
                  information from children. If you believe we have
                  inadvertently collected information from a child, please
                  contact us immediately and we will take steps to delete it.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-display text-xl font-semibold text-gray-900">
                  10. Changes to This Policy
                </h2>
                <p>
                  We may update this Privacy Policy from time to time to
                  reflect changes in our practices or applicable law. The
                  &quot;Last updated&quot; date at the top of this page
                  indicates when the policy was last revised. We encourage you
                  to review this page periodically.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-display text-xl font-semibold text-gray-900">
                  11. Contact Us
                </h2>
                <p>
                  If you have questions about this Privacy Policy or our data
                  practices, please contact us:
                </p>
                <div className="chief-card rounded-md bg-white p-6">
                  <p className="font-semibold text-gray-900">{brand.legalName}</p>
                  <p className="mt-1">
                    Email:{" "}
                    <a
                      href={`mailto:${brand.email}`}
                      className="text-primary underline"
                    >
                      {brand.email}
                    </a>
                  </p>
                  <p>
                    Website:{" "}
                    <a
                      href={brand.website}
                      className="text-primary underline"
                    >
                      {brand.website}
                    </a>
                  </p>
                  <p>Service Area: Boca Raton &amp; Fort Lauderdale, FL</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileCallBar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}

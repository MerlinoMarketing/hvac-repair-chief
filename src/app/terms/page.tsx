import type { Metadata } from "next";

import { brand } from "@/config/brand";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { MobileCallBar } from "@/components/layout/mobile-call-bar";
import { Breadcrumb } from "@/components/shared/breadcrumb";
import { getBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Terms of Service | HVAC Repair Chief",
  description: `Terms of service for ${brand.name}. Review our service agreements, warranties, payment terms, and cancellation policies for HVAC work in South Florida.`,
};

export default function TermsPage() {
  const breadcrumbSchema = getBreadcrumbSchema([{ label: "Terms of Service" }]);
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
            <Breadcrumb items={[{ label: "Terms of Service" }]} />
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              Legal
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-balance font-semibold tracking-tight text-gray-900">
              Terms of Service
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
                  1. Acceptance of Terms
                </h2>
                <p>
                  These Terms of Service (&quot;Terms&quot;) govern your use of
                  the {brand.legalName} (&quot;{brand.name},&quot;
                  &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) website
                  and HVAC services. By accessing our website at{" "}
                  <a href={brand.website} className="text-primary underline">
                    {brand.website}
                  </a>{" "}
                  or engaging our services, you agree to be bound by these
                  Terms. If you do not agree, please do not use our website or
                  services.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-display text-xl font-semibold text-gray-900">
                  2. Services Provided
                </h2>
                <p>
                  {brand.name} provides residential and light commercial HVAC
                  services in the South Florida area, including but not limited
                  to:
                </p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    Air conditioning repair, installation, and replacement
                  </li>
                  <li>Heating system repair and maintenance</li>
                  <li>Ductwork cleaning, sealing, and modification</li>
                  <li>Preventive maintenance plans and seasonal tune-ups</li>
                  <li>24/7 emergency HVAC response</li>
                  <li>Indoor air quality assessment and improvement</li>
                </ul>
                <p>
                  All services are performed by Florida-licensed, EPA
                  608-certified technicians and are subject to availability in
                  your service area.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-display text-xl font-semibold text-gray-900">
                  3. Service Agreements and Estimates
                </h2>
                <p>
                  Before commencing any repair or installation work, we provide
                  a written estimate detailing the scope of work, materials,
                  labor costs, and total project price. By signing the estimate
                  or providing verbal authorization (documented in our records),
                  you agree to the quoted price and scope.
                </p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    Estimates are valid for 30 days from the date of issue
                    unless otherwise stated.
                  </li>
                  <li>
                    If additional work is discovered during a repair that was
                    not included in the original estimate, we will notify you
                    and obtain approval before proceeding. No additional charges
                    will be incurred without your consent.
                  </li>
                  <li>
                    Diagnostic service calls carry a flat-rate dispatch fee,
                    which is disclosed at the time of scheduling. This fee is
                    waived if you authorize and proceed with the recommended
                    repair.
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="font-display text-xl font-semibold text-gray-900">
                  4. Warranties
                </h2>
                <h3 className="text-base font-semibold text-gray-900">
                  Labor Warranty
                </h3>
                <p>
                  All repair work performed by {brand.name} is backed by a
                  90-day labor warranty from the date of service completion. If
                  the same issue recurs within this period due to our
                  workmanship, we will return and correct it at no additional
                  charge.
                </p>
                <h3 className="text-base font-semibold text-gray-900">
                  Installation Warranty
                </h3>
                <p>
                  New system installations include the manufacturer&apos;s
                  equipment warranty (typically 5-10 years depending on the
                  manufacturer and product line) plus a 1-year {brand.name}{" "}
                  labor warranty. We handle all manufacturer warranty
                  registration on your behalf at the time of installation.
                </p>
                <h3 className="text-base font-semibold text-gray-900">
                  Warranty Exclusions
                </h3>
                <p>Warranties do not cover:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    Damage caused by misuse, neglect, power surges, lightning
                    strikes, flooding, or other acts of nature
                  </li>
                  <li>
                    Modifications or repairs performed by unauthorized third
                    parties after our work is completed
                  </li>
                  <li>
                    Pre-existing conditions not included in the original scope
                    of work
                  </li>
                  <li>
                    Normal wear and tear on consumable components such as
                    filters and batteries
                  </li>
                  <li>
                    Systems that have not received manufacturer-recommended
                    maintenance
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="font-display text-xl font-semibold text-gray-900">
                  5. Payment Terms
                </h2>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    <strong>Repair services:</strong> Payment is due in full
                    upon completion of the work. We accept cash, all major
                    credit cards (Visa, Mastercard, American Express,
                    Discover), and personal checks.
                  </li>
                  <li>
                    <strong>Installation projects:</strong> A deposit of up to
                    50% may be required at the time of contract signing for new
                    installations. The remaining balance is due upon completion
                    and your satisfaction with the work.
                  </li>
                  <li>
                    <strong>Financing:</strong> Qualifying customers may apply
                    for third-party financing through our lending partners.
                    Financing terms, interest rates, and eligibility are
                    determined by the lending partner and subject to credit
                    approval.
                  </li>
                  <li>
                    <strong>Maintenance plans:</strong> Plan fees are billed
                    annually or semi-annually depending on the plan selected.
                    Plan pricing is locked for the term of the agreement.
                  </li>
                  <li>
                    <strong>Late payments:</strong> Invoices not paid within 30
                    days of the due date may be subject to a late fee of 1.5%
                    per month on the outstanding balance, to the extent
                    permitted by Florida law.
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="font-display text-xl font-semibold text-gray-900">
                  6. Cancellation and Rescheduling
                </h2>
                <h3 className="text-base font-semibold text-gray-900">
                  Service Appointments
                </h3>
                <p>
                  You may cancel or reschedule a service appointment at no
                  charge by providing at least 24 hours&apos; notice prior to
                  the scheduled appointment time. Cancellations with less than
                  24 hours&apos; notice may be subject to a cancellation fee
                  equal to the diagnostic dispatch fee.
                </p>
                <h3 className="text-base font-semibold text-gray-900">
                  Installation Projects
                </h3>
                <p>
                  Installation contracts may be cancelled within 3 business
                  days of signing without penalty, in accordance with
                  Florida&apos;s consumer protection regulations. After this
                  period, cancellation may result in forfeiture of the deposit
                  if materials have already been ordered or custom fabrication
                  has begun.
                </p>
                <h3 className="text-base font-semibold text-gray-900">
                  Maintenance Plans
                </h3>
                <p>
                  Maintenance plan members may cancel their plan at any time.
                  If cancelled before the next scheduled tune-up, a prorated
                  refund will be issued for unused services. No refund is
                  available after both annual tune-ups have been performed.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-display text-xl font-semibold text-gray-900">
                  7. Emergency Service Terms
                </h2>
                <p>
                  Our 24/7 emergency HVAC service is available for urgent
                  situations including complete AC failure, refrigerant leaks,
                  electrical faults, and other safety-critical issues.
                </p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    Emergency service rates are the same as our standard
                    service rates. We do not charge overtime premiums for
                    after-hours, weekend, or holiday emergency calls.
                  </li>
                  <li>
                    Response times are estimated and not guaranteed. We target
                    arrival within 60 minutes but actual response time depends
                    on crew availability, traffic conditions, and demand
                    volume.
                  </li>
                  <li>
                    Emergency repairs focus on restoring safe, functional
                    operation. If a comprehensive repair requires parts that
                    are not on the truck, a temporary stabilization will be
                    performed and a follow-up visit scheduled at no additional
                    dispatch charge.
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="font-display text-xl font-semibold text-gray-900">
                  8. Limitation of Liability
                </h2>
                <p>
                  To the fullest extent permitted by Florida law, {brand.name}
                  &apos;s total liability for any claim arising out of or
                  related to our services shall not exceed the total amount
                  paid by you for the specific service giving rise to the
                  claim.
                </p>
                <p>
                  We are not liable for indirect, incidental, consequential, or
                  punitive damages including but not limited to loss of use,
                  lost profits, property damage beyond the HVAC system itself,
                  or personal discomfort resulting from system downtime.
                </p>
                <p>
                  Nothing in these Terms limits our liability for personal
                  injury or property damage caused by our gross negligence or
                  willful misconduct.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-display text-xl font-semibold text-gray-900">
                  9. Property Access and Conditions
                </h2>
                <p>
                  By scheduling a service appointment, you grant our
                  technicians reasonable access to your property to perform the
                  agreed-upon work. You are responsible for:
                </p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    Ensuring clear, safe access to indoor and outdoor HVAC
                    equipment
                  </li>
                  <li>
                    Securing pets during the service visit
                  </li>
                  <li>
                    Disclosing any known hazards on the property (asbestos,
                    mold, structural issues)
                  </li>
                  <li>
                    Providing electrical power and water access as needed for
                    the work
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="font-display text-xl font-semibold text-gray-900">
                  10. Permits and Code Compliance
                </h2>
                <p>
                  For work that requires building permits (typically new
                  installations and major system modifications), {brand.name}{" "}
                  handles all permit applications and coordinates required
                  inspections with Broward County or Palm Beach County building
                  departments. Permit fees are included in our installation
                  quotes unless otherwise noted.
                </p>
                <p>
                  All work is performed in compliance with applicable Florida
                  building codes, mechanical codes, and local ordinances. If
                  pre-existing conditions at your property do not meet current
                  code requirements, we will advise you of any additional work
                  needed to bring the installation into compliance.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-display text-xl font-semibold text-gray-900">
                  11. Dispute Resolution
                </h2>
                <p>
                  If you have a concern about our work or services, please
                  contact us directly at{" "}
                  <a
                    href={`mailto:${brand.email}`}
                    className="text-primary underline"
                  >
                    {brand.email}
                  </a>{" "}
                  so we can resolve the matter promptly. We are committed to
                  customer satisfaction and will work in good faith to address
                  any issues.
                </p>
                <p>
                  Any disputes that cannot be resolved informally shall be
                  governed by the laws of the State of Florida and resolved in
                  the courts of Palm Beach County or Broward County, Florida.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-display text-xl font-semibold text-gray-900">
                  12. Website Use
                </h2>
                <p>
                  The content on our website is provided for informational
                  purposes only. While we strive to keep information accurate
                  and current, we make no warranties about the completeness,
                  reliability, or accuracy of any content on the site.
                </p>
                <p>
                  You agree not to use the website for any unlawful purpose, to
                  attempt to gain unauthorized access to any part of the site,
                  or to interfere with the website&apos;s functionality.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-display text-xl font-semibold text-gray-900">
                  13. Changes to These Terms
                </h2>
                <p>
                  We reserve the right to update these Terms at any time. The
                  &quot;Last updated&quot; date at the top of this page
                  indicates when the Terms were last revised. Continued use of
                  our website or services after changes constitutes your
                  acceptance of the revised Terms.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-display text-xl font-semibold text-gray-900">
                  14. Contact Information
                </h2>
                <p>
                  If you have questions about these Terms of Service, please
                  contact us:
                </p>
                <div className="chief-card rounded-md bg-white p-6">
                  <p className="font-semibold text-gray-900">
                    {brand.legalName}
                  </p>
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

import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Calculator,
  CheckCircle2,
  Clock3,
  CreditCard,
  DollarSign,
  FileText,
  Shield,
} from "lucide-react";

import { brand } from "@/config/brand";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { MobileCallBar } from "@/components/layout/mobile-call-bar";
import { CtaSection } from "@/components/shared/cta-section";
import { Breadcrumb } from "@/components/shared/breadcrumb";
import { getBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Financing | Affordable HVAC Payment Plans",
  description: `Flexible financing options for HVAC installation and replacement. 0% APR available, low monthly payments starting at $89/mo. ${brand.name} makes comfort affordable.`,
};

const plans = [
  {
    name: "Standard Plan",
    rate: "9.99% APR",
    term: "36 Months",
    highlight: "Low Monthly Payments",
    description:
      "Our most popular financing option for AC replacements and new installations. Fixed monthly payments that fit your budget with no prepayment penalties.",
    features: [
      "Fixed monthly payments from $89/mo",
      "No prepayment penalties",
      "Approved in minutes",
      "Available for systems $3,000+",
    ],
  },
  {
    name: "0% APR Promotional",
    rate: "0% APR",
    term: "12 Months",
    highlight: "Pay No Interest",
    description:
      "Zero-interest financing for 12 months on qualifying HVAC installations. Pay off your new system with no interest charges if the balance is paid within the promotional period.",
    features: [
      "Zero interest for 12 months",
      "Available on systems $5,000+",
      "Equal monthly payments",
      "Subject to credit approval",
    ],
  },
  {
    name: "Extended Term",
    rate: "7.99% APR",
    term: "60 Months",
    highlight: "Lowest Monthly Payment",
    description:
      "Spread the cost of a premium high-efficiency system over 5 years. Ideal for homeowners investing in top-tier equipment with the highest SEER2 ratings.",
    features: [
      "Payments as low as $65/mo",
      "Best for premium systems",
      "Fixed rate for full term",
      "Available for systems $8,000+",
    ],
  },
];

const qualifications = [
  "Valid government-issued ID",
  "Social Security number for credit check",
  "Proof of homeownership or landlord authorization",
  "Minimum credit score of 580 (varies by plan)",
  "Stable income verification",
  "Property must be in our South Florida service area",
];

const processSteps = [
  {
    icon: Calculator,
    title: "Free In-Home Estimate",
    description:
      "We evaluate your home, recommend the right system, and provide a detailed written quote with total project cost.",
  },
  {
    icon: FileText,
    title: "Quick Application",
    description:
      "Complete a simple financing application on-site or online. Most approvals come back within minutes — no obligation.",
  },
  {
    icon: BadgeCheck,
    title: "Review Your Options",
    description:
      "Our team walks you through approved plans, monthly payment amounts, and terms so you can choose what works best.",
  },
  {
    icon: Clock3,
    title: "Schedule Installation",
    description:
      "Once you select a plan, we schedule your installation — often within days. Your first payment is not due until after the work is complete.",
  },
];

export default function FinancingPage() {
  const breadcrumbSchema = getBreadcrumbSchema([{ label: "Financing" }]);

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
            <Breadcrumb items={[{ label: "Financing" }]} />
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              Financing Options
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-balance font-semibold tracking-tight text-gray-900">
              Affordable HVAC financing — comfort should not wait.
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-600">
              A new HVAC system is a significant investment, typically ranging
              from $8,000 to $20,000. We partner with trusted lending providers
              to offer flexible payment plans so you can get the comfort you
              need today and pay over time.
            </p>
          </div>
        </section>

        {/* Financing plans */}
        <section className="section-shell">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl font-semibold text-gray-900">
              Choose a plan that fits your budget
            </h2>
            <p className="mt-2 max-w-2xl text-base text-gray-600">
              All plans include fixed monthly payments, no hidden fees, and no
              prepayment penalties. Subject to credit approval.
            </p>
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className="chief-card relative flex flex-col rounded-md bg-white p-6"
                >
                  <div className="rounded-md bg-primary/10 px-3 py-1 text-xs font-semibold text-primary self-start">
                    {plan.highlight}
                  </div>
                  <h3 className="mt-4 font-display text-xl font-semibold text-gray-900">
                    {plan.name}
                  </h3>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-primary">
                      {plan.rate}
                    </span>
                    <span className="text-sm text-gray-500">
                      / {plan.term}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    {plan.description}
                  </p>
                  <ul className="mt-6 flex-1 space-y-3">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-gray-700"
                      >
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-md border-2 border-primary/30 bg-white px-6 text-sm font-semibold text-gray-900 transition hover:border-primary/50 hover:bg-primary/[0.03]"
                  >
                    Check Your Options
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why finance */}
        <section className="section-shell border-t-2 border-border bg-secondary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl font-semibold text-gray-900">
              Why finance your HVAC system?
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: DollarSign,
                  title: "Preserve Cash Flow",
                  desc: "Keep your savings intact for other priorities. Spread the cost of a new system over affordable monthly payments.",
                },
                {
                  icon: Shield,
                  title: "Immediate Comfort",
                  desc: "Do not suffer through another South Florida summer with a failing AC. Get your new system installed now and start paying later.",
                },
                {
                  icon: CreditCard,
                  title: "Build Credit",
                  desc: "On-time payments on your HVAC financing are reported to credit bureaus, helping build your credit profile over time.",
                },
                {
                  icon: BadgeCheck,
                  title: "Energy Savings Offset Cost",
                  desc: "A new high-efficiency system can save $400-$800 per year on energy bills — often covering a significant portion of your monthly payment.",
                },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="chief-card rounded-md bg-white p-6">
                  <div className="flex size-12 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-gray-900">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-gray-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application process */}
        <section className="section-shell">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center font-display text-2xl font-semibold text-gray-900">
              How to apply
            </h2>
            <p className="mt-2 text-center text-base text-gray-600">
              Four simple steps from estimate to installation.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {processSteps.map(({ icon: Icon, title, description }, idx) => (
                <div
                  key={title}
                  className="chief-card flex gap-4 rounded-md bg-white p-6"
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-sm font-bold text-primary">
                    {idx + 1}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <Icon className="size-4 text-primary" />
                      <h3 className="text-base font-semibold text-gray-900">
                        {title}
                      </h3>
                    </div>
                    <p className="mt-2 text-sm leading-7 text-gray-600">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Qualifying criteria */}
        <section className="section-shell border-t-2 border-border bg-secondary">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl font-semibold text-gray-900">
              What you need to qualify
            </h2>
            <p className="mt-2 text-base text-gray-600">
              Our lending partners work with a wide range of credit profiles.
              Here is what you will need for your application:
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {qualifications.map((item) => (
                <div
                  key={item}
                  className="chief-card flex items-center gap-3 rounded-md bg-white p-4"
                >
                  <CheckCircle2 className="size-5 shrink-0 text-primary" />
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-md border-2 border-primary/20 bg-primary/[0.05] p-8 text-center">
              <p className="font-display text-2xl font-semibold text-gray-900 sm:text-3xl">
                Ready to check your financing options?
              </p>
              <p className="mt-3 text-gray-600">
                No obligation, no impact to your credit score for initial
                pre-qualification. Get your personalized payment estimate in
                minutes.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex min-h-14 items-center justify-center gap-2 rounded-md bg-accent px-8 text-base font-bold text-gray-900 shadow-lg shadow-accent/25 transition hover:bg-accent/90"
              >
                Check Your Options
                <ArrowRight className="size-5" />
              </Link>
            </div>
          </div>
        </section>

        <CtaSection />
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

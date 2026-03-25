import type { Metadata } from "next";
import { ChevronDown, HelpCircle } from "lucide-react";

import { brand } from "@/config/brand";
import { services } from "@/config/services";
import { locations } from "@/config/locations";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { MobileCallBar } from "@/components/layout/mobile-call-bar";
import { CtaSection } from "@/components/shared/cta-section";
import { Breadcrumb } from "@/components/shared/breadcrumb";
import { getBreadcrumbSchema, getFaqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "FAQ | Common HVAC Questions Answered",
  description: `Get answers to frequently asked questions about AC repair, installation, maintenance, and emergency HVAC service in South Florida from ${brand.name}.`,
};

const generalFaq: { question: string; answer: string }[] = [
  {
    question: "What areas does HVAC Repair Chief serve?",
    answer:
      "We serve Boca Raton, Fort Lauderdale, and surrounding communities across Broward and Palm Beach counties. Our dedicated crews in each market ensure fast response times throughout South Florida.",
  },
  {
    question: "Are your technicians licensed and insured?",
    answer:
      "Yes. Every HVAC Repair Chief technician holds a Florida state HVAC license and EPA 608 certification. We carry full general liability insurance and workers' compensation coverage on every job.",
  },
  {
    question: "Do you offer free estimates?",
    answer:
      "We provide free written estimates for new AC installations and system replacements. For diagnostic service calls, a flat-rate dispatch fee applies, which is waived if you proceed with the recommended repair.",
  },
  {
    question: "What brands of HVAC equipment do you service?",
    answer:
      "We service all major brands including Carrier, Trane, Lennox, Rheem, Goodman, Daikin, York, Amana, and Bryant. Our trucks carry common OEM parts for same-day repairs across these manufacturers.",
  },
  {
    question: "How do I know if I should repair or replace my AC system?",
    answer:
      "As a general rule, if your system is over 10-12 years old and the repair costs more than half the price of a new system, replacement is usually the better investment. We always give you an honest assessment with both options and their long-term costs.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept cash, all major credit cards (Visa, Mastercard, American Express, Discover), personal checks, and offer financing options for qualifying customers on larger installations.",
  },
  {
    question: "Do you offer warranties on your work?",
    answer:
      "Yes. All repair work comes with a 90-day labor warranty. New installations include full manufacturer equipment warranties (typically 5-10 years) plus our own 1-year labor warranty. Maintenance plan members receive extended warranty benefits.",
  },
  {
    question: "How can I improve my HVAC system's energy efficiency?",
    answer:
      "Regular maintenance is the single biggest factor — a well-maintained system runs 15-25% more efficiently. Additionally, sealing duct leaks, upgrading to a programmable thermostat, changing filters monthly in South Florida's climate, and ensuring proper insulation all contribute to lower energy bills.",
  },
  {
    question: "How often should I change my air filter?",
    answer:
      "In South Florida, we recommend changing standard 1-inch filters every 30 days due to the year-round AC usage, high humidity, and elevated pollen counts. Homes with pets or allergy sufferers may benefit from premium filters changed every 60-90 days. 4-inch media filters can last 6-12 months.",
  },
];

interface FaqCategory {
  title: string;
  id: string;
  items: { question: string; answer: string }[];
}

function buildCategories(): FaqCategory[] {
  const categories: FaqCategory[] = [
    { title: "General HVAC", id: "general", items: generalFaq },
  ];

  for (const service of services) {
    if (service.faq.length > 0) {
      categories.push({
        title: service.name,
        id: service.slug,
        items: service.faq,
      });
    }
  }

  const locationFaqItems: { question: string; answer: string }[] = [];
  for (const loc of locations) {
    for (const item of loc.faq) {
      locationFaqItems.push(item);
    }
  }
  if (locationFaqItems.length > 0) {
    categories.push({
      title: "Locations & Service Areas",
      id: "locations",
      items: locationFaqItems,
    });
  }

  return categories;
}

export default function FaqPage() {
  const categories = buildCategories();
  const allFaqItems = categories.flatMap((cat) => cat.items);
  const breadcrumbSchema = getBreadcrumbSchema([{ label: "FAQ" }]);
  const faqSchema = getFaqSchema(allFaqItems);

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
            <Breadcrumb items={[{ label: "FAQ" }]} />
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              Frequently Asked Questions
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-balance font-semibold tracking-tight text-gray-900">
              Your HVAC questions, answered by our experts.
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-600">
              From AC repair and installation to maintenance plans and emergency
              service, find clear answers to the most common questions South
              Florida homeowners ask us.
            </p>
          </div>
        </section>

        {/* Category nav */}
        <section className="border-b-2 border-border bg-secondary">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className="chief-card inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-primary/30 hover:text-gray-900"
                >
                  {cat.title}
                  <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
                    {cat.items.length}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ sections */}
        <section className="section-shell">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {categories.map((cat) => (
                <div key={cat.id} id={cat.id} className="scroll-mt-24">
                  <div className="flex items-center gap-3 border-b-2 border-border pb-4">
                    <HelpCircle className="size-5 text-primary" />
                    <h2 className="font-display text-xl font-semibold text-gray-900">
                      {cat.title}
                    </h2>
                    <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                      {cat.items.length} questions
                    </span>
                  </div>
                  <div className="mt-6 divide-y divide-border">
                    {cat.items.map((item, idx) => (
                      <details
                        key={`${cat.id}-${idx}`}
                        className="group py-5"
                      >
                        <summary className="flex cursor-pointer items-start justify-between gap-4 text-left">
                          <span className="text-base font-medium text-gray-900 group-open:text-primary">
                            {item.question}
                          </span>
                          <ChevronDown className="mt-0.5 size-5 shrink-0 text-gray-400 transition-transform group-open:rotate-180 group-open:text-primary" />
                        </summary>
                        <p className="mt-3 text-sm leading-7 text-gray-600">
                          {item.answer}
                        </p>
                      </details>
                    ))}
                  </div>
                </div>
              ))}
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
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
    </>
  );
}

"use client";

import { useState } from "react";
import { ChevronDown, Phone } from "lucide-react";

import { brand } from "@/config/brand";
import { locations } from "@/config/locations";
import { toTel } from "@/lib/utils";
import { SectionHeading } from "@/components/shared/section-heading";

const mainPhone = locations[0].phone;

const faqs = [
  {
    question: "Should I repair or replace my aging AC system?",
    answer: `If a repair costs more than half the price of a new system — or if the unit is over 12 years old and still runs R-22 refrigerant — replacement usually delivers better long-term value. Our ${brand.name} technicians will give you a candid cost-benefit breakdown so you can decide without pressure.`,
  },
  {
    question: "How fast can you reach my home in an HVAC emergency?",
    answer: "We maintain on-call crews staged in both Boca Raton and Fort Lauderdale around the clock. Our average emergency response time is under 60 minutes, and during peak summer months we add extra dispatchers to keep that commitment.",
  },
  {
    question: "What are the benefits of an annual maintenance plan?",
    answer: "Plan members receive two precision tune-ups per year, priority scheduling during peak season, 15% off all repairs, and no overtime charges on emergency calls. In South Florida, where AC runs 10+ months annually, regular maintenance prevents costly failures and extends compressor life by 5 to 7 years.",
  },
  {
    question: "How does South Florida's humidity affect my HVAC system?",
    answer: "Broward and Palm Beach counties average 75-80% relative humidity year-round. That forces your system to work double duty — cooling air and stripping moisture. Without proper sizing, clean coils, and correct refrigerant charge, you risk mold in ductwork, frozen evaporator coils, and premature compressor burnout. Our technicians calibrate every system specifically for subtropical conditions.",
  },
  {
    question: "What SEER rating should I look for in a new system?",
    answer: "Florida building code requires a minimum 15 SEER2 for new installations. For Boca Raton and Fort Lauderdale homes that cool 10 months a year, we typically recommend 16-20 SEER2 units — the higher upfront cost pays back in lower electric bills within 3 to 5 years. We size every recommendation using Manual J load calculations.",
  },
  {
    question: "Do I need a permit for HVAC work in Broward or Palm Beach County?",
    answer: "Yes. Florida law requires a mechanical permit for any new HVAC installation, system replacement, or major ductwork modification. Both Broward and Palm Beach counties enforce this with post-installation inspections. We pull all permits on your behalf, schedule the inspections, and ensure everything passes on the first visit.",
  },
  {
    question: "What brands do you install and service?",
    answer: "We install and repair all major HVAC brands including Carrier, Trane, Lennox, Rheem, Daikin, and Goodman. Our trucks stock OEM parts for the most common models so most repairs are completed in a single visit without back-ordering delays.",
  },
  {
    question: "Are your technicians licensed and insured in Florida?",
    answer: `Every ${brand.name} technician holds a Florida state HVAC contractor license, carries EPA 608 universal certification for refrigerant handling, and is covered under our full general liability and workers' compensation policies. We also run background checks on every crew member who enters your home.`,
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="section-shell bg-secondary" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-3xl space-y-12 px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Frequently Asked Questions"
          title="What South Florida homeowners ask before hiring an HVAC contractor."
          description="Straight answers from our chief technicians. Still have questions? Call us directly."
          align="center"
        />

        <div className="stagger-group space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="stagger-up chief-card overflow-hidden rounded-md bg-white"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base font-semibold text-gray-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`size-5 shrink-0 text-gray-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isOpen && (
                  <div className="border-t border-border px-6 pb-5 pt-4">
                    <p className="text-sm leading-relaxed text-gray-600 sm:text-base sm:leading-7">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="stagger-up flex justify-center pt-4">
          <a
            href={toTel(mainPhone)}
            className="inline-flex min-h-12 items-center gap-2 rounded-md bg-accent px-6 text-sm font-bold text-gray-900 shadow-md shadow-accent/25 transition hover:bg-accent/90 hover:shadow-lg"
          >
            <Phone className="size-4" />
            Still Have Questions? Call {mainPhone}
          </a>
        </div>
      </div>
    </section>
  );
}

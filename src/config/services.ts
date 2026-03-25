export interface ServiceDetail {
  name: string;
  slug: string;
  icon: "thermometer" | "snowflake" | "flame" | "wind" | "calendar" | "siren";
  shortDescription: string;
  intro: string;
  benefits: string[];
  process: { step: string; description: string }[];
  faq: { question: string; answer: string }[];
  image: string;
}

export const services: ServiceDetail[] = [
  {
    name: "AC Repair",
    slug: "ac-repair",
    icon: "snowflake",
    shortDescription:
      "Fast diagnosis and repair for central air conditioning systems, ductless mini-splits, and heat pumps. We restore cooling performance the same day.",
    intro:
      "When your AC fails in South Florida's heat, every hour matters. Our certified technicians carry diagnostic equipment and common replacement parts on every truck, allowing us to resolve most cooling failures on the first visit. We service all major brands including Carrier, Trane, Lennox, Rheem, and Daikin across both residential and light commercial systems.",
    benefits: [
      "Same-day AC repair for most breakdowns",
      "Full system diagnostics with thermal imaging",
      "All major brands serviced — Carrier, Trane, Lennox, Rheem, Daikin",
      "Refrigerant leak detection and recharge",
      "Compressor, capacitor, and contactor replacement",
      "90-day warranty on all repair work",
    ],
    process: [
      { step: "Diagnose", description: "We run a comprehensive system check including airflow, refrigerant levels, electrical components, and thermostat calibration." },
      { step: "Quote", description: "You receive a written estimate before any work begins. No surprises, no hidden fees." },
      { step: "Repair", description: "Our technician completes the repair using manufacturer-grade parts from our fully stocked truck." },
      { step: "Verify", description: "We test the entire system to confirm proper cooling output, airflow balance, and energy efficiency." },
    ],
    faq: [
      { question: "Why is my AC blowing warm air?", answer: "Common causes include low refrigerant from a leak, a failed compressor, a dirty evaporator coil, or a malfunctioning thermostat. Our diagnostic process identifies the exact cause before we recommend any repair." },
      { question: "How quickly can you repair my AC?", answer: "We offer same-day service for most AC repairs in Boca Raton and Fort Lauderdale. Emergency calls are dispatched immediately with typical arrival within 60 minutes." },
      { question: "Is it worth repairing an old AC unit?", answer: "If your system is under 10 years old and the repair cost is less than half the replacement cost, repair usually makes sense. We give you an honest assessment and never push for replacement when a repair will do." },
    ],
    image: "/images/service-ac-repair.png",
  },
  {
    name: "AC Installation",
    slug: "ac-installation",
    icon: "thermometer",
    shortDescription:
      "New AC system installation with proper load calculation, ductwork assessment, and energy-efficient equipment selection for South Florida homes.",
    intro:
      "A correctly sized and installed AC system runs quieter, lasts longer, and costs less to operate. Our installation team performs Manual J load calculations for every project, ensuring your new system is precisely matched to your home's cooling demands. We install high-efficiency systems from Carrier, Trane, and Lennox with SEER2 ratings up to 24, and we handle all permitting and inspection coordination with Broward and Palm Beach counties.",
    benefits: [
      "Manual J load calculation for precise sizing",
      "High-efficiency systems up to 24 SEER2",
      "Complete ductwork inspection and modification",
      "All permits and inspections handled for you",
      "Manufacturer warranty registration included",
      "Flexible financing with approved credit",
    ],
    process: [
      { step: "Evaluate", description: "We assess your home's cooling needs, ductwork condition, and electrical capacity." },
      { step: "Design", description: "You receive a detailed proposal with equipment options, efficiency ratings, and total project cost." },
      { step: "Install", description: "Our crew completes the installation in one day for most residential systems, including disposal of the old unit." },
      { step: "Commission", description: "We verify refrigerant charge, airflow, and thermostat programming, then walk you through your new system." },
    ],
    faq: [
      { question: "How long does a new AC installation take?", answer: "Most residential installations are completed in a single day, typically 6-8 hours. Complex installations involving ductwork modifications may take two days." },
      { question: "What size AC system do I need?", answer: "System size depends on your home's square footage, insulation, window area, and orientation. We perform a Manual J load calculation to determine the exact tonnage — never a rough estimate." },
      { question: "Do you offer financing for new AC systems?", answer: "Yes. We partner with financing providers to offer plans with approved credit, including options with low monthly payments and deferred interest periods." },
    ],
    image: "/images/service-ac-installation.png",
  },
  {
    name: "Heating Repair",
    slug: "heating-repair",
    icon: "flame",
    shortDescription:
      "Expert repair for heat pumps, electric furnaces, and heat strip systems. We keep South Florida homes comfortable through winter cold snaps.",
    intro:
      "South Florida winters are short but unpredictable. When a cold front drops temperatures into the 40s, a failed heating system turns uncomfortable fast. Our technicians are trained on all heating technologies common in our region — heat pumps operating in heating mode, electric furnaces, and auxiliary heat strips. We diagnose the problem accurately and carry the parts needed for most same-day repairs.",
    benefits: [
      "Heat pump heating mode diagnostics and repair",
      "Electric furnace and heat strip service",
      "Reversing valve and defrost board replacement",
      "Thermostat recalibration for heating mode",
      "Auxiliary heat performance testing",
      "Same-day service during cold snaps",
    ],
    process: [
      { step: "Inspect", description: "We test your heating system's output, check the reversing valve, and measure heat strip amperage." },
      { step: "Identify", description: "Our diagnostic process pinpoints the failing component — whether it's electrical, mechanical, or a refrigerant issue." },
      { step: "Repair", description: "We replace the failed part using OEM or equivalent-quality components." },
      { step: "Confirm", description: "Temperature differential testing verifies your system is heating to specification." },
    ],
    faq: [
      { question: "Why isn't my heat pump producing warm air?", answer: "The most common causes are a stuck reversing valve, low refrigerant charge, a failed defrost board, or a malfunctioning thermostat. Our diagnostic process tests each component systematically." },
      { question: "Do homes in South Florida really need heating?", answer: "Yes. Winter cold fronts can drop nighttime temperatures into the 30s and 40s. A working heating system is essential for comfort and for protecting pipes and plants during freezes." },
      { question: "Can my AC system also heat my home?", answer: "If you have a heat pump (most South Florida homes do), your system works in reverse during winter to extract heat from outdoor air. This is the most efficient heating method for our climate." },
    ],
    image: "/images/service-heating-repair.png",
  },
  {
    name: "Duct Cleaning & Sealing",
    slug: "duct-cleaning-sealing",
    icon: "wind",
    shortDescription:
      "Professional ductwork inspection, cleaning, sanitization, and leak sealing. Improve air quality and reduce energy waste throughout your home.",
    intro:
      "Your ductwork is the respiratory system of your home. Over time, dust, mold, pollen, and debris accumulate inside the ducts, degrading indoor air quality and forcing your AC to work harder. In South Florida's humid climate, ductwork is also prone to condensation and air leaks that waste energy and invite mold growth. Our duct services address both cleanliness and efficiency — we clean, sanitize, and seal your ducts for measurably better air and lower utility bills.",
    benefits: [
      "Full duct system inspection with camera documentation",
      "HEPA-filtered vacuum extraction of dust and debris",
      "EPA-registered antimicrobial treatment for mold prevention",
      "Duct leak testing and professional sealing with mastic",
      "Improved airflow balance across all rooms",
      "Measurable reduction in energy consumption",
    ],
    process: [
      { step: "Assess", description: "We inspect your ductwork with a camera system, test for leaks, and measure airflow at every register." },
      { step: "Clean", description: "Powerful HEPA-filtered vacuums extract accumulated dust, debris, and contaminants from every duct run." },
      { step: "Treat", description: "An EPA-registered antimicrobial treatment prevents mold and bacterial regrowth in the duct system." },
      { step: "Seal", description: "Any detected leaks are sealed with professional-grade mastic and reinforced tape for long-term durability." },
    ],
    faq: [
      { question: "How often should I have my ducts cleaned?", answer: "We recommend duct cleaning every 3-5 years for most South Florida homes. Homes with pets, smokers, or allergy sufferers may benefit from more frequent cleaning." },
      { question: "Can dirty ducts affect my health?", answer: "Yes. Contaminated ductwork circulates dust, mold spores, pollen, and bacteria throughout your home every time the AC runs. This can aggravate allergies, asthma, and other respiratory conditions." },
      { question: "How much energy do leaky ducts waste?", answer: "The Department of Energy estimates that leaky ducts can waste 20-30% of the air your system produces. Sealing duct leaks is one of the most cost-effective energy improvements you can make." },
    ],
    image: "/images/service-duct-cleaning.png",
  },
  {
    name: "Maintenance Plans",
    slug: "maintenance-plans",
    icon: "calendar",
    shortDescription:
      "Seasonal tune-ups, priority scheduling, and extended equipment life. Our maintenance plans keep your HVAC system running at peak efficiency year-round.",
    intro:
      "Preventive maintenance is the most reliable way to avoid unexpected breakdowns, extend equipment life, and keep energy bills low. Our maintenance plans include two comprehensive tune-ups per year — one before cooling season and one before heating season. Members also receive priority scheduling, discounted repairs, and no overtime charges for after-hours calls. In South Florida's demanding climate, where AC systems run 8-10 months per year, routine maintenance pays for itself.",
    benefits: [
      "Two comprehensive tune-ups per year (spring and fall)",
      "Priority scheduling — next-available appointment guaranteed",
      "15% discount on all repair parts and labor",
      "No overtime charges for after-hours service calls",
      "Annual refrigerant level check included",
      "Filter replacement reminders and supply discounts",
    ],
    process: [
      { step: "Enroll", description: "Choose a plan that fits your system — single system or whole-home coverage." },
      { step: "Schedule", description: "We contact you before each season to schedule your tune-up at a convenient time." },
      { step: "Tune Up", description: "Our technician performs a 24-point inspection, cleaning, and calibration of your entire system." },
      { step: "Report", description: "You receive a written condition report with photos, noting any areas that need attention." },
    ],
    faq: [
      { question: "What does a tune-up include?", answer: "Our 24-point inspection covers refrigerant levels, coil cleaning, electrical connections, capacitor testing, thermostat calibration, drain line clearing, filter replacement, and airflow measurement across all zones." },
      { question: "Will a maintenance plan void my warranty?", answer: "No — in fact, most manufacturer warranties require regular professional maintenance to remain valid. Our maintenance records serve as proof of service for warranty claims." },
      { question: "How much can maintenance save on energy bills?", answer: "A well-maintained AC system runs 15-25% more efficiently than a neglected one. For a typical South Florida home, that translates to $200-$400 in annual savings." },
    ],
    image: "/images/service-maintenance.png",
  },
  {
    name: "Emergency HVAC",
    slug: "emergency-hvac",
    icon: "siren",
    shortDescription:
      "24/7 emergency response for complete AC failures, refrigerant leaks, and electrical faults. We dispatch immediately to restore your comfort.",
    intro:
      "When your AC fails completely on a 95-degree South Florida afternoon, waiting until morning is not an option. Our emergency HVAC team is available 24 hours a day, 7 days a week, including holidays. We dispatch fully equipped trucks with the parts and tools needed to resolve most emergencies on the first visit. No appointment needed — just call and we respond.",
    benefits: [
      "24/7/365 emergency dispatch — nights, weekends, holidays",
      "Average response time under 60 minutes in our service area",
      "Complete AC failure diagnosis and repair",
      "Refrigerant leak detection and emergency recharge",
      "Electrical fault isolation and repair",
      "No overtime premiums for emergency calls",
    ],
    process: [
      { step: "Call", description: "Reach our emergency line 24/7 — a live dispatcher answers and deploys the nearest available crew." },
      { step: "Arrive", description: "A fully equipped technician arrives at your location, typically within 60 minutes." },
      { step: "Stabilize", description: "We diagnose the failure and perform the repair needed to restore cooling immediately." },
      { step: "Follow Up", description: "If additional work is needed, we schedule a follow-up at no extra dispatch charge." },
    ],
    faq: [
      { question: "What qualifies as an HVAC emergency?", answer: "Complete AC failure in extreme heat, refrigerant leaks, burning smells from your system, electrical sparking, and flooding from a clogged condensate drain all qualify as emergencies. When in doubt, call us." },
      { question: "Do you charge extra for emergency service?", answer: "No. Our emergency rates are the same as our standard service rates. We believe fair pricing matters most when you're in a difficult situation." },
      { question: "How fast can you respond to my home?", answer: "We maintain emergency crews across Boca Raton and Fort Lauderdale. Average response time is under 60 minutes, often faster depending on your location and time of day." },
    ],
    image: "/images/service-emergency.png",
  },
];

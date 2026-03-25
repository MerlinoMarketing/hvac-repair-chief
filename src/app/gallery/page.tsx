import type { Metadata } from "next";
import Image from "next/image";
import { Camera, MapPin } from "lucide-react";

import { brand } from "@/config/brand";
import { services } from "@/config/services";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { MobileCallBar } from "@/components/layout/mobile-call-bar";
import { CtaSection } from "@/components/shared/cta-section";
import { Breadcrumb } from "@/components/shared/breadcrumb";
import { getBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Gallery | Our HVAC Work in South Florida",
  description: `Browse ${brand.name}'s portfolio of AC repair, installation, duct cleaning, and maintenance projects across Boca Raton and Fort Lauderdale.`,
};

interface GalleryProject {
  title: string;
  category: string;
  location: string;
  description: string;
  image: string;
}

const projects: GalleryProject[] = [
  {
    title: "Complete AC System Replacement",
    category: "AC Installation",
    location: "Boca Raton, FL",
    description:
      "Replaced a failing 15-year-old 3-ton unit with a new Carrier 16 SEER2 system. Included ductwork modification and new programmable thermostat installation for a 2,400 sq ft single-family home.",
    image: "/images/service-ac-installation.png",
  },
  {
    title: "Emergency Compressor Repair",
    category: "AC Repair",
    location: "Fort Lauderdale, FL",
    description:
      "Diagnosed and replaced a seized compressor on a Trane XR15 system during a July heat wave. System restored to full cooling output within 3 hours of the emergency dispatch call.",
    image: "/images/service-ac-repair.png",
  },
  {
    title: "Whole-Home Duct Cleaning",
    category: "Duct Cleaning & Sealing",
    location: "Deerfield Beach, FL",
    description:
      "Full HEPA-filtered duct cleaning and antimicrobial treatment for a 3,200 sq ft home. Removed 8 years of accumulated dust, debris, and mold growth. Sealed 14 duct joints with professional mastic.",
    image: "/images/service-duct-cleaning.png",
  },
  {
    title: "High-Efficiency System Upgrade",
    category: "AC Installation",
    location: "Delray Beach, FL",
    description:
      "Installed a Lennox XC21 variable-speed system with 21 SEER2 rating, replacing a 10 SEER unit. Homeowner reported 40% reduction in monthly energy costs after the first full billing cycle.",
    image: "/images/service-ac-installation.png",
  },
  {
    title: "Heat Pump Reversing Valve Repair",
    category: "Heating Repair",
    location: "Boca Raton, FL",
    description:
      "Replaced a stuck reversing valve on a Rheem heat pump that was unable to switch to heating mode during a January cold front. Completed same-day with OEM parts carried on our service truck.",
    image: "/images/service-heating-repair.png",
  },
  {
    title: "Preventive Maintenance — Commercial",
    category: "Maintenance Plans",
    location: "Fort Lauderdale, FL",
    description:
      "Semi-annual 24-point tune-up on a dual-zone commercial system for a 4,000 sq ft professional office. Identified and replaced a failing capacitor before it caused a breakdown during peak season.",
    image: "/images/service-maintenance.png",
  },
  {
    title: "Refrigerant Leak Repair",
    category: "AC Repair",
    location: "Highland Beach, FL",
    description:
      "Located and repaired a refrigerant leak in the evaporator coil using electronic leak detection. Recharged R-410A to manufacturer specification and verified superheat and subcooling readings.",
    image: "/images/service-ac-repair.png",
  },
  {
    title: "Emergency AC Failure — Weekend",
    category: "Emergency HVAC",
    location: "Pompano Beach, FL",
    description:
      "Responded to a complete AC failure on a Saturday afternoon. Diagnosed a burned contactor and failed run capacitor. Both components replaced on-site within 90 minutes of arrival.",
    image: "/images/service-emergency.png",
  },
  {
    title: "Ductwork Leak Sealing",
    category: "Duct Cleaning & Sealing",
    location: "Boca Del Mar, FL",
    description:
      "Pressure-tested and sealed the entire duct system in a 2,800 sq ft home losing 28% of conditioned air through leaks. Post-sealing test confirmed leakage reduced to under 5%.",
    image: "/images/service-duct-cleaning.png",
  },
  {
    title: "Mini-Split Installation",
    category: "AC Installation",
    location: "Fort Lauderdale, FL",
    description:
      "Installed a 3-zone Daikin ductless mini-split system in a renovated mid-century home without existing ductwork. Each zone independently controlled for maximum comfort and efficiency.",
    image: "/images/service-ac-installation.png",
  },
  {
    title: "Thermostat Upgrade & Calibration",
    category: "Maintenance Plans",
    location: "Coconut Creek, FL",
    description:
      "Replaced an outdated mercury thermostat with an Ecobee Smart Thermostat. Calibrated temperature sensors, configured scheduling, and set up remote monitoring for the homeowner.",
    image: "/images/service-maintenance.png",
  },
  {
    title: "Post-Hurricane System Assessment",
    category: "Emergency HVAC",
    location: "Boca Raton, FL",
    description:
      "Comprehensive post-storm inspection of an outdoor condenser unit exposed to storm debris and flooding. Cleaned condenser coils, tested electrical components, and confirmed safe operation.",
    image: "/images/service-emergency.png",
  },
];

const filterCategories = [
  "All",
  ...services.map((s) => s.name),
];

export default function GalleryPage() {
  const breadcrumbSchema = getBreadcrumbSchema([{ label: "Gallery" }]);

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
            <Breadcrumb items={[{ label: "Gallery" }]} />
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              Our Work
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-balance font-semibold tracking-tight text-gray-900">
              Real HVAC projects across South Florida.
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-600">
              Browse our portfolio of AC repairs, installations, duct services,
              and emergency responses completed for homeowners in Boca Raton,
              Fort Lauderdale, and surrounding communities.
            </p>
          </div>
        </section>

        {/* Filter tabs */}
        <section className="border-b-2 border-border bg-secondary">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2">
              {filterCategories.map((cat) => (
                <span
                  key={cat}
                  className={`chief-card inline-flex items-center rounded-md px-4 py-2 text-sm font-medium transition ${
                    cat === "All"
                      ? "border-primary/30 bg-primary/10 text-primary"
                      : "bg-white text-gray-700 hover:border-primary/30 hover:text-gray-900"
                  }`}
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery grid */}
        <section className="section-shell">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, idx) => (
                <div
                  key={`${project.title}-${idx}`}
                  className="chief-card group overflow-hidden rounded-md bg-white"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3">
                      <span className="inline-flex items-center gap-1 rounded-md bg-white/90 px-2.5 py-1 text-xs font-semibold text-gray-900 backdrop-blur-sm">
                        <Camera className="size-3" />
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-base font-semibold text-gray-900">
                      {project.title}
                    </h3>
                    <div className="mt-1 flex items-center gap-1 text-xs text-gray-500">
                      <MapPin className="size-3" />
                      {project.location}
                    </div>
                    <p className="mt-3 text-sm leading-6 text-gray-600">
                      {project.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats bar */}
        <section className="border-t-2 border-border bg-secondary">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { value: "2,500+", label: "Service Calls Completed" },
                { value: "400+", label: "Systems Installed" },
                { value: `${brand.rating}★`, label: "Average Rating" },
                { value: `${brand.yearsInBusiness}+`, label: "Years in Business" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-display text-3xl font-bold text-primary">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-gray-600">{stat.label}</p>
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
    </>
  );
}

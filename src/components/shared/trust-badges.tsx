import { Award, BadgeCheck, Clock3, Shield, Siren, Star, ThumbsUp } from "lucide-react";

import { brand } from "@/config/brand";
import { DynamicTrustBadge3D } from "@/components/3d/dynamic-loaders";

const badges = [
  { icon: Clock3, label: `${brand.yearsInBusiness}+ Years`, detail: "Serving South Florida", color: "text-primary" },
  { icon: Star, label: `${brand.rating}★ Rated`, detail: `${brand.reviewCount}+ Verified Reviews`, color: "text-amber-500" },
  { icon: BadgeCheck, label: "FL Licensed", detail: "State HVAC Contractor", color: "text-primary" },
  { icon: Award, label: "EPA 608 Certified", detail: "Refrigerant Handling", color: "text-accent" },
  { icon: Shield, label: "Fully Insured", detail: "Liability + Workers' Comp", color: "text-accent" },
  { icon: ThumbsUp, label: "BBB Accredited", detail: "A+ Rating", color: "text-primary" },
  { icon: Siren, label: "Under 60 Min", detail: "Emergency Response Time", color: "text-red-500" },
];

export function TrustBadges({ variant = "default" }: { variant?: "default" | "compact" | "inline" }) {
  if (variant === "inline") {
    return (
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
        {badges.slice(0, 5).map((b) => (
          <div key={b.label} className="flex items-center gap-2">
            <b.icon className={`size-4 ${b.color}`} />
            <span className="text-sm font-medium text-gray-700">{b.label}</span>
          </div>
        ))}
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <div className="flex flex-wrap gap-3">
        {badges.slice(0, 5).map((b) => (
          <div
            key={b.label}
            className="chief-card inline-flex items-center gap-2 rounded-md border border-gray-100 bg-white/90 px-3.5 py-2.5 text-sm shadow-sm backdrop-blur-sm"
          >
            <b.icon className={`size-4 ${b.color}`} />
            <span className="font-medium text-gray-800">{b.label}</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="stagger-up grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {badges.map((b) => (
        <div
          key={b.label}
          className="insignia-stat chief-card group relative overflow-hidden rounded-md border border-gray-100 bg-white p-5 shadow-sm transition hover:border-primary/20 hover:shadow-md"
        >
          <div className="flex items-start gap-4">
            {/* 3D badge on desktop, 2D icon on mobile */}
            <div className="hidden shrink-0 md:block">
              <DynamicTrustBadge3D label={b.label} />
            </div>
            <div className="flex size-11 shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-primary/10 to-accent/10 md:hidden">
              <b.icon className={`size-5 ${b.color}`} />
            </div>
            <div>
              <p className="text-sm font-semibold tracking-tight text-gray-900">{b.label}</p>
              <p className="mt-0.5 text-xs text-gray-500">{b.detail}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

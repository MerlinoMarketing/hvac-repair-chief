import Link from "next/link";
import { AlertTriangle, ArrowRight, Phone } from "lucide-react";

import { locations } from "@/config/locations";
import { toTel } from "@/lib/utils";

const mainPhone = locations[0].phone;

export function EmergencyBanner() {
  return (
    <section className="relative overflow-hidden border-y-2 border-border bg-gradient-to-r from-primary/[0.06] via-accent/[0.04] to-primary/[0.06]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,oklch(from_var(--theme-accent)_l_c_h_/_0.06),transparent_50%)]" />
      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-4 sm:flex-row sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <div className="relative flex size-10 items-center justify-center rounded-md bg-accent/15 text-accent">
            <AlertTriangle className="size-5" />
            <span className="absolute -right-0.5 -top-0.5 flex size-3">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent/60" />
              <span className="relative inline-flex size-3 rounded-full bg-accent" />
            </span>
          </div>
          <div>
            <p className="text-sm font-bold text-gray-900">
              AC Down? Deploy Emergency Dispatch Now.
            </p>
            <p className="text-sm text-gray-600">
              24/7 crews on standby — average response under 60 minutes across all of South Florida.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <a
            href={toTel(mainPhone)}
            className="inline-flex min-h-11 items-center gap-2 rounded-md bg-accent px-5 text-sm font-bold text-gray-900 shadow-sm transition hover:bg-accent/90 hover:shadow-md"
          >
            <Phone className="size-4" />
            Emergency Line — {mainPhone}
          </a>
          <Link
            href="/emergency"
            className="chief-card inline-flex min-h-11 items-center gap-1.5 rounded-md bg-white px-4 text-sm font-medium text-gray-700 transition hover:border-primary/30 hover:text-primary"
          >
            Learn More
            <ArrowRight className="size-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

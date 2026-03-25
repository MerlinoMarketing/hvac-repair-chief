"use client";

import { MessageSquareQuote, Phone } from "lucide-react";

import { locations } from "@/config/locations";
import { toTel } from "@/lib/utils";
import { trackPhoneClick, trackQuoteClick } from "@/lib/analytics";

const mainPhone = locations[0].phone;

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t-2 border-border bg-white/95 px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-7xl gap-3">
        <a
          href={toTel(mainPhone)}
          onClick={() => trackPhoneClick("mobile_bar")}
          aria-label={`Call ${mainPhone} to deploy a technician`}
          className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-md bg-accent px-4 text-sm font-bold text-gray-900 shadow-sm"
        >
          <Phone className="size-4" aria-hidden="true" />
          Deploy a Technician
        </a>
        <a
          href="/contact"
          onClick={() => trackQuoteClick("mobile_bar")}
          className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-md border-2 border-primary bg-white px-4 text-sm font-semibold text-primary"
        >
          <MessageSquareQuote className="size-4" />
          Request Your Chief
        </a>
      </div>
    </div>
  );
}

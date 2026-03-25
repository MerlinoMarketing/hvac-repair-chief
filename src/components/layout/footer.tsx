import Link from "next/link";
import { MapPin, Phone, Star } from "lucide-react";

import { brand } from "@/config/brand";
import { services } from "@/config/services";
import { locations } from "@/config/locations";
import { toTel } from "@/lib/utils";

const mainPhone = locations[0].phone;

export function Footer() {
  return (
    <footer className="border-t-2 border-border bg-secondary">
      {/* Chevron divider */}
      <div className="chevron-divider" />

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[minmax(0,1.3fr)_repeat(3,minmax(0,0.9fr))] lg:px-8">
        {/* Brand column */}
        <div className="space-y-5">
          <Link href="/" className="inline-block">
            <span className="block font-display text-xl font-semibold tracking-[0.14em] text-gray-900">
              {brand.name}
            </span>
            <span className="block text-xs uppercase tracking-[0.3em] text-gray-500">
              {brand.category}
            </span>
          </Link>
          <p className="max-w-md text-sm leading-7 text-gray-600">
            Professional HVAC services across South Florida. {brand.license}, {brand.insurance.toLowerCase()}, and committed to quality workmanship for {brand.yearsInBusiness}+ years.
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-gray-600">
            <a
              href={toTel(mainPhone)}
              aria-label={`Call ${mainPhone}`}
              className="chief-card inline-flex min-h-11 items-center gap-2 rounded-md px-4 bg-white hover:bg-white"
            >
              <Phone className="size-4 text-primary" aria-hidden="true" />
              {mainPhone}
            </a>
            <div className="chief-card inline-flex min-h-11 items-center gap-2 rounded-md px-4 bg-white">
              <Star className="size-4 fill-amber-400 text-amber-400" />
              {brand.rating} rating
            </div>
          </div>
        </div>

        {/* Services column */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">
            Services
          </p>
          <div className="mt-4 space-y-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="block min-h-11 py-2 text-sm text-gray-600 transition hover:text-gray-900"
              >
                {service.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Locations column */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">
            Locations
          </p>
          <div className="mt-4 space-y-3">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="flex min-h-11 items-center gap-2 py-2 text-sm text-gray-600 transition hover:text-gray-900"
              >
                <MapPin className="size-3.5 text-gray-400" />
                {loc.city}
              </Link>
            ))}
          </div>
        </div>

        {/* Company column */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">
            Company
          </p>
          <div className="mt-4 space-y-3">
            {[
              { label: "About Us", href: "/about" },
              { label: "Reviews", href: "/reviews" },
              { label: "Emergency", href: "/emergency" },
              { label: "Contact", href: "/contact" },
              { label: "FAQ", href: "/faq" },
              { label: "Financing", href: "/financing" },
              { label: "Gallery", href: "/gallery" },
              { label: "Privacy Policy", href: "/privacy-policy" },
              { label: "Terms", href: "/terms" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block min-h-11 py-2 text-sm text-gray-600 transition hover:text-gray-900"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Google Maps embed */}
      <div className="border-t-2 border-border">
        <div className="mx-auto max-w-7xl px-4 pt-8 pb-2 sm:px-6 lg:px-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228773.7754053636!2d-80.29449285!3d26.190067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d8e3e2f9b5c2ed%3A0x407c32a44c55a91c!2sFort+Lauderdale!5e0!3m2!1sen!2sus!4v1"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="HVAC Repair Chief service area — Fort Lauderdale and Boca Raton"
            className="rounded-lg border-2 border-border"
          />
        </div>
      </div>

      <div className="border-t-2 border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>&copy; {new Date().getFullYear()} {brand.name}. All rights reserved.</p>
          <p>{brand.license} &middot; {brand.insurance}</p>
        </div>
      </div>
    </footer>
  );
}

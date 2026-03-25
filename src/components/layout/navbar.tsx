"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, Phone } from "lucide-react";

import { brand } from "@/config/brand";
import { services } from "@/config/services";
import { locations } from "@/config/locations";
import { toTel } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const mainPhone = locations[0].phone;

const navItems = [
  { label: "About", href: "/about" },
  { label: "Reviews", href: "/reviews" },
  { label: "Emergency", href: "/emergency" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b-2 border-border bg-white/95 shadow-sm backdrop-blur-xl"
          : "bg-transparent",
      ].join(" ")}
    >
      <nav
        className="mx-auto flex min-h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Primary"
      >
        <Link href="/" className="flex min-h-11 items-center gap-3 py-2">
          <Image src="/logo.svg" alt="HVAC Repair Chief logo" width={36} height={36} className="size-9" />
          <div>
            <span className="block font-display text-base font-semibold tracking-tight text-gray-900 sm:text-lg">
              {brand.name}
            </span>
            <span className="block text-[10px] uppercase tracking-[0.25em] text-gray-500">
              {brand.category}
            </span>
          </div>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {/* Services dropdown */}
          <div className="group relative">
            <Link
              href="/services"
              className="inline-flex min-h-11 items-center gap-1 py-3 text-sm font-medium text-gray-600 transition hover:text-gray-900"
            >
              Services
              <ChevronDown className="size-3.5 transition-transform group-hover:rotate-180" />
            </Link>
            <div className="pointer-events-none absolute left-1/2 top-full z-50 -translate-x-1/2 pt-2 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
              <div className="min-w-[220px] rounded-lg border border-gray-200 bg-white p-1.5 shadow-lg">
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="block rounded-md px-3 py-2.5 text-sm text-gray-600 transition hover:bg-gray-50 hover:text-gray-900"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Locations dropdown */}
          <div className="group relative">
            <Link
              href="/locations"
              className="inline-flex min-h-11 items-center gap-1 py-3 text-sm font-medium text-gray-600 transition hover:text-gray-900"
            >
              Locations
              <ChevronDown className="size-3.5 transition-transform group-hover:rotate-180" />
            </Link>
            <div className="pointer-events-none absolute left-1/2 top-full z-50 -translate-x-1/2 pt-2 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
              <div className="min-w-[200px] rounded-lg border border-gray-200 bg-white p-1.5 shadow-lg">
                {locations.map((loc) => (
                  <Link
                    key={loc.slug}
                    href={`/locations/${loc.slug}`}
                    className="block rounded-md px-3 py-2.5 text-sm text-gray-600 transition hover:bg-gray-50 hover:text-gray-900"
                  >
                    {loc.city}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="min-h-11 py-3 text-sm font-medium text-gray-600 transition hover:text-gray-900"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={toTel(mainPhone)}
            aria-label={`Call ${mainPhone}`}
            className="inline-flex min-h-11 items-center gap-2 rounded-md border-2 border-border px-4 text-sm font-medium text-gray-700 transition hover:border-primary/40 hover:bg-gray-50"
          >
            <Phone className="size-4 text-primary" aria-hidden="true" />
            {mainPhone}
          </a>
          <Button
            render={
              <Link href="/contact" className="min-h-11 rounded-md px-5 text-sm" />
            }
            className="rounded-md bg-accent px-5 font-bold text-gray-900 hover:bg-accent/90"
          >
            Request Your Chief
          </Button>
        </div>

        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger
              render={
                <Button
                  variant="outline"
                  size="icon-lg"
                  className="min-h-11 min-w-11 rounded-md border-2 border-border bg-white text-gray-700 hover:bg-gray-50"
                />
              }
            >
              <Menu className="size-5" />
              <span className="sr-only">Open navigation</span>
            </SheetTrigger>
            <SheetContent className="w-[88vw] max-w-sm overflow-y-auto border-border bg-white px-6 py-6 text-gray-900">
              <SheetTitle className="sr-only">Mobile navigation</SheetTitle>
              <div className="space-y-8 pt-10">
                <div className="flex items-center gap-3">
                  <Image src="/logo.svg" alt="HVAC Repair Chief logo" width={32} height={32} className="size-8" />
                  <div>
                    <p className="font-display text-lg font-semibold">{brand.name}</p>
                    <p className="text-xs uppercase tracking-[0.25em] text-primary">{brand.category}</p>
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  {/* Services section */}
                  <SheetClose
                    render={
                      <Link
                        href="/services"
                        className="chief-card flex min-h-12 items-center rounded-md px-4 text-base font-medium text-gray-900 transition hover:border-primary/40 hover:bg-gray-50"
                      />
                    }
                  >
                    Services
                  </SheetClose>
                  <div className="mb-2 ml-4 flex flex-col gap-0.5 border-l-2 border-gray-200 pl-3">
                    {services.map((service) => (
                      <SheetClose
                        key={service.slug}
                        render={
                          <Link
                            href={`/services/${service.slug}`}
                            className="flex min-h-10 items-center rounded-md px-3 text-sm text-gray-600 transition hover:bg-gray-50 hover:text-gray-900"
                          />
                        }
                      >
                        {service.name}
                      </SheetClose>
                    ))}
                  </div>

                  {/* Locations section */}
                  <SheetClose
                    render={
                      <Link
                        href="/locations"
                        className="chief-card flex min-h-12 items-center rounded-md px-4 text-base font-medium text-gray-900 transition hover:border-primary/40 hover:bg-gray-50"
                      />
                    }
                  >
                    Locations
                  </SheetClose>
                  <div className="mb-2 ml-4 flex flex-col gap-0.5 border-l-2 border-gray-200 pl-3">
                    {locations.map((loc) => (
                      <SheetClose
                        key={loc.slug}
                        render={
                          <Link
                            href={`/locations/${loc.slug}`}
                            className="flex min-h-10 items-center rounded-md px-3 text-sm text-gray-600 transition hover:bg-gray-50 hover:text-gray-900"
                          />
                        }
                      >
                        {loc.city}
                      </SheetClose>
                    ))}
                  </div>

                  {/* Other nav items */}
                  {navItems.map((item) => (
                    <SheetClose
                      key={item.href}
                      render={
                        <Link
                          href={item.href}
                          className="chief-card flex min-h-12 items-center rounded-md px-4 text-base font-medium text-gray-700 transition hover:border-primary/40 hover:bg-gray-50"
                        />
                      }
                    >
                      {item.label}
                    </SheetClose>
                  ))}
                </div>

                <div className="chief-card space-y-3 rounded-md bg-secondary p-4">
                  <p className="text-sm text-gray-500">
                    Same-day repairs and 24/7 emergency HVAC service.
                  </p>
                  <a
                    href={toTel(mainPhone)}
                    className="flex min-h-12 items-center justify-center gap-2 rounded-md bg-[oklch(0.52_0.05_200)] px-4 text-sm font-semibold text-white"
                  >
                    <Phone className="size-4" />
                    Call {mainPhone}
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}

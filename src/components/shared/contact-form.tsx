"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";

import { brand } from "@/config/brand";
import { Button } from "@/components/ui/button";
import { trackFormSubmit } from "@/lib/analytics";

type FormState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name")?.toString().trim() ?? "";
    const phone = data.get("phone")?.toString().trim() ?? "";
    const email = data.get("email")?.toString().trim() ?? "";
    const message = data.get("message")?.toString().trim() ?? "";
    const hp = data.get("_hp")?.toString().trim() ?? "";

    if (!name || !phone) {
      setErrorMsg("Name and phone number are required.");
      setState("error");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email, message, _hp: hp }),
      });

      if (!res.ok) throw new Error("Failed to submit");
      setState("success");
      trackFormSubmit(true);
      form.reset();
    } catch {
      setErrorMsg("Something went wrong. Please call us directly.");
      setState("error");
      trackFormSubmit(false);
    }
  }

  if (state === "success") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-md border-2 border-border bg-white p-10 text-center">
        <div className="flex size-16 items-center justify-center rounded-full bg-accent/10 text-accent">
          <CheckCircle2 className="size-8" />
        </div>
        <h3 className="font-display text-2xl font-semibold text-gray-900">
          Thank you!
        </h3>
        <p className="max-w-sm text-sm leading-7 text-gray-600">
          We&apos;ve received your request and will get back to you within 1
          business hour during office hours.
        </p>
        <a
          href={`mailto:${brand.email}`}
          className="text-sm font-medium text-primary hover:underline"
        >
          {brand.email}
        </a>
      </div>
    );
  }

  return (
    <form
      className="chief-card grid gap-4 rounded-md bg-white p-6 sm:grid-cols-2"
      onSubmit={handleSubmit}
    >
      <label className="space-y-2 text-sm text-gray-700">
        <span>
          Name <span className="text-red-500">*</span>
        </span>
        <input
          type="text"
          name="name"
          autoComplete="name"
          required
          className="min-h-12 w-full rounded-md border-2 border-border bg-white px-4 text-base text-gray-900 placeholder:text-gray-400 transition-colors focus:border-primary focus:ring-2 focus:ring-primary/10 focus:outline-none"
          placeholder="Your name"
        />
      </label>
      <label className="space-y-2 text-sm text-gray-700">
        <span>
          Phone <span className="text-red-500">*</span>
        </span>
        <input
          type="tel"
          name="phone"
          autoComplete="tel"
          required
          className="min-h-12 w-full rounded-md border-2 border-border bg-white px-4 text-base text-gray-900 placeholder:text-gray-400 transition-colors focus:border-primary focus:ring-2 focus:ring-primary/10 focus:outline-none"
          placeholder="Best callback number"
        />
      </label>
      <label className="space-y-2 text-sm text-gray-700 sm:col-span-2">
        <span>Email</span>
        <input
          type="email"
          name="email"
          autoComplete="email"
          className="min-h-12 w-full rounded-md border-2 border-border bg-white px-4 text-base text-gray-900 placeholder:text-gray-400 transition-colors focus:border-primary focus:ring-2 focus:ring-primary/10 focus:outline-none"
          placeholder="you@example.com"
        />
      </label>
      <label className="space-y-2 text-sm text-gray-700 sm:col-span-2">
        <span>How can we help?</span>
        <textarea
          name="message"
          rows={5}
          className="w-full rounded-md border-2 border-border bg-white px-4 py-3 text-base text-gray-900 placeholder:text-gray-400 transition-colors focus:border-primary focus:ring-2 focus:ring-primary/10 focus:outline-none"
          placeholder="Describe the issue — AC not cooling, strange noises, maintenance request, etc."
        />
      </label>

      {/* Honeypot */}
      <input
        type="text"
        name="_hp"
        autoComplete="off"
        tabIndex={-1}
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 overflow-hidden opacity-0"
      />

      {state === "error" && errorMsg && (
        <p className="text-sm text-red-600 sm:col-span-2">{errorMsg}</p>
      )}

      <div className="sm:col-span-2">
        <Button
          type="submit"
          disabled={state === "submitting"}
          className="min-h-12 w-full rounded-md bg-accent px-6 text-base font-bold text-gray-900 shadow-lg shadow-accent/25 hover:bg-accent/90 hover:shadow-xl hover:shadow-accent/30 disabled:opacity-60 sm:w-auto"
        >
          {state === "submitting" ? (
            <>
              <Loader2 className="mr-2 size-4 animate-spin" />
              Dispatching...
            </>
          ) : (
            "Request Your Chief"
          )}
        </Button>
      </div>
    </form>
  );
}

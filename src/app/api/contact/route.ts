import { NextResponse, after } from "next/server";
import { appendFileSync } from "fs";

interface ContactPayload {
  name: string;
  phone: string;
  email?: string;
  message?: string;
  _hp?: string;
}

interface LeadRecord {
  timestamp: string;
  name: string;
  phone: string;
  email: string;
  message: string;
  source: string;
}

/** Append lead to /tmp/leads.jsonl (ephemeral on Vercel, persistent locally). */
function storeLeadToFile(lead: LeadRecord): void {
  try {
    appendFileSync("/tmp/leads.jsonl", JSON.stringify(lead) + "\n", "utf-8");
  } catch (err) {
    console.error("[lead-storage] Failed to write to /tmp/leads.jsonl", err);
  }
}

/** POST lead data to a webhook URL (Zapier, Make, n8n, Slack, etc.). Fire-and-forget. */
function sendWebhook(lead: LeadRecord): void {
  const url = process.env.LEAD_WEBHOOK_URL;
  if (!url) return;

  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(lead),
  }).catch((err) => {
    console.error("[lead-webhook] Webhook delivery failed", err);
  });
}

/** Send email notification via Resend API. Fire-and-forget. */
function sendResendEmail(lead: LeadRecord): void {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return;

  const to = process.env.LEAD_NOTIFY_EMAIL || "info@chiefhvacrepair.com";

  fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      from: "HVAC Repair Chief <leads@chiefhvacrepair.com>",
      to: [to],
      subject: `New Lead: ${lead.name} — ${lead.phone}`,
      html: [
        "<h2>New Lead from Website</h2>",
        `<p><strong>Name:</strong> ${lead.name}</p>`,
        `<p><strong>Phone:</strong> ${lead.phone}</p>`,
        `<p><strong>Email:</strong> ${lead.email}</p>`,
        `<p><strong>Message:</strong> ${lead.message}</p>`,
        `<p><em>Submitted at ${lead.timestamp}</em></p>`,
      ].join(""),
    }),
  }).catch((err) => {
    console.error("[lead-email] Resend delivery failed", err);
  });
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    const { name, phone, email, message, _hp } = body;

    // Honeypot trap — bots fill hidden fields, real users don't
    if (_hp) {
      return NextResponse.json({ success: true });
    }

    if (!name?.trim() || !phone?.trim()) {
      return NextResponse.json(
        { error: "Name and phone are required." },
        { status: 400 }
      );
    }

    const lead: LeadRecord = {
      timestamp: new Date().toISOString(),
      name: name.trim(),
      phone: phone.trim(),
      email: email?.trim() ?? "",
      message: message?.trim() ?? "",
      source: "hvac-repair-chief-website",
    };

    // Always log to console as fallback
    console.log("[Contact Form Submission]", lead);

    // Schedule notifications after the response is sent (non-blocking)
    after(() => {
      storeLeadToFile(lead);
      sendWebhook(lead);
      sendResendEmail(lead);
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Invalid request." },
      { status: 400 }
    );
  }
}

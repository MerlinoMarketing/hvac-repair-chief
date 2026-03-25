import { track } from "@vercel/analytics";

export function trackPhoneClick(source: string) {
  track("phone_click", { source });
}

export function trackFormSubmit(success: boolean) {
  track("form_submit", { success: String(success) });
}

export function trackQuoteClick(source: string) {
  track("quote_click", { source });
}

/**
 * Validation + submission helpers for the Arena registration form.
 */

export interface RegistrationPayload {
  firstName: string;
  email: string;
  phone: string;
}

export interface RegistrationErrors {
  firstName?: string;
  email?: string;
  phone?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
/** Accepts US-style numbers with optional punctuation; requires 10–11 digits. */
const PHONE_DIGITS_RE = /^\+?[\d\s().-]{7,20}$/;

export function validateRegistration(p: RegistrationPayload): RegistrationErrors {
  const errors: RegistrationErrors = {};

  if (!p.firstName || p.firstName.trim().length < 2) {
    errors.firstName = "Enter your first name (2+ characters).";
  }

  if (!p.email || !EMAIL_RE.test(p.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  const digits = (p.phone || "").replace(/\D/g, "");
  if (!p.phone || !PHONE_DIGITS_RE.test(p.phone.trim()) || digits.length < 10 || digits.length > 11) {
    errors.phone = "Enter a valid cell number for SMS updates.";
  }

  return errors;
}

export function isValidRegistration(p: RegistrationPayload): boolean {
  return Object.keys(validateRegistration(p)).length === 0;
}

/**
 * The exact SMS consent wording shown next to the checkbox. It is sent to
 * GoHighLevel with every registration so the consent on record matches what
 * the visitor agreed to. Change it here and both stay in step.
 */
export const SMS_CONSENT_TEXT =
  "I agree to receive SMS messages about this webinar (ticket confirmation, " +
  "reminders, and go-live alerts) at the number provided. Message & data " +
  "rates may apply. Reply STOP anytime to opt out.";

export type SubmitResult = { ok: true } | { ok: false; error: string };

const NOT_CONFIGURED_ERROR =
  "Registration is temporarily unavailable. Please try again shortly.";

/**
 * Posts the registration to the configured endpoint (a GoHighLevel inbound
 * webhook). There is deliberately no fallback: if the endpoint is missing or
 * the request fails, the visitor sees an error rather than a false success.
 */
export async function submitRegistration(
  payload: RegistrationPayload,
  smsConsent: boolean,
  endpoint: string
): Promise<SubmitResult> {
  if (!endpoint) {
    return { ok: false, error: NOT_CONFIGURED_ERROR };
  }

  const submittedAt = new Date().toISOString();
  const record = {
    firstName: payload.firstName.trim(),
    email: payload.email.trim(),
    phone: payload.phone.trim(),
    smsConsent,
    smsConsentText: SMS_CONSENT_TEXT,
    smsConsentAt: smsConsent ? submittedAt : null,
    event: "The Great Generational Wealth Journey: Live Webinar",
    source: "webinar-registration-page",
    pageUrl: typeof window === "undefined" ? "" : window.location.href,
    submittedAt,
  };

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(record),
    });
    if (!res.ok) {
      return { ok: false, error: `Registration failed (${res.status}). Please try again.` };
    }
    return { ok: true };
  } catch {
    return { ok: false, error: "Network error — check your connection and try again." };
  }
}

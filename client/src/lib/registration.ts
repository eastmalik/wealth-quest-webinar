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

export type SubmitResult =
  | { ok: true; delivered: "endpoint" | "local" }
  | { ok: false; error: string };

/**
 * Posts the registration to the configured external endpoint
 * (Formspree / Zapier / ConvertKit / GHL webhook). When no endpoint is
 * configured, persists locally so the flow is demoable end-to-end.
 */
export async function submitRegistration(
  payload: RegistrationPayload,
  endpoint: string
): Promise<SubmitResult> {
  const record = {
    firstName: payload.firstName.trim(),
    email: payload.email.trim(),
    phone: payload.phone.trim(),
    event: "The Great Generational Wealth Journey: Live Webinar",
    source: "webinar-registration-page",
    submittedAt: new Date().toISOString(),
  };

  if (!endpoint) {
    try {
      const key = "gwq_registrations";
      const existing = JSON.parse(window.localStorage.getItem(key) ?? "[]");
      existing.push(record);
      window.localStorage.setItem(key, JSON.stringify(existing));
      return { ok: true, delivered: "local" };
    } catch {
      return { ok: false, error: "Could not save your ticket locally. Please try again." };
    }
  }

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(record),
    });
    if (!res.ok) {
      return { ok: false, error: `Registration failed (${res.status}). Please try again.` };
    }
    return { ok: true, delivered: "endpoint" };
  } catch {
    return { ok: false, error: "Network error — check your connection and try again." };
  }
}

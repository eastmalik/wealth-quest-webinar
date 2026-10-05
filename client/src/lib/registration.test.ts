import { afterEach, describe, expect, it, vi } from "vitest";
import {
  isValidRegistration,
  SMS_CONSENT_TEXT,
  submitRegistration,
  validateRegistration,
} from "./registration";

describe("validateRegistration", () => {
  it("accepts a complete, well-formed payload", () => {
    const errors = validateRegistration({
      firstName: "Malik",
      email: "malik@example.com",
      phone: "(555) 555-5555",
    });
    expect(errors).toEqual({});
  });

  it("rejects a missing first name", () => {
    const errors = validateRegistration({
      firstName: " ",
      email: "malik@example.com",
      phone: "5555555555",
    });
    expect(errors.firstName).toBeTruthy();
  });

  it("rejects malformed emails", () => {
    for (const email of ["nope", "a@b", "a@b.c", "@example.com"]) {
      const errors = validateRegistration({
        firstName: "Malik",
        email,
        phone: "5555555555",
      });
      expect(errors.email).toBeTruthy();
    }
  });

  it("accepts a registration with no phone number", () => {
    expect(validateRegistration({ firstName: "Malik", email: "malik@example.com", phone: "" })).toEqual({});
  });

  it("asks for a phone only when the optional SMS box is ticked", () => {
    expect(validateRegistration({ firstName: "Malik", email: "malik@example.com", phone: "" }, true).phone).toBeTruthy();
    expect(validateRegistration({ firstName: "Malik", email: "malik@example.com", phone: "5555555555" }, true)).toEqual({});
  });

  it("sends no consent timestamp when the SMS box is left unticked", async () => {
    const fetchMock = vi.fn().mockResolvedValue({ ok: true, status: 200 });
    vi.stubGlobal("fetch", fetchMock);
    await submitRegistration({ firstName: "Malik", email: "malik@example.com", phone: "" }, false, "https://example.com/hook");
    const body = JSON.parse(fetchMock.mock.calls[0][1].body);
    expect(body.smsConsent).toBe(false);
    expect(body.smsConsentAt).toBeNull();
    vi.unstubAllGlobals();
  });

  it("rejects phone numbers without 10 digits", () => {
    for (const phone of ["12345", "555-123"]) {
      const errors = validateRegistration({
        firstName: "Malik",
        email: "malik@example.com",
        phone,
      });
      expect(errors.phone).toBeTruthy();
    }
  });

  it("accepts common US phone formats", () => {
    for (const phone of ["5555555555", "(555) 555-5555", "+1 555 555 5555", "555.555.5555"]) {
      expect(
        isValidRegistration({
          firstName: "Malik",
          email: "malik@example.com",
          phone,
        })
      ).toBe(true);
    }
  });

  it("isValidRegistration reflects the error map", () => {
    expect(
      isValidRegistration({ firstName: "", email: "", phone: "" })
    ).toBe(false);
    expect(isValidRegistration({ firstName: "Malik", email: "malik@example.com", phone: "" })).toBe(true);
  });
});

describe("submitRegistration", () => {
  const payload = {
    firstName: " Malik ",
    email: "malik@example.com",
    phone: "(555) 555-5555",
  };
  const endpoint = "https://example.com/hook";

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("fails visibly when no endpoint is configured, and sends nothing", async () => {
    const fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);
    const result = await submitRegistration(payload, true, "");
    expect(result.ok).toBe(false);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("posts the registration with the consent wording and reports success", async () => {
    const fetchMock = vi.fn().mockResolvedValue({ ok: true, status: 200 });
    vi.stubGlobal("fetch", fetchMock);
    const result = await submitRegistration(payload, true, endpoint);
    expect(result).toEqual({ ok: true });
    const [url, init] = fetchMock.mock.calls[0];
    expect(url).toBe(endpoint);
    const body = JSON.parse(init.body);
    expect(body).toMatchObject({
      firstName: "Malik",
      email: "malik@example.com",
      phone: "(555) 555-5555",
      smsConsent: true,
      smsConsentText: SMS_CONSENT_TEXT,
    });
    expect(body.smsConsentAt).toBe(body.submittedAt);
  });

  it("reports an error when the endpoint rejects the request", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: false, status: 500 }));
    const result = await submitRegistration(payload, true, endpoint);
    expect(result.ok).toBe(false);
  });

  it("reports an error when the network request fails", async () => {
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new TypeError("Failed to fetch")));
    const result = await submitRegistration(payload, true, endpoint);
    expect(result.ok).toBe(false);
  });
});

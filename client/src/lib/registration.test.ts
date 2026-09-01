import { describe, expect, it } from "vitest";
import {
  isValidRegistration,
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

  it("rejects phone numbers without 10 digits", () => {
    for (const phone of ["12345", "555-123", ""]) {
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
  });
});

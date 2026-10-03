import { describe, expect, it } from "vitest";
import {
  BOSS_CARDS,
  getEventDate,
  getEventSentence,
  TAKEAWAYS,
} from "./event";

describe("event content", () => {
  it("ships the deck's three secrets plus the legacy levels", () => {
    expect(BOSS_CARDS.map((b) => b.boss)).toEqual([
      "The Order",
      "The Foundation",
      "The Engine",
      "The Legacy",
    ]);
  });

  it("keeps claims the webinar does not make off the page", () => {
    const copy = [...BOSS_CARDS.map((b) => b.copy), ...TAKEAWAYS].join(" ");
    for (const banned of ["100% tax-free", "86%", "safely", "Lifetime Line of Credit", "205.7", "banks start saying yes"]) {
      expect(copy).not.toContain(banned);
    }
  });

  it("resolves a valid future event date", () => {
    const d = getEventDate();
    expect(Number.isNaN(d.getTime())).toBe(false);
  });

  it("formats the plain-language event sentence from the shared date", () => {
    const sentence = getEventSentence(new Date("2026-10-03T10:30:00-05:00"));
    expect(sentence).toBe("Saturday, October 3 at 10:30 AM CT / 11:30 AM ET");
  });
});

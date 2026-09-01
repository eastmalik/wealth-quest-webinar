import { describe, expect, it } from "vitest";
import { computeCountdown, pad2 } from "../hooks/useCountdown";

describe("computeCountdown", () => {
  const target = new Date("2026-09-19T19:00:00-05:00");

  it("computes days/hours/minutes/seconds until the show", () => {
    const now = target.getTime() - (2 * 86400 + 3 * 3600 + 4 * 60 + 5) * 1000;
    const c = computeCountdown(target, now);
    expect(c).toMatchObject({
      days: 2,
      hours: 3,
      minutes: 4,
      seconds: 5,
      isLive: false,
    });
  });

  it("rolls over correctly at unit boundaries", () => {
    const now = target.getTime() - 60 * 1000; // exactly 1 minute
    const c = computeCountdown(target, now);
    expect(c).toMatchObject({ days: 0, hours: 0, minutes: 1, seconds: 0 });
  });

  it("reports isLive once the broadcast has started", () => {
    const c = computeCountdown(target, target.getTime() + 1000);
    expect(c.isLive).toBe(true);
    expect(c.days).toBe(0);
    expect(c.totalMs).toBe(0);
  });
});

describe("pad2", () => {
  it("pads single digits", () => {
    expect(pad2(3)).toBe("03");
  });
  it("keeps two digits", () => {
    expect(pad2(42)).toBe("42");
  });
});

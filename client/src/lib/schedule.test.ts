import { describe, expect, it } from "vitest";
import { computeCountdown } from "../hooks/useCountdown";
import { getEventDate, getEventDateLabel } from "./event";

// Schedule under test: Saturdays at 10:30 AM Central, 90-minute window.
const at = (iso: string) => new Date(iso);

describe("weekly schedule", () => {
  it("counts down to today's session earlier on a Saturday", () => {
    expect(getEventDate(at("2026-10-03T08:00:00-05:00")).toISOString()).toBe("2026-10-03T15:30:00.000Z");
  });

  it("counts down to Saturday from mid-week", () => {
    expect(getEventDate(at("2026-10-07T09:00:00-05:00")).toISOString()).toBe("2026-10-10T15:30:00.000Z");
  });

  it("stays on the current session while it is live, and shows live", () => {
    const now = at("2026-10-03T11:30:00-05:00");
    const start = getEventDate(now);
    expect(start.toISOString()).toBe("2026-10-03T15:30:00.000Z");
    expect(computeCountdown(start, now.getTime()).isLive).toBe(true);
  });

  it("rolls forward to next week once the 90-minute window closes", () => {
    const now = at("2026-10-03T12:00:00-05:00");
    const start = getEventDate(now);
    expect(start.toISOString()).toBe("2026-10-10T15:30:00.000Z");
    expect(computeCountdown(start, now.getTime()).isLive).toBe(false);
  });

  it("is not live before the session starts", () => {
    const now = at("2026-10-03T10:29:00-05:00");
    expect(computeCountdown(getEventDate(now), now.getTime()).isLive).toBe(false);
  });

  it("keeps 10:30 AM Central across the fall daylight-saving change", () => {
    // Oct 31 is still daylight time (UTC-5); Nov 7 is standard time (UTC-6).
    expect(getEventDate(at("2026-10-31T08:00:00-05:00")).toISOString()).toBe("2026-10-31T15:30:00.000Z");
    expect(getEventDate(at("2026-11-01T10:00:00-06:00")).toISOString()).toBe("2026-11-07T16:30:00.000Z");
  });

  it("keeps 10:30 AM Central across the spring daylight-saving change", () => {
    // Clocks change Sunday Mar 14, 2027: Mar 13 is standard time, Mar 20 daylight.
    expect(getEventDate(at("2027-03-08T10:00:00-06:00")).toISOString()).toBe("2027-03-13T16:30:00.000Z");
    expect(getEventDate(at("2027-03-15T10:00:00-05:00")).toISOString()).toBe("2027-03-20T15:30:00.000Z");
  });

  it("labels the header with the next session", () => {
    expect(getEventDateLabel(at("2026-10-03T15:30:00Z"))).toBe("SAT • OCT 3 • 10:30AM CT / 11:30AM ET");
  });
});

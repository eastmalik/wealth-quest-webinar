import { describe, expect, it } from "vitest";
import { computeCountdown } from "../hooks/useCountdown";
import { getEventDate, getEventDateLabel } from "./event";

// Schedule under test: Saturdays at 7:00 PM Central, 90-minute window.
const at = (iso: string) => new Date(iso);

describe("weekly schedule", () => {
  it("counts down to tonight's session earlier on a Saturday", () => {
    expect(getEventDate(at("2026-10-03T12:00:00-05:00")).toISOString()).toBe("2026-10-04T00:00:00.000Z");
  });

  it("counts down to Saturday from mid-week", () => {
    expect(getEventDate(at("2026-10-07T09:00:00-05:00")).toISOString()).toBe("2026-10-11T00:00:00.000Z");
  });

  it("stays on the current session while it is live, and shows live", () => {
    const now = at("2026-10-03T20:00:00-05:00");
    const start = getEventDate(now);
    expect(start.toISOString()).toBe("2026-10-04T00:00:00.000Z");
    expect(computeCountdown(start, now.getTime()).isLive).toBe(true);
  });

  it("rolls forward to next week once the 90-minute window closes", () => {
    const now = at("2026-10-03T20:30:00-05:00");
    const start = getEventDate(now);
    expect(start.toISOString()).toBe("2026-10-11T00:00:00.000Z");
    expect(computeCountdown(start, now.getTime()).isLive).toBe(false);
  });

  it("is not live before the session starts", () => {
    const now = at("2026-10-03T18:59:00-05:00");
    expect(computeCountdown(getEventDate(now), now.getTime()).isLive).toBe(false);
  });

  it("keeps 7 PM Central across the fall daylight-saving change", () => {
    // Oct 31 is still daylight time (UTC-5); Nov 7 is standard time (UTC-6).
    expect(getEventDate(at("2026-10-31T10:00:00-05:00")).toISOString()).toBe("2026-11-01T00:00:00.000Z");
    expect(getEventDate(at("2026-11-01T10:00:00-06:00")).toISOString()).toBe("2026-11-08T01:00:00.000Z");
  });

  it("keeps 7 PM Central across the spring daylight-saving change", () => {
    // Clocks change Sunday Mar 14, 2027: Mar 13 is standard time, Mar 20 daylight.
    expect(getEventDate(at("2027-03-08T10:00:00-06:00")).toISOString()).toBe("2027-03-14T01:00:00.000Z");
    expect(getEventDate(at("2027-03-15T10:00:00-05:00")).toISOString()).toBe("2027-03-21T00:00:00.000Z");
  });

  it("labels the header with the next session", () => {
    expect(getEventDateLabel(at("2026-10-04T00:00:00Z"))).toBe("SAT • OCT 3 • 7PM CT");
  });
});

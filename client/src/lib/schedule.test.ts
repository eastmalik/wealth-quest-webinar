import { describe, expect, it } from "vitest";
import { computeCountdown } from "../hooks/useCountdown";
import { getEventDate, getEventDateLabel, isBeforeLaunch } from "./event";

// Schedule under test: launch Sat Dec 12, 2026, then Saturdays at 10:30 AM Central, 30-minute window.
const at = (iso: string) => new Date(iso);

describe("weekly schedule", () => {
  it("counts down to today's session earlier on a Saturday", () => {
    expect(getEventDate(at("2027-01-09T08:00:00-06:00")).toISOString()).toBe("2027-01-09T16:30:00.000Z");
  });

  it("counts down to Saturday from mid-week", () => {
    expect(getEventDate(at("2027-01-13T09:00:00-06:00")).toISOString()).toBe("2027-01-16T16:30:00.000Z");
  });

  it("stays on the current session while it is live, and shows live", () => {
    const now = at("2027-01-09T10:45:00-06:00");
    const start = getEventDate(now);
    expect(start.toISOString()).toBe("2027-01-09T16:30:00.000Z");
    expect(computeCountdown(start, now.getTime()).isLive).toBe(true);
  });

  it("rolls forward to next week once the 30-minute window closes", () => {
    const now = at("2027-01-09T11:00:00-06:00");
    const start = getEventDate(now);
    expect(start.toISOString()).toBe("2027-01-16T16:30:00.000Z");
    expect(computeCountdown(start, now.getTime()).isLive).toBe(false);
  });

  it("is not live before the session starts", () => {
    const now = at("2027-01-09T10:29:00-06:00");
    expect(computeCountdown(getEventDate(now), now.getTime()).isLive).toBe(false);
  });

  it("keeps 10:30 AM Central across the spring daylight-saving change", () => {
    // Clocks change Sunday Mar 14, 2027: Mar 13 is standard time, Mar 20 daylight.
    expect(getEventDate(at("2027-03-08T10:00:00-06:00")).toISOString()).toBe("2027-03-13T16:30:00.000Z");
    expect(getEventDate(at("2027-03-15T10:00:00-05:00")).toISOString()).toBe("2027-03-20T15:30:00.000Z");
  });

  it("labels the header with the next session in all three time zones", () => {
    expect(getEventDateLabel(at("2026-12-12T16:30:00Z"))).toBe("SAT • DEC 12 • 8:30AM PT / 10:30AM CT / 11:30AM ET");
  });
});

describe("launch date", () => {
  it("counts down to the December 12 launch before it happens", () => {
    expect(getEventDate(at("2026-11-02T09:00:00-06:00")).toISOString()).toBe("2026-12-12T16:30:00.000Z");
    expect(getEventDate(at("2026-12-05T10:30:00-06:00")).toISOString()).toBe("2026-12-12T16:30:00.000Z");
    expect(isBeforeLaunch(at("2026-12-01T00:00:00Z"))).toBe(true);
  });

  it("goes weekly after the launch session ends", () => {
    const now = at("2026-12-12T11:00:00-06:00");
    expect(isBeforeLaunch(now)).toBe(false);
    expect(getEventDate(now).toISOString()).toBe("2026-12-19T16:30:00.000Z");
  });
});

import { describe, expect, it } from "vitest";
import { googleCalendarUrl, icsFile } from "./calendar";

const start = new Date("2026-10-10T15:30:00Z"); // Sat Oct 10, 10:30 AM CT

describe("add to calendar", () => {
  it("builds a Google Calendar link for the 90-minute session", () => {
    const url = new URL(googleCalendarUrl(start));
    expect(url.searchParams.get("dates")).toBe("20261010T153000Z/20261010T170000Z");
    expect(url.searchParams.get("text")).toContain("THE FLOW");
  });

  it("builds a calendar file with the same times", () => {
    const ics = icsFile(start, new Date("2026-10-05T00:00:00Z"));
    expect(ics).toContain("DTSTART:20261010T153000Z");
    expect(ics).toContain("DTEND:20261010T170000Z");
    expect(ics.startsWith("BEGIN:VCALENDAR")).toBe(true);
  });
});

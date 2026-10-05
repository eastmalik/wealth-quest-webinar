import { WEEKLY_SCHEDULE } from "./event";

const TITLE = "THE FLOW — Live Webinar with Malik East";
const DETAILS =
  "Free live webinar: the 7 levels every family needs, in the order that actually works. " +
  "Your Zoom link is in your confirmation email. https://theflow.7bandfinancialagency.com";

/** 20261010T153000Z */
function utcStamp(d: Date): string {
  return d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
}

function sessionEnd(start: Date): Date {
  return new Date(start.getTime() + WEEKLY_SCHEDULE.durationMinutes * 60_000);
}

export function googleCalendarUrl(start: Date): string {
  const url = new URL("https://calendar.google.com/calendar/render");
  url.searchParams.set("action", "TEMPLATE");
  url.searchParams.set("text", TITLE);
  url.searchParams.set("dates", `${utcStamp(start)}/${utcStamp(sessionEnd(start))}`);
  url.searchParams.set("details", DETAILS);
  url.searchParams.set("ctz", "America/Chicago");
  return url.toString();
}

/** A one-session calendar file (Apple Calendar, Outlook). */
export function icsFile(start: Date, now: Date = new Date()): string {
  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//7Band Financial Agency//THE FLOW//EN",
    "BEGIN:VEVENT",
    `UID:theflow-${utcStamp(start)}@theflow.7bandfinancialagency.com`,
    `DTSTAMP:${utcStamp(now)}`,
    `DTSTART:${utcStamp(start)}`,
    `DTEND:${utcStamp(sessionEnd(start))}`,
    `SUMMARY:${TITLE}`,
    `DESCRIPTION:${DETAILS}`,
    "URL:https://theflow.7bandfinancialagency.com",
    "END:VEVENT",
    "END:VCALENDAR",
    "",
  ].join("\r\n");
}

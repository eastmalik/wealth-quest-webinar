/**
 * Central event configuration for THE FLOW — The Generational Wealth Quest (live webinar).
 * Change WEEKLY_SCHEDULE to change when the webinar runs.
 */

export const EVENT_TITLE = "THE FLOW";
export const EVENT_TAGLINE = "The Generational Wealth Quest";
export const EVENT_SUBTITLE = "Live Webinar";
export const HOST_NAME = "Malik East";

/**
 * The webinar runs every week. Change the day and time here; the countdown,
 * the header label and the hero sentence all follow it.
 * weekday: 0 = Sunday … 6 = Saturday. hour is 24-hour, Central time.
 */
export const WEEKLY_SCHEDULE = {
  weekday: 6,
  hour: 10,
  minute: 30,
  durationMinutes: 90,
} as const;

export const EVENT_TIME_ZONE = "America/Chicago";

const DAY_MS = 86_400_000;

/** Wall-clock parts of `date` in the event's time zone. */
function zonedParts(date: Date) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: EVENT_TIME_ZONE,
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hourCycle: "h23",
    weekday: "short",
  }).formatToParts(date);
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
  return {
    year: Number(get("year")),
    month: Number(get("month")),
    day: Number(get("day")),
    hour: Number(get("hour")),
    minute: Number(get("minute")),
    second: Number(get("second")),
    weekday: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(get("weekday")),
  };
}

/** The instant a Central-time wall-clock time happens, DST included. */
function zonedTimeToUtc(year: number, month: number, day: number, hour: number, minute: number): Date {
  const wall = Date.UTC(year, month - 1, day, hour, minute);
  let guess = wall;
  for (let i = 0; i < 2; i++) {
    const p = zonedParts(new Date(guess));
    const seen = Date.UTC(p.year, p.month - 1, p.day, p.hour, p.minute, p.second);
    guess += wall - seen;
  }
  return new Date(guess);
}

/**
 * Start of the session to count down to: the one in progress (until its
 * window closes), otherwise the next one.
 */
export function getEventDate(now: Date = new Date()): Date {
  const today = zonedParts(now);
  const ahead = (WEEKLY_SCHEDULE.weekday - today.weekday + 7) % 7;
  for (const offset of [ahead - 7, ahead, ahead + 7]) {
    const d = new Date(Date.UTC(today.year, today.month - 1, today.day) + offset * DAY_MS);
    const start = zonedTimeToUtc(
      d.getUTCFullYear(),
      d.getUTCMonth() + 1,
      d.getUTCDate(),
      WEEKLY_SCHEDULE.hour,
      WEEKLY_SCHEDULE.minute
    );
    if (now.getTime() < start.getTime() + WEEKLY_SCHEDULE.durationMinutes * 60_000) {
      return start;
    }
  }
  throw new Error("unreachable: a weekly session always falls within two weeks");
}

const timeIn = (date: Date, timeZone: string, short: boolean) => {
  const t = date.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true, timeZone });
  return short ? t.replace(":00", "").replace(" ", "") : t;
};

/** Header label, e.g. "SAT • OCT 3 • 10:30AM CT / 11:30AM ET". */
export function getEventDateLabel(date: Date = getEventDate()): string {
  const fmt = (o: Intl.DateTimeFormatOptions) =>
    date.toLocaleString("en-US", { ...o, timeZone: EVENT_TIME_ZONE });
  const times = `${timeIn(date, EVENT_TIME_ZONE, true)} CT / ${timeIn(date, "America/New_York", true)} ET`;
  return `${fmt({ weekday: "short" })} • ${fmt({ month: "short" })} ${fmt({ day: "numeric" })} • ${times}`.toUpperCase();
}

/**
 * Plain-language sentence for the hero, derived from the shared event date
 * so it always matches the countdown target, in Central and Eastern time.
 * Example: "Saturday, October 3 at 10:30 AM CT / 11:30 AM ET"
 */
export function getEventSentence(date: Date = getEventDate()): string {
  const weekday = date.toLocaleDateString("en-US", { weekday: "long", timeZone: EVENT_TIME_ZONE });
  const monthDay = date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    timeZone: EVENT_TIME_ZONE,
  });
  return `${weekday}, ${monthDay} at ${timeIn(date, EVENT_TIME_ZONE, false)} CT / ${timeIn(date, "America/New_York", false)} ET`;
}

/**
 * Registration endpoint: the GoHighLevel inbound-webhook URL, set as
 * VITE_REGISTRATION_ENDPOINT at build time. When empty, the form shows an
 * error instead of pretending the registration went through.
 */
export function getRegistrationEndpoint(): string {
  return (import.meta.env.VITE_REGISTRATION_ENDPOINT as string | undefined) ?? "";
}

export interface BossCard {
  id: string;
  boss: string;
  subtitle: string;
  copy: string;
  level: string;
}

export const BOSS_CARDS: BossCard[] = [
  {
    id: "the-order",
    boss: "The Order",
    subtitle: "Why most people start in the middle",
    copy:
      "Wealth is not a product — it's an order of operations. You'll get the 7-level Quest Map and see why a policy you can't keep funding, a loan on a business with no structure, and a trust with nothing in it all fail for the same reason: sequence.",
    level: "SECRET I",
  },
  {
    id: "the-foundation",
    boss: "The Foundation",
    subtitle: "How your credit file actually works",
    copy:
      "What's actually in your file, and what the law lets you challenge: information that's inaccurate, incomplete or unverifiable. Plus the hard truth — accurate negative information can't be removed by anyone. It ages off on a schedule.",
    level: "SECRET II · LEVEL 1",
  },
  {
    id: "the-engine",
    boss: "The Engine",
    subtitle: "How protection and growth work — and when they don't fit",
    copy:
      "How a properly designed, overfunded permanent life insurance policy can build cash value you can borrow against while carrying a death benefit for your family — and the truth: real costs inside it, loans accrue interest, underfunding can lapse a policy, and the MEC trap.",
    level: "SECRET III · LEVELS 3–4",
  },
  {
    id: "the-legacy",
    boss: "The Legacy",
    subtitle: "The Fortress → The Transfer → The Generational Tree",
    copy:
      "A holding company and trust drafted by an attorney, beneficiaries chosen on purpose instead of by default, and a next generation that starts ahead. A revocable living trust avoids probate for what's in it — it doesn't shield you from creditors.",
    level: "LEVELS 5–7",
  },
];

export const TAKEAWAYS: string[] = [
  "The 7-level Quest Map — and why the order matters more than any single product",
  "What's in your credit file, what the law lets you challenge, and what nobody can remove",
  "Why you borrow to build assets — and never borrow to cover your bills",
  "How a properly designed permanent life insurance policy works — the costs, the loans, the MEC trap, and who it isn't for",
  "How trusts and beneficiaries work together, so what you build doesn't end with you",
];

export interface HostStat {
  label: string;
  value: string;
}

export const HOST_STATS: HostStat[] = [
  { label: "CLASS", value: "THE GUIDE" },
  { label: "LICENSED AGENT SINCE", value: "2020" },
  { label: "EDUCATION", value: "B.S. — ALCORN STATE" },
  { label: "STATUS", value: "ACTIVE — TAKING NEW CLIENTS" },
];

export const HOST_BIO =
  "Malik East is a licensed life insurance agent, the founder of 7Band Financial Agency and Arise Credit Pro, and the author of The American Money Tree (coming soon). He has been licensed since 2020. He earned a B.S. in Computer Networking and Information Technology from Alcorn State University in 2019, bringing a systems-minded perspective to financial education. His story began in 7th grade learning the saxophone — music taught him timing, rhythm, and harmony, and the same principles now guide the 7-Level Generational Wealth Blueprint he uses to help families build wealth that outlasts them by 100 years.";

export const HOST_QUOTE =
  "Every time a client reaches a financial goal, it's music to my ears.";

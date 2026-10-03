/**
 * Central event configuration for The Great Generational Wealth Journey: Live Webinar.
 * Change WEEKLY_SCHEDULE to change when the webinar runs.
 */

export const EVENT_TITLE = "The Great Generational Wealth Journey";
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
    id: "credit-optimization",
    boss: "Credit Restoration",
    subtitle: "Restore Your Foundation",
    copy:
      "Some people earn good money but have no system to track where it goes — and a bad credit score stops you from getting credit cards and access to loans from the banks. You'll learn a simple budgeting system plus the practical steps to strengthen your personal credit profile.",
    level: "LEVEL 1",
  },
  {
    id: "llc-structuring",
    boss: "LLC Structuring",
    subtitle: "Build Your Base",
    copy:
      "You need more than just an LLC, EIN, and D.U.N.S number for your business legal documents. In this section you'll learn what all you'll need and a way you will know for sure your business is legally set up properly.",
    level: "LEVEL 2",
  },
  {
    id: "lifetime-loc",
    boss: "IUL / Lifetime LOC",
    subtitle: "Grow your Money Tree",
    copy:
      "This is where things get really interesting. You'll learn how an Indexed Universal Life policy really works from behind the scenes — I will reveal why I call it the Lifetime Line of Credit.",
    level: "LEVEL 4",
  },
  {
    id: "generational-transfer",
    boss: "Transfer of Wealth",
    subtitle: "Sit Under the Shade → The Generational Tree",
    copy:
      "In this segment, you'll learn how Estate Planning with an Attorney and Life Insurance Agent are key players when it comes to moving assets into a legal fortress, bypass probate, and transfer the map and the knowledge so your Family Bank never resets.",
    level: "LEVELS 5–7",
  },
];

export const PROOF_STAT = "$205.7 BILLION";
export const PROOF_COPY =
  "As of late 2024, FDIC filings show that U.S. banks hold $205.7 Billion of safe cash value in permanent life insurance as their liquid reserve. They count it as a reserve because they can borrow against it on demand while the balance keeps compounding. Stop renting their capital. It's time to build your own vault.";

export const TAKEAWAYS: string[] = [
  "Run the Efficiency Scan to find where banks quietly siphon 86% of your mortgage payment as interest",
  "Restore your Credit Shield with automation tools — no more guessing at scores",
  "Structure an LLC \"Business Credit Firewall\" that keeps borrowing power off your personal report",
  "Design a Lifetime Line of Credit that compounds safely while funding deals as liquid collateral",
  "Use Trusts to bypass probate and transfer wealth 100% tax-free — so your family bank never resets",
];

export interface HostStat {
  label: string;
  value: string;
}

export const HOST_STATS: HostStat[] = [
  { label: "CLASS", value: "GUIDE / STRATEGIST" },
  { label: "LICENSED AGENT SINCE", value: "2020" },
  { label: "EDUCATION", value: "B.S. — ALCORN STATE" },
  { label: "STATUS", value: "ACTIVE — TAKING NEW CLIENTS" },
];

export const HOST_BIO =
  "Malik East, Co-Creator of The Flow, is the founder of 7Band Financial Agency and a licensed life insurance agent since 2020. He earned a B.S. in Computer Networking and Information Technology from Alcorn State University in 2019, bringing a systems-minded perspective to financial education. His story began in 7th grade learning the saxophone — music taught him timing, rhythm, and harmony, and the same principles now guide the 7-Level Generational Wealth Blueprint he uses to help families build wealth that outlasts them by 100 years.";

export const HOST_QUOTE =
  "Every time a client reaches a financial goal, it's music to my ears.";

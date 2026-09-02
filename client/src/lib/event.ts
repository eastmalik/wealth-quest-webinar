/**
 * Central event configuration for The Great Generational Wealth Journey: Live Webinar.
 * Update EVENT_DATE_ISO to change the countdown target.
 */

export const EVENT_TITLE = "The Great Generational Wealth Journey";
export const EVENT_SUBTITLE = "Live Webinar";
export const HOST_NAME = "Malik East";

/**
 * Countdown target for the live webinar.
 * Defaults to a fixed upcoming broadcast date; override with
 * VITE_EVENT_DATE (ISO 8601, e.g. "2026-09-19T19:00:00-05:00").
 */
const FALLBACK_EVENT_DATE = "2026-09-19T19:00:00-05:00";

export function getEventDate(): Date {
  const fromEnv = import.meta.env.VITE_EVENT_DATE as string | undefined;
  const candidate = fromEnv && fromEnv.trim().length > 0 ? fromEnv : FALLBACK_EVENT_DATE;
  const parsed = new Date(candidate);
  return Number.isNaN(parsed.getTime()) ? new Date(FALLBACK_EVENT_DATE) : parsed;
}

export const EVENT_DATE_LABEL = "SAT • SEP 19 • 7PM CT";

/**
 * External registration endpoint. Point this at your marketing platform:
 * Formspree (https://formspree.io/f/xxxx), a Zapier/Make webhook,
 * ConvertKit form action, GoHighLevel webhook, etc.
 * When empty, the form stores registrations locally and shows the
 * confirmed-ticket state so the page is fully demoable.
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
    subtitle: "Unlock the Engine",
    copy:
      "This is where things get really interesting. You'll learn how an Indexed Universal Life policy really works from behind the scenes — I will reveal why I call it the Lifetime Line of Credit.",
    level: "LEVEL 4",
  },
  {
    id: "generational-transfer",
    boss: "The Generational Transfer",
    subtitle: "Construct the Fortress → The Generational Tree",
    copy:
      "Without a plan, the wealth you spend a lifetime building dies with you — and your children start over from zero. In this segment, you'll learn how Trusts and beneficiary architecture move assets into a legal fortress, bypass probate, and transfer wealth tax-free so your Family Bank never resets.",
    level: "LEVELS 5–7",
  },
];

export interface Act {
  id: string;
  act: string;
  title: string;
  tagline: string;
  copy: string;
}

export const ACTS: Act[] = [
  {
    id: "act-1",
    act: "ACT I",
    title: "THE TUTORIAL",
    tagline: "Get Yo Mind Right!",
    copy:
      "Malik East takes the stage to drop the mindset shifts that changed his life. You'll learn how to run the Efficiency Scan to find where the banks are quietly siphoning 86% of your mortgage payments as interest.",
  },
  {
    id: "act-2",
    act: "ACT II",
    title: "THE FOUNDATION CAMPAIGN",
    tagline: "Levels 1–3",
    copy:
      "How to restore your Credit Shield using automation tools. We'll show you how to structure an LLC to build a \"Business Credit Firewall\" that keeps your borrowing power off your personal credit report.",
  },
  {
    id: "act-3",
    act: "ACT III",
    title: "THE ACCELERATION",
    tagline: "Level 4 Engine",
    copy:
      "Unveiling the Lifetime Line of Credit. We will show you the exact policy design that lets your money do two jobs at once—compounding safely at market-linked rates while acting as liquid collateral to fund business and real estate deals simultaneously.",
  },
  {
    id: "act-4",
    act: "ACT IV",
    title: "THE HIGH SCORE",
    tagline: "The Family Bank",
    copy:
      "How to legally separate yourself from your assets using Trusts so your wealth bypasses probate and transfers 100% tax-free, ensuring your family bank never resets to zero.",
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

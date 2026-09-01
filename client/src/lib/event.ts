/**
 * Central event configuration for The Generational Wealth Quest: Live Event Premiere.
 * Update EVENT_DATE_ISO to change the countdown target.
 */

export const EVENT_TITLE = "The Generational Wealth Quest";
export const EVENT_SUBTITLE = "Live Event Premiere";
export const HOST_NAME = "Malik East";

/**
 * Countdown target for the live broadcast.
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
  debuff: string;
  level: string;
}

export const BOSS_CARDS: BossCard[] = [
  {
    id: "interest-siphon",
    boss: "The Interest Siphon",
    subtitle: "No Budgeting",
    copy:
      "You're bleeding gold. Without a system to track your cash, your money leaks out as fast as it comes in. You are wealthy on paper but completely broke at the kitchen table.",
    debuff: "DEBUFF: -40% GOLD RETENTION",
    level: "BOSS 01",
  },
  {
    id: "credit-wall",
    boss: "The Credit Wall",
    subtitle: "Unfundable Profile",
    copy:
      "Your personal and business scores are weak, leaving you completely unfundable. You're locked out of the best tools before the game even begins.",
    debuff: "DEBUFF: FUNDING LOCKED",
    level: "BOSS 02",
  },
  {
    id: "exposure-trap",
    boss: "The Exposure Trap",
    subtitle: "Zero Business Structure",
    copy:
      "Running a business without an ironclad LLC structure is a legal disaster waiting to happen. One bad lawsuit can wipe out your entire inventory.",
    debuff: "DEBUFF: ASSETS EXPOSED",
    level: "BOSS 03",
  },
  {
    id: "legacy-wipe",
    boss: "The Legacy Wipe",
    subtitle: "No Generational Plan",
    copy:
      "You work, you sweat, and then your wealth dies with you. The game resets to zero for your children, forcing them to start the grind from scratch.",
    debuff: "DEBUFF: PROGRESS RESET",
    level: "BOSS 04",
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

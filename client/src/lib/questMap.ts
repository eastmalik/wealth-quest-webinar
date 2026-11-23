/**
 * THE FLOW Quest Map: the 7-level storyline told in quest form.
 *
 * Moved here from 7bandfinancialagency.com, which is now the life insurance
 * site. Level names and wording follow THE FLOW webinar deck. Keep claims
 * honest: no guaranteed results, real costs shown, borrow to build assets
 * and never to cover bills.
 */

export type Guide = "Arise Credit Pro" | "East Consulting LLC" | "7Band Financial Agency" | "Your attorney" | "You";

export type QuestLevel = {
  level: number;
  name: string;
  stage: "Tutorial" | "The Foundation" | "The Acceleration" | "The Legacy";
  quest: string;
  earn: string;
  truth?: string;
  guide: Guide[];
  guideUrl?: string;
};

export const QUEST_LEVELS: QuestLevel[] = [
  {
    level: 0,
    name: "The Tutorial",
    stage: "Tutorial",
    quest:
      "Three things before level one: your mindset (why you're doing this), your cash flow (track income and expenses every month), and a risk audit (what you can afford to lose before you take any risk).",
    earn: "You can see your money, so you can build on it.",
    guide: ["You"],
  },
  {
    level: 1,
    name: "The Credit Shield",
    stage: "The Foundation",
    quest:
      "Pull all three credit reports. Challenge anything that's inaccurate, incomplete or unverifiable, and build the habits that strengthen your profile.",
    earn: "Lower costs on every loan, deposit and approval after this one.",
    truth: "Accurate negative information can't be removed by anyone. It ages off on a schedule.",
    guide: ["Arise Credit Pro"],
    guideUrl: "https://www.arisecreditpro.com",
  },
  {
    level: 2,
    name: "The Business Firewall",
    stage: "The Foundation",
    quest:
      "Form the right business entity, get your EIN, open a business bank account, and keep business and personal money apart.",
    earn: "A business that stands on its own, so business risk stays with the business.",
    guide: ["East Consulting LLC"],
    guideUrl: "https://www.eastconsultingllc.com",
  },
  {
    level: 3,
    name: "Capital Readiness",
    stage: "The Foundation",
    quest:
      "Become fundable: clean records, banking history, and a plan for every dollar you'd borrow.",
    earn: "Access to capital where every dollar has a job.",
    truth: "Borrow to build assets. Never borrow to cover your bills.",
    guide: ["East Consulting LLC"],
    guideUrl: "https://www.eastconsultingllc.com",
  },
  {
    level: 4,
    name: "The Engine",
    stage: "The Acceleration",
    quest:
      "A properly designed, overfunded permanent life insurance policy, paid for from steady cash flow.",
    earn: "Cash value you can borrow against while you're alive, plus a death benefit for your family.",
    truth:
      "It has real costs. Loans accrue interest. Underfunding or over-borrowing can make a policy lapse. Too much money in too fast can turn it into a MEC. It's for people who actually want the insurance.",
    guide: ["7Band Financial Agency"],
    guideUrl: "https://www.7bandfinancialagency.com",
  },
  {
    level: 5,
    name: "The Fortress",
    stage: "The Legacy",
    quest:
      "Hold your business interests and assets in the right structures, such as a holding company or a trust, drafted by an attorney for your situation.",
    earn: "What you build is organized and protected as far as the law allows.",
    truth:
      "A revocable living trust avoids probate for what's titled into it, but it doesn't shield you from creditors. Different trusts do different jobs.",
    guide: ["Your attorney"],
  },
  {
    level: 6,
    name: "The Transfer",
    stage: "The Legacy",
    quest: "Choose your beneficiaries on purpose instead of by default.",
    earn: "A death benefit that's generally paid income-tax-free, to the people you chose, with fewer delays.",
    truth: "Estate taxes can still apply. Review beneficiaries after every big life change.",
    guide: ["7Band Financial Agency"],
    guideUrl: "https://www.7bandfinancialagency.com",
  },
  {
    level: 7,
    name: "The Generational Tree",
    stage: "The Legacy",
    quest: "Teach the next generation the map.",
    earn: "Your children start ahead, at Level 3 instead of Level 0.",
    guide: ["You"],
  },
];

export const MODE_COMPARISON = [
  {
    area: "Money",
    npc: "Sits still, with no plan.",
    player: "Every dollar has a job: tracked, saved, put to work.",
  },
  {
    area: "Credit",
    npc: "Pays the highest rates because the file was never checked.",
    player: "Knows the file, challenges the errors, pays less to borrow.",
  },
  {
    area: "Borrowing",
    npc: "Borrows to cover the bills.",
    player: "Borrows only to build assets.",
  },
  {
    area: "Protection",
    npc: "Buys a product before understanding it.",
    player: "Knows the costs, the trade-offs and who it isn't for.",
  },
  {
    area: "Legacy",
    npc: "Beneficiaries by default. The family figures it out.",
    player: "Beneficiaries and structures chosen on purpose.",
  },
];

export const WINNING = [
  "You know where you are on the map, and what comes next.",
  "Your credit, your business and your protection each have a plan.",
  "Every dollar you borrow is building something.",
  "Your family knows the plan, and has the map.",
];

import { motion } from "framer-motion";
import {
  BookOpenCheck,
  CalendarCheck,
  Download,
  KeyRound,
  MessageSquareText,
  Rocket,
  Scale,
  Megaphone,
} from "lucide-react";

const LOOT = [
  {
    icon: BookOpenCheck,
    name: "The Ultimate Budget Guide",
    rarity: "FREE BONUS — UNLOCKED ON ENTRY",
    desc: "Our cash-tracking playbook, sent to your inbox the moment you register — so you can scan your finances for leaks before the webinar starts.",
  },
  {
    icon: CalendarCheck,
    name: "Your Seat at the Live Webinar",
    rarity: "CORE ITEM — 100% FREE",
    desc: "A front-row ticket to the full live training on The Flow — credit restoration, legal setup, the Lifetime Line of Credit, and the transfer of wealth.",
  },
  {
    icon: MessageSquareText,
    name: "Live SMS Updates",
    rarity: "COMPANION PERK",
    desc: "Reminders and go-live alerts straight to your phone, so you never miss the start. No spam — just the quest.",
  },
];

const GUIDES = [
  {
    icon: Scale,
    name: "Consumer Law Reference Sheet",
    tag: "CONSUMER LAW",
    desc: "Know your rights — a concise reference covering the FCRA, FDCPA, and ECOA, the federal laws that protect you when disputing credit and dealing with collectors.",
    url: "https://www.arisecreditpro.com/manus-storage/legal_reference_sheet_456e0e97.pdf",
  },
  {
    icon: KeyRound,
    name: "Credit Is Access Guide",
    tag: "CREDIT ACCESS",
    desc: "Learn how to leverage your credit score to unlock funding, loans, and financial opportunities most people don't even know exist.",
    url: "https://www.arisecreditpro.com/manus-storage/CreditIsAccess_AriseCreditPro_7dae5a51.pdf",
  },
  {
    icon: Rocket,
    name: "Business Start-Up Guide",
    tag: "BUSINESS",
    desc: "Everything you need to launch your business the right way — from entity formation to building business credit and accessing capital.",
    url: "https://www.arisecreditpro.com/manus-storage/BusinessStartUpGuide_AriseCreditPro_39a880d8.pdf",
  },
  {
    icon: Megaphone,
    name: "Meta & Instagram Ads Setup Lab",
    tag: "MARKETING",
    desc: "A visual, step-by-step lab guide with pictures showing you exactly how to set up and run Meta and Instagram ad campaigns.",
    url: "https://www.arisecreditpro.com/manus-storage/Meta_Instagram_Ads_MODERN_43d7937c.pdf",
  },
];

export function LoadoutSection() {
  return (
    <section id="loadout" className="relative py-20 sm:py-24 bg-[oklch(0.13_0.01_95)]">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-display text-[9px] sm:text-[10px] tracking-wider text-[oklch(0.82_0.165_92)]">
            EVERYTHING YOU GET TODAY
          </p>
          <h2 className="mt-4 font-display text-[clamp(1.1rem,3vw,1.9rem)] leading-[1.5] text-glow-gold">
            YOUR LOADOUT
          </h2>
          <p className="mt-4 text-[oklch(0.78_0.02_95)] leading-relaxed">
            Register free and this is what lands in your inventory — no charge,
            no catch.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-5">
          {LOOT.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex items-start gap-5 border-2 border-[oklch(0.82_0.165_92/35%)] bg-[oklch(0.14_0.01_95)] p-5 sm:p-6 transition-all hover:border-[oklch(0.9_0.19_95/70%)] hover:shadow-[0_0_24px_oklch(0.82_0.165_92/20%)]"
            >
              <span className="grid shrink-0 place-items-center size-12 border-2 border-[oklch(0.82_0.165_92/50%)] bg-[oklch(0.11_0.008_95)] text-[oklch(0.9_0.19_95)] shadow-[0_0_14px_oklch(0.82_0.165_92/25%)]">
                <item.icon className="size-6" strokeWidth={1.8} />
              </span>
              <div>
                <p className="font-display text-[7px] sm:text-[8px] tracking-wider text-[oklch(0.82_0.165_92)]">
                  {item.rarity}
                </p>
                <h3 className="mt-1.5 font-heading text-base sm:text-lg font-bold tracking-wide text-[oklch(0.95_0.02_95)]">
                  {item.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[oklch(0.75_0.02_95)]">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Free guides from Arise Credit Pro */}
        <div className="mx-auto mt-14 max-w-4xl">
          <p className="text-center font-display text-[9px] sm:text-[10px] tracking-wider text-[oklch(0.82_0.165_92)]">
            BONUS LOOT — FREE GUIDES FROM ARISE CREDIT PRO
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {GUIDES.map((guide, i) => (
              <motion.a
                key={guide.name}
                href={guide.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex flex-col border-2 border-[oklch(0.82_0.165_92/35%)] bg-[oklch(0.14_0.01_95)] p-5 transition-all hover:border-[oklch(0.9_0.19_95/70%)] hover:shadow-[0_0_24px_oklch(0.82_0.165_92/20%)]"
              >
                <div className="flex items-center justify-between">
                  <span className="grid place-items-center size-11 border-2 border-[oklch(0.82_0.165_92/50%)] bg-[oklch(0.11_0.008_95)] text-[oklch(0.9_0.19_95)] shadow-[0_0_14px_oklch(0.82_0.165_92/25%)]">
                    <guide.icon className="size-5" strokeWidth={1.8} />
                  </span>
                  <span className="font-display text-[7px] tracking-wider text-[oklch(0.65_0.02_95)]">
                    {guide.tag}
                  </span>
                </div>
                <h3 className="mt-4 font-heading text-sm font-bold tracking-wide text-[oklch(0.95_0.02_95)]">
                  {guide.name}
                </h3>
                <p className="mt-2 flex-1 text-xs leading-relaxed text-[oklch(0.72_0.02_95)]">
                  {guide.desc}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 font-display text-[8px] tracking-wider text-[oklch(0.9_0.19_95)] group-hover:text-glow-gold-soft transition">
                  <Download className="size-3.5" />
                  DOWNLOAD FREE PDF
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

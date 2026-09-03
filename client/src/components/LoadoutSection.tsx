import { motion } from "framer-motion";
import { BookOpenCheck, CalendarCheck, MessageSquareText } from "lucide-react";

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
      </div>
    </section>
  );
}

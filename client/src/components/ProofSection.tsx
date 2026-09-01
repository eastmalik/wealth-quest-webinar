import { PROOF_COPY, PROOF_STAT } from "@/lib/event";
import { motion } from "framer-motion";
import { Landmark, PiggyBank, Vault } from "lucide-react";

const ROWS = [
  {
    icon: PiggyBank,
    label: "WHERE NORMAL PEOPLE PARK MONEY",
    detail: "Checking & savings accounts",
    value: "~0.01–0.5% APY",
    note: "Inflation eats the rest",
    barWidth: "8%",
    tone: "dim" as const,
  },
  {
    icon: Landmark,
    label: "WHAT BANKS DO WITH YOUR DEPOSITS",
    detail: "Lend it back out at credit-card rates",
    value: "UP TO 22%+",
    note: "You funded it. They keep the spread.",
    barWidth: "62%",
    tone: "red" as const,
  },
  {
    icon: Vault,
    label: "WHERE BANKS STORE THEIR OWN RESERVES",
    detail: "BOLI — Bank-Owned Life Insurance cash value",
    value: "$205.7B",
    note: "Borrowable on demand. Keeps compounding.",
    barWidth: "100%",
    tone: "gold" as const,
  },
];

const BAR_STYLES = {
  dim: "bg-[oklch(0.45_0.03_95)]",
  red: "bg-gradient-to-r from-[oklch(0.5_0.2_27)] to-[oklch(0.68_0.26_25)] shadow-[0_0_16px_oklch(0.6_0.24_27/50%)]",
  gold: "bg-gradient-to-r from-[oklch(0.62_0.12_92)] via-[oklch(0.82_0.165_92)] to-[oklch(0.9_0.19_95)] shadow-[0_0_22px_oklch(0.82_0.165_92/60%)]",
};

export function ProofSection() {
  return (
    <section id="proof" className="relative py-20 sm:py-28">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-display text-[9px] sm:text-[10px] tracking-wider text-[oklch(0.82_0.165_92)]">
            FOLLOW THE GOLD
          </p>
          <h2 className="mt-4 font-display text-[clamp(1.1rem,3vw,1.9rem)] leading-[1.5] text-glow-gold">
            WATCH WHAT THEY BUY
          </h2>
        </div>

        {/* Stat callout */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-12 max-w-4xl pixel-frame bg-[oklch(0.14_0.01_95)] px-6 py-10 sm:px-12 text-center"
        >
          <p className="font-heading text-xs tracking-[0.3em] text-[oklch(0.65_0.02_95)]">
            FDIC FILINGS • LATE 2024
          </p>
          <p className="mt-4 font-display text-[clamp(1.6rem,5vw,3.2rem)] text-glow-gold animate-flicker">
            {PROOF_STAT}
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-sm sm:text-base leading-relaxed text-[oklch(0.78_0.02_95)]">
            {PROOF_COPY}
          </p>
        </motion.div>

        {/* Comparison graph */}
        <div className="mx-auto mt-12 max-w-4xl space-y-8">
          {ROWS.map((row, i) => (
            <motion.div
              key={row.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div className="flex items-center gap-3">
                  <row.icon className={`size-5 ${row.tone === "gold" ? "text-[oklch(0.9_0.19_95)]" : row.tone === "red" ? "text-[oklch(0.68_0.26_25)]" : "text-[oklch(0.55_0.02_95)]"}`} />
                  <div>
                    <p className="font-heading text-sm sm:text-base font-bold tracking-wide text-[oklch(0.92_0.02_95)]">
                      {row.label}
                    </p>
                    <p className="text-xs text-[oklch(0.6_0.02_95)]">{row.detail}</p>
                  </div>
                </div>
                <p className={`font-display text-sm sm:text-base ${row.tone === "gold" ? "text-glow-gold" : row.tone === "red" ? "text-[oklch(0.68_0.26_25)]" : "text-[oklch(0.6_0.02_95)]"}`}>
                  {row.value}
                </p>
              </div>
              <div className="mt-3 h-6 sm:h-8 w-full border border-[oklch(0.82_0.165_92/20%)] bg-[oklch(0.13_0.01_95)] p-1">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: row.barWidth }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 1.1, delay: 0.2 + i * 0.15, ease: "easeOut" }}
                  className={`h-full ${BAR_STYLES[row.tone]}`}
                />
              </div>
              <p className="mt-1.5 text-xs text-[oklch(0.55_0.02_95)]">{row.note}</p>
            </motion.div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center font-heading text-sm sm:text-base tracking-wide text-[oklch(0.85_0.03_95)]">
          Stop renting their capital.{" "}
          <span className="text-[oklch(0.9_0.19_95)] font-bold">
            It's time to build your own vault.
          </span>
        </p>
      </div>
    </section>
  );
}

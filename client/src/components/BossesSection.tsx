import { BOSS_CARDS } from "@/lib/event";
import { motion } from "framer-motion";
import { Droplets, ShieldAlert, Scale, Skull } from "lucide-react";

const ICONS: Record<string, typeof Droplets> = {
  "interest-siphon": Droplets,
  "credit-wall": ShieldAlert,
  "exposure-trap": Scale,
  "legacy-wipe": Skull,
};

export function BossesSection() {
  return (
    <section id="stakes" className="relative py-20 sm:py-28">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-display text-[9px] sm:text-[10px] tracking-wider text-[oklch(0.68_0.26_25)]">
            WARNING: FINAL BOSSES AHEAD
          </p>
          <h2 className="mt-4 font-display text-[clamp(1.1rem,3vw,1.9rem)] leading-[1.5] text-glow-gold">
            THE STAKES
          </h2>
          <p className="mt-4 text-[oklch(0.78_0.02_95)] leading-relaxed">
            Four bosses stand between you and generational wealth. Each one
            places a permanent debuff on your life until you learn to beat it.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {BOSS_CARDS.map((card, i) => {
            const Icon = ICONS[card.id] ?? Skull;
            return (
              <motion.article
                key={card.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="group relative border-2 border-[oklch(0.82_0.165_92/55%)] bg-[oklch(0.14_0.01_95)] p-6 transition-all duration-300 hover:border-[oklch(0.68_0.26_25)] hover:shadow-[0_0_32px_oklch(0.6_0.24_27/45%),inset_0_0_24px_oklch(0.6_0.24_27/12%)] hover:-translate-y-1.5"
              >
                {/* Boss level tag */}
                <div className="flex items-center justify-between">
                  <span className="font-display text-[8px] text-[oklch(0.82_0.165_92)] group-hover:text-[oklch(0.68_0.26_25)] transition-colors">
                    {card.level}
                  </span>
                  <span className="font-heading text-[10px] tracking-[0.2em] text-[oklch(0.55_0.02_95)]">
                    HP ▓▓▓▓▓
                  </span>
                </div>

                <div className="mt-5 grid place-items-center size-14 border-2 border-[oklch(0.82_0.165_92/50%)] bg-[oklch(0.11_0.008_95)] text-[oklch(0.9_0.19_95)] shadow-[0_0_14px_oklch(0.82_0.165_92/25%)] group-hover:border-[oklch(0.68_0.26_25/70%)] group-hover:text-[oklch(0.68_0.26_25)] group-hover:shadow-[0_0_18px_oklch(0.6_0.24_27/45%)] transition-all">
                  <Icon className="size-7" strokeWidth={1.8} />
                </div>

                <h3 className="mt-5 font-heading text-lg font-bold tracking-wide text-[oklch(0.95_0.02_95)] uppercase">
                  {card.boss}
                </h3>
                <p className="mt-1 font-display text-[8px] leading-relaxed text-[oklch(0.82_0.165_92)] group-hover:text-[oklch(0.68_0.26_25)] transition-colors">
                  ({card.subtitle})
                </p>

                <p className="mt-4 text-sm leading-relaxed text-[oklch(0.75_0.02_95)]">
                  {card.copy}
                </p>

                {/* Debuff meter — revealed on hover */}
                <div className="mt-5 border-t border-[oklch(0.82_0.165_92/20%)] pt-4 group-hover:border-[oklch(0.6_0.24_27/40%)] transition-colors">
                  <div className="h-1.5 w-full bg-[oklch(0.22_0.015_95)] overflow-hidden">
                    <div className="h-full w-0 bg-gradient-to-r from-[oklch(0.6_0.24_27)] to-[oklch(0.68_0.26_25)] shadow-[0_0_10px_oklch(0.6_0.24_27/80%)] transition-all duration-700 group-hover:w-full" />
                  </div>
                  <p className="mt-2 font-display text-[8px] text-[oklch(0.55_0.02_95)] group-hover:text-[oklch(0.68_0.26_25)] transition-colors">
                    {card.debuff}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

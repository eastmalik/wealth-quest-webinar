import { BOSS_CARDS } from "@/lib/event";
import { motion } from "framer-motion";
import { Shield, Building2, Cog, TreePine, Skull } from "lucide-react";

const ICONS: Record<string, typeof Shield> = {
  "the-order": Building2,
  "the-foundation": Shield,
  "the-engine": Cog,
  "the-legacy": TreePine,
};

export function BossesSection() {
  return (
    <section id="stakes" className="relative py-20 sm:py-28">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mt-4 font-display text-[clamp(1.1rem,3vw,1.9rem)] leading-[1.5] text-glow-gold">
            WHAT THIS WEBINAR COVERS
          </h2>
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
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

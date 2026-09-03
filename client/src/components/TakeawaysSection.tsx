import { TAKEAWAYS } from "@/lib/event";
import { motion } from "framer-motion";
import { CheckSquare } from "lucide-react";

export function TakeawaysSection() {
  return (
    <section id="takeaways" className="relative py-20 sm:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mt-4 font-display text-[clamp(1.1rem,3vw,1.9rem)] leading-[1.5] text-glow-gold">
            WHAT YOU'LL WALK AWAY WITH
          </h2>
          <p className="mt-4 text-[oklch(0.78_0.02_95)] leading-relaxed">
            Five concrete plays from the live training — no fluff, no theory
            you'll never use.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-4">
          {TAKEAWAYS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="group flex items-start gap-4 border-2 border-[oklch(0.82_0.165_92/35%)] bg-[oklch(0.14_0.01_95)] px-5 py-4 transition-all hover:border-[oklch(0.9_0.19_95/70%)] hover:shadow-[0_0_20px_oklch(0.82_0.165_92/25%)]"
            >
              <span className="mt-0.5 grid shrink-0 place-items-center size-7 border-2 border-[oklch(0.82_0.165_92/60%)] bg-[oklch(0.11_0.008_95)] text-[oklch(0.9_0.19_95)] group-hover:shadow-[0_0_12px_oklch(0.82_0.165_92/50%)] transition-shadow">
                <CheckSquare className="size-4" strokeWidth={2.4} />
              </span>
              <p className="text-sm sm:text-base leading-relaxed text-[oklch(0.85_0.03_95)]">
                {item}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

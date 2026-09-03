import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const OLD_WAY = [
  "Park your money in checking at ~0.01% while inflation eats the rest",
  "Banks lend your deposits back out at up to 22% — and keep the spread",
  "Bad credit locks you out of cards, loans, and funding entirely",
  "An LLC and EIN alone leave your assets exposed to one bad lawsuit",
  "No estate plan means probate court — and your kids restart from zero",
];

const NEW_WAY = [
  "Run a simple budgeting system that plugs the leaks every month",
  "Restore your credit profile so banks start saying yes",
  "Set up your business legally — the right documents, done right",
  "Put your money to work with the Lifetime Line of Credit engine",
  "Transfer the map and the knowledge so your Family Bank never resets",
];

export function ComparisonSection() {
  return (
    <section id="comparison" className="relative py-20 sm:py-28">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-display text-[9px] sm:text-[10px] tracking-wider text-[oklch(0.82_0.165_92)]">
            TWO DIFFERENT PERSPECTIVES
          </p>
          <h2 className="mt-4 font-display text-[clamp(1.1rem,3vw,1.9rem)] leading-[1.5] text-glow-gold">
            THE BANK'S GAME vs YOUR OWN FLOW
          </h2>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 lg:grid-cols-2">
          {/* The Bank's Game — red card */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="border-2 border-[oklch(0.6_0.24_27/60%)] bg-[oklch(0.6_0.24_27/8%)] p-6 sm:p-8"
          >
            <p className="flex items-center gap-2 font-display text-[10px] sm:text-xs text-[oklch(0.68_0.26_25)]">
              <X className="size-4" strokeWidth={3} />
              THE BANK'S GAME
            </p>
            <p className="mt-2 font-heading text-xs tracking-[0.2em] text-[oklch(0.6_0.05_25)]">
              THE OLD FRUSTRATING WAY
            </p>
            <ul className="mt-6 space-y-4">
              {OLD_WAY.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.07 }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-0.5 grid shrink-0 place-items-center size-6 rounded-full border border-[oklch(0.6_0.24_27/60%)] bg-[oklch(0.6_0.24_27/15%)] text-[oklch(0.68_0.26_25)]">
                    <X className="size-3.5" strokeWidth={3} />
                  </span>
                  <span className="text-sm leading-relaxed text-[oklch(0.72_0.03_25)]">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* The Flow — gold card */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="border-2 border-[oklch(0.9_0.19_95/70%)] bg-[oklch(0.82_0.165_92/6%)] p-6 sm:p-8 shadow-[0_0_40px_oklch(0.82_0.165_92/15%)]"
          >
            <p className="flex items-center gap-2 font-display text-[10px] sm:text-xs text-glow-gold-soft">
              <Check className="size-4" strokeWidth={3} />
              THE FLOW
            </p>
            <p className="mt-2 font-heading text-xs tracking-[0.2em] text-[oklch(0.75_0.06_92)]">
              THE WAY YOU'LL LEARN
            </p>
            <ul className="mt-6 space-y-4">
              {NEW_WAY.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: 0.15 + i * 0.07 }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-0.5 grid shrink-0 place-items-center size-6 rounded-full border border-[oklch(0.9_0.19_95/60%)] bg-[oklch(0.82_0.165_92/15%)] text-[oklch(0.9_0.19_95)] shadow-[0_0_10px_oklch(0.82_0.165_92/30%)]">
                    <Check className="size-3.5" strokeWidth={3} />
                  </span>
                  <span className="text-sm leading-relaxed text-[oklch(0.85_0.03_95)]">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <a
            href="#register"
            className="animate-gold-pulse inline-flex items-center justify-center gap-3 bg-[oklch(0.82_0.165_92)] px-8 py-4 font-display text-[11px] sm:text-xs leading-relaxed text-[oklch(0.14_0.02_95)] border-2 border-[oklch(0.9_0.19_95)] hover:bg-[oklch(0.9_0.19_95)] active:translate-y-0.5 transition"
          >
            REGISTER TODAY
          </a>
        </motion.div>
      </div>
    </section>
  );
}

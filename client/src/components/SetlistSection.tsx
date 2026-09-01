import { ACTS } from "@/lib/event";
import { motion } from "framer-motion";
import { Flag, Gem, MapPin, Play, Rocket } from "lucide-react";

const ACT_ICONS = [Play, MapPin, Rocket, Flag];

export function SetlistSection() {
  return (
    <section id="setlist" className="relative py-20 sm:py-28 bg-[oklch(0.13_0.01_95)]">
      {/* faint map grid backdrop */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.82 0.165 92) 1px, transparent 1px), linear-gradient(90deg, oklch(0.82 0.165 92) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-display text-[9px] sm:text-[10px] tracking-wider text-[oklch(0.82_0.165_92)]">
            CHOOSE YOUR PATH
          </p>
          <h2 className="mt-4 font-display text-[clamp(1.1rem,3vw,1.9rem)] leading-[1.5] text-glow-gold">
            THE LIVE SETLIST
          </h2>
          <p className="mt-4 text-[oklch(0.78_0.02_95)] leading-relaxed">
            Four acts. One night. A complete campaign from broke mindset to
            family bank.
          </p>
        </div>

        <div className="relative mx-auto mt-16 max-w-3xl">
          {/* The path line */}
          <div className="absolute left-5 sm:left-1/2 top-0 bottom-0 w-px sm:-translate-x-1/2 bg-gradient-to-b from-[oklch(0.82_0.165_92/10%)] via-[oklch(0.82_0.165_92/60%)] to-[oklch(0.82_0.165_92/10%)]" />

          <div className="space-y-12">
            {ACTS.map((act, i) => {
              const Icon = ACT_ICONS[i] ?? MapPin;
              const leftSide = i % 2 === 0;
              return (
                <motion.div
                  key={act.id}
                  initial={{ opacity: 0, x: leftSide ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6 }}
                  className={`relative flex items-start gap-5 sm:gap-0 pl-14 sm:pl-0 ${
                    leftSide ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  {/* Node on the path */}
                  <div className="absolute left-0 top-0 z-10 sm:left-1/2 sm:-translate-x-1/2">
                    <div className="grid place-items-center size-10 sm:size-12 border-2 border-[oklch(0.9_0.19_95)] bg-[oklch(0.14_0.01_95)] text-[oklch(0.9_0.19_95)] shadow-[0_0_18px_oklch(0.82_0.165_92/45%)]">
                      <Icon className="size-5" strokeWidth={2} />
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className={`flex-1 sm:w-[calc(50%-3rem)] ${
                      leftSide ? "sm:mr-auto sm:pr-0 sm:text-right" : "sm:ml-auto sm:text-left"
                    }`}
                  >
                    <div className="pixel-frame bg-[oklch(0.14_0.01_95)] p-6 hover:shadow-[0_0_36px_oklch(0.82_0.165_92/35%)] transition-shadow">
                      <p className="font-display text-[9px] text-[oklch(0.82_0.165_92)]">
                        {act.act}
                      </p>
                      <h3 className="mt-2 font-heading text-lg sm:text-xl font-bold tracking-wide text-[oklch(0.95_0.02_95)]">
                        {act.title}
                      </h3>
                      <p className="mt-1 font-display text-[8px] leading-relaxed text-[oklch(0.65_0.02_95)]">
                        ({act.tagline})
                      </p>
                      <p className="mt-4 text-sm leading-relaxed text-[oklch(0.75_0.02_95)]">
                        {act.copy}
                      </p>
                    </div>
                  </div>

                  {/* Spacer for the other side */}
                  <div className="hidden sm:block sm:w-[calc(50%-3rem)]" />
                </motion.div>
              );
            })}
          </div>

          {/* Treasure at the end of the path */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
            className="relative z-10 mt-12 flex justify-center"
          >
            <div className="grid place-items-center size-14 border-2 border-[oklch(0.9_0.19_95)] bg-[oklch(0.82_0.165_92/15%)] text-[oklch(0.9_0.19_95)] shadow-[0_0_28px_oklch(0.82_0.165_92/60%)] animate-float-slow">
              <Gem className="size-7" />
            </div>
          </motion.div>
          <p className="mt-3 text-center font-display text-[8px] text-[oklch(0.82_0.165_92)]">
            LOOT UNLOCKED: THE FAMILY BANK
          </p>
        </div>
      </div>
    </section>
  );
}

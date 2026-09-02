import { HOST_BIO, HOST_QUOTE, HOST_STATS } from "@/lib/event";
import { motion } from "framer-motion";
import { BadgeCheck, Music, Quote } from "lucide-react";

const PORTRAIT = "/manus-storage/malik-east-portrait_0b0a7323.webp";

export function HostSection() {
  return (
    <section id="host" className="relative py-20 sm:py-28 bg-[oklch(0.13_0.01_95)] overflow-hidden">
      <div className="absolute inset-0 arena-vignette pointer-events-none" />
      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-display text-[9px] sm:text-[10px] tracking-wider text-[oklch(0.82_0.165_92)]">
            GUIDE PROFILE — ACTIVE
          </p>
          <h2 className="mt-4 font-display text-[clamp(1.1rem,3vw,1.9rem)] leading-[1.5] text-glow-gold">
            MEET YOUR HOST
          </h2>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl items-start gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Character card */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="pixel-frame scanlines relative overflow-hidden bg-[oklch(0.14_0.01_95)]"
          >
            <img
              src={PORTRAIT}
              alt="Malik East — Founder of 7Band Financial Agency"
              className="aspect-[4/5] w-full object-cover object-top"
              loading="lazy"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[oklch(0.11_0.008_95/95%)] via-[oklch(0.11_0.008_95/70%)] to-transparent px-5 pb-5 pt-16">
              <p className="font-display text-[10px] text-glow-gold-soft">MALIK EAST</p>
              <p className="mt-1 font-heading text-[10px] tracking-[0.2em] text-[oklch(0.75_0.03_95)]">
                THE FLOW • FOUNDER • LICENSED LIFE INSURANCE AGENT
              </p>
              <p className="mt-2 flex items-center gap-2 font-heading text-[10px] tracking-[0.15em] text-[oklch(0.7_0.2_140)]">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-[oklch(0.7_0.2_140)] opacity-70" />
                  <span className="relative inline-flex size-2 rounded-full bg-[oklch(0.7_0.2_140)]" />
                </span>
                STATUS: ACTIVE — TAKING NEW CLIENTS
              </p>
            </div>
          </motion.div>

          {/* Bio + stats */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.12 }}
          >
            <h3 className="font-heading text-xl sm:text-2xl font-bold tracking-wide text-[oklch(0.95_0.02_95)]">
              From the Band Room to{" "}
              <span className="text-[oklch(0.9_0.19_95)]">Financial Services.</span>
            </h3>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-[oklch(0.78_0.02_95)]">
              {HOST_BIO}
            </p>

            <blockquote className="mt-6 border-l-4 border-[oklch(0.82_0.165_92)] bg-[oklch(0.82_0.165_92/6%)] px-5 py-4">
              <Quote className="size-4 text-[oklch(0.82_0.165_92)]" />
              <p className="mt-2 font-heading text-sm sm:text-base italic tracking-wide text-[oklch(0.9_0.06_92)]">
                "{HOST_QUOTE}"
              </p>
            </blockquote>

            {/* Character stats grid */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              {HOST_STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="border border-[oklch(0.82_0.165_92/30%)] bg-[oklch(0.14_0.01_95)] px-4 py-3"
                >
                  <p className="font-display text-[7px] sm:text-[8px] tracking-wider text-[oklch(0.65_0.02_95)]">
                    {stat.label}
                  </p>
                  <p className="mt-1.5 font-heading text-xs sm:text-sm font-bold tracking-wide text-[oklch(0.9_0.19_95)]">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
              <span className="flex items-center gap-2 font-heading text-[11px] tracking-[0.15em] text-[oklch(0.75_0.03_95)]">
                <BadgeCheck className="size-4 text-[oklch(0.82_0.165_92)]" />
                INDEPENDENT — MULTIPLE CARRIERS
              </span>
              <span className="flex items-center gap-2 font-heading text-[11px] tracking-[0.15em] text-[oklch(0.75_0.03_95)]">
                <Music className="size-4 text-[oklch(0.82_0.165_92)]" />
                FOUNDER — 7BAND FINANCIAL AGENCY
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

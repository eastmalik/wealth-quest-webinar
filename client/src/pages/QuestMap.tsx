import { ArenaFooter } from "@/components/ArenaFooter";
import { ArenaHeader } from "@/components/ArenaHeader";
import { MODE_COMPARISON, QUEST_LEVELS, WINNING, type QuestLevel } from "@/lib/questMap";
import { motion } from "framer-motion";
import { ArrowRight, Check, ExternalLink, PhoneCall, Ticket, TriangleAlert } from "lucide-react";
import { useEffect } from "react";

const STAGES: { name: QuestLevel["stage"]; tagline: string }[] = [
  { name: "Tutorial", tagline: "Before level one" },
  { name: "The Foundation", tagline: "Levels 1–3" },
  { name: "The Acceleration", tagline: "Level 4" },
  { name: "The Legacy", tagline: "Levels 5–7" },
];

function LevelCard({ lvl, index }: { lvl: QuestLevel; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      className="relative border-2 border-[oklch(0.82_0.165_92/45%)] bg-[oklch(0.14_0.01_95)] p-6 sm:p-7"
    >
      <div className="flex items-center justify-between gap-4">
        <span className="font-display text-[9px] text-[oklch(0.82_0.165_92)]">LEVEL {lvl.level}</span>
        <span className="font-heading text-[10px] tracking-[0.2em] text-[oklch(0.55_0.02_95)] uppercase">{lvl.stage}</span>
      </div>
      <h3 className="mt-4 font-heading text-2xl font-bold uppercase tracking-wide text-[oklch(0.95_0.02_95)]">{lvl.name}</h3>

      <dl className="mt-5 space-y-4 text-sm leading-relaxed">
        <div>
          <dt className="font-display text-[8px] text-[oklch(0.82_0.165_92)]">THE QUEST</dt>
          <dd className="mt-1.5 text-[oklch(0.8_0.02_95)]">{lvl.quest}</dd>
        </div>
        <div>
          <dt className="font-display text-[8px] text-[oklch(0.82_0.165_92)]">YOU EARN</dt>
          <dd className="mt-1.5 text-[oklch(0.8_0.02_95)]">{lvl.earn}</dd>
        </div>
        {lvl.truth && (
          <div className="flex gap-2.5 border-l-2 border-[oklch(0.68_0.26_25/60%)] bg-[oklch(0.6_0.24_27/8%)] px-3 py-2.5">
            <TriangleAlert className="mt-0.5 size-4 shrink-0 text-[oklch(0.68_0.26_25)]" />
            <dd className="text-[oklch(0.78_0.03_40)]">
              <span className="font-heading font-bold tracking-wide text-[oklch(0.85_0.08_40)]">THE TRUTH: </span>
              {lvl.truth}
            </dd>
          </div>
        )}
      </dl>

      <p className="mt-5 font-heading text-xs tracking-[0.15em] text-[oklch(0.6_0.02_95)] uppercase">
        Your guide:{" "}
        {lvl.guideUrl ? (
          <a
            href={lvl.guideUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[oklch(0.9_0.19_95)] hover:underline"
          >
            {lvl.guide.join(" · ")} <ExternalLink className="size-3" />
          </a>
        ) : (
          <span className="text-[oklch(0.85_0.03_95)]">{lvl.guide.join(" · ")}</span>
        )}
      </p>
    </motion.article>
  );
}

export default function QuestMap() {
  useEffect(() => {
    document.title = "The Quest Map — THE FLOW";
  }, []);

  return (
    <div className="min-h-screen bg-[oklch(0.11_0.008_95)] text-foreground antialiased">
      <ArenaHeader />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-16 sm:pt-40">
          <div className="container max-w-4xl text-center">
            <p className="font-display text-[9px] tracking-wider text-[oklch(0.65_0.02_95)]">THE FLOW · THE GENERATIONAL WEALTH QUEST</p>
            <h1 className="mt-5 font-display text-[clamp(1.6rem,5vw,3rem)] leading-[1.35] text-glow-gold">THE QUEST MAP</h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[oklch(0.78_0.02_95)]">
              Seven levels to a family legacy, in the order that actually works. Most people don't fail at money.
              They fail at sequence. Each level unlocks the next.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="/#register"
                className="inline-flex items-center justify-center gap-2 bg-[oklch(0.82_0.165_92)] px-6 py-3.5 font-display text-[10px] text-[oklch(0.14_0.02_95)] border-2 border-[oklch(0.9_0.19_95)] shadow-[0_0_16px_oklch(0.82_0.165_92/45%)] hover:bg-[oklch(0.9_0.19_95)] transition"
              >
                <Ticket className="size-4" /> GET YOUR FREE TICKET
              </a>
              <a
                href="/call"
                className="inline-flex items-center justify-center gap-2 border-2 border-[oklch(0.82_0.165_92/60%)] px-6 py-3.5 font-display text-[10px] text-[oklch(0.9_0.19_95)] hover:bg-[oklch(0.82_0.165_92/10%)] transition"
              >
                <PhoneCall className="size-4" /> BOOK A FREE CALL
              </a>
            </div>
          </div>
        </section>

        {/* The levels, by stage */}
        <section id="levels" className="relative pb-20">
          <div className="container space-y-14">
            {STAGES.map((stage) => {
              const levels = QUEST_LEVELS.filter((l) => l.stage === stage.name);
              return (
                <div key={stage.name}>
                  <div className="mb-6 flex items-end justify-between gap-4 border-b border-[oklch(0.82_0.165_92/25%)] pb-3">
                    <h2 className="font-display text-[clamp(0.85rem,2.2vw,1.2rem)] leading-[1.5] text-[oklch(0.9_0.19_95)]">
                      {stage.name.toUpperCase()}
                    </h2>
                    <span className="font-heading text-xs tracking-[0.2em] text-[oklch(0.6_0.02_95)] uppercase">{stage.tagline}</span>
                  </div>
                  <div className={`grid gap-6 ${levels.length > 1 ? "md:grid-cols-2 xl:grid-cols-3" : "max-w-3xl"}`}>
                    {levels.map((lvl, i) => (
                      <LevelCard key={lvl.level} lvl={lvl} index={i} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* NPC vs Player 1 */}
        <section id="modes" className="relative border-y border-[oklch(0.82_0.165_92/20%)] bg-[oklch(0.13_0.01_95)] py-20">
          <div className="container max-w-5xl">
            <div className="text-center">
              <h2 className="font-display text-[clamp(1rem,2.8vw,1.6rem)] leading-[1.5] text-glow-gold">NPC MODE VS. PLAYER 1 MODE</h2>
              <p className="mx-auto mt-4 max-w-2xl text-[oklch(0.72_0.02_95)]">
                Same income. Different order. An NPC is a background character who follows the script. Player 1 makes the moves.
              </p>
            </div>
            <div className="mt-10 overflow-hidden border-2 border-[oklch(0.82_0.165_92/35%)]">
              <div className="hidden grid-cols-[9rem_1fr_1fr] bg-[oklch(0.16_0.012_95)] sm:grid">
                <div className="p-4" />
                <div className="p-4 font-display text-[9px] text-[oklch(0.6_0.02_95)]">NPC MODE</div>
                <div className="p-4 font-display text-[9px] text-[oklch(0.9_0.19_95)]">PLAYER 1 MODE</div>
              </div>
              {MODE_COMPARISON.map((row) => (
                <div key={row.area} className="grid border-t border-[oklch(0.82_0.165_92/15%)] sm:grid-cols-[9rem_1fr_1fr]">
                  <div className="p-4 font-heading text-sm font-bold uppercase tracking-wider text-[oklch(0.82_0.165_92)]">{row.area}</div>
                  <div className="px-4 pb-3 text-sm text-[oklch(0.6_0.02_95)] sm:py-4">
                    <span className="mr-2 font-display text-[7px] text-[oklch(0.5_0.02_95)] sm:hidden">NPC</span>
                    {row.npc}
                  </div>
                  <div className="px-4 pb-4 text-sm font-semibold text-[oklch(0.9_0.03_95)] sm:py-4">
                    <span className="mr-2 font-display text-[7px] text-[oklch(0.82_0.165_92)] sm:hidden">P1</span>
                    {row.player}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What winning looks like */}
        <section id="winning" className="relative py-20">
          <div className="container max-w-4xl text-center">
            <h2 className="font-display text-[clamp(1rem,2.8vw,1.6rem)] leading-[1.5] text-glow-gold">WHAT WINNING LOOKS LIKE</h2>
            <ul className="mx-auto mt-10 grid max-w-3xl gap-4 text-left sm:grid-cols-2">
              {WINNING.map((w) => (
                <li key={w} className="flex gap-3 border-2 border-[oklch(0.82_0.165_92/30%)] bg-[oklch(0.14_0.01_95)] p-5">
                  <Check className="mt-0.5 size-5 shrink-0 text-[oklch(0.9_0.19_95)]" />
                  <span className="text-[oklch(0.82_0.02_95)]">{w}</span>
                </li>
              ))}
            </ul>
            <p className="mt-12 font-heading text-xl font-bold tracking-wide text-[oklch(0.92_0.05_95)]">
              Level 1 starts with a free seat at THE FLOW.
            </p>
            <a
              href="/#register"
              className="mt-6 inline-flex items-center gap-2 bg-[oklch(0.82_0.165_92)] px-6 py-3.5 font-display text-[10px] text-[oklch(0.14_0.02_95)] border-2 border-[oklch(0.9_0.19_95)] shadow-[0_0_16px_oklch(0.82_0.165_92/45%)] hover:bg-[oklch(0.9_0.19_95)] transition"
            >
              GET YOUR FREE TICKET <ArrowRight className="size-4" />
            </a>
            <p className="mx-auto mt-10 max-w-2xl text-xs leading-relaxed text-[oklch(0.5_0.02_95)]">
              Education only, not personal financial, tax or legal advice. Life insurance is offered by Malik East, a licensed
              agent, through 7Band Financial Agency. Results depend on your situation; nothing here is a promise of a score,
              a timeline or a return.
            </p>
          </div>
        </section>
      </main>
      <ArenaFooter />
    </div>
  );
}

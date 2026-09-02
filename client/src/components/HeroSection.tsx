import { useCountdown, pad2 } from "@/hooks/useCountdown";
import { EVENT_DATE_LABEL, getEventDate } from "@/lib/event";
import { ChevronDown, Radio, Users } from "lucide-react";
import { useState } from "react";

const STAGE_VIDEO = "/manus-storage/hero-live-feed_61bd8494.mp4";
const STAGE_POSTER = "/manus-storage/hero-live-feed-poster_3ea209b3.jpg";
const ARENA_BG = "/manus-storage/arena-bg_aebd8084.png";

const PARTICLES = [
  { left: "12%", size: 3, duration: "6.5s", delay: "0s" },
  { left: "24%", size: 2, duration: "8s", delay: "1.2s" },
  { left: "38%", size: 4, duration: "7s", delay: "2.4s" },
  { left: "52%", size: 2, duration: "9s", delay: "0.6s" },
  { left: "66%", size: 3, duration: "6.8s", delay: "1.8s" },
  { left: "78%", size: 2, duration: "8.4s", delay: "3s" },
  { left: "88%", size: 3, duration: "7.4s", delay: "0.9s" },
];

/**
 * Cinematic live-feed visual: the host's looping clip framed as CAM 01,
 * layered with a sweeping spotlight, rising gold particles, and a pulsing
 * crowd glow. Falls back to the poster frame, then a placeholder panel,
 * if the media fails to load.
 */
function StageVisual() {
  const [mediaError, setMediaError] = useState(false);
  const [posterError, setPosterError] = useState(false);

  return (
    <div className="pixel-frame scanlines relative overflow-hidden bg-[oklch(0.155_0.012_95)]">
      {mediaError ? (
        posterError ? (
          <div className="aspect-[3/4] w-full grid place-items-center bg-[oklch(0.13_0.01_95)]">
            <p className="font-display text-[9px] text-[oklch(0.82_0.165_92)] px-6 text-center leading-relaxed">
              MAIN STAGE FEED
              <br />
              STARTS SOON
            </p>
          </div>
        ) : (
          <img
            src={STAGE_POSTER}
            alt="Malik East holding the glowing wealth map — live stage feed"
            className="aspect-[3/4] w-full object-cover"
            onError={() => setPosterError(true)}
          />
        )
      ) : (
        <>
          <video
            src={STAGE_VIDEO}
            poster={STAGE_POSTER}
            className="aspect-[3/4] w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-label="Malik East holding the glowing wealth map — live stage feed"
            onError={() => setMediaError(true)}
          />

          {/* Sweeping spotlight beam */}
          <div
            aria-hidden
            className="animate-spotlight-sweep pointer-events-none absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-[oklch(0.9_0.19_95/16%)] to-transparent"
          />

          {/* Rising gold particles */}
          {PARTICLES.map((p, i) => (
            <span
              key={i}
              aria-hidden
              className="particle"
              style={{
                left: p.left,
                width: p.size,
                height: p.size,
                animationDuration: p.duration,
                animationDelay: p.delay,
              }}
            />
          ))}

          {/* Pulsing crowd glow at the base */}
          <div
            aria-hidden
            className="animate-crowd-glow pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[oklch(0.82_0.165_92/22%)] to-transparent"
          />
        </>
      )}

      {/* HUD overlay */}
      <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-4 py-3 bg-gradient-to-b from-[oklch(0.11_0.008_95/85%)] to-transparent">
        <span className="flex items-center gap-2 font-display text-[8px] sm:text-[9px] text-[oklch(0.68_0.26_25)]">
          <Radio className="size-3.5 animate-pulse" />
          LIVE FEED
        </span>
        <span className="font-display text-[8px] sm:text-[9px] text-[oklch(0.9_0.19_95)]">
          CAM 01 — MAIN STAGE
        </span>
      </div>
      <div className="absolute inset-x-0 bottom-0 z-10 px-4 py-3 bg-gradient-to-t from-[oklch(0.11_0.008_95/90%)] to-transparent">
        <p className="font-display text-[9px] sm:text-[10px] text-glow-gold-soft">
              MALIK EAST
            </p>
            <p className="mt-1 font-heading text-[9px] sm:text-[10px] tracking-[0.2em] text-[oklch(0.75_0.03_95)]">
              HOST • BUSINESS CONSULTANT & ASSET PROTECTION SPECIALIST
            </p>
      </div>
    </div>
  );
}

function TimeCell({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="pixel-frame bg-[oklch(0.14_0.01_95/92%)] px-2 py-3 sm:px-5 sm:py-4 min-w-[58px] sm:min-w-[88px] text-center">
        <span className="font-display text-xl sm:text-4xl text-glow-gold tabular-nums">
          {value}
        </span>
      </div>
      <span className="mt-2 font-heading text-[10px] sm:text-xs tracking-[0.3em] text-[oklch(0.65_0.02_95)]">
        {label}
      </span>
    </div>
  );
}

export function HeroSection() {
  const eventDate = getEventDate();
  const { days, hours, minutes, seconds, isLive } = useCountdown(eventDate);

  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:min-h-screen lg:flex lg:items-center">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src={ARENA_BG}
          alt=""
          aria-hidden
          className="size-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.11_0.008_95/70%)] via-[oklch(0.11_0.008_95/55%)] to-[oklch(0.11_0.008_95)]" />
        <div className="absolute inset-0 arena-vignette" />
      </div>

      <div className="container grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
        {/* Left: copy + countdown */}
        <div className="text-center lg:text-left">
          {/* Urgency banner */}
          <div className="mb-6 inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 border border-[oklch(0.82_0.165_92/45%)] bg-[oklch(0.155_0.012_95/85%)] px-4 py-2">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-[oklch(0.68_0.26_25)] opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-[oklch(0.68_0.26_25)]" />
            </span>
            <span className="font-heading text-[11px] sm:text-xs tracking-[0.18em] text-[oklch(0.85_0.03_95)]">
              LIVE WEBINAR HOSTED BY <span className="text-[oklch(0.9_0.19_95)] font-semibold">MALIK EAST</span>
            </span>
            <span className="hidden sm:inline text-[oklch(0.82_0.165_92/60%)]">|</span>
            <span className="font-heading text-[11px] sm:text-xs tracking-[0.18em] text-[oklch(0.68_0.26_25)]">
              LIMITED VIEWER SLOTS
            </span>
          </div>

          <h1 className="font-display text-[clamp(1.15rem,4.2vw,2.9rem)] leading-[1.45] text-[oklch(0.95_0.02_95)]">
            THE GREAT
            <br />
            GENERATIONAL
            <br />
            <span className="text-glow-gold animate-flicker">WEALTH JOURNEY</span>
          </h1>
          <p className="mt-3 font-heading text-sm sm:text-base tracking-[0.35em] text-[oklch(0.82_0.165_92)]">
            LIVE WEBINAR
          </p>

          <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-base sm:text-lg leading-relaxed text-[oklch(0.78_0.02_95)]">
            Our mission is simple: equip entrepreneurs, professionals, and
            families with the exact systems high-net-worth families have used
            for generations — the same tools the wealthy use to protect, grow,
            and pass down what they build. This webinar is for the people who{" "}
            <span className="text-[oklch(0.9_0.19_95)] font-semibold">
              do not have it all together
            </span>
            . If that's you, claim your seat. If not, no hard feelings — this
            isn't for you.
          </p>

          {/* Countdown */}
          <div className="mt-8">
            <p className="mb-3 font-display text-[9px] sm:text-[10px] tracking-wider text-[oklch(0.65_0.02_95)]">
              {isLive ? ">>> THE WEBINAR IS LIVE NOW <<<" : `WEBINAR STARTS IN — ${EVENT_DATE_LABEL}`}
            </p>
            <div className="flex items-start justify-center lg:justify-start gap-1.5 sm:gap-4">
              <TimeCell value={pad2(days)} label="DAYS" />
              <span className="pt-3 sm:pt-4 font-display text-lg sm:text-3xl text-[oklch(0.82_0.165_92/70%)]">:</span>
              <TimeCell value={pad2(hours)} label="HRS" />
              <span className="pt-3 sm:pt-4 font-display text-lg sm:text-3xl text-[oklch(0.82_0.165_92/70%)]">:</span>
              <TimeCell value={pad2(minutes)} label="MIN" />
              <span className="pt-3 sm:pt-4 font-display text-lg sm:text-3xl text-[oklch(0.82_0.165_92/70%)]">:</span>
              <TimeCell value={pad2(seconds)} label="SEC" />
            </div>
          </div>

          {/* CTA */}
          <div className="mt-9 flex flex-col sm:flex-row items-center sm:justify-center lg:justify-start gap-5">
            <a
              href="#register"
              className="animate-gold-pulse inline-flex items-center justify-center gap-3 bg-[oklch(0.82_0.165_92)] px-7 py-4 font-display text-[11px] sm:text-xs leading-relaxed text-[oklch(0.14_0.02_95)] border-2 border-[oklch(0.9_0.19_95)] hover:bg-[oklch(0.9_0.19_95)] active:translate-y-0.5 transition"
            >
              CLAIM YOUR FREE TICKET TO THE WEBINAR
            </a>
            <div className="flex items-center justify-center gap-2 text-[oklch(0.65_0.02_95)]">
              <Users className="size-4 text-[oklch(0.82_0.165_92)]" />
              <span className="font-heading text-xs tracking-[0.15em]">
                FREE ADMISSION • 100% VIRTUAL
              </span>
            </div>
          </div>
        </div>

        {/* Right: stage visual */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none animate-float-slow">
          <StageVisual />

          {/* Corner accents */}
          <div className="absolute -top-3 -left-3 size-6 border-t-4 border-l-4 border-[oklch(0.9_0.19_95)]" />
          <div className="absolute -bottom-3 -right-3 size-6 border-b-4 border-r-4 border-[oklch(0.9_0.19_95)]" />
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#stakes"
        className="absolute bottom-6 left-1/2 hidden lg:flex -translate-x-1/2 flex-col items-center gap-1 text-[oklch(0.65_0.02_95)] hover:text-[oklch(0.9_0.19_95)] transition"
      >
        <span className="font-display text-[8px] tracking-wider">SCROLL TO ENTER</span>
        <ChevronDown className="size-5 animate-bounce" />
      </a>
    </section>
  );
}

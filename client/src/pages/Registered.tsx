import { ArenaFooter } from "@/components/ArenaFooter";
import { ArenaHeader } from "@/components/ArenaHeader";
import { googleCalendarUrl, icsFile } from "@/lib/calendar";
import { getEventDate, getEventSentence } from "@/lib/event";
import { CalendarPlus, CheckCircle2, Download, Inbox, MailCheck } from "lucide-react";
import { useEffect, useMemo } from "react";

/**
 * Where the GoHighLevel registration form sends people after they submit
 * (form Settings → On submit → Open URL → /registered).
 */
export default function Registered() {
  const start = useMemo(() => getEventDate(), []);
  const icsHref = useMemo(
    () => `data:text/calendar;charset=utf-8,${encodeURIComponent(icsFile(start))}`,
    [start]
  );

  useEffect(() => {
    document.title = "Ticket confirmed — THE FLOW";
    const robots = document.createElement("meta");
    robots.name = "robots";
    robots.content = "noindex";
    document.head.appendChild(robots);
    return () => robots.remove();
  }, []);

  const steps = [
    {
      icon: Inbox,
      title: "CHECK YOUR EMAIL",
      desc: "Your Zoom link and the free Ultimate Budget Guide are on the way. Add us to your contacts so they don't land in spam.",
    },
    {
      icon: CalendarPlus,
      title: "ADD IT TO YOUR CALENDAR",
      desc: "Block the time now — the players who show up live get the most out of it.",
    },
    {
      icon: MailCheck,
      title: "WATCH YOUR INBOX",
      desc: "Your reminders come by email: 24 hours, 1 hour and 10 minutes before we go live.",
    },
  ];

  const buttonClass =
    "inline-flex flex-1 items-center justify-center gap-2 border-2 border-[oklch(0.82_0.165_92/70%)] px-4 py-3 font-display text-[9px] leading-relaxed text-[oklch(0.9_0.19_95)] hover:bg-[oklch(0.82_0.165_92/12%)] transition";

  return (
    <div className="min-h-screen bg-[oklch(0.11_0.008_95)] text-foreground antialiased">
      <ArenaHeader />
      <main className="relative pt-28 pb-20 sm:pt-32">
        <div className="absolute inset-0 arena-vignette pointer-events-none" />
        <div className="container relative">
          <div className="mx-auto max-w-xl animate-gold-pulse border-2 border-[oklch(0.9_0.19_95)] bg-[oklch(0.14_0.01_95)] p-6 sm:p-10 text-center">
            <CheckCircle2 className="mx-auto size-14 text-[oklch(0.9_0.19_95)] drop-shadow-[0_0_16px_oklch(0.82_0.165_92/70%)]" />
            <h1 className="mt-6 font-display text-base sm:text-lg leading-relaxed text-glow-gold">
              TICKET CONFIRMED
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-[oklch(0.78_0.02_95)]">
              You're in. See you live{" "}
              <span className="font-semibold text-[oklch(0.9_0.19_95)]">{getEventSentence(start)}</span>.
            </p>

            <div className="mt-6 space-y-3 text-left">
              {steps.map((step) => (
                <div
                  key={step.title}
                  className="flex items-start gap-3 border border-[oklch(0.82_0.165_92/35%)] bg-[oklch(0.11_0.008_95)] px-4 py-3"
                >
                  <span className="mt-0.5 grid shrink-0 place-items-center size-7 border border-[oklch(0.9_0.19_95/60%)] bg-[oklch(0.82_0.165_92/12%)] text-[oklch(0.9_0.19_95)]">
                    <step.icon className="size-4" strokeWidth={2} />
                  </span>
                  <div>
                    <p className="font-display text-[8px] tracking-wider text-[oklch(0.9_0.19_95)]">{step.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-[oklch(0.72_0.02_95)]">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href={googleCalendarUrl(start)} target="_blank" rel="noopener noreferrer" className={buttonClass}>
                <CalendarPlus className="size-4" /> GOOGLE CALENDAR
              </a>
              <a href={icsHref} download="the-flow-webinar.ics" className={buttonClass}>
                <Download className="size-4" /> APPLE / OUTLOOK
              </a>
            </div>

            <a
              href="/"
              className="mt-8 inline-block font-heading text-xs tracking-[0.2em] text-[oklch(0.65_0.02_95)] hover:text-[oklch(0.9_0.19_95)] transition"
            >
              ← BACK TO THE FLOW
            </a>
          </div>
        </div>
      </main>
      <ArenaFooter />
    </div>
  );
}

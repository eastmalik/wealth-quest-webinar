import { ArenaFooter } from "@/components/ArenaFooter";
import { ArenaHeader } from "@/components/ArenaHeader";
import { GHL_FORM_EMBED_SCRIPT } from "@/lib/ghlForm";
import { CalendarCheck, ClipboardList, PhoneCall } from "lucide-react";
import { useEffect } from "react";

/**
 * The free 30-minute call: the GoHighLevel booking calendar, embedded right on
 * the page. The visitor picks a time, then fills in the calendar's own form
 * (name, email, phone and the optional SMS consent box) in one booking.
 */
export const CALENDAR_URL = "https://api.leadconnectorhq.com/widget/bookings/the-flow-next-step-call";

export default function FreeCall() {
  useEffect(() => {
    document.title = "Book your free call — THE FLOW";
    if (!document.querySelector(`script[src="${GHL_FORM_EMBED_SCRIPT}"]`)) {
      const script = document.createElement("script");
      script.src = GHL_FORM_EMBED_SCRIPT;
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const steps = [
    { icon: CalendarCheck, title: "1. PICK YOUR TIME", desc: "Choose a day and time below that works for you." },
    { icon: ClipboardList, title: "2. TELL US WHO YOU ARE", desc: "Your name, email and phone, so we can confirm your call." },
    { icon: PhoneCall, title: "3. TALK WITH MALIK", desc: "30 minutes to find where you are on the map, and your next step." },
  ];

  const frameId = "the-flow-next-step-call_free_call";

  return (
    <div className="min-h-screen bg-[oklch(0.11_0.008_95)] text-foreground antialiased">
      <ArenaHeader />
      <main className="relative pt-28 pb-20 sm:pt-32">
        <div className="absolute inset-0 arena-vignette pointer-events-none" />
        <div className="container relative">
          <div className="mx-auto max-w-xl animate-gold-pulse border-2 border-[oklch(0.9_0.19_95)] bg-[oklch(0.14_0.01_95)] p-5 sm:p-10">
            <div className="text-center">
              <div className="mx-auto grid place-items-center size-12 border-2 border-[oklch(0.9_0.19_95)] bg-[oklch(0.11_0.008_95)] text-[oklch(0.9_0.19_95)] shadow-[0_0_18px_oklch(0.82_0.165_92/45%)]">
                <PhoneCall className="size-6" />
              </div>
              <h1 className="mt-5 font-display text-sm sm:text-base leading-[1.7] text-glow-gold">
                BOOK YOUR FREE CALL
              </h1>
              <p className="mt-4 text-sm leading-relaxed text-[oklch(0.78_0.02_95)]">
                A free 30-minute call with Malik. We'll look at where you are on the map and
                figure out where you start. If the honest answer is "not yet," you'll hear that too.
              </p>
            </div>

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

            <iframe
              src={CALENDAR_URL}
              id={frameId}
              title="Book your free call"
              scrolling="no"
              className="mt-6 block w-full overflow-hidden border-0"
              style={{ minHeight: 900 }}
            />

            <p className="mt-4 text-center text-[11px] leading-relaxed text-[oklch(0.5_0.02_95)]">
              No charge for the call. Text messages only if you tick the box. See our{" "}
              <a href="/privacy" className="text-[oklch(0.82_0.165_92)] hover:underline">Privacy Policy</a>{" "}
              and{" "}
              <a href="/terms" className="text-[oklch(0.82_0.165_92)] hover:underline">Terms</a>.
            </p>
          </div>
        </div>
      </main>
      <ArenaFooter />
    </div>
  );
}

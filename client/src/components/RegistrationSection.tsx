import { getRegistrationEndpoint } from "@/lib/event";
import {
  isValidRegistration,
  SMS_CONSENT_TEXT,
  submitRegistration,
  validateRegistration,
  type RegistrationErrors,
} from "@/lib/registration";
import { motion } from "framer-motion";
import { CalendarPlus, CheckCircle2, Gift, Inbox, Loader2, MailCheck, Swords } from "lucide-react";
import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export function RegistrationSection() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [smsConsent, setSmsConsent] = useState(false);
  const [errors, setErrors] = useState<RegistrationErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const payload = { firstName, email, phone };
    setErrors(validateRegistration(payload, smsConsent));
    if (!isValidRegistration(payload, smsConsent)) return;

    setStatus("submitting");
    setServerError("");
    const result = await submitRegistration(payload, smsConsent, getRegistrationEndpoint());
    if (result.ok) {
      setStatus("success");
    } else {
      setStatus("error");
      setServerError(result.error);
    }
  }

  const inputClass = (hasError: boolean) =>
    `w-full border-2 bg-[oklch(0.11_0.008_95)] px-4 py-3.5 font-heading text-sm tracking-wide text-[oklch(0.92_0.02_95)] placeholder:text-[oklch(0.5_0.02_95)] outline-none transition focus:shadow-[0_0_18px_oklch(0.82_0.165_92/35%)] ${
      hasError
        ? "border-[oklch(0.68_0.26_25)]"
        : "border-[oklch(0.82_0.165_92/45%)] focus:border-[oklch(0.9_0.19_95)]"
    }`;

  return (
    <section id="register" className="relative py-20 sm:py-28 bg-[oklch(0.13_0.01_95)] overflow-hidden">
      <div className="absolute inset-0 arena-vignette pointer-events-none" />
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="mx-auto max-w-xl"
        >
          <div className="animate-gold-pulse border-2 border-[oklch(0.9_0.19_95)] bg-[oklch(0.14_0.01_95)] p-7 sm:p-10">
            {status === "success" ? (
              <div className="py-4 text-center">
                <CheckCircle2 className="mx-auto size-14 text-[oklch(0.9_0.19_95)] drop-shadow-[0_0_16px_oklch(0.82_0.165_92/70%)]" />
                <h2 className="mt-6 font-display text-base sm:text-lg leading-relaxed text-glow-gold">
                  TICKET CONFIRMED
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-[oklch(0.78_0.02_95)]">
                  You're in, {firstName.trim()} — your seat is locked. Complete
                  these three steps so you don't miss a thing:
                </p>
                <div className="mt-6 space-y-3 text-left">
                  {[
                    {
                      icon: Inbox,
                      title: "CHECK YOUR EMAIL",
                      desc: "Your free Ultimate Budget Guide is on its way. Add us to your contacts so it doesn't land in spam.",
                    },
                    {
                      icon: CalendarPlus,
                      title: "ADD THE WEBINAR TO YOUR CALENDAR",
                      desc: "Block the time now — the players who show up live get the most out of it.",
                    },
                    {
                      icon: MailCheck,
                      title: "WATCH YOUR INBOX",
                      desc: "Your reminders come by email: 24 hours, 1 hour and 10 minutes before we go live.",
                    },
                  ].map((step) => (
                    <div
                      key={step.title}
                      className="flex items-start gap-3 border border-[oklch(0.82_0.165_92/35%)] bg-[oklch(0.11_0.008_95)] px-4 py-3"
                    >
                      <span className="mt-0.5 grid shrink-0 place-items-center size-7 border border-[oklch(0.9_0.19_95/60%)] bg-[oklch(0.82_0.165_92/12%)] text-[oklch(0.9_0.19_95)]">
                        <step.icon className="size-4" strokeWidth={2} />
                      </span>
                      <div>
                        <p className="font-display text-[8px] tracking-wider text-[oklch(0.9_0.19_95)]">
                          {step.title}
                        </p>
                        <p className="mt-1 text-xs leading-relaxed text-[oklch(0.72_0.02_95)]">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <>
                <div className="text-center">
                  <div className="mx-auto grid place-items-center size-12 border-2 border-[oklch(0.9_0.19_95)] bg-[oklch(0.11_0.008_95)] text-[oklch(0.9_0.19_95)] shadow-[0_0_18px_oklch(0.82_0.165_92/45%)]">
                    <Swords className="size-6" />
                  </div>
                  <h2 className="mt-5 font-display text-sm sm:text-base leading-[1.7] text-glow-gold">
                    ENTER THE ARENA
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-[oklch(0.78_0.02_95)]">
                    Lock in your ticket to the live webinar today. We'll
                    instantly send you the{" "}
                    <span className="text-[oklch(0.9_0.19_95)] font-semibold">
                      Ultimate Budget Guide
                    </span>{" "}
                    for free to help you scan your inventory for leaks before the
                    webinar starts.
                  </p>
                  <p className="mt-3 inline-flex items-center gap-2 font-heading text-[11px] tracking-[0.2em] text-[oklch(0.65_0.02_95)]">
                    <Gift className="size-3.5 text-[oklch(0.82_0.165_92)]" />
                    FREE BONUS UNLOCKED ON ENTRY
                  </p>
                </div>

                <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-5">
                  <div>
                    <label htmlFor="firstName" className="mb-2 block font-display text-[8px] tracking-wider text-[oklch(0.82_0.165_92)]">
                      PLAYER NAME (FIRST NAME)
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      autoComplete="given-name"
                      placeholder="Malik"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className={inputClass(!!errors.firstName)}
                    />
                    {errors.firstName && (
                      <p className="mt-1.5 text-xs text-[oklch(0.68_0.26_25)]">{errors.firstName}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block font-display text-[8px] tracking-wider text-[oklch(0.82_0.165_92)]">
                      BEST EMAIL
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={inputClass(!!errors.email)}
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-[oklch(0.68_0.26_25)]">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="mb-2 block font-display text-[8px] tracking-wider text-[oklch(0.82_0.165_92)]">
                      CELL PHONE (OPTIONAL)
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="(555) 555-5555"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className={inputClass(!!errors.phone)}
                    />
                    {errors.phone && (
                      <p className="mt-1.5 text-xs text-[oklch(0.68_0.26_25)]">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label className="flex items-start gap-3 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={smsConsent}
                        onChange={(e) => setSmsConsent(e.target.checked)}
                        className="mt-0.5 size-4 shrink-0 accent-[oklch(0.82_0.165_92)]"
                      />
                      <span className="text-xs leading-relaxed text-[oklch(0.72_0.02_95)]">
                        <span className="font-semibold">Optional.</span>{" "}
                        {SMS_CONSENT_TEXT}
                      </span>
                    </label>
                  </div>

                  {status === "error" && (
                    <p className="border border-[oklch(0.68_0.26_25/50%)] bg-[oklch(0.6_0.24_27/10%)] px-4 py-3 text-sm text-[oklch(0.68_0.26_25)]">
                      {serverError}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full inline-flex items-center justify-center gap-3 bg-[oklch(0.82_0.165_92)] px-6 py-4 font-display text-[10px] sm:text-[11px] leading-relaxed text-[oklch(0.14_0.02_95)] border-2 border-[oklch(0.9_0.19_95)] shadow-[0_0_24px_oklch(0.82_0.165_92/45%)] hover:bg-[oklch(0.9_0.19_95)] hover:shadow-[0_0_36px_oklch(0.82_0.165_92/65%)] active:translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed transition"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="size-4 animate-spin" />
                        RESERVING YOUR SEAT…
                      </>
                    ) : (
                      "ENTER THE ARENA (REGISTER FREE)"
                    )}
                  </button>

                  <p className="text-center text-[11px] leading-relaxed text-[oklch(0.5_0.02_95)]">
                    No spam. No charge. Just your ticket, your guide, and email
                    reminders before each session.
                  </p>
                </form>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

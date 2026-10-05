import { getEventDate } from "@/lib/event";
import {
  buildFormUrl,
  detectSource,
  GHL_FORM_EMBED_SCRIPT,
  GHL_FORM_ID,
  GHL_FORM_NAME,
} from "@/lib/ghlForm";
import { motion } from "framer-motion";
import { Gift, Swords } from "lucide-react";
import { useEffect, useMemo } from "react";

/** Loads GoHighLevel's embed script once; it sizes the form to its content. */
function useGhlEmbedScript() {
  useEffect(() => {
    if (document.querySelector(`script[src="${GHL_FORM_EMBED_SCRIPT}"]`)) return;
    const script = document.createElement("script");
    script.src = GHL_FORM_EMBED_SCRIPT;
    script.async = true;
    document.body.appendChild(script);
  }, []);
}

export function RegistrationSection() {
  useGhlEmbedScript();
  const formUrl = useMemo(
    () => buildFormUrl(getEventDate(), detectSource(window.location.search, document.referrer)),
    []
  );
  const frameId = `inline-${GHL_FORM_ID}`;

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
          <div className="animate-gold-pulse border-2 border-[oklch(0.9_0.19_95)] bg-[oklch(0.14_0.01_95)] p-5 sm:p-10">
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


            <iframe
              src={formUrl}
              id={frameId}
              title={GHL_FORM_NAME}
              className="mt-6 block w-full border-0"
              style={{ minHeight: 760 }}
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name={GHL_FORM_NAME}
              data-layout-iframe-id={frameId}
              data-form-id={GHL_FORM_ID}
              data-cookie-consent="true"
              data-cookie-consent-provider="auto"
            />

            <p className="mt-4 text-center text-[11px] leading-relaxed text-[oklch(0.5_0.02_95)]">
              No spam. No charge. Just your ticket, your guide, and email
              reminders before each session.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

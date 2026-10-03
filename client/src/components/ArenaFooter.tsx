import { HOST_NAME } from "@/lib/event";
import { Gamepad2 } from "lucide-react";

const ECOSYSTEM = [
  { label: "7BAND FINANCIAL AGENCY", href: "https://www.7bandfinancialagency.com" },
  { label: "ARISE CREDIT PRO", href: "https://arisecreditpro.com" },
];

export function ArenaFooter() {
  return (
    <footer className="border-t border-[oklch(0.82_0.165_92/20%)] bg-[oklch(0.1_0.008_95)] py-10">
      <div className="container">
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="grid place-items-center size-9 border-2 border-[oklch(0.82_0.165_92/60%)] text-[oklch(0.9_0.19_95)]">
            <Gamepad2 className="size-5" />
          </span>
          <p className="font-display text-[9px] leading-relaxed text-[oklch(0.82_0.165_92)]">
            THE FLOW — THE GENERATIONAL WEALTH QUEST
          </p>
          <p className="font-heading text-xs tracking-[0.25em] text-[oklch(0.6_0.02_95)]">
            HOSTED BY {HOST_NAME.toUpperCase()}
          </p>
          <nav
            aria-label="7Band ecosystem"
            className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-heading text-[11px] tracking-[0.2em]"
          >
            {ECOSYSTEM.map((site) => (
              <a
                key={site.href}
                href={site.href}
                className="text-[oklch(0.75_0.03_95)] hover:text-[oklch(0.9_0.19_95)] transition"
              >
                {site.label}
              </a>
            ))}
          </nav>
          <div className="gold-hairline w-40 my-2" />
          <p className="max-w-2xl text-[11px] leading-relaxed text-[oklch(0.5_0.02_95)]">
            This is education, not personal advice. Nothing on this page or in
            the webinar is financial, legal, tax, credit or insurance advice;
            consult licensed professionals before making financial decisions.
            How Malik gets paid: education and preparation are what he charges
            for. If a life insurance policy is right for you, the carrier pays
            him a commission — and he'll tell you how much.
          </p>
          <p className="text-[11px] text-[oklch(0.45_0.02_95)]">
            © {new Date().getFullYear()} 7Band Financial Agency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

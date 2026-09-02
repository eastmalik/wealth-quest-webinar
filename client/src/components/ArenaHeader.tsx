import { EVENT_DATE_LABEL } from "@/lib/event";
import { Gamepad2, Ticket } from "lucide-react";

const NAV = [
  { href: "#stakes", label: "THE BOSSES" },
  { href: "#setlist", label: "THE SETLIST" },
  { href: "#host", label: "YOUR HOST" },
  { href: "#proof", label: "THE PROOF" },
  { href: "#register", label: "GET TICKET" },
];

export function ArenaHeader() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-[oklch(0.82_0.165_92/25%)] bg-[oklch(0.11_0.008_95/88%)] backdrop-blur-md">
      <div className="container flex items-center justify-between gap-4 py-3">
        <a href="#top" className="flex items-center gap-2.5 group">
          <span className="grid place-items-center size-9 border-2 border-[oklch(0.82_0.165_92/70%)] bg-[oklch(0.155_0.012_95)] text-[oklch(0.9_0.19_95)] shadow-[0_0_14px_oklch(0.82_0.165_92/35%)]">
            <Gamepad2 className="size-5" strokeWidth={2.2} />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-[9px] sm:text-[10px] text-[oklch(0.9_0.19_95)] tracking-wider group-hover:text-glow-gold transition">
              WEALTH QUEST
            </span>
            <span className="block font-heading text-[10px] sm:text-xs text-[oklch(0.65_0.02_95)] tracking-[0.25em]">
              LIVE PREMIERE
            </span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-heading text-xs tracking-[0.2em] text-[oklch(0.75_0.03_95)] hover:text-[oklch(0.9_0.19_95)] hover:text-glow-gold-soft transition"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <span className="hidden lg:inline-block font-display text-[8px] text-[oklch(0.65_0.02_95)] tracking-wider">
            {EVENT_DATE_LABEL}
          </span>
          <a
            href="#register"
            className="inline-flex items-center gap-2 bg-[oklch(0.82_0.165_92)] px-3.5 py-2 font-display text-[9px] text-[oklch(0.14_0.02_95)] border-2 border-[oklch(0.9_0.19_95)] shadow-[0_0_16px_oklch(0.82_0.165_92/45%)] hover:bg-[oklch(0.9_0.19_95)] transition"
          >
            <Ticket className="size-3.5" />
            FREE TICKET
          </a>
        </div>
      </div>
    </header>
  );
}

import { HOST_NAME } from "@/lib/event";
import { Gamepad2 } from "lucide-react";

export function ArenaFooter() {
  return (
    <footer className="border-t border-[oklch(0.82_0.165_92/20%)] bg-[oklch(0.1_0.008_95)] py-10">
      <div className="container">
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="grid place-items-center size-9 border-2 border-[oklch(0.82_0.165_92/60%)] text-[oklch(0.9_0.19_95)]">
            <Gamepad2 className="size-5" />
          </span>
          <p className="font-display text-[9px] leading-relaxed text-[oklch(0.82_0.165_92)]">
            THE GENERATIONAL WEALTH QUEST
          </p>
          <p className="font-heading text-xs tracking-[0.25em] text-[oklch(0.6_0.02_95)]">
            HOSTED BY {HOST_NAME.toUpperCase()}
          </p>
          <div className="gold-hairline w-40 my-2" />
          <p className="max-w-2xl text-[11px] leading-relaxed text-[oklch(0.5_0.02_95)]">
            This event is for educational purposes only and does not constitute
            financial, legal, tax, or insurance advice. Consult licensed
            professionals before making financial decisions. Statistics cited
            from publicly available FDIC call report filings.
          </p>
          <p className="text-[11px] text-[oklch(0.45_0.02_95)]">
            © {new Date().getFullYear()} The Generational Wealth Quest. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

const ITEMS = [
  "LIVE WEBINAR HOSTED BY MALIK EAST",
  "LIMITED SLOTS",
  "FREE TICKET + FREE ULTIMATE BUDGET GUIDE",
  "FIND YOUR FLOW",
  "BUILD YOUR OWN DREAM",
];

export function TickerBar() {
  const doubled = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS];
  return (
    <div className="relative overflow-hidden border-y border-[oklch(0.82_0.165_92/35%)] bg-[oklch(0.82_0.165_92/8%)] py-2.5">
      <div className="animate-ticker flex w-max items-center gap-8 whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-8 font-display text-[8px] sm:text-[9px] tracking-wider text-[oklch(0.85_0.1_92)]">
            {item}
            <span className="text-[oklch(0.82_0.165_92/60%)]">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}

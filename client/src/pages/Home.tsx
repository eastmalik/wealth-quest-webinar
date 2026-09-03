import { ArenaFooter } from "@/components/ArenaFooter";
import { ArenaHeader } from "@/components/ArenaHeader";
import { BossesSection } from "@/components/BossesSection";
import { HeroSection } from "@/components/HeroSection";
import { HostSection } from "@/components/HostSection";
import { ProofSection } from "@/components/ProofSection";
import { RegistrationSection } from "@/components/RegistrationSection";
import { TakeawaysSection } from "@/components/TakeawaysSection";
import { TickerBar } from "@/components/TickerBar";

export default function Home() {
  return (
    <div className="min-h-screen bg-[oklch(0.11_0.008_95)] text-foreground antialiased">
      <ArenaHeader />
      <main>
        <HeroSection />
        <TickerBar />
        <BossesSection />
        <TakeawaysSection />
        <HostSection />
        <ProofSection />
        <RegistrationSection />
      </main>
      <ArenaFooter />
    </div>
  );
}

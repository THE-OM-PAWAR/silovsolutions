import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { AboutCTA } from "@/components/about/AboutCTA";
import { AboutHero } from "@/components/about/AboutHero";
import { AwardsTimeline } from "@/components/about/AwardsTimeline";
import { ClienteleCloud } from "@/components/about/ClienteleCloud";
import { CoreTeam } from "@/components/about/CoreTeam";
import { FactGrid } from "@/components/about/FactGrid";

export const metadata: Metadata = {
  title: "Silov Solutions | About Us",
  description:
    "Learn about Silov Solutions, our leadership team, achievements, and trusted partners in power electronics.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Header activePath="about" />
      <main>
        <AboutHero />
        <FactGrid />
        <CoreTeam />
        <AwardsTimeline />
        <ClienteleCloud />
        <AboutCTA />
      </main>
      <Footer />
    </div>
  );
}


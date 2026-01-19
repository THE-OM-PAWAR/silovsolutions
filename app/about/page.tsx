import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { AboutHero } from "@/components/about/AboutHero";
import { TeamProfiles } from "@/components/about/TeamProfiles";

export const metadata: Metadata = {
  title: "Silov Solutions | About Us",
  description:
    "Meet our founding team of professionals from prestigious engineering institutes dedicated to advancing power electronics.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Header activePath="about" />
      <main>
        <AboutHero />
        <TeamProfiles />
      </main>
      <Footer />
    </div>
  );
}


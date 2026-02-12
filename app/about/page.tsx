import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { AboutHero } from "@/components/about/AboutHero";
import { TeamProfiles } from "@/components/about/TeamProfiles";

export const metadata: Metadata = {
  title: "About Silov Solutions | IIT Delhi-incubated Power Electronics Experts",
  description:
    "Learn about Silov Solutions, an IIT Delhi-incubated power electronics company led by professionals from premier engineering institutes, focused on renewable energy and EV systems.",
  alternates: {
    canonical: "https://silovsolutions.com/about",
  },
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


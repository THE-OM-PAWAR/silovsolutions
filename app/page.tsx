import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { About } from "@/components/sections/About";
import { Awards } from "@/components/sections/Awards";
import { Clientele } from "@/components/sections/Clientele";
import { Contact } from "@/components/sections/Contact";
import { CoreTeam } from "@/components/sections/CoreTeam";
import { Hero } from "@/components/sections/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Clientele />
        <CoreTeam />
        <Awards />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

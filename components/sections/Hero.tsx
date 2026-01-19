import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-black text-white"
    >
      <div className="absolute inset-0 bg-[url('/hero-circuit.svg')] bg-cover bg-center opacity-90" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
      <div className="relative mx-auto flex min-h-[72vh] w-full max-w-6xl flex-col justify-center gap-8 px-4 py-20 sm:px-6">
        <Badge className="w-fit bg-white/10 text-white hover:bg-white/20">
          Power Electronics • Renewable Energy • EV Systems
        </Badge>
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Advance Power Electronics
          </h1>
          <p className="max-w-2xl text-base leading-7 text-zinc-200 sm:text-lg">
            Innovative solutions for Power System Emulators, Power Conditioning
            Units, IoT Infrastructure and EV Ecosystem.
          </p>
        </div>
        <div>
          <Button className="h-12 rounded-full bg-emerald-500 px-6 text-base text-black hover:bg-emerald-400">
            Download Brochure
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}


import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white"
    >
      <div className="absolute right-0 top-0 h-full w-1/2 opacity-[0.03]">
        <div className="absolute inset-0 bg-[url('/hero-circuit.svg')] bg-cover bg-center" />
      </div>
      <div className="relative mx-auto flex min-h-[85vh] w-full max-w-6xl flex-col justify-center gap-8 px-4 py-20 sm:min-h-[80vh] sm:gap-10 sm:px-6 lg:min-h-[75vh] lg:gap-12">
        <div className="max-w-3xl space-y-6 sm:space-y-8">
          <div className="space-y-1">
            <p className="text-sm font-normal tracking-tight text-silov-medium-gray sm:text-base">
              Welcome to
            </p>
            <h1 className="text-5xl font-normal leading-[1.1] tracking-[-0.03em] text-silov-black sm:text-6xl md:text-7xl lg:text-8xl">
              Silov Solutions.
            </h1>
          </div>
          <p className="max-w-xl text-base font-normal leading-relaxed text-silov-dark-gray sm:text-lg md:text-xl">
            Innovative solutions for Power System Emulators, Power Conditioning
            Units, IoT Infrastructure and EV Ecosystem.
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <Button className="h-12 rounded-sm bg-silov-black px-8 text-sm font-normal text-white transition-all hover:bg-silov-dark-gray sm:h-14 sm:text-base">
            Download Brochure
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <p className="text-xs font-normal uppercase tracking-[0.15em] text-silov-medium-gray sm:text-sm">
            Power Electronics • Renewable Energy • EV Systems
          </p>
        </div>
      </div>
    </section>
  );
}


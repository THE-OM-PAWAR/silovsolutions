import Image from "next/image";

import { Badge } from "@/components/ui/badge";

export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      <Image
        src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1600&q=80"
        alt="Academic campus setting"
        width={1600}
        height={900}
        className="absolute inset-0 h-full w-full object-cover opacity-60"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/60 to-black/80" />
      <div className="relative mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
        <div className="max-w-3xl space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">
            About Us
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            About Silov Solutions
          </h1>
          <p className="text-base leading-7 text-zinc-200">
            Established in 2018, Silov Solutions Private Limited is dedicated
            to developing high-efficiency equipment for renewable and
            non-conventional energy resources. Our focus is on PV-based
            sources, power conditioning units, and the EV ecosystem.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Badge className="bg-emerald-500/20 text-emerald-100">
              Incubated at TBIU, IIT Delhi
            </Badge>
            <Badge className="bg-white/10 text-white">
              Engineering &amp; Research Driven
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
}


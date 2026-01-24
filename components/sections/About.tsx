import Image from "next/image";

const stats = [
  {
    value: "25+",
    label: "Contracts serviced",
  },
  {
    value: "15+",
    label: "Custom offerings designed",
  },
];

export function About() {
  return (
    <section id="about" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-6xl space-y-16 px-4 sm:px-6 lg:space-y-20">
        <div className="grid items-start gap-12 md:grid-cols-[1fr_1fr] md:gap-16 lg:gap-20">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-normal leading-[1.15] tracking-[-0.02em] text-foreground sm:text-5xl lg:text-6xl">
                Engineering solutions for renewable power ecosystems
              </h2>
            </div>
            <p className="text-base font-normal leading-relaxed text-silov-dark-gray sm:text-lg">
              Established in 2018, Silov Solutions Private Limited aims to
              develop equipment for the efficient utilization of renewable and
              non-conventional energy resources, with a primary focus on
              photovoltaic-based sources.
            </p>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-sm border border-border/40 bg-muted/20">
              <Image
                src="/Silovhome/op5svbp_iit-delhil2_625x300_09_december_22-YZ9xrZnjbqC4M6Kr.avif"
                alt="IIT Delhi campus"
                width={600}
                height={400}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
        <div className="grid gap-8 border-t border-border/40 pt-12 sm:grid-cols-2 sm:gap-12 lg:grid-cols-4 lg:pt-16">
          {stats.map((stat) => (
            <div key={stat.label} className="space-y-2 text-left">
              <p className="text-3xl font-normal tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                {stat.value}
              </p>
              <p className="text-sm font-normal text-muted-foreground sm:text-base">{stat.label}</p>
            </div>
          ))}
          <div className="space-y-3 text-left sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <Image
                src="/Silovhome/3b2765be69b785592924d9a553d7717a-AR0Mk8yPJBt129JY.avif"
                alt="IIT Delhi emblem"
                width={56}
                height={56}
                className="h-12 w-12 sm:h-14 sm:w-14"
              />
            </div>
            <p className="text-sm font-normal text-muted-foreground sm:text-base">Incubated at IIT Delhi</p>
          </div>
        </div>
      </div>
    </section>
  );
}


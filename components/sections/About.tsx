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
    <section id="about" className="bg-white py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl space-y-10 px-4 sm:px-6">
        <div className="grid items-center gap-10 md:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-silov-dark-blue">
              About Us
            </p>
            <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
              Engineering solutions for renewable power ecosystems
            </h2>
            <p className="text-base leading-7 text-muted-foreground">
              Established in 2018, Silov Solutions Private Limited aims to
              develop equipment for the efficient utilization of renewable and
              non-conventional energy resources, with a primary focus on
              photovoltaic-based sources.
            </p>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-[28px] border border-muted bg-muted/30 shadow-sm">
              <Image
                src="/Silovhome/op5svbp_iit-delhil2_625x300_09_december_22-YZ9xrZnjbqC4M6Kr.avif"
                alt="IIT Delhi campus"
                width={520}
                height={320}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="space-y-2 text-left">
              <p className="text-3xl font-semibold text-foreground">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
          <div className="space-y-3 text-left">
            <div className="flex items-center gap-3">
              <Image
                src="/Silovhome/3b2765be69b785592924d9a553d7717a-AR0Mk8yPJBt129JY.avif"
                alt="IIT Delhi emblem"
                width={56}
                height={56}
                className="h-12 w-12"
              />
            </div>
            <p className="text-sm text-muted-foreground">Incubated at IIT Delhi</p>
          </div>
        </div>
      </div>
    </section>
  );
}


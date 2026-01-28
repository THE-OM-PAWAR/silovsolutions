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
    <section id="about" className="bg-white py-12 sm:py-16 lg:py-20 min-h-screen flex items-center">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8">
        {/* Main Content Grid */}
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Left Column - Text Content */}
          <div className="space-y-6 m-auto w-full lg:w-[500px]">
            <h2 className="text-3xl font-bold leading-tight tracking-[-0.025em] text-foreground sm:text-4xl lg:text-5xl">
              Engineering solutions for renewable power ecosystems
            </h2>
            <p className="text-base font-normal leading-relaxed text-silov-dark-gray sm:text-lg">
              Established in 2018, Silov Solutions Private Limited aims to
              develop equipment for the efficient utilization of renewable and
              non-conventional energy resources, with a primary focus on
              photovoltaic-based sources.
            </p>
            
            {/* Stats Card */}
          </div>

          {/* Right Column - Image */}
          <div className="space-y-0 m-auto">
            <div className="overflow-hidden rounded-2xl rounded-b-none w-full lg:w-[400px]">
              <Image
                src="/Silovhome/op5svbp_iit-delhil2_625x300_09_december_22-YZ9xrZnjbqC4M6Kr.avif"
                alt="IIT Delhi campus"
                width={200}
                height={250}
                className="h-40 w-full lg:w-[400px] object-cover sm:h-56 lg:h-64"
                priority
              />
            </div>
            <div className="pt-0 w-full lg:w-[400px]">
              <div className="bg-silov-cream rounded-2xl rounded-t-none p-2 sm:p-3">
                <div className="flex items-center justify-between gap-3 align-middle">
                  {stats.map((stat, index) => (
                    <div key={stat.label} className="flex-1 min-w-0 align-center">
                      <p className="text-lg sm:text-xl font-bold text-center tracking-tight text-foreground">
                        {stat.value}
                      </p>
                      <p className="text-xs sm:text-sm font-normal text-center text-muted-foreground mt-1 leading-tight">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                  <div className="flex flex-1 items-center text-center flex-col gap-2 flex-shrink-0">
                    <Image
                      src="/Silovhome/3b2765be69b785592924d9a553d7717a-AR0Mk8yPJBt129JY.avif"
                      alt="IIT Delhi emblem"
                      width={32}
                      height={32}
                      className="h-8 w-8 sm:h-10 sm:w-10 flex-shrink-0 object-cover"
                    />
                    <p className="text-[10px] sm:text-xs font-normal text-muted-foreground leading-tight">
                      Incubated at<br/>IIT Delhi
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


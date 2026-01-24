import Image from "next/image";

const awards = [
  {
    title: "INAE Startup Innovation",
    subtitle: "Award for Clean Mobility,",
    year: "2022",
    description:
      "Acknowledging the groundbreaking work in renewable energy technology, particularly in developing cost-effective and efficient solutions for e-mobility.",
    image: "/recognition/images-4-ALp76oNvQDhOgjyk.avif",
  },
  {
    title: "IEEE (Delhi) Technology",
    subtitle: "Startup of the Year,",
    year: "2020",
    description:
      "Highlighting their technological expertise and contributions towards advancing cost-effective clean energy technologies that impact industries and communities globally.",
    image: "/recognition/images-5-m2WaLQ20zohQaXLL.png",
  },
  {
    title: "Social Alpha Energy",
    subtitle: "Challenge 2.0",
    year: "2018",
    description:
      "Recognizing the innovative, cost-effective renewable energy technologies, advancing accessibility and efficiency in clean energy.",
    image: "/recognition/social_alpha_logo-Yg2q09ezR5FLPbbP.avif",
  },
  {
    title: "Clean Energy Int'l",
    subtitle: "Incubation Centre",
    year: "(CEIIC), TATA",
    description:
      "Incubated at CEIC TATA, highlighting their contribution to clean energy.",
    image: "/recognition/images-6-A85Eb4Wn70HDg7r8.avif",
  },
];

export function Awards() {
  return (
    <section className="bg-silov-light-gray py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-6xl space-y-12 px-4 sm:px-6 lg:space-y-16">
        <div className="space-y-6 text-left">
          <h2 className="text-4xl font-normal leading-[1.15] tracking-[-0.02em] text-foreground sm:text-5xl lg:text-6xl">
            Major Recognitions
          </h2>
          <p className="max-w-3xl text-base font-normal leading-relaxed text-silov-dark-gray sm:text-lg">
            We have a proven track record of developing cutting-edge technology
            which led us to receive multiple awards and recognitions from
            leading academic and entrepreneurial organizations.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {awards.map((award) => (
            <div
              key={`${award.title}-${award.year}`}
              className="group flex flex-col rounded-sm border border-border/40 bg-white p-6 transition-all hover:border-border hover:shadow-sm sm:p-8"
            >
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-sm bg-silov-light-gray transition-colors group-hover:bg-silov-medium-gray/10 sm:h-24 sm:w-24">
                <Image
                  src={award.image}
                  alt={award.title}
                  width={112}
                  height={112}
                  className="h-14 w-14 object-contain grayscale transition-all group-hover:grayscale-0 sm:h-16 sm:w-16"
                />
              </div>
              <div className="mb-4 flex-1 space-y-3">
                <div className="space-y-1">
                  <h3 className="text-lg font-normal leading-tight text-foreground sm:text-xl">
                    {award.title}
                  </h3>
                  <p className="text-base font-normal text-foreground sm:text-lg">
                    {award.subtitle}
                  </p>
                </div>
                <p className="text-sm font-normal text-muted-foreground">{award.year}</p>
              </div>
              <p className="text-sm font-normal leading-relaxed text-silov-dark-gray">
                {award.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

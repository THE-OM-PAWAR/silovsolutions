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
    title: "Clean Energy Int’l",
    subtitle: "Incubation Centre",
    year: "(CEIIC), TATA",
    description:
      "Incubated at CEIC TATA, highlighting their contribution to clean energy.",
    image: "/recognition/images-6-A85Eb4Wn70HDg7r8.avif",
  },
];

export function Awards() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto w-full max-w-6xl space-y-12 px-4 sm:px-6">
        <div className="space-y-3 text-center">
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
            Major <span className="text-indigo-500">Recognitions</span>
          </h2>
          <p className="mx-auto max-w-3xl text-base leading-7 text-muted-foreground">
            We have a proven track record of developing cutting-edge technology
            which led us to receive multiple awards and recognitions from
            leading academic and entrepreneurial organizations.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {awards.map((award) => (
            <div
              key={`${award.title}-${award.year}`}
              className="flex h-full flex-col rounded-3xl border border-sky-100 bg-sky-50/70 p-6 text-center shadow-sm"
            >
              <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-white shadow-sm">
                <Image
                  src={award.image}
                  alt={award.title}
                  width={112}
                  height={112}
                  className="h-20 w-20 object-contain"
                />
              </div>
              <div className="mt-5 space-y-2">
                <p className="text-sm font-semibold text-foreground">
                  {award.title}
                </p>
                <p className="text-sm font-semibold text-foreground">
                  {award.subtitle}
                </p>
                <p className="text-sm text-slate-600">{award.year}</p>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                {award.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


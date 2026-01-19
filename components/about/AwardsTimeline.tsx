const awards = [
  {
    year: "2022",
    title: "INAE Startup Innovation Award for Clean Mobility",
  },
  {
    year: "2020",
    title: "IEEE (Delhi Section) Technology Startup of the Year",
  },
  {
    year: "2018",
    title: "Winner of Social Alpha Energy Challenge 2.0",
  },
  {
    year: "Incubation",
    title: "Supported by CEIC TATA and Social Alpha",
  },
];

export function AwardsTimeline() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto w-full max-w-6xl space-y-10 px-4 sm:px-6">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600">
            Major Recognitions &amp; Awards
          </p>
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
            Major Recognitions &amp; Awards
          </h2>
        </div>
        <div className="space-y-6 border-l border-border/60 pl-6">
          {awards.map((award) => (
            <div key={award.title} className="relative">
              <span className="absolute -left-[13px] top-1 h-3 w-3 rounded-full bg-emerald-500" />
              <p className="text-sm font-semibold text-foreground">
                {award.year}
              </p>
              <p className="text-sm text-muted-foreground">{award.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


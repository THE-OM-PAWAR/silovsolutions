const clients = [
  "IIT Delhi",
  "IIT Goa",
  "IIT Bhubaneswar",
  "IIT Roorkee",
  "IIT Patna",
  "NIT Meghalaya",
  "NIT Jaipur",
  "Renewable Energy Partners",
];

export function ClienteleCloud() {
  return (
    <section className="bg-zinc-50 py-20">
      <div className="mx-auto w-full max-w-6xl space-y-8 px-4 sm:px-6">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600">
            Our Trusted Partners
          </p>
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
            Our Trusted Partners
          </h2>
          <p className="max-w-2xl text-base leading-7 text-muted-foreground">
            Building long-term partnerships with leading institutes and
            industry stakeholders in renewable energy.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          {clients.map((client) => (
            <div
              key={client}
              className="rounded-full border border-border/60 bg-white px-5 py-3 text-sm font-medium text-zinc-400 grayscale transition hover:text-emerald-600 hover:grayscale-0"
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


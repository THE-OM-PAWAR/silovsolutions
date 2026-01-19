const partners = ["IIT Delhi TBIU", "Social Alpha", "CEIC TATA"];

export function TrustBanner() {
  return (
    <section className="bg-white py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-4 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          Trusted By
        </p>
        <div className="flex flex-wrap gap-3">
          {partners.map((partner) => (
            <span
              key={partner}
              className="rounded-full border border-border/60 bg-zinc-50 px-4 py-2 text-sm font-medium text-zinc-500"
            >
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}


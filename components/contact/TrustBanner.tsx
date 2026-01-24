const partners = ["IIT Delhi TBIU", "Social Alpha", "CEIC TATA"];

export function TrustBanner() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-6 px-4 sm:px-6">
        <p className="text-xs font-normal uppercase tracking-[0.15em] text-muted-foreground">
          Trusted By
        </p>
        <div className="flex flex-wrap gap-4">
          {partners.map((partner) => (
            <span
              key={partner}
              className="rounded-sm border border-border/60 bg-silov-light-gray px-5 py-2.5 text-sm font-normal text-silov-dark-gray"
            >
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}


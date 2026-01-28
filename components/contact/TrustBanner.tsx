import { Award } from "lucide-react";

const partners = ["IIT Delhi TBIU", "Social Alpha", "CEIC TATA"];

export function TrustBanner() {
  return (
    <section className="bg-gray-50/50 py-10">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-start gap-5 rounded-lg border border-border/40 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-silov-light-gray">
              <Award className="h-5 w-5 text-silov-black" />
            </div>
            <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Trusted By
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {partners.map((partner) => (
              <span
                key={partner}
                className="rounded-full bg-silov-light-gray px-4 py-2 text-xs font-medium text-silov-black"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


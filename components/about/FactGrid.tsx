import { Award, FileCheck2, Wrench } from "lucide-react";

const facts = [
  {
    icon: FileCheck2,
    label: "25+ Contracts Serviced",
  },
  {
    icon: Wrench,
    label: "15+ Custom Offerings Designed",
  },
  {
    icon: Award,
    label: "5+ Major Industry Awards",
  },
];

export function FactGrid() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="grid gap-4 md:grid-cols-3">
          {facts.map((fact) => (
            <div
              key={fact.label}
              className="flex items-center gap-4 rounded-2xl border border-border/60 bg-zinc-50 px-6 py-5"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                <fact.icon className="h-6 w-6" />
              </span>
              <p className="text-sm font-medium text-foreground">
                {fact.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


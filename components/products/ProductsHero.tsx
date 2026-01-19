import { Car, Cloud, Plug, Power } from "lucide-react";

const categories = [
  { label: "Power System Emulators", icon: Power },
  { label: "Power Conditioning Units", icon: Plug },
  { label: "IoT Infrastructure", icon: Cloud },
  { label: "EV Ecosystem", icon: Car },
];

export function ProductsHero() {
  return (
    <section className="bg-white pb-10 pt-16">
      <div className="mx-auto w-full max-w-6xl space-y-8 px-4 sm:px-6">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600">
            Products
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Our Product Categories
          </h1>
          <p className="max-w-2xl text-base leading-7 text-muted-foreground">
            Explore our cutting-edge power electronics products designed for
            efficiency and sustainability in energy management.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 rounded-2xl border border-border/60 bg-zinc-50 px-4 py-5 text-sm font-medium text-foreground"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <item.icon className="h-5 w-5" />
              </span>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


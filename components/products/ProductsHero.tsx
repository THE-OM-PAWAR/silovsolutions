import { Car, Cloud, Plug, Power } from "lucide-react";

const categories = [
  { label: "Power System Emulators", icon: Power },
  { label: "Power Conditioning Units", icon: Plug },
  { label: "IoT Infrastructure", icon: Cloud },
  { label: "EV Ecosystem", icon: Car },
];

export function ProductsHero() {
  return (
    <section className="bg-white pb-12 pt-20 sm:pb-16 sm:pt-24">
      <div className="mx-auto w-full max-w-6xl space-y-10 px-4 sm:px-6 sm:space-y-12">
        <div className="space-y-6">
          <h1 className="text-5xl font-normal leading-[1.1] tracking-[-0.03em] text-foreground sm:text-6xl lg:text-7xl">
            Our Product Categories
          </h1>
          <p className="max-w-2xl text-base font-normal leading-relaxed text-silov-dark-gray sm:text-lg">
            Explore our cutting-edge power electronics products designed for
            efficiency and sustainability in energy management.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {categories.map((item) => (
            <div
              key={item.label}
              className="flex items-start gap-4 border-b border-border/40 pb-6"
            >
              <span className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-sm bg-silov-light-gray text-silov-black">
                <item.icon className="h-5 w-5" />
              </span>
              <span className="pt-2 text-base font-normal text-foreground">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


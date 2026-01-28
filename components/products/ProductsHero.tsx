"use client";

import { Car, Cloud, Plug, Power } from "lucide-react";

const categories = [
  { label: "Power System Emulators", icon: Power, href: "#power-system-emulators" },
  { label: "Power Conditioning Units", icon: Plug, href: "#power-conditioning-units" },
  { label: "IoT Infrastructure", icon: Cloud, href: "#iot-infrastructure" },
  { label: "EV Ecosystem", icon: Car, href: "#ev-ecosystem" },
];

export function ProductsHero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="bg-white pb-8 pt-20 sm:pb-10 sm:pt-24">
      <div className="mx-auto w-full max-w-6xl space-y-8 px-4 sm:px-6">
        <div className="space-y-4">
          <h1 className="text-4xl font-normal leading-[1.1] tracking-[-0.03em] text-foreground sm:text-5xl lg:text-6xl">
            Our Product Categories
          </h1>
          <p className="max-w-2xl text-base font-normal leading-relaxed text-silov-dark-gray">
            Explore our cutting-edge power electronics products designed for
            efficiency and sustainability in energy management.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              className="group relative overflow-hidden rounded-lg border border-border/40 bg-gradient-to-br from-white to-gray-50/50 p-6 text-left transition-all hover:border-silov-black hover:shadow-lg hover:shadow-black/5"
            >
              <div className="space-y-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-silov-light-gray text-silov-black transition-transform group-hover:scale-110">
                  <item.icon className="h-6 w-6" />
                </div>
                <p className="text-sm font-medium leading-snug text-foreground">
                  {item.label}
                </p>
              </div>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-silov-black transition-all group-hover:w-full" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}


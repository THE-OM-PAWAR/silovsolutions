"use client";

import { useEffect, useState } from "react";

const categories = [
  { label: "Power System Emulators", href: "#power-system-emulators" },
  { label: "IoT Infrastructure", href: "#iot-infrastructure" },
  { label: "Power Conditioning Units", href: "#power-conditioning-units" },
  { label: "EV Ecosystem", href: "#ev-ecosystem" },
];

export function CategoryNav() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-100px 0px -50% 0px" }
    );

    categories.forEach((cat) => {
      const element = document.querySelector(cat.href);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

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
    <div className="sticky top-16 z-40 border-b border-border/40 bg-white/95 backdrop-blur">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="scrollbar-hide flex gap-2 overflow-x-auto py-3">
          {categories.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              className={`whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                activeSection === item.href
                  ? "bg-silov-blue text-white"
                  : "bg-gray-100 text-muted-foreground hover:bg-gray-200 hover:text-foreground"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}


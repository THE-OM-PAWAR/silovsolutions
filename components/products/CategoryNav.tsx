import Link from "next/link";

const categories = [
  { label: "Power System Emulators", href: "#power-system-emulators" },
  { label: "IoT Infrastructure", href: "#iot-infrastructure" },
  { label: "Power Conditioning Units", href: "#power-conditioning-units" },
  { label: "EV Ecosystem", href: "#ev-ecosystem" },
];

export function CategoryNav() {
  return (
    <div className="sticky top-16 z-40 border-y border-border/60 bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap gap-3 px-4 py-4 text-sm font-medium sm:px-6">
        {categories.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="rounded-full border border-border/60 px-4 py-2 text-muted-foreground transition hover:border-silov-medium-blue hover:text-foreground"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}


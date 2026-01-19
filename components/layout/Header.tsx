"use client";

import Link from "next/link";
import { Menu, Zap } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

const products = [
  { label: "1 kW Solar PV Emulator", href: "/products#solar-pv-emulator-1kw" },
  { label: "2KW Solar PV Emulator", href: "/products#solar-pv-emulator-2kw" },
  { label: "Wind Energy Conversion System", href: "/products#wecs" },
  { label: "Datalogger", href: "/products#smart-data-logger" },
  { label: "IV Curve Tracer", href: "/products#iv-curve-tracer" },
  {
    label: "Unidirectional DC-DC Converter",
    href: "/products#unidirectional-dc-dc-converter",
  },
  { label: "Bidirectional Invertor", href: "/products#bidirectional-inverter" },
  {
    label: "Bidirectional DC-DC Convertor",
    href: "/products#bidirectional-dc-dc-converter",
  },
  {
    label: "Grid Synchronized Inverter",
    href: "/products#grid-sync-inverter",
  },
  { label: "EV Emulator", href: "/products#ev-emulator" },
  { label: "DC Fast EV Charger", href: "/products#dc-fast-ev-charger" },
  { label: "Smart AC EVSE", href: "/products#smart-ac-evse" },
  { label: "Custom Products", href: "/products#custom-requirements" },
];

const contactMenu = [
  { label: "Contact Us for Queries", href: "/contact#inquiry" },
  { label: "Join Our Team", href: "/contact#careers" },
];

type HeaderProps = {
  activePath?: "home" | "products" | "about" | "contact";
};

export function Header({ activePath }: HeaderProps) {
  const isProducts = activePath === "products";
  const isAbout = activePath === "about";
  const isContact = activePath === "contact";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="#home" className="flex items-center gap-2 text-lg font-semibold">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-black text-white">
            <Zap className="h-5 w-5" />
          </span>
          <span className="text-foreground">Silov Solutions</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground lg:flex">
          <Link href="/#home" className="text-foreground">
            Home
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger
              className={`transition hover:text-foreground ${
                isProducts ? "text-foreground" : ""
              }`}
            >
              Products
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-64">
              {products.map((item) => (
                <DropdownMenuItem key={item.label} asChild className="text-sm">
                  <Link href={item.href}>{item.label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Link
            href="/about"
            className={`transition hover:text-foreground ${
              isAbout ? "text-foreground" : ""
            }`}
          >
            About Us
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger
              className={`transition hover:text-foreground ${
                isContact ? "text-foreground" : ""
              }`}
            >
              Contact Us
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              {contactMenu.map((item) => (
                <DropdownMenuItem key={item.label} asChild className="text-sm">
                  <Link href={item.href}>{item.label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80">
            <SheetHeader>
              <SheetTitle>Navigation</SheetTitle>
            </SheetHeader>
            <div className="mt-6 flex flex-col gap-4 text-sm">
              <Link href="/#home" className="text-foreground">
                Home
              </Link>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Products
              </div>
              <div className="flex flex-col gap-2">
                {products.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-muted-foreground transition hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <Separator />
              <Link href="/about" className="text-foreground">
                About Us
              </Link>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Contact Us
              </div>
              <div className="flex flex-col gap-2">
                {contactMenu.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-muted-foreground transition hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}


"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ChevronDown, Zap } from "lucide-react";

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
  SheetDescription,
  SheetClose,
  SheetTrigger,
} from "@/components/ui/sheet";

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
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [productsOpen, setProductsOpen] = React.useState(false);
  const [contactOpen, setContactOpen] = React.useState(false);

  const isProducts = activePath === "products" || pathname?.startsWith("/products");
  const isAbout = activePath === "about" || pathname === "/about";
  const isContact = activePath === "contact" || pathname?.startsWith("/contact");
  const isHome = pathname === "/" || pathname === "";

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setProductsOpen(false);
    setContactOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:h-20 sm:px-6">
        <Link 
          href="/#home" 
          className="flex items-center gap-2.5 text-base font-normal transition-opacity hover:opacity-80 sm:text-lg"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-sm bg-black text-white sm:h-9 sm:w-9">
            <Zap className="h-4 w-4 sm:h-5 sm:w-5" />
          </span>
          <span className="text-foreground tracking-tight">Silov Solutions</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 text-sm font-normal text-muted-foreground lg:flex">
          <Link 
            href="/#home" 
            className={`transition-colors ${
              isHome 
                ? "text-foreground" 
                : "hover:text-foreground"
            }`}
          >
            Home
          </Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger
              className={`flex items-center gap-1 transition-colors ${
                isProducts
                  ? "text-foreground"
                  : "hover:text-foreground"
              }`}
            >
              Products
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              className="w-72 border-border/40 bg-white shadow-lg"
              align="start"
            >
              <div className="max-h-[60vh] overflow-y-auto p-1">
                {products.map((item) => (
                  <DropdownMenuItem key={item.label} asChild>
                    <Link
                      href={item.href}
                      className="block cursor-pointer rounded-sm px-3 py-2 text-sm font-normal text-foreground transition-colors hover:bg-muted/50"
                    >
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            href="/about"
            className={`transition-colors ${
              isAbout
                ? "text-foreground"
                : "hover:text-foreground"
            }`}
          >
            About Us
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger
              className={`flex items-center gap-1 transition-colors ${
                isContact
                  ? "text-foreground"
                  : "hover:text-foreground"
              }`}
            >
              Contact Us
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              className="w-56 border-border/40 bg-white shadow-lg"
              align="start"
            >
              <div className="p-1">
                {contactMenu.map((item) => (
                  <DropdownMenuItem key={item.label} asChild>
                    <Link
                      href={item.href}
                      className="block cursor-pointer rounded-sm px-3 py-2 text-sm font-normal text-foreground transition-colors hover:bg-muted/50"
                    >
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-9 w-9 lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent 
            side="right" 
            className="w-full max-w-sm border-l border-border/40 bg-white p-0 sm:max-w-md"
          >
            <div className="flex h-full flex-col">
              {/* Header with proper title for accessibility */}
              <SheetHeader className="border-b border-border/40 px-6 py-4">
                <SheetTitle className="text-left text-base font-normal text-foreground">
                  Navigation
                </SheetTitle>
                <SheetDescription className="sr-only">
                  Main navigation menu with links to all pages
                </SheetDescription>
              </SheetHeader>

              {/* Navigation Links */}
              <nav className="flex-1 overflow-y-auto px-4 py-4">
                <div className="space-y-1">
                  <SheetClose asChild>
                    <Link
                      href="/#home"
                      className={`block rounded-sm px-4 py-3 text-base font-normal transition-colors ${
                        isHome
                          ? "bg-silov-light-gray text-foreground"
                          : "text-muted-foreground hover:bg-silov-light-gray/50 hover:text-foreground"
                      }`}
                      onClick={closeMobileMenu}
                    >
                      Home
                    </Link>
                  </SheetClose>

                  {/* Products Accordion */}
                  <div className="space-y-1">
                    <button
                      onClick={() => setProductsOpen(!productsOpen)}
                      className={`flex w-full items-center justify-between rounded-sm px-4 py-3 text-left text-base font-normal transition-colors ${
                        isProducts
                          ? "bg-silov-light-gray text-foreground"
                          : "text-muted-foreground hover:bg-silov-light-gray/50 hover:text-foreground"
                      }`}
                    >
                      <span>Products</span>
                      <ChevronDown
                        className={`h-4 w-4 flex-shrink-0 transition-transform duration-200 ${
                          productsOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {productsOpen && (
                      <div className="space-y-1 overflow-hidden border-l-2 border-border/40 pl-4 ml-4 py-1">
                        {products.map((item) => (
                          <SheetClose key={item.label} asChild>
                            <Link
                              href={item.href}
                              className="block rounded-sm px-4 py-2 text-sm font-normal text-muted-foreground transition-colors hover:bg-silov-light-gray/50 hover:text-foreground"
                              onClick={closeMobileMenu}
                            >
                              {item.label}
                            </Link>
                          </SheetClose>
                        ))}
                      </div>
                    )}
                  </div>

                  <SheetClose asChild>
                    <Link
                      href="/about"
                      className={`block rounded-sm px-4 py-3 text-base font-normal transition-colors ${
                        isAbout
                          ? "bg-silov-light-gray text-foreground"
                          : "text-muted-foreground hover:bg-silov-light-gray/50 hover:text-foreground"
                      }`}
                      onClick={closeMobileMenu}
                    >
                      About Us
                    </Link>
                  </SheetClose>

                  {/* Contact Accordion */}
                  <div className="space-y-1">
                    <button
                      onClick={() => setContactOpen(!contactOpen)}
                      className={`flex w-full items-center justify-between rounded-sm px-4 py-3 text-left text-base font-normal transition-colors ${
                        isContact
                          ? "bg-silov-light-gray text-foreground"
                          : "text-muted-foreground hover:bg-silov-light-gray/50 hover:text-foreground"
                      }`}
                    >
                      <span>Contact Us</span>
                      <ChevronDown
                        className={`h-4 w-4 flex-shrink-0 transition-transform duration-200 ${
                          contactOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {contactOpen && (
                      <div className="space-y-1 overflow-hidden border-l-2 border-border/40 pl-4 ml-4 py-1">
                        {contactMenu.map((item) => (
                          <SheetClose key={item.label} asChild>
                            <Link
                              href={item.href}
                              className="block rounded-sm px-4 py-2 text-sm font-normal text-muted-foreground transition-colors hover:bg-silov-light-gray/50 hover:text-foreground"
                              onClick={closeMobileMenu}
                            >
                              {item.label}
                            </Link>
                          </SheetClose>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}


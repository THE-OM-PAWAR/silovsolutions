"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, ChevronDown, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
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
import { productCategories } from "@/data/products";

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
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6 sm:h-18 sm:px-8">
        <Link 
          href="/#home" 
          className="flex items-center transition-opacity hover:opacity-80"
        >
          <div className="relative h-12 w-auto sm:h-14">
            <Image
              src="/Silovhome/screenshot-2025-02-06-at-11.52.04a-am-AwvD2bRZelspa1GG.avif"
              alt="Silov Solutions Logo"
              height={56}
              width={200}
              className="h-full w-auto object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground lg:flex">
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
              className="w-[700px] border-border/40 bg-white shadow-xl rounded-2xl p-4"
              align="end"
              sideOffset={8}
            >
              <div className="grid grid-cols-2 gap-4">
                {productCategories.map((category) => (
                  <div
                    key={category.id}
                    className="rounded-xl border border-border/40 bg-white p-4 transition-all hover:bg-gray-50 hover:border-gray-300"
                  >
                    <Link
                      href={`/products#${category.id}`}
                      className="mb-3 flex items-center justify-between group"
                    >
                      <h3 className="text-sm font-bold text-foreground group-hover:text-silov-black">
                        {category.title}
                      </h3>
                      <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0" />
                    </Link>
                    <ul className="space-y-1.5">
                      {category.products.map((product) => (
                        <li key={product.id}>
                          <Link
                            href={`/products#${product.id}`}
                            className="block text-xs text-muted-foreground hover:text-foreground transition-colors py-1 hover:pl-1"
                          >
                            • {product.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
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
              className="w-56 border-border/40 bg-white shadow-xl rounded-2xl p-2"
              align="end"
              sideOffset={8}
            >
              {contactMenu.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block cursor-pointer rounded-xl px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-gray-50"
                >
                  {item.label}
                </Link>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-9 w-9 lg:hidden rounded-2xl"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent 
            side="right" 
            className="w-full max-w-sm border-l border-border/40 bg-white p-0 sm:max-w-md rounded-l-3xl"
          >
            <div className="flex h-full flex-col">
              {/* Header */}
              <SheetHeader className="border-b border-border/40 px-6 py-6">
                <div className="flex items-center">
                  <div className="relative h-12 w-auto">
                    <Image
                      src="/Silovhome/screenshot-2025-02-06-at-11.52.04a-am-AwvD2bRZelspa1GG.avif"
                      alt="Silov Solutions Logo"
                      height={48}
                      width={180}
                      className="h-full w-auto object-contain"
                    />
                  </div>
                  <SheetTitle className="sr-only">
                    Silov Solutions
                  </SheetTitle>
                </div>
                <SheetDescription className="sr-only">
                  Main navigation menu with links to all pages
                </SheetDescription>
              </SheetHeader>

              {/* Navigation Links */}
              <nav className="flex-1 overflow-y-auto px-5 py-6">
                <div className="space-y-2">
                  <SheetClose asChild>
                    <Link
                      href="/#home"
                      className={`block rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                        isHome
                          ? "bg-silov-blue text-white"
                          : "text-silov-dark-gray hover:bg-gray-50 hover:text-foreground"
                      }`}
                      onClick={closeMobileMenu}
                    >
                      Home
                    </Link>
                  </SheetClose>

                  {/* Products Section */}
                  <div className="space-y-2">
                    <div className="flex gap-2">
                      <SheetClose asChild className="flex-1">
                        <Link
                          href="/products"
                          className={`block rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                            isProducts
                              ? "bg-silov-blue text-white"
                              : "text-silov-dark-gray hover:bg-gray-50 hover:text-foreground"
                          }`}
                          onClick={closeMobileMenu}
                        >
                          Products
                        </Link>
                      </SheetClose>
                      <button
                        onClick={() => setProductsOpen(!productsOpen)}
                        className="rounded-xl px-3 py-3 text-silov-dark-gray hover:bg-gray-50 transition-colors"
                      >
                        <ChevronDown
                          className={`h-5 w-5 transition-transform duration-200 ${
                            productsOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </div>
                    
                    {productsOpen && (
                      <div className="space-y-0 px-4 ">
                        {productCategories.map((category, idx) => {
                          // Determine classes for conditional rounding
                          const isFirst = idx === 0;
                          const isLast = idx === productCategories.length - 1;
                          let rounding = "";
                          if (isFirst) {
                            rounding = "rounded-t-xl rounded-b-none";
                          } else if (isLast) {
                            rounding = "rounded-none rounded-b-xl border-t-0";
                          } else {
                            rounding = "rounded-none border-t-0";
                          }

                          return (
                            <div
                              key={category.id}
                              className={`${rounding} border border-border bg-white p-4`}
                            >
                              <SheetClose asChild>
                                <Link
                                  href={`/products#${category.id}`}
                                  className="mb-3 flex items-center justify-between group"
                                  onClick={closeMobileMenu}
                                >
                                  <h4 className="text-sm font-bold text-foreground">
                                    {category.title}
                                  </h4>
                                  <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                                </Link>
                              </SheetClose>
                              <ul>
                                {category.products.map((product) => (
                                  <li key={product.id}>
                                    <SheetClose asChild>
                                      <Link
                                        href={`/products#${product.id}`}
                                        className="block text-sm text-silov-dark-gray hover:text-foreground transition-colors py-1"
                                        onClick={closeMobileMenu}
                                      >
                                        {product.name}
                                      </Link>
                                    </SheetClose>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  <SheetClose asChild>
                    <Link
                      href="/about"
                      className={`block rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                        isAbout
                          ? "bg-silov-blue text-white"
                          : "text-silov-dark-gray hover:bg-gray-50 hover:text-foreground"
                      }`}
                      onClick={closeMobileMenu}
                    >
                      About Us
                    </Link>
                  </SheetClose>

                  {/* Contact Section */}
                  <div className="space-y-2">
                    <button
                      onClick={() => setContactOpen(!contactOpen)}
                      className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-base font-medium transition-colors ${
                        isContact
                          ? "bg-silov-blue text-white"
                          : "text-silov-dark-gray hover:bg-gray-50 hover:text-foreground"
                      }`}
                    >
                      <span>Contact Us</span>
                      <ChevronDown
                        className={`h-5 w-5 flex-shrink-0 transition-transform duration-200 ${
                          contactOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {contactOpen && (
                      <div className="space-y-1 pl-3 pt-1">
                        {contactMenu.map((item) => (
                          <SheetClose key={item.label} asChild>
                            <Link
                              href={item.href}
                              className="block rounded-lg px-4 py-2.5 text-sm text-silov-dark-gray transition-colors hover:bg-gray-50 hover:text-foreground"
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


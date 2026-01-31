"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink, FileDown, Mail } from "lucide-react";
import { useRef } from "react";

import { Button } from "@/components/ui/button";
import type { Product } from "@/data/products";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div
      id={product.id}
      className="rounded-lg border border-border bg-white transition-shadow hover:shadow-md"
    >
      <div className="grid gap-6 p-0 lg:grid-cols-[280px_1fr]">
        <div className="relative flex h-[240px] w-full items-center justify-center overflow-hidden rounded-md sm:rounded-b-none lg:rounded-b-md border border-border bg-zinc-50 sm:h-[280px] lg:h-[300px]">
          <div
            ref={scrollRef}
            className="flex h-full w-full min-h-0 items-center justify-start gap-0 overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory scrollbar-hide"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {product.images.map((image, index) => (
              <div
                key={index}
                className="min-w-full snap-center"
                style={{ scrollSnapAlign: "center" }}
              >
                <Image
                  src={image}
                  alt={`${product.name} - Image ${index + 1}`}
                  width={560}
                  height={380}
                  className="h-full w-full object-contain"
                />
              </div>
            ))}
          </div>
          {product.images.length > 1 && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 bg-black/40 backdrop-blur-sm px-2 py-1.5 rounded-full">
              {product.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (scrollRef.current) {
                      const scrollWidth = scrollRef.current.scrollWidth;
                      const targetScroll = (scrollWidth / product.images.length) * index;
                      scrollRef.current.scrollTo({
                        left: targetScroll,
                        behavior: "smooth",
                      });
                    }
                  }}
                  className="h-1.5 w-1.5 rounded-full bg-white/60 hover:bg-white transition-colors"
                  aria-label={`View image ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
        <div className="space-y-5 p-4">
          <div className="space-y-2">
            <h3 className="text-xl font-medium text-foreground sm:text-2xl">
              {product.name}
            </h3>
            <p className="text-sm font-normal leading-relaxed text-silov-dark-gray">
              {product.description}
            </p>
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="space-y-2">
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Specifications & Features
              </p>
              <ul className="space-y-1.5 text-sm font-normal text-silov-dark-gray">
                {[...product.specs, ...product.features].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-silov-blue" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-2">
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Use Cases
              </p>
              <ul className="space-y-1.5 text-sm font-normal text-silov-dark-gray">
                {product.useCases.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-silov-blue" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button asChild size="sm" className="h-9 rounded-md bg-silov-blue text-xs font-medium text-white hover:bg-silov-blue-dark">
              <Link href="https://gem.gov.in" target="_blank">
                Check on GEM
                <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
              </Link>
            </Button>
            <Button asChild size="sm" variant="outline" className="h-9 rounded-md text-xs font-medium">
              <Link
                href="/silov---product-brochure-mp8qEgybbLS49KRq.pdf"
                download="Silov-Product-Brochure.pdf"
              >
                Brochure
                <FileDown className="ml-1.5 h-3.5 w-3.5" />
              </Link>
            </Button>
            <Button asChild size="sm" variant="secondary" className="h-9 rounded-md text-xs font-medium">
              <Link 
                href="https://docs.google.com/forms/d/e/1FAIpQLSd84YpNoytdjZOiEv76Dd4x1ovmDkxuMa-vVEEopUpiCXAqEA/viewform"
                target="_blank"
              >
                Contact
                <Mail className="ml-1.5 h-3.5 w-3.5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}


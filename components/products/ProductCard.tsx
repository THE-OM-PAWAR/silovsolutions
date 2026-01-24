import Image from "next/image";
import Link from "next/link";
import { ExternalLink, FileDown, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { Product } from "@/data/products";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div
      id={product.id}
      className="rounded-sm border border-border/40 bg-white"
    >
      <div className="grid gap-8 p-8 lg:grid-cols-[320px_1fr] lg:gap-10">
        <div className="overflow-hidden rounded-sm border border-border/40 bg-zinc-50">
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={420}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="space-y-6">
          <div className="space-y-3">
            <h3 className="text-2xl font-normal text-foreground sm:text-3xl">
              {product.name}
            </h3>
            <p className="text-base font-normal leading-relaxed text-silov-dark-gray">
              {product.description}
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-3">
              <p className="text-sm font-normal uppercase tracking-[0.1em] text-muted-foreground">
                Key Features & Technical Specifications
              </p>
              <ul className="space-y-2 text-sm font-normal text-silov-dark-gray">
                {[...product.specs, ...product.features].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-silov-black" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3">
              <p className="text-sm font-normal uppercase tracking-[0.1em] text-muted-foreground">
                Key Experiments & Use Cases
              </p>
              <ul className="space-y-2 text-sm font-normal text-silov-dark-gray">
                {product.useCases.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-silov-black" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild className="h-11 rounded-sm bg-black text-sm font-normal text-white hover:bg-silov-dark-gray">
              <Link href="https://gem.gov.in" target="_blank">
                Check it on GEM
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-11 rounded-sm text-sm font-normal">
              <Link
                href="mailto:silov.solutions@gmail.com?subject=Brochure%20Request"
              >
                Download Brochure
                <FileDown className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="secondary" className="h-11 rounded-sm text-sm font-normal">
              <Link href="#custom-requirements">
                Contact Us Directly
                <Mail className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}


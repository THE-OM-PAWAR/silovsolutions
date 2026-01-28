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
      className="rounded-lg border border-border bg-white transition-shadow hover:shadow-md"
    >
      <div className="grid gap-6 p-0 lg:grid-cols-[280px_1fr]">
        <div className="overflow-hidden rounded-md sm:rounded-b-none lg:rounded-b-md lg:rounded-b border border-border bg-zinc-50">
          <Image
            src={product.image}
            alt={product.name}
            width={560}
            height={380}
            className="h-full w-full object-cover"
          />
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
                href="mailto:silov.solutions@gmail.com?subject=Brochure%20Request"
              >
                Brochure
                <FileDown className="ml-1.5 h-3.5 w-3.5" />
              </Link>
            </Button>
            <Button asChild size="sm" variant="secondary" className="h-9 rounded-md text-xs font-medium">
              <Link href="#custom-requirements">
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


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
      className="rounded-2xl border border-border/60 bg-white shadow-sm"
    >
      <div className="grid gap-6 p-6 lg:grid-cols-[280px_1fr]">
        <div className="overflow-hidden rounded-2xl border border-border/60 bg-zinc-100">
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={420}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="space-y-5">
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold text-foreground">
              {product.name}
            </h3>
            <p className="text-sm leading-6 text-muted-foreground">
              {product.description}
            </p>
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600">
                Key Features & Technical Specifications
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {[...product.specs, ...product.features].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600">
                Key Experiments & Use Cases
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {product.useCases.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild className="rounded-full bg-black text-white">
              <Link href="https://gem.gov.in" target="_blank">
                Check it on GEM
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full">
              <Link
                href="mailto:silov.solutions@gmail.com?subject=Brochure%20Request"
              >
                Download Brochure
                <FileDown className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="secondary" className="rounded-full">
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


import { Separator } from "@/components/ui/separator";
import type { ProductCategory } from "@/data/products";

import { ProductCard } from "./ProductCard";

type ProductCategorySectionProps = {
  category: ProductCategory;
};

export function ProductCategorySection({
  category,
}: ProductCategorySectionProps) {
  return (
    <section id={category.id} className="bg-white py-12 sm:py-16">
      <div className="mx-auto w-full max-w-6xl space-y-4 px-4 sm:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-normal tracking-tight text-foreground sm:text-4xl">
            {category.title}
          </h2>
          <p className="max-w-3xl text-base font-normal leading-relaxed text-silov-dark-gray">
            {category.description}
          </p>
        </div>
        <div className="space-y-6">
          {category.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <Separator className="bg-border/40" />
      </div>
    </section>
  );
}


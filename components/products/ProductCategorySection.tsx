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
    <section id={category.id} className="bg-white py-16">
      <div className="mx-auto w-full max-w-6xl space-y-8 px-4 sm:px-6">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600">
            {category.title}
          </p>
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
            {category.title}
          </h2>
          <p className="max-w-3xl text-base leading-7 text-muted-foreground">
            {category.description}
          </p>
        </div>
        <div className="space-y-6">
          {category.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <Separator />
      </div>
    </section>
  );
}


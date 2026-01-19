import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CategoryNav } from "@/components/products/CategoryNav";
import { CustomRequirement } from "@/components/products/CustomRequirement";
import { ProductCategorySection } from "@/components/products/ProductCategorySection";
import { ProductsHero } from "@/components/products/ProductsHero";
import { productCategories } from "@/data/products";

export const metadata: Metadata = {
  title: "Silov Solutions | Products",
  description:
    "Explore Silov Solutions product categories across power system emulators, IoT infrastructure, power conditioning units, and EV ecosystem.",
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Header activePath="products" />
      <main>
        <ProductsHero />
        <CategoryNav />
        {productCategories.map((category) => (
          <ProductCategorySection key={category.id} category={category} />
        ))}
        <CustomRequirement />
      </main>
      <Footer />
    </div>
  );
}


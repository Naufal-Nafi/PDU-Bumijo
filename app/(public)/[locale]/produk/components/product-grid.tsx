import { Locale } from "@/lib/i18n";
import { ProductCard } from "./product-card";
import type { Produk } from "@/db/schema";

interface ProductGridProps {
  produkList: Produk[];
  locale: Locale
}

export function ProductGrid({ produkList, locale }: ProductGridProps) {
  return (
    <section className="bg-background px-6 pb-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {produkList.map((item) => (
            <ProductCard locale={locale as Locale} key={item.id} produk={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
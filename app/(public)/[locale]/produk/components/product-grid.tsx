import { ProductCard } from "./product-card";
import type { Produk } from "@/db/schema";

interface ProductGridProps {
  produkList: Produk[];
}

export function ProductGrid({ produkList }: ProductGridProps) {
  return (
    <section className="bg-background px-6 pb-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {produkList.map((item) => (
            <ProductCard key={item.id} produk={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
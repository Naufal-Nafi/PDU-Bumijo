import { ProductCard } from "./product-card";
import { produkList } from "../product";

export function ProductGrid() {
  return (
    <section className="bg-background px-6 pb-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {produkList.map((produk) => (
            <ProductCard key={produk.id} produk={produk} />
          ))}
        </div>
      </div>
    </section>
  );
}
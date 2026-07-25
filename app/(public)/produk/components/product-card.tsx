import Image from "next/image";
import type { Produk } from "../product";

function formatRupiah(price: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(price);
}

export function ProductCard({ produk }: { produk: Produk }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-light-primary/30 bg-white shadow-sm transition hover:shadow-md">
      <div className="relative aspect-3/2 w-full overflow-hidden bg-secondary/30">
        <Image
          src={produk.image}
          alt={produk.name}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h3 className="font-fraunces text-lg font-semibold text-dark-primary">
          {produk.name}
        </h3>
        <p className="mt-1 text-lg font-bold text-primary">
          {formatRupiah(produk.price)}
        </p>
        <p className="mt-2 text-sm text-dark-primary/70">
          {produk.description}
        </p>
      </div>
    </div>
  );
}
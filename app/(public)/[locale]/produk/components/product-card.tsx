import Image from "next/image";
import type { Produk } from "@/db/schema";
import { FadeIn } from "@/components/animation/fade-in";
import { Locale } from "@/lib/i18n";
import { localizeField } from "@/lib/i18n";

function formatRupiah(price: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(price);
}

interface ProductCardProps {
  produk: Produk;
  locale: Locale;
}

export function ProductCard({ produk, locale }: ProductCardProps) {
  return (
    <FadeIn className="group overflow-hidden rounded-2xl border border-light-primary/30 bg-white shadow-sm transition hover:shadow-md">
      <div className="relative aspect-3/2 w-full overflow-hidden bg-secondary/30">
        <Image
          src={produk.image ?? "https://placehold.net/600x400.png"}
          alt={localizeField(produk, "name", locale)}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h3 className="font-fraunces text-lg font-semibold text-dark-primary">
          {localizeField(produk, "name", locale)}
        </h3>
        <p className="mt-1 text-lg font-bold text-primary">
          {formatRupiah(produk.price)}
        </p>
        <p className="mt-2 text-sm text-dark-primary/70">
          {localizeField(produk, "description", locale)}
        </p>
      </div>
    </FadeIn>
  );
}
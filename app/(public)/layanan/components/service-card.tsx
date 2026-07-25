import Image from "next/image";
import type { Layanan } from "../layanan";

export function ServiceCard({ layanan }: { layanan: Layanan }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-light-primary/30 bg-white shadow-sm transition hover:shadow-md">
      <div className="relative aspect-3/2 w-full overflow-hidden bg-secondary/30">
        <Image
          src={layanan.image}
          alt={layanan.title}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h3 className="font-fraunces text-lg font-semibold text-dark-primary">
          {layanan.title}
        </h3>
        <p className="mt-2 text-sm text-dark-primary/70">
          {layanan.description}
        </p>
      </div>
    </div>
  );
}
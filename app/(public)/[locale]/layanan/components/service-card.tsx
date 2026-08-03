import Image from "next/image";
import type { Layanan } from "@/db/schema";
import { FadeIn } from "@/components/animation/fade-in";
import { Locale } from "@/lib/i18n";
import { localizeField } from "@/lib/i18n";

interface ServiceCardProps {
  layanan: Layanan;
  locale: Locale;
}

export function ServiceCard({ layanan, locale }: ServiceCardProps) {
  return (
    <FadeIn className="group overflow-hidden rounded-2xl border border-light-primary/30 bg-white shadow-sm transition hover:shadow-md">
      <div className="relative aspect-3/2 w-full overflow-hidden bg-secondary/30">
        <Image
          src={layanan.image ?? "https://placehold.net/600x400.png"}
          alt={localizeField(layanan, "title", locale)}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h3 className="font-fraunces text-lg font-semibold text-dark-primary">
          {localizeField(layanan, "title", locale)}
        </h3>
        <p className="mt-2 text-sm text-dark-primary/70">
          {localizeField(layanan, "description", locale)}
        </p>
      </div>
    </FadeIn>
  );
}
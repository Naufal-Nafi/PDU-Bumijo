import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { galeriService } from "@/services/galeri.service";

import { FadeIn } from "@/components/animation/fade-in";
import { buttonVariants } from "@/components/ui/button";

import { cn } from "@/lib/utils";

import { GalleryCarousel } from "./gallery-carousel";
import { SectionHeader } from "./section-header";

export async function FeaturedGallery() {
  const galleryList = await galeriService.getAll();
  const featuredGallery = galleryList.slice(0, 6);

  if (featuredGallery.length === 0) {
    return null;
  }

  return (
    <section className="w-full py-20 md:py-28">
      <div className="mx-auto flex w-4/5 max-w-7xl flex-col gap-12 md:gap-16">
        <FadeIn>
          <SectionHeader
            title="Cerita dalam Setiap Langkah"
            subtitle="Lihat berbagai kegiatan pengelolaan sampah, edukasi lingkungan, dan kebersamaan masyarakat di Pusat Daur Ulang Bumijo."
          />
        </FadeIn>

        <FadeIn delay={0.1}>
          <GalleryCarousel gallery={featuredGallery} />
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex justify-center">
            <Link
              href="/galeri"
              className={cn(
                buttonVariants({ size: "lg" }),
                "group gap-2",
              )}
            >
              Lihat Galeri Selengkapnya

              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
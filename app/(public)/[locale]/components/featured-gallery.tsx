import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { galeriService } from "@/services/galeri.service";

import { FadeIn } from "@/components/animation/fade-in";
import { buttonVariants } from "@/components/ui/button";

import { cn } from "@/lib/utils";

import { GalleryCarousel } from "./gallery-carousel";
import { SectionHeader } from "./section-header";
import { Dictionary } from "@/lib/dictionary";
import { Locale } from "@/lib/i18n";

interface FeaturedGalleryProps {
  dict: Dictionary["homepage"];
  locale: Locale;
}

export async function FeaturedGallery({ dict, locale }: FeaturedGalleryProps) {
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
            title={dict.gallery.title}
            subtitle={dict.gallery.subTitle}
          />
        </FadeIn>

        <FadeIn delay={0.1}>
          <GalleryCarousel gallery={featuredGallery} />
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex justify-center">
            <Link
              href={`/${locale}/galeri`}
              className={cn(
                buttonVariants({ size: "lg" }),
                "group gap-2",
              )}
            >
              {dict.gallery.button}

              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
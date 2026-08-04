import Image from "next/image";
import Link from "next/link";

import { CTA } from "@/components/cta";
import { FadeIn } from "@/components/animation/fade-in";
import { buttonVariants } from "@/components/ui/button";

import { AwardCarousel } from "./components/award-carousel";
import { FeaturedGallery } from "./components/featured-gallery";
import { FeaturedProducts } from "./components/featured-products";
import { FeaturedServices } from "./components/featured-service";
import { WasteFlowSection } from "./components/waste-flow-section";

import { cn } from "@/lib/utils";
import { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionary";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return (
    <main className="flex w-full flex-col items-center overflow-hidden font-sans text-dark-primary">
      {/* Hero sementara */}
      <section className="flex min-h-screen w-full items-center justify-center text-center">
        <FadeIn>
          <div className="mx-auto flex md:max-w-4xl flex-col items-center gap-8">
            <p className="font-semibold uppercase tracking-[0.25em] text-primary max-md:text-xs">
              Pusat Daur Ulang Bumijo
            </p>

            <h1 className="font-fraunces text-4xl leading-tight md:text-6xl lg:text-7xl">
              {dict.homepage.heroTitle}
            </h1>

            <p className="max-w-2xl leading-7 text-dark-primary/75 max-md:text-sm">
              {dict.homepage.heroSubtitle}
            </p>

            <div className="flex gap-4">
              <Link 
                href="https://linktr.ee/bsberseri35?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAb21jcATX8VJleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAaes9IMABYO4PaQyFRsof1mBhIgL01NfiMgjRstWqmErr9p6LvA6KVQ5aL5o-A_aem_XjffCW2ewEoRhmOTLPRUcg"
                target="_blank"
                className={cn(buttonVariants({ size: "lg", variant: "outline" }), "min-w-40")}
              >
                Linktree
              </Link>

              <Link
                href="/kontak"
                className={cn(buttonVariants({ size: "lg" }), "min-w-40")}
              >
                {dict.homepage.ctaButton}
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Tentang PDU */}
      <section className="flex w-full items-center justify-center py-20 md:min-h-screen md:py-28">
        <div className="flex w-4/5 max-w-7xl flex-col gap-12 md:gap-20">
          <FadeIn>
            <p className="max-w-4xl font-fraunces text-2xl leading-snug md:text-4xl">
              {dict.homepage.aboutUs.title1} <br />
              <span className="text-primary">{dict.homepage.aboutUs.title2}</span>
            </p>
          </FadeIn>

          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
            <FadeIn>
              <div className="relative aspect-4/3 overflow-hidden rounded-3xl border-2 border-dark-primary bg-secondary">
                <Image
                  src="https://placehold.net/800x600.png"
                  alt={dict.homepage.aboutUs.imageAlt}
                  fill
                  sizes="(max-width: 768px) 80vw, 40vw"
                  className="object-cover"
                />
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="space-y-6">
                <p className="leading-8 text-dark-primary/80">
                  {dict.homepage.aboutUs.desc1}
                </p>

                <p className="leading-8 text-dark-primary/80">
                  {dict.homepage.aboutUs.desc2}
                </p>

                <Link
                  href="/tentang-kami"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "border-dark-primary",
                  )}
                >
                  {dict.homepage.aboutUs.button}
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <WasteFlowSection dict={dict.homepage} />

      <FeaturedServices locale={locale as Locale} dict={dict.homepage} />

      <FeaturedProducts locale={locale as Locale} dict={dict.homepage} />

      <FeaturedGallery dict={dict.homepage} />

      <AwardCarousel dict={dict.homepage} />

      <div className="w-full mb-12">
        <CTA
          locale={locale as Locale}
          title={dict.homepage.ctaTitle}
          description={dict.homepage.ctaSubtitle}
        />
      </div>
    </main>
  );
}

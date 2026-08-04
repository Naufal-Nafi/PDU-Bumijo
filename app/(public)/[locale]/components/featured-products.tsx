import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { produkService } from "@/services/produk.service";

import { FadeIn } from "@/components/animation/fade-in";
import { PopIn } from "@/components/animation/pop-in";

import { Button } from "@/components/ui/button";

import { ProductCard } from "../produk/components/product-card";
import { SectionHeader } from "./section-header";
import { Dictionary } from "@/lib/dictionary";
import { Locale } from "@/lib/i18n";

interface FeaturedProductsProps {
  dict: Dictionary["homepage"];
  locale: Locale;
}

export async function FeaturedProducts({ dict, locale }: FeaturedProductsProps) {
  const produk = await produkService.getFeatured(3);

  return (
    <section className="py-24">
      <div className="mx-auto flex w-4/5 max-w-7xl flex-col gap-14">

        <FadeIn>
          <SectionHeader
            title={dict.featuredProducts.title}
            subtitle={dict.featuredProducts.subTitle}
          />
        </FadeIn>

        <div className="grid gap-8 lg:grid-cols-3">
          {produk.map((item, index) => (
            <PopIn key={item.id} delay={index * 0.08}>
              <ProductCard locale={locale as Locale} produk={item} />
            </PopIn>
          ))}
        </div>

        <FadeIn>
          <div className="flex justify-center">
            <Button size="lg" nativeButton={false} render={
              <Link href={`/${locale}/produk`}>
                {dict.featuredProducts.button}
                <ArrowRight />
              </Link>
            } />
            {/* <Button size="lg">
              <Link href="/produk">
                Lihat Semua Produk
                <ArrowRight />
              </Link>
            </Button> */}
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
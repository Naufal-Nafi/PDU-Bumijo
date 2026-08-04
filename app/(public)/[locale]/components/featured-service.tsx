import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { layananService } from "@/services/layanan.service";

import { FadeIn } from "@/components/animation/fade-in";
import { PopIn } from "@/components/animation/pop-in";

import { Button } from "@/components/ui/button";

import { ServiceCard } from "../layanan/components/service-card";
import { SectionHeader } from "./section-header";
import { Dictionary } from "@/lib/dictionary";
import { Locale } from "@/lib/i18n";

interface FeaturedServiceProps {
  dict: Dictionary["homepage"];
  locale: Locale;
}

export async function FeaturedServices({ dict, locale }: FeaturedServiceProps) {
  const layanan = await layananService.getAll();

  const featured = layanan.slice(0, 3);

  return (
    <section className="bg-light-primary py-24 rounded-2xl">
      <div className="mx-auto flex w-4/5 max-w-7xl flex-col gap-14">

        <FadeIn>
          <SectionHeader
            title={dict.featuredServices.title}
            subtitle={dict.featuredServices.subTitle}
          />
        </FadeIn>

        <div className="grid gap-8 lg:grid-cols-3">
          {featured.map((item, index) => (
            <PopIn key={item.id} delay={index * 0.08}>
              <ServiceCard locale={locale as Locale} layanan={item} />
            </PopIn>
          ))}
        </div>

        <FadeIn>
          <div className="flex justify-center">
            <Button size="lg" variant="outline" nativeButton={false} render={
                <Link href={`/${locale}/layanan`}>
                {dict.featuredServices.button}
                <ArrowRight />
              </Link>
            } />
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
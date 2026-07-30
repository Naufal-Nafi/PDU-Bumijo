import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { layananService } from "@/services/layanan.service";

import { FadeIn } from "@/components/animation/fade-in";
import { PopIn } from "@/components/animation/pop-in";

import { Button } from "@/components/ui/button";

import { ServiceCard } from "../layanan/components/service-card";
import { SectionHeader } from "./section-header";

export async function FeaturedServices() {
  const layanan = await layananService.getAll();

  const featured = layanan.slice(0, 3);

  return (
    <section className="bg-light-primary py-24">
      <div className="mx-auto flex w-4/5 max-w-7xl flex-col gap-14">

        <FadeIn>
          <SectionHeader
            title="Layanan Kami"
            subtitle="Kami menyediakan berbagai layanan edukasi, pengelolaan, hingga pendampingan pengolahan sampah bagi masyarakat, sekolah, maupun instansi."
          />
        </FadeIn>

        <div className="grid gap-8 lg:grid-cols-3">
          {featured.map((item, index) => (
            <PopIn key={item.id} delay={index * 0.08}>
              <ServiceCard layanan={item} />
            </PopIn>
          ))}
        </div>

        <FadeIn>
          <div className="flex justify-center">
            <Button size="lg" render={
                <Link href="/layanan">
                Lihat Semua Layanan
                <ArrowRight />
              </Link>
            } />
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
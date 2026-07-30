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

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center overflow-hidden font-sans text-dark-primary">
      {/* Hero sementara */}
      <section className="flex min-h-screen w-full items-center justify-center px-6 text-center">
        <FadeIn>
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-8">
            <p className="font-semibold uppercase tracking-[0.25em] text-primary max-md:text-xs">
              Pusat Daur Ulang Bumijo
            </p>

            <h1 className="font-fraunces text-4xl leading-tight md:text-6xl lg:text-7xl">
              Sampah Bukan Akhir, Melainkan Awal dari Nilai Baru
            </h1>

            <p className="max-w-2xl leading-7 text-dark-primary/75 max-md:text-sm">
              Bersama masyarakat, kami mengubah sampah menjadi sumber daya yang
              bermanfaat melalui pengelolaan yang bertanggung jawab dan
              berkelanjutan.
            </p>

            <Link
              href="/kontak"
              className={cn(buttonVariants({ size: "lg" }), "min-w-52")}
            >
              Hubungi Sekarang
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* Tentang PDU */}
      <section className="flex w-full items-center justify-center py-20 md:min-h-screen md:py-28">
        <div className="flex w-4/5 max-w-7xl flex-col gap-12 md:gap-20">
          <FadeIn>
            <p className="max-w-4xl font-fraunces text-2xl leading-snug md:text-4xl">
              Pusat Daur Ulang Sampah Mandiri{" "}
              <span className="text-primary">&quot;Papa Dulang Mami&quot;</span>
            </p>
          </FadeIn>

          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
            <FadeIn>
              <div className="relative aspect-4/3 overflow-hidden rounded-3xl border-2 border-dark-primary bg-secondary">
                <Image
                  src="https://placehold.net/800x600.png"
                  alt="Tentang PDU Bumijo"
                  fill
                  sizes="(max-width: 768px) 80vw, 40vw"
                  className="object-cover"
                />
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="space-y-6">
                <p className="leading-8 text-dark-primary/80">
                  Pusat Daur Ulang Sampah Mandiri &quot;Papa Dulang Mami&quot;
                  Bumijo merupakan pusat pengelolaan sampah terpadu yang
                  berlokasi di Kelurahan Bumijo RT 35/RW 08.
                </p>

                <p className="leading-8 text-dark-primary/80">
                  Bersama masyarakat, kami mengelola sampah rumah tangga menjadi
                  produk yang lebih bermanfaat sehingga mengurangi beban
                  lingkungan sekaligus memberikan nilai ekonomi.
                </p>

                <Link
                  href="/tentang-kami"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "border-dark-primary",
                  )}
                >
                  Kenali Kami Lebih Dekat
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <WasteFlowSection />

      <FeaturedServices />

      <FeaturedProducts />

      <FeaturedGallery />

      <AwardCarousel />

      <div className="w-full mb-12">
        <CTA
          title="Mari Wujudkan Lingkungan Bumijo yang Lebih Bersih dan Berkelanjutan"
          description="Berkolaborasi bersama kami dalam mengelola sampah, mengikuti kegiatan edukasi, atau memanfaatkan layanan Pusat Daur Ulang Sampah Mandiri Papa Dulang Mami."
        />
      </div>
    </main>
  );
}

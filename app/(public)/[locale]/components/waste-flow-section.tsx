import {
  ArrowRight,
  Recycle,
  Trash2,
  Leaf,
  Flame,
  Package,
} from "lucide-react";

import { FadeIn } from "@/components/animation/fade-in";
import { PopIn } from "@/components/animation/pop-in";
import { SectionHeader } from "./section-header";

const categories = [
  {
    icon: Leaf,
    title: "Organik Basah",
    description: "Diolah menjadi pakan lele dan budidaya maggot.",
  },
  {
    icon: Package,
    title: "Organik Kering",
    description: "Diolah menjadi biopori dan ember tumpuk.",
  },
  {
    icon: Flame,
    title: "Residu",
    description: "Sampah yang tidak dapat dimanfaatkan diproses menggunakan incinerator.",
  },
  {
    icon: Recycle,
    title: "Anorganik",
    description: "Dipilah untuk didaur ulang menjadi kerajinan dan produk bernilai ekonomi.",
  },
];

export function WasteFlowSection() {
  return (
    <section className="flex min-h-screen w-full items-center justify-center py-24">
      <div className="w-4/5 max-w-7xl space-y-20">

        <FadeIn>
          <SectionHeader
            title="Alur Pengelolaan Sampah"
            subtitle="Setiap sampah yang masuk akan dipilah berdasarkan jenisnya, kemudian diproses sesuai karakteristik sehingga memberikan manfaat bagi lingkungan maupun masyarakat."
          />
        </FadeIn>

        <div className="space-y-14">

          <FadeIn delay={0.1}>
            <div className="flex flex-col items-center gap-6">

              <div className="rounded-3xl border-2 border-dark-primary bg-secondary px-10 py-7 text-center">

                <Trash2 className="mx-auto mb-4 h-10 w-10" />

                <h3 className="font-semibold text-xl">
                  Sampah Masuk
                </h3>

                <p className="mt-2 text-dark-primary/80">
                  Sampah rumah tangga dikumpulkan oleh masyarakat dan
                  diterima di Pusat Daur Ulang.
                </p>

              </div>

              <ArrowRight className="hidden h-8 w-8 md:block" />

            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="rounded-3xl border-2 border-dark-primary bg-light-primary p-8 text-center">

              <Recycle className="mx-auto mb-4 h-10 w-10" />

              <h3 className="text-xl font-semibold">
                Dipilah
              </h3>

              <p className="mt-2 text-dark-primary/80">
                Sampah dipisahkan menjadi empat kategori utama agar dapat
                dikelola secara optimal.
              </p>

            </div>
          </FadeIn>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            {categories.map((item, index) => (
              <PopIn key={item.title} delay={index * 0.08}>

                <div className="h-full rounded-3xl border-2 border-dark-primary bg-background p-7 transition hover:-translate-y-2 hover:shadow-xl">

                  <item.icon className="mb-5 h-9 w-9 text-primary" />

                  <h4 className="mb-3 text-xl font-semibold">
                    {item.title}
                  </h4>

                  <p className="text-sm leading-7 text-dark-primary/80">
                    {item.description}
                  </p>

                </div>

              </PopIn>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}
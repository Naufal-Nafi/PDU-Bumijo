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
import { Dictionary } from "@/lib/dictionary";

interface WasteFlowProps {
  dict: Dictionary["homepage"];
}

export function WasteFlowSection({ dict }: WasteFlowProps) {
  const categories = [
    {
      icon: Leaf,
      title: dict.wasteFlow.categories[1].title,
      description: dict.wasteFlow.categories[1].desc,
    },
    {
      icon: Package,
      title: dict.wasteFlow.categories[2].title,
      description: dict.wasteFlow.categories[2].desc,
    },
    {
      icon: Flame,
      title: dict.wasteFlow.categories[3].title,
      description: dict.wasteFlow.categories[3].desc,
    },
    {
      icon: Recycle,
      title: dict.wasteFlow.categories[4].title,
      description: dict.wasteFlow.categories[4].desc,
    },
  ];
  return (
    <section className="flex min-h-screen w-full items-center justify-center py-24">
      <div className="w-4/5 max-w-7xl space-y-20">

        <FadeIn>
          <SectionHeader
            title={dict.wasteFlow.title}
            subtitle={dict.wasteFlow.subTitle}
          />
        </FadeIn>

        <div className="space-y-14">

          <FadeIn delay={0.1}>
            <div className="flex flex-col items-center gap-6">

              <div className="rounded-3xl border-2 border-dark-primary bg-secondary px-10 py-7 text-center">

                <Trash2 className="mx-auto mb-4 h-10 w-10" />

                <h3 className="font-semibold text-xl">
                  {dict.wasteFlow.flow1.title}
                </h3>

                <p className="mt-2 text-dark-primary/80">
                  {dict.wasteFlow.flow1.subTitle}
                </p>

              </div>

              <ArrowRight className="hidden h-8 w-8 md:block" />

            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="rounded-3xl border-2 border-dark-primary bg-light-primary p-8 text-center">

              <Recycle className="mx-auto mb-4 h-10 w-10" />

              <h3 className="text-xl font-semibold">
                {dict.wasteFlow.flow2.title}
              </h3>

              <p className="mt-2 text-dark-primary/80">
                {dict.wasteFlow.flow2.subTitle}
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
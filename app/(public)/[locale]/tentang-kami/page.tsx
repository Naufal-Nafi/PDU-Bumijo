import { Hero } from "./components/hero";
import { SiapaKami } from "./components/siapa-kami";
import { LatarBelakang } from "./components/latar-belakang";
import { PerjalananTimeline } from "./components/perjalanan-timeline";
import { VisiMisi } from "./components/visi-misi";
import { Penutup } from "./components/penutup";
import { getDictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/i18n";

export default async function TentangKamiPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return (
    <main className="flex flex-col">
      <div className="relative isolate overflow-hidden bg-background">
        <div className="pointer-events-none absolute -right-24 -top-24 -z-10 h-72 w-72 rounded-full bg-light-primary/40 blur-3xl" />
        <div className="pointer-events-none absolute top-1/2 -left-16 -z-10 h-64 w-64 rounded-full bg-secondary/50 blur-3xl" />
        <Hero dict={dict.aboutUs} />
        <SiapaKami dict={dict.aboutUs} />
      </div>

      <LatarBelakang dict={dict.aboutUs} />
      <PerjalananTimeline dict={dict.aboutUs} />
      <VisiMisi dict={dict.aboutUs} />
      <div className="mx-auto w-full mt-12 max-w-6xl">
        <div className="aspect-video w-full">
          <iframe
            src="https://www.youtube.com/embed/K98TNkLZ_WA?si=jdaH6Ev3uSVapmd-"
            title="YouTube video player"
            className="h-full w-full rounded-2xl"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
      <Penutup dict={dict.aboutUs} />
    </main>
  );
}

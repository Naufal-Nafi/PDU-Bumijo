import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { MotionConfig } from "motion/react";
import { kontakService } from "@/services/kontak.service";
import { notFound } from "next/navigation";
import { isValidLocale, locales } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionary";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string}>;
}>) {
  const { locale } = await params;
  if (!isValidLocale(locale)) {
    notFound();
  }

  const [kontak, dict] = await Promise.all([
    kontakService.getKontak(),
    getDictionary(locale),
  ]);

  return (
    <div>
      <div className="flex flex-col items-center justify-center w-full">
        <Navbar app_url={kontak.appUrl ?? "" } dict={dict.nav} locale={locale}/>
      </div>
      <main>
        <MotionConfig reducedMotion="user">{children}</MotionConfig>
      </main>
      <Footer dict={dict.nav} locale={locale}/>
      {/* <div
        className="
          pointer-events-none
          fixed bottom-0 left-0 z-50
          h-16 md:h-32 w-full
          backdrop-blur-xl
          [mask-image:linear-gradient(to_top,black_20%,transparent_100%)]
          [-webkit-mask-image:linear-gradient(to_top,black_20%,transparent_100%)]
        "
      /> */}
    </div>
  );
}

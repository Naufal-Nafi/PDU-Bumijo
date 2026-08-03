import { Hero } from "@/components/hero";
import { CTA } from "@/components/cta";
import { ProductGrid } from "./components/product-grid";
import { produkService } from "@/services/produk.service";
import { getDictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/i18n";

export default async function ProdukPage({ params }: { params: Promise<{ locale: string}>}) {
  const produkList = await produkService.getAll();
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return (
    <main className="my-12">
      <Hero
        title={dict.product.heroTitle}
        description={dict.product.heroTitle}
      />
      <ProductGrid locale={locale as Locale} produkList={produkList}/>
      <CTA
        locale={locale as Locale}
        title={dict.product.ctaTitle}
        description={dict.product.ctaSubtitle}
      />
    </main>
  );
}

import { CTA } from "@/components/cta";
import { Hero } from "@/components/hero";
import { ServiceTabs } from "./components/service-tabs";
import { kategoriService } from "@/services/kategori.service";
import { layananService } from "@/services/layanan.service";
import { getDictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/i18n";

export default async function LayananPage({ params }: { params: Promise<{ locale: string}>}) {
    const [kategoriList, layananList] = await Promise.all([
        kategoriService.getAll(),
        layananService.getAll(),
    ]);
    const { locale } = await params;
    const dict = await getDictionary(locale as Locale);
    return (
        <main className="my-12">
            <Hero title={dict.service.heroTitle} description={dict.service.heroSubtitle}/>
            <ServiceTabs layananCategories={kategoriList} layananList={layananList}/>
            <CTA title="Tertarik menggunakan layanan kami?" description="Masih memiliki pertanyaan atau ingin melakukan reservasi?"/>
        </main>
    );
}
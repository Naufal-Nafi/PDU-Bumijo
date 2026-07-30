import { Hero } from "@/components/hero";
import { GalleryGrid } from "./components/gallery-grid";
import { galeriService } from "@/services/galeri.service";
import { getDictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/i18n";

export default async function GaleriPage({ params }: { params: Promise<{ locale: string}>}) {
    const { locale } = await params;
    const dict = await getDictionary(locale as Locale);
    const galleryImages = await galeriService.getAll();
    return (
        <main className="my-12">
            <Hero title={dict.gallery.heroTitle} description={dict.gallery.heroSubtitle}/>
            <GalleryGrid galleryImages={galleryImages}/>
        </main>
    );
}
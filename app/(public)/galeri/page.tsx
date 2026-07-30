import { Hero } from "@/components/hero";
import { GalleryGrid } from "./components/gallery-grid";
import { galeriService } from "@/services/galeri.service";

export default async function GaleriPage() {
    const galleryImages = await galeriService.getAll();
    return (
        <main className="my-12">
            <Hero title="Galeri" description="Momen-momen dari kegiatan pengelolaan sampah dan pemberdayaan masyarakat bersama PDU Bumijo."/>
            <GalleryGrid galleryImages={galleryImages}/>
        </main>
    );
}
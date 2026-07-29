import { Hero } from "@/components/hero";
import { GalleryGrid } from "./components/gallery-grid";

export default function GaleriPage() {
    return (
        <main className="my-12">
            <Hero title="Galeri" description="Momen-momen dari kegiatan pengelolaan sampah dan pemberdayaan masyarakat bersama PDU Bumijo."/>
            <GalleryGrid />
        </main>
    );
}
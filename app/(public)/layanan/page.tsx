import { CTA } from "@/components/cta";
import { Hero } from "@/components/hero";
import { ServiceTabs } from "./components/service-tabs";
import { kategoriService } from "@/services/kategori.service";
import { layananService } from "@/services/layanan.service";

export default async function LayananPage() {
    const [kategoriList, layananList] = await Promise.all([
        kategoriService.getAll(),
        layananService.getAll(),
    ])
    return (
        <main className="my-12">
            <Hero title="Layanan PDU Bumijo" description="Kami menyediakan berbagai layanan edukasi dan pengelolaan sampah
          untuk masyarakat, sekolah, instansi, maupun komunitas."/>
            <ServiceTabs layananCategories={kategoriList} layananList={layananList}/>
            <CTA title="Tertarik menggunakan layanan kami?" description="Masih memiliki pertanyaan atau ingin melakukan reservasi?"/>
        </main>
    );
}
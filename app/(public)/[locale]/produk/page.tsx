import { Hero } from "@/components/hero";
import { CTA } from "@/components/cta";
import { ProductGrid } from "./components/product-grid";
import { produkService } from "@/services/produk.service";

export default async function ProdukPage() {
  const produkList = await produkService.getAll();
  return (
    <main className="my-12">
      <Hero
        title="Produk Daur Ulang PDU Bumijo"
        description="Berbagai produk hasil pengolahan dan pemanfaatan kembali sampah yang memiliki nilai guna dan nilai ekonomi."
      />
      <ProductGrid produkList={produkList}/>
      <CTA
        title="Masih ingin mengetahui produk lainnya?"
        description="Kami juga menerima pemesanan dalam jumlah tertentu
dan siap memberikan informasi mengenai stok produk."
      />
    </main>
  );
}

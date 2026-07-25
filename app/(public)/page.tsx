"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans text-dark-primary">
      {/* landing page */}
      <div className="flex flex-col items-center justify-center min-h-screen w-full text-center text-dark-primary">
        <div className="flex flex-col justify-center items-center gap-8 w-4/5 md:max-w-3/5">
          <h1 className="font-fraunces text-xl md:text-6xl f">Sampah Bukan Akhir, Melainkan Awal dari Nilai Baru</h1>
          <p className="max-md:text-sm">Bersama masyarakat, kami mengubah sampah menjadi sumber daya yang bermanfaat melalui pengelolaan yang bertanggung jawab dan berkelanjutan.</p>
          <Button size="lg" className="w-3/5">Hubungi Sekarang</Button>
        </div>
      </div>

      {/* about us sederhana */}
      <div className="flex flex-col justify-center min-h-screen w-4/5 gap-14 md:gap-28">
        
        <p className="font-semibold text-lg md:text-2xl">Pusat Daur Ulang &quot;Papa Dulang Mami&quot; merupakan pusat pengelolaan sampah terpadu berbasis masyarakat di Kelurahan Bumijo yang mengubah sampah menjadi sumber daya bernilai ekonomi sekaligus mendukung lingkungan yang lebih bersih. </p>
        

        <div className="flex max-md:flex-col justify-between items-center gap-10 md:gap-20 w-full">
          <Image 
            src="https://placehold.net/600x400.png"
            alt="Tentang PDU Bumijo"
            width={400}
            height={200}
            className="border-2 border-dark-primary rounded-2xl"
          />
          <p className="">Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. 
            In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla
             lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel 
             class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p>
        </div>
      </div>

      {/* alur pengelolaan sampah */}
      <div className="flex justify-center items-center min-h-screen w-full">
        <h1 className="text-5xl">Alur Pengelolaan Sampah</h1>
      </div>

      {/* Layanan */}
      <div className="flex justify-center items-center bg-light-primary min-h-screen w-full gap-12">
        <h1 className="text-4xl font-bold">Layanan Kami</h1>
        {/* card goes here  */}
      </div>

      {/* produk unggulan */}
      <div className="flex justify-center items-center min-h-screen w-full gap-12">
        <h1 className="text-4xl font-bold">Produk Kami</h1>
      </div>

      {/* Galeri */}
      <div className="flex justify-center items-center min-h-screen w-full gap-12">
        <h1 className="text-4xl font-bold">Galeri</h1>
      </div>

      {/* penghargaan */}
      <div className="flex justify-center items-center min-h-screen w-full gap-12">
        <h1 className="text-4xl text-black/60 font-bold">Penghargaan</h1>
      </div>

      {/* CTA */}
      <div className="flex justify-center items-center min-h-screen w-full gap-12">
        <h1 className="text-4xl font-bold">Call To Action</h1>
      </div>
    </div>
  );
}

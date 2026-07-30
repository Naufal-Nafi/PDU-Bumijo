import { FadeIn } from "@/components/animation/fade-in";

const ALASAN = [
  {
    icon: "♻️",
    title: "Volume Sampah Meningkat",
    desc: "Jumlah timbunan sampah di lingkungan padat penduduk terus bertambah setiap tahun.",
  },
  {
    icon: "🏡",
    title: "Inovasi Bank Sampah Berseri 35",
    desc: "Wujud dari kreativitas dan inovasi terpadu dari bank sampah Berseri 35 untuk menyelesaikan masalah sampah di wilayah kelurahan Bumijo",
  },
  {
    icon: "🌱",
    title: "Butuh Solusi Berkelanjutan",
    desc: "Penanganan sampah konvensional belum cukup menjawab masalah jangka panjang.",
  },
  {
    icon: "🤝",
    title: "Pemberdayaan Masyarakat",
    desc: "Perubahan nyata hanya bisa terjadi lewat partisipasi aktif warga sekitar.",
  },
];

export function LatarBelakang() {
  return (
    <section className="bg-secondary/30 px-6 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <div className="mx-auto mb-12 max-w-xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              Latar Belakang
            </span>
            <h2 className="mt-2 text-2xl font-semibold text-dark-primary md:text-3xl">
              Mengapa Kami Berdiri?
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {ALASAN.map((item, i) => (
            <FadeIn
              key={item.title}
              delay={i * 0.1}
              className="flex gap-4 rounded-2xl border border-dark-primary/10 bg-background p-6 shadow-sm"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-light-primary/60 text-xl">
                {item.icon}
              </span>
              <div>
                <h3 className="font-semibold text-dark-primary">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-dark-primary/75">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

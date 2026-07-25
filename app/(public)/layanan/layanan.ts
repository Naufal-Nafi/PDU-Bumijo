export type LayananCategorySlug = "studi-tiru" | "workshop" | "pengangkutan-sampah";

export interface LayananCategory {
  slug: LayananCategorySlug;
  label: string;
}

export interface Layanan {
  id: string;
  title: string;
  description: string;
  image: string;
  category: LayananCategorySlug;
}

export const layananCategories: LayananCategory[] = [
  { slug: "studi-tiru", label: "Studi Tiru" },
  { slug: "workshop", label: "Workshop" },
  { slug: "pengangkutan-sampah", label: "Pengangkutan Sampah" },
];

export const layananList: Layanan[] = [
  // Studi Tiru
  {
    id: "kelola-sampah-organik",
    title: "Kelola Sampah Organik",
    description:
      "Belajar mengelola sampah organik rumah tangga melalui metode ember tumpuk, budidaya maggot, dan biopori.",
    image: "https://placehold.net/600x400.png",
    category: "studi-tiru",
  },
  {
    id: "lodong-sisa-dapur",
    title: "Lodong Sisa Dapur",
    description:
      "Teknik sederhana mengolah sisa dapur menjadi pupuk cair menggunakan lodong bambu atau pipa paralon.",
    image: "https://placehold.net/600x400.png",
    category: "studi-tiru",
  },
  {
    id: "takakura-kompos",
    title: "Takakura (Kompos)",
    description:
      "Pelatihan metode Takakura untuk membuat kompos rumahan yang praktis, cepat, dan minim bau.",
    image: "https://placehold.net/600x400.png",
    category: "studi-tiru",
  },
  {
    id: "eco-enzim",
    title: "Eco Enzim",
    description:
      "Pembuatan eco enzim dari limbah buah dan sayur sebagai cairan multifungsi ramah lingkungan.",
    image: "https://placehold.net/600x400.png",
    category: "studi-tiru",
  },

  // Workshop
  {
    id: "administrasi-bank-sampah",
    title: "Administrasi Bank Sampah",
    description:
      "Pelatihan sistem pencatatan, penimbangan, dan pengelolaan tabungan sampah untuk pengelola bank sampah.",
    image: "https://placehold.net/600x400.png",
    category: "workshop",
  },
  {
    id: "kerajinan",
    title: "Kerajinan",
    description:
      "Workshop pemanfaatan sampah anorganik menjadi produk kerajinan bernilai jual.",
    image: "https://placehold.net/600x400.png",
    category: "workshop",
  },

  // Pengangkutan Sampah
  {
    id: "pengambilan-sampah-kantor",
    title: "Pengambilan Sampah di Kantor",
    description:
      "Layanan penjemputan rutin sampah untuk kantor dan instansi dengan jadwal yang fleksibel.",
    image: "https://placehold.net/600x400.png",
    category: "pengangkutan-sampah",
  },
  {
    id: "pengambilan-transporter-gerobak",
    title: "Pengambilan via Transporter/Gerobak",
    description:
      "Layanan pengangkutan sampah rumah tangga menggunakan gerobak/transporter, khusus wilayah Bumijo.",
    image: "https://placehold.net/600x400.png",
    category: "pengangkutan-sampah",
  },
  {
    id: "penjualan-rongsok",
    title: "Penjualan Rongsok",
    description:
      "Layanan jual beli barang rongsokan dengan harga kompetitif dan proses yang mudah.",
    image: "https://placehold.net/600x400.png",
    category: "pengangkutan-sampah",
  },
];
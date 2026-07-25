export interface Produk {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

export const produkList: Produk[] = [
  {
    id: "tanaman-hias-a",
    name: "Tanaman Hias A",
    price: 35000,
    description: "Tanaman hias bunga sintetis hasil daur ulang plastik.",
    image: "https://placehold.net/600x400.png",
  },
  {
    id: "tas-anyaman-plastik",
    name: "Tas Anyaman Plastik",
    price: 45000,
    description: "Tas serbaguna hasil anyaman bungkus plastik bekas, kuat dan tahan lama.",
    image: "https://placehold.net/600x400.png",
  },
  {
    id: "pot-botol-bekas",
    name: "Pot Botol Bekas",
    price: 15000,
    description: "Pot tanaman dari botol plastik bekas yang dicat dan dihias ulang.",
    image: "https://placehold.net/600x400.png",
  },
  {
    id: "kompos-organik",
    name: "Kompos Organik",
    price: 20000,
    description: "Pupuk kompos hasil olahan sampah organik, subur untuk tanaman rumahan.",
    image: "https://placehold.net/600x400.png",
  },
  {
    id: "eco-enzim-cair",
    name: "Eco Enzim Cair",
    price: 25000,
    description: "Cairan multifungsi hasil fermentasi limbah buah dan sayur, ramah lingkungan.",
    image: "https://placehold.net/600x400.png",
  },
  {
    id: "bross-daur-ulang",
    name: "Bros Daur Ulang",
    price: 10000,
    description: "Aksesoris bros cantik dari limbah kain dan plastik yang diolah kembali.",
    image: "https://placehold.net/600x400.png",
  },
];
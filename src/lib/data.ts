import { Building, Home, Construction } from "lucide-react";
import { createNanoID } from "@/utils/nanoid";

export const properties = [
  {
    id: createNanoID(),
    title: "Perumahan Bungalow I",
    subTitle: "Modern dan Nyaman",
    description:
      "Cluster sederhana yang mengakrabkan keluarga  kecil yang bahagia. Cocok untuk Anda yang menginginkan rumah mungil namun elegan, dengan harga yang bersahabat. Dengan akses mudah ke berbagai fasilitas umum. Salah satu penjualan terbaik kami.",
    imageUrl: "/images/bungalo1.jpg",
  },
  {
    id: createNanoID(),
    title: "Perumahan Bungalow II",
    subTitle: "Mudah dan Sederhana",
    description:
      "Hunian idaman bagi keluarga kecil Anda yang penuh kehangatan. Memiliki 2 lantai dan taman yang luas, cocok untuk mengukir kenangan indah bersama keluarga Anda. Gaya modern & minimalis dengan berbagai fasilitas dapat Anda miliki dengan harg yang terjangkau.",
    imageUrl: "/images/bungalo2.jpg",
  },
  {
    id: createNanoID(),
    title: "Perumahan Bungalow III",
    subTitle: "Elit dan Elok",
    description:
      "Hunian eksklusif untuk Anda & keluarga dengan berbagai kemewahan yang ditawarkan. Bungalow 3 hadir di Bandung Timur dengan 2 lantai dikelilingi oleh ventilasi yang memudahkan cahaya matahari masuk sehingga menghasilkan sirkulasi udara yang baik.",
    imageUrl: "/images/bungalo3.jpg",
  },
];

export const services = [
  {
    id: createNanoID(),
    title: "Building Management",
    description:
      "Mempertahankan serta meningkatkan nilai properti melalui manajemen profesional secara komperhensif, correctif dan preventif serta standard layanan terbaik kepada pemilik.",
    icon: Building,
  },
  {
    id: createNanoID(),
    title: "Home Modelling",
    description:
      "Menyediakkan layanan desain properti sesuai dengan selera pemilik tanpa mengubah struktur bangunan dan tetap mengikuti standar dari properti yang dikembangkan Future Living.",
    icon: Home,
  },
  {
    id: createNanoID(),
    title: "Building Development",
    description:
      "Melayani proses pembangunan properti dari tanah menjadi sebuah bangunan yang fungsional dan layak pakai dengan kualitas yang terbaik dari tenaga ahli yang profesional.",
    icon: Construction,
  },
];

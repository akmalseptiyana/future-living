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

export const projects = [
  {
    id: createNanoID(),
    title: "Perumahan MoonShine",
    city: "Surabaya",
    imageUrl:
      "https://images.unsplash.com/photo-1628012209120-d9db7abf7eab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80",
  },
  {
    id: createNanoID(),
    title: "Perumahan RoseShine",
    city: "Surabaya",
    imageUrl:
      "https://images.unsplash.com/photo-1561975023-4cf2c838810c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: createNanoID(),
    title: "Perumahan StarShine",
    city: "Yogyakarta",
    imageUrl:
      "https://images.unsplash.com/photo-1557696859-ebd88b12be5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
];

export const testimonials = [
  {
    id: createNanoID(),
    name: "Miguel San Jose",
    role: "Direktur PT",
    company: "Home Properties",
    caption: "“Langkah Awal Demi Mimpi Jadi Kenyataan”",
    testimony:
      "Demi mencapai mimpi yang dituju, perlu langkah awal yang pasti. Future Living memiliki segalanya sebagai langkah awal mewujudkan mimpi.",
    imageProperty:
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    imageCompany: "/images/company1.png",
    imageProfile: "/images/user1.webp",
  },
  {
    id: createNanoID(),
    name: "Abi Rozenfort",
    role: "Direktur PT",
    company: "Home & Garden",
    caption: "“Laba Perusahaan Kami Meroket 200%”",
    testimony:
      "Ini adalah pelayanan kami, kami melayani dengan sepenuh hati. Anda akan mendapatkan pelayanan terbaik dari kami.",
    imageProperty:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=875&q=80",
    imageCompany: "/images/company2.png",
    imageProfile: "/images/user4.webp",
  },
  {
    id: createNanoID(),
    name: "Russel Novel",
    role: "Direktur PT",
    company: "Aki-Home",
    caption: "“Future Living Gambaran Masa Depan”",
    testimony:
      "Masa depan bukan hanya sekedar angan-angan, Future Living menyediakan properti dengan teknologi terkini dan selalu ada gebrakan di dalamnya.",
    imageProperty: "/images/aki-home-testimonial.png",
    imageCompany: "/images/company3.png",
    imageProfile: "/images/user3.webp",
  },
];

import Link from "next/link";

import { Button } from "@/components/atoms/button";
import { FeaturedImage } from "./featured-image";

export function HomeAbout() {
  return (
    <div className="flex flex-col lg:flex-row lg:gap-[68px]">
      <FeaturedImage />
      <div className="flex flex-col justify-center gap-4 lg:max-w-[45%] lg:gap-10">
        <h2 className="text-center text-xl font-semibold leading-[30px] text-title md:text-[44px] md:font-bold md:leading-[54px] lg:text-left">
          Tentang Kami
        </h2>
        <p className="text-center text-sm font-normal leading-6 text-bodyText md:text-lg md:leading-[30px] lg:text-left">
          Berpengalaman lebih dari 10 tahun sebagai pengembang yang menyediakan
          rumah menciptakan rumah yang fungsional, nyaman, dan bergaya dengan
          menggunakan bahan berkualitas tinggi dan teknologi canggih.
          Transparansi dan kejujuran adalah nilai-nilai Future Living.
        </p>
        <div className="flex flex-row justify-center gap-2 md:gap-4 lg:justify-start">
          <Button asChild>
            <Link href="/about">Selengkapnya</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="#contact">Hubungi Kami</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

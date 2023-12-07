import Link from "next/link";

import { Button } from "@/components/atoms/button";
import { FeaturedImage } from "./featured-image";
import { Partner } from "./partner";

export function HomeHero() {
  return (
    <div className="flex flex-col gap-10 lg:flex-row-reverse lg:justify-between lg:gap-5">
      <FeaturedImage />
      <div className="flex flex-col items-center justify-center gap-4 md:gap-7 lg:items-start lg:gap-10">
        <h1 className="text-center text-2xl font-bold text-title md:text-[44px] md:leading-[54px] lg:max-w-[568px] lg:text-left lg:text-[60px] lg:leading-[73px]">
          Find The Place To Live Your Dreams Easily Here
        </h1>
        <p className="text-center text-sm font-normal leading-6 text-bodyText md:text-lg md:leading-[30px] lg:max-w-[568px] lg:text-left">
          Semua yang Anda butuhkan tentang hunian impian ada di sini. Future
          Living menyediakan hunian terbaik untuk Anda dan keluarga. Pengalaman
          kami membawa Anda pada kepuasan.{" "}
        </p>
        <div className="flex flex-row gap-2 md:gap-4">
          <Button asChild>
            <Link href="/booking">Buat Janji</Link>
          </Button>
          <Button variant="outline">
            <Link href="#property">Jelajahi Properti</Link>
          </Button>
        </div>
        <Partner />
      </div>
    </div>
  );
}

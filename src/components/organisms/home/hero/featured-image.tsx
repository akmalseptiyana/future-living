import Image from "next/image";
import { CheckCircle2, Coins, FileCheck, Users } from "lucide-react";

import { FeaturedBar } from "@/components/molecules/featured-bar";

export function FeaturedImage() {
  return (
    <div className="relative w-full lg:w-fit">
      <figure className="relative h-[275px] w-full overflow-hidden rounded md:h-[524px] md:rounded-lg lg:h-[640px] lg:w-[622px]">
        <Image
          src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=692&q=80"
          alt="house"
          fill
          quality={90}
          className="absolute object-cover"
        />
      </figure>
      <div className="absolute -bottom-16 -left-8 hidden gap-6 xl:flex xl:flex-col">
        <div className="flex flex-row gap-6">
          <FeaturedBar
            className="animate-pop"
            title="Terpercaya"
            description="Pengalaman lebih dari 10 tahun+"
            withIcon
          >
            <CheckCircle2 className="h-11 w-11 stroke-icon" />
          </FeaturedBar>
          <FeaturedBar
            className="animation-delay-1000 animate-pop"
            title="Terjangkau"
            description="Menyediakan harga terbaik"
            withIcon
          >
            <Coins className="h-11 w-11 stroke-icon" />
          </FeaturedBar>
        </div>
        <div className="ml-16 flex flex-row gap-6">
          <FeaturedBar
            className="animation-delay-2000 animate-pop "
            title="Professional"
            description="Berpengalaman dan Professional"
            withIcon
          >
            <FileCheck className="h-11 w-11 stroke-icon" />
          </FeaturedBar>
          <FeaturedBar
            className="animation-delay-3000 animate-pop "
            title="Cepat"
            description="Bekerja secara efisien"
            withIcon
          >
            <Users className="h-11 w-11 stroke-icon" />
          </FeaturedBar>
        </div>
      </div>
    </div>
  );
}

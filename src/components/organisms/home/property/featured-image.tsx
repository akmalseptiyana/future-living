import Image from "next/image";
import { PlayCircle, Globe } from "lucide-react";

import { Button } from "@/components/atoms/button";

interface FeaturedImageProps {
  imageUrl: string;
  title: string;
}

export function FeaturedImage({ imageUrl, title }: FeaturedImageProps) {
  return (
    <div className="relative h-full w-full">
      <figure className="relative h-[208px] w-full overflow-hidden rounded md:h-[524px] lg:max-h-[452px]">
        <Image
          src={imageUrl}
          alt={title}
          fill
          quality={90}
          className="absolute object-cover"
        />
      </figure>
      <div className="absolute -bottom-4 z-10 flex w-full flex-row justify-center gap-2 md:-bottom-7">
        <Button variant="secondary" className="gap-1 md:py-4">
          <PlayCircle className="h-4 w-4 stroke-title group-hover:stroke-white md:h-6 md:w-6" />
          Play Video
        </Button>
        <Button variant="secondary" className="gap-1 md:py-4">
          <Globe className="h-4 w-4 stroke-title group-hover:stroke-white md:h-6 md:w-6" />
          360 Tour
        </Button>
      </div>
    </div>
  );
}

import Image from "next/image";

import { FeaturedBar } from "@/components/molecules/featured-bar";

export function FeaturedImage() {
  return (
    <div className="flex flex-row gap-3 py-[68px] md:gap-6 md:px-[52px]  lg:w-full lg:px-0 lg:py-[40px]">
      <div className="flex w-full flex-col gap-3 md:gap-6">
        <div className="relative w-full">
          <figure className="relative h-[165px] w-full overflow-hidden rounded-lg md:h-[280px]">
            <Image
              src="https://images.unsplash.com/photo-1564703048291-bcf7f001d83d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"
              alt="house-1"
              fill
              className="absolute object-cover saturate-150"
            />
          </figure>
          <FeaturedBar
            title="30K+"
            description="Customer Berbahagia"
            className="absolute -top-[30px] left-0 animate-pop md:-left-[52px] md:-top-[40px] lg:-left-[10px]"
          />
        </div>
        <div className="relative w-full">
          <figure className="relative h-[99px] w-full overflow-hidden rounded-lg md:h-[169px]">
            <Image
              src="https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="house-1"
              className="absolute object-cover contrast-125 saturate-150"
              fill
            />
          </figure>
          <FeaturedBar
            title="10T"
            description="Tahun melayani"
            className="animation-delay-1000 absolute -bottom-[30px] left-0 animate-pop md:-left-[52px] md:-top-[40px] md:bottom-auto lg:-top-[50px] lg:left-[20px]"
          />
        </div>
      </div>
      <div className="flex w-full flex-col gap-3 md:gap-6">
        <div className="relative w-full">
          <figure className="relative h-[114px] w-full overflow-hidden rounded-lg md:h-[194px]">
            <Image
              src="https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="house-1"
              className="absolute object-cover saturate-150 "
              fill
            />
          </figure>
          <FeaturedBar
            title="17+"
            description="Perusahaan Terafiliasi"
            className="animation-delay-2000 absolute -top-[30px] right-0 z-[1] animate-pop md:-bottom-[40px] md:-right-[52px] md:top-auto"
          />
        </div>
        <div className="relative w-full">
          <figure className="relative h-[150px] w-full overflow-hidden rounded-lg md:h-[260px]">
            <Image
              src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="house-1"
              className="absolute object-cover saturate-150 "
              fill
            />
          </figure>
          <FeaturedBar
            title="44k"
            description="Properti dibangun"
            className="animation-delay-3000 absolute -bottom-[30px] right-0 animate-pop md:-bottom-[40px] md:-right-[52px]"
          />
        </div>
      </div>
    </div>
  );
}

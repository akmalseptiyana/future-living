import Image from "next/image";

import Company1 from "@/assets/company1.webp";
import Company2 from "@/assets/company2.webp";
import Company3 from "@/assets/company3.webp";
import Company4 from "@/assets/company4.webp";
import Company5 from "@/assets/company5.webp";

export function Partner() {
  return (
    <>
      <span className="-mb-2 text-center text-sm font-normal leading-6 text-bodyText md:text-base md:leading-7 lg:-mb-8 lg:w-full lg:text-left">
        Partner terpercaya kami
      </span>
      <div className="flex flex-row items-center justify-center gap-5 lg:w-full lg:justify-start">
        <Image
          src={Company1}
          alt="aki home logo"
          className="h-fit max-w-[48px] md:max-w-[100px]"
        />
        <Image
          src={Company2}
          alt="home logo"
          className="h-fit max-w-[48px] md:max-w-[100px]"
        />
        <Image
          src={Company3}
          alt="home & garden logo"
          className="h-fit max-w-[48px] md:max-w-[100px]"
        />
        <Image
          src={Company4}
          alt="home properties logo"
          className="h-fit max-w-[48px] md:max-w-[100px]"
        />
        <Image
          src={Company5}
          alt="homequity logo"
          className="h-fit max-w-[48px] md:max-w-[100px]"
        />
      </div>
    </>
  );
}

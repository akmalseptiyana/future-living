"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { MapPin } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/molecules/card";
import { projects } from "@/lib/data";
import { cn } from "@/utils/classnames";
import { ArrowLeft, ArrowRight } from "@/components/atoms/icons";

export function HomeProject() {
  const [navigation, setNavigation] = useState({
    isFirst: true,
    isLast: false,
  });
  const slideRef = useRef<any>();

  const handleNext = () => {
    slideRef.current.swiper.slideNext();
  };

  const handlePrev = () => {
    slideRef.current.swiper.slidePrev();
  };

  const onSlideChange = (swiper: any) => {
    setNavigation({
      isFirst: swiper.isBeginning,
      isLast: swiper.isEnd,
    });
  };

  return (
    <div className="flex flex-col justify-center gap-10">
      <h2 className="text-center text-2xl font-semibold leading-[1.875rem] text-title md:text-[2.75rem] md:font-bold md:leading-[3.375rem]">
        Project
      </h2>
      <div>
        <Swiper
          ref={slideRef}
          className="mySwiper"
          pagination={{ clickable: true, el: ".swiper-paginations-project" }}
          modules={[Pagination, Navigation]}
          onSlideChange={onSlideChange}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 64,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 64,
            },
          }}
        >
          {projects.map(({ id, title, city, imageUrl }) => (
            <SwiperSlide key={id}>
              <Card className="rounded-lg bg-[#F3F1F4] pl-8 pt-8">
                <CardHeader>
                  <CardTitle className="text-base font-bold leading-5 text-bodyText md:text-2xl md:font-semibold md:leading-[29px]">
                    {title}
                  </CardTitle>
                  <span className="mt-1 flex items-center gap-1 text-xs font-normal text-bodyText md:text-sm">
                    <MapPin className="h-5 w-5 text-bodyText" />
                    {city}
                  </span>
                </CardHeader>
                <CardContent className="mt-6 h-full w-full rounded-tl-lg bg-card pl-6 pt-6 md:mt-16">
                  <figure className="relative h-[353px] w-full overflow-hidden rounded-br-lg rounded-tl-lg md:h-[390px]">
                    <Image
                      src={imageUrl}
                      alt={title}
                      fill
                      className="absolute object-cover"
                    />
                  </figure>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex flex-row items-center justify-center gap-4 lg:hidden">
        <div className="h-5 w-5">
          <ArrowLeft
            className={cn(
              "h-5 w-5 fill-[#AD9BB3] stroke-[#AD9BB3]",
              navigation.isFirst && "hidden",
            )}
            onClick={handlePrev}
          />
        </div>

        <div className="swiper-paginations-project"></div>

        <div className="h-5 w-5">
          <ArrowRight
            className={cn(
              "h-5 w-5 fill-[#AD9BB3] stroke-[#AD9BB3]",
              navigation.isLast && "hidden",
            )}
            onClick={handleNext}
          />
        </div>
      </div>
    </div>
  );
}

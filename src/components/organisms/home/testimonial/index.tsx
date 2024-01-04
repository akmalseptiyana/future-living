"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/molecules/card";
import { testimonials } from "@/lib/data";
import { cn } from "@/utils/classnames";
import { ArrowLeft, ArrowRight } from "@/components/atoms/icons";

export function HomeTestimonial() {
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
    <div className="flex flex-col py-16 md:gap-10 lg:py-0">
      <h2 className="text-center text-2xl font-semibold leading-[1.875rem] text-title md:text-[2.75rem] md:font-bold md:leading-[3.375rem]">
        Testimonial
      </h2>
      <div>
        <Swiper
          ref={slideRef}
          className="mySwiper"
          pagination={{
            clickable: true,
            el: ".swiper-paginations-testimonial",
          }}
          modules={[Pagination, Navigation]}
          onSlideChange={onSlideChange}
          breakpoints={{
            1024: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
          }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="relative flex flex-col gap-16 pb-52 pt-8 md:pb-8 md:pt-0">
                <figure className="relative h-[208px] w-full overflow-hidden rounded md:h-[489px] md:px-10 lg:max-h-[452px] lg:min-w-[652px]">
                  <Image
                    src={item.imageProperty}
                    alt="home property"
                    fill
                    className="absolute object-cover"
                  />
                </figure>
                <div className="absolute top-3 w-full md:left-3">
                  <Card className="mx-auto w-fit rounded-lg bg-white p-2 shadow-[0_2px_24px_0_rgba(26,28,70,0.12)] md:mx-0 md:p-4">
                    <CardContent>
                      <figure className="relative h-[1.625rem] w-40">
                        <Image
                          src={item.imageCompany}
                          alt="company logo"
                          fill
                          className="absolute object-contain"
                        />
                      </figure>
                    </CardContent>
                  </Card>
                </div>
                <div className="absolute top-52 w-full md:left-3 md:top-[84px]">
                  <Card className="mx-auto flex w-fit flex-row items-center gap-2 rounded-lg bg-white px-2 py-3  shadow-[0_2px_24px_0_rgba(26,28,70,0.12)] md:mx-0 md:gap-3">
                    <CardHeader>
                      <figure className="relative h-7 w-7 overflow-hidden rounded-full md:h-10 md:w-10">
                        <Image
                          src={item.imageProfile}
                          alt="profile"
                          fill
                          className="absolute object-cover"
                        />
                      </figure>
                    </CardHeader>
                    <CardContent>
                      <CardTitle className="text-xs font-normal text-icon md:text-base md:font-bold">
                        {item.name}
                      </CardTitle>
                      <CardDescription className="text-xs font-normal text-bodyText md:text-sm">
                        {item.role}{" "}
                        <span className="font-bold italic">{item.company}</span>
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>
                <div className="absolute right-3 top-72 w-full px-2 md:top-[380px] lg:right-0">
                  <Card className="flex flex-col items-center gap-2 rounded-lg bg-white p-3 shadow-[0_9px_32px_0_rgba(26,28,70,0.05)] md:ml-auto md:max-w-[612px] md:p-4">
                    <CardContent>
                      <CardTitle className="text-center text-xs font-medium text-icon md:text-left md:text-2xl md:font-semibold">
                        {item.caption}
                      </CardTitle>
                      <CardDescription className="text-center text-xs font-normal leading-6 text-bodyText md:text-left md:text-base md:leading-[26px]">
                        {item.testimony}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex flex-row items-center justify-center gap-4">
        <div className="h-5 w-5">
          <ArrowLeft
            className={cn(
              "h-5 w-5 fill-[#AD9BB3] stroke-[#AD9BB3]",
              navigation.isFirst && "hidden",
            )}
            onClick={handlePrev}
          />
        </div>

        <div className="swiper-paginations-testimonial"></div>

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

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/atoms/button";
import { Facility } from "./facility";
import { FeaturedImage } from "./featured-image";
import { properties } from "@/lib/data";
import Mosque from "@/assets/mosque.png";
import Pool from "@/assets/pool.png";
import Alarm from "@/assets/alarm.png";
import Shield from "@/assets/shield.png";
import Play from "@/assets/play.png";
import Gym from "@/assets/barbel.png";

export function HomeProperty() {
  const [slide, setSlide] = useState(null);
  const [position, setPosition] = useState("scrolling-0");

  return (
    <div className="flex flex-col gap-10 py-16 lg:py-0">
      <h2 className="text-center text-2xl font-semibold leading-[30px] text-title md:text-[44px] md:font-bold md:leading-[54px]">
        Properti Kami
      </h2>
      <div className="no-scrollbar flex snap-x snap-mandatory flex-row overflow-hidden lg:flex-col lg:gap-20 lg:py-8">
        {properties.map(({ id, title, subTitle, imageUrl, description }) => (
          <div
            key={id}
            className="flex min-w-full snap-center snap-always flex-col gap-10 md:gap-[60px] lg:flex-row lg:odd:flex-row-reverse"
          >
            <FeaturedImage imageUrl={imageUrl} title={title} />
            <div className="flex flex-col gap-7 lg:w-[50%] lg:gap-10">
              <div className="flex flex-col gap-1">
                <h3 className="text-center text-2xl font-semibold leading-[30px] text-title md:text-[36px] md:font-bold md:leading-[44px] lg:text-left">
                  {title}
                </h3>
                <span className="text-center text-base font-medium leading-[20px] text-icon md:text-[20px] md:leading-[20px] lg:text-left">
                  {subTitle}
                </span>
              </div>
              <p className="text-center text-sm font-normal leading-6 text-bodyText md:text-lg md:leading-[30px] lg:text-left">
                {description}
              </p>

              <div className="flex flex-col justify-center gap-1 md:gap-4 lg:justify-start">
                <span className="text-center text-sm font-bold leading-6 text-placeholder md:text-base lg:w-fit lg:text-left">
                  Fasilitas Umum
                </span>
                <div className="flex flex-row justify-center gap-4 md:grid-cols-3 md:gap-8 lg:justify-start">
                  <Facility title="Masjid">
                    <Image src={Mosque} alt="mosque" />
                  </Facility>
                  <Facility title="Kolam Renang">
                    <Image src={Pool} alt="pool" />
                  </Facility>
                  <Facility title="Alarm Kebakaran">
                    <Image src={Alarm} alt="alarm" />
                  </Facility>
                </div>
                <div className="flex flex-row justify-center gap-4 md:gap-8 lg:justify-start">
                  <Facility title="Keamanan">
                    <Image src={Shield} alt="shield" />
                  </Facility>
                  <Facility title="Taman Bermain">
                    <Image src={Play} alt="play" />
                  </Facility>
                  <Facility title="Gym">
                    <Image src={Gym} alt="gym" />
                  </Facility>
                </div>
              </div>

              <div className="flex flex-row justify-center gap-2 md:gap-4 lg:justify-start">
                <Button asChild>
                  <Link href="/booking">Buat Janji</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/detail">Selengkapnya</Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-row items-center justify-center gap-4 lg:hidden">
        <div className="h-5 w-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5 fill-[#AD9BB3] stroke-[#AD9BB3]"
          >
            <path
              fillRule="evenodd"
              d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        {properties.map((item) => {
          if (slide === item.id) {
            return (
              <div
                key={item.id}
                className="h-2 w-2 rounded-full bg-[#AD9BB3]"
              ></div>
            );
          }

          return (
            <div
              key={item.id}
              className="h-2 w-2 rounded-full bg-[#EDE9EF]"
            ></div>
          );
        })}
        <div className="h-5 w-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5 fill-[#AD9BB3] stroke-[#AD9BB3]"
          >
            <path
              fillRule="evenodd"
              d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

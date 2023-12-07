"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import Logo from "@/assets/logo.webp";
import { Button } from "@/components/atoms/button";
import { cn } from "@/utils/classnames";
import { MenuLink } from "./menu-link";
import { MenuToggle } from "./menu-toggle";

export function Navbar() {
  const [isMenuActive, setMenuActive] = useState(false);

  return (
    <header>
      <nav className="sticky left-0 top-0 z-50 flex w-full flex-row items-center justify-between bg-white bg-opacity-[0.85] py-4 backdrop-blur-sm lg:mt-6">
        <div className="container flex flex-wrap items-center justify-between">
          <Link href="/">
            <Image
              src={Logo}
              alt="future living logo"
              width={178}
              height={68}
              quality={90}
            />
          </Link>
          <MenuToggle
            isMenuActive={isMenuActive}
            setMenuActive={setMenuActive}
          />
          <div
            className={cn(
              "transition-collapse mt-2 w-full overflow-hidden md:mt-0 md:h-max md:w-max",
              isMenuActive ? "h-[200px]" : "h-0",
            )}
          >
            <ul className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-6 lg:gap-10">
              {navbarLinks.map((item, index) => (
                <li key={index}>
                  <MenuLink {...item} />
                </li>
              ))}
              <li className="w-full md:w-fit">
                <Button className="w-full">Hubungi Kami</Button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

const navbarLinks = [
  {
    name: "Beranda",
    href: "/",
  },
  {
    name: "Tentang Kami",
    href: "/about",
  },
  {
    name: "Properti",
    href: "/property",
  },
  {
    name: "Artikel",
    href: "/article",
  },
];

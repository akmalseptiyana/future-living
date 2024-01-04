import { Navbar } from "@/components/organisms/navbar";
import { HomeHero } from "@/components/organisms/home/hero";
import { HomeAbout } from "@/components/organisms/home/about";
import { HomeProperty } from "@/components/organisms/home/property";
import { HomeService } from "@/components/organisms/home/service";
import { HomeProject } from "@/components/organisms/home/project";
import { HomeTestimonial } from "@/components/organisms/home/testimonial";
import { HomeContact } from "@/components/organisms/home/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section className="container pt-4 md:pt-8 lg:pt-16">
          <HomeHero />
        </section>
        <section className="container mt-10 md:mt-20 lg:mt-[7.5rem]">
          <HomeAbout />
        </section>
        <section className="container mt-10 md:mt-20 lg:mt-[7.5rem]">
          <HomeProperty />
        </section>
        <section className="container mt-10 md:mt-20 lg:mt-[7.5rem]">
          <HomeService />
        </section>
        <section className="container mt-10 md:mt-20 lg:mt-[7.5rem]">
          <HomeProject />
        </section>
        <section className="container mt-10 md:mt-20 lg:mt-[7.5rem]">
          <HomeTestimonial />
        </section>
        <section className="container mt-10 md:mt-20 lg:mt-[7.5rem]">
          <HomeContact />
        </section>
      </main>
    </>
  );
}

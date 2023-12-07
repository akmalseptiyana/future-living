import { Navbar } from "@/components/organisms/navbar";
import { HomeHero } from "@/components/organisms/home/hero";
import { HomeAbout } from "@/components/organisms/home/about";

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
      </main>
    </>
  );
}

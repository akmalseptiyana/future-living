import { Navbar } from "@/components/organisms/navbar";
import { HomeHero } from "@/components/organisms/home/hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section className="container pt-4 md:pt-8 lg:pt-16">
          <HomeHero />
        </section>
      </main>
    </>
  );
}

import Image from "next/image";

import { ContactForm } from "./form";
import Hand from "@/assets/hand.png";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/molecules/card";

export function HomeContact() {
  return (
    <>
      <div className="flex flex-col justify-center gap-10">
        <div className="flex flex-col gap-1">
          <h2 className="text-center text-2xl font-semibold leading-8 text-title md:text-[44px] md:font-bold md:leading-[54px]">
            Hubungi Kami
          </h2>
          <p className="text-center text-base font-medium leading-5 text-icon md:text-xl">
            Lebih dekat dengan kami dan temukan solusinya
          </p>
        </div>
        <div className="flex flex-col gap-[4.375rem] md:gap-28 xl:mx-auto xl:flex-row xl:gap-56">
          <div className="relative mx-auto w-fit">
            <figure className="relative h-[268px] w-[195px] overflow-hidden rounded md:h-[613px] md:w-[447px]">
              <Image
                src="/images/contact.png"
                alt=""
                fill
                className="object-cover"
              />
            </figure>
            <Image
              src={Hand}
              alt=""
              className="absolute right-[-62px] top-[-10px] h-[290px] w-full rounded object-cover md:right-[-141px] md:top-[-25px] md:h-[665px]"
            />
            <Card className="group absolute left-[134px] top-[39px] flex w-[118px] flex-row items-center gap-1 rounded-md bg-white p-2 shadow-[0_2px_24px_10px_rgba(26,28,70,0.05)] transition-all delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:cursor-pointer hover:bg-title md:left-[306px] md:top-[91px] md:w-[268px] md:gap-2 md:rounded-xl md:p-4">
              <CardHeader>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-[20px] w-[20px] stroke-icon group-hover:stroke-white md:h-[60px] md:w-[60px]"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-[10px] font-medium text-medsos group-hover:text-white md:text-2xl md:font-semibold">
                  WhatsApp
                </CardTitle>
                <CardContent className="text-[8px] font-semibold text-bodyText group-hover:text-white md:text-base md:font-bold">
                  +62 827-0986-4567
                </CardContent>
              </CardContent>
            </Card>
            <Card className="group absolute left-[-42px] top-[133px] flex w-fit flex-row items-center gap-1 rounded-md bg-white p-2 shadow-[0_2px_24px_10px_rgba(26,28,70,0.05)] transition-all delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:cursor-pointer hover:bg-title md:left-[-136px] md:top-[307px] md:w-[268px] md:gap-2 md:rounded-xl md:p-4">
              <CardHeader>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-[20px] w-[20px] stroke-icon group-hover:stroke-white md:h-[60px] md:w-[60px]"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                  />
                </svg>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-[10px] font-medium text-medsos group-hover:text-white md:text-2xl md:font-semibold">
                  Instagram
                </CardTitle>
                <CardContent className="text-[8px] font-semibold text-bodyText group-hover:text-white md:text-base md:font-bold">
                  @FutureLiving
                </CardContent>
              </CardContent>
            </Card>
            <Card className="group absolute left-[31px] top-[254px] flex w-fit flex-row items-center gap-1 rounded-md bg-white p-2 shadow-[0_2px_24px_10px_rgba(26,28,70,0.05)] transition-all delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:cursor-pointer hover:bg-title md:left-[82px] md:top-[590px] md:gap-2 md:rounded-xl md:p-4">
              <CardHeader>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-[20px] w-[20px] stroke-icon group-hover:stroke-white md:h-[60px] md:w-[60px]"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
                  />
                </svg>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-[10px] font-medium text-medsos group-hover:text-white md:text-2xl md:font-semibold">
                  Email
                </CardTitle>
                <CardContent className="text-[8px] font-semibold text-bodyText group-hover:text-white md:text-base md:font-bold">
                  FutureLiving@gmail.com
                </CardContent>
              </CardContent>
            </Card>
          </div>
          <div className="flex flex-col gap-5 md:gap-7">
            <h3 className="text-center text-2xl font-semibold leading-[30px] text-title md:text-[44px] md:font-bold md:leading-[54px] lg:text-[36px]">
              Kami Siap Membantu
            </h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
}

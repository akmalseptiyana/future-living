import { ReactNode } from "react";

interface FacilityProps {
  title: string;
  children: ReactNode;
}

export function Facility({ title, children }: FacilityProps) {
  return (
    <div className="flex w-fit flex-row items-center gap-1 md:gap-4 lg:w-[179px] ">
      <div className="w-4 md:w-6">{children}</div>
      <div className="text-xs font-normal text-bodyText md:text-base">
        {title}
      </div>
    </div>
  );
}

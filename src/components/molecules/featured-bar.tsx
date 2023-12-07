import { ReactNode } from "react";

import { cn } from "@/utils/classnames";

interface FeaturedBarProps {
  title: string;
  description: string;
  children?: ReactNode;
  className?: string;
  withIcon?: boolean;
}

export function FeaturedBar({
  children,
  title,
  description,
  className,
  withIcon,
}: FeaturedBarProps) {
  if (withIcon) {
    return (
      <div
        className={cn(
          "flex flex-row items-center gap-1 rounded-lg bg-white px-3 py-5 shadow-lg",
          className,
        )}
      >
        {children}
        <div className="flex flex-col ">
          <h3 className="text-lg font-bold leading-[22px] text-title ">
            {title}
          </h3>
          <p className="text-xs font-bold leading-[16px] text-[#525A6A] ">
            {description}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex flex-col rounded-lg bg-white p-2 shadow-md md:gap-[2px] md:p-4",
        className,
      )}
    >
      <h3 className="text-base font-medium leading-[20px] text-title md:text-[32px] md:font-bold md:leading-[39px] ">
        {title}
      </h3>
      <p className="text-xs font-light leading-[24px]  text-[#525A6A] md:text-base md:font-medium md:leading-[20px] lg:font-bold ">
        {description}
      </p>
    </div>
  );
}

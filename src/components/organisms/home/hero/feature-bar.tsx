import { ReactNode } from "react";

import { cn } from "@/utils/classnames";

interface FeatureBarProps {
  title: string;
  description: string;
  children: ReactNode;
  className?: string;
}

export function FeatureBar({
  children,
  title,
  description,
  className,
}: FeatureBarProps) {
  return (
    <div
      className={cn(
        "flex flex-row items-center gap-1 rounded-lg bg-white px-3 py-5 shadow-lg",
        className,
      )}
    >
      <div>{children}</div>
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

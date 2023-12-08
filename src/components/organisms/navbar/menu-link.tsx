import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/utils/classnames";

interface MenuLinkProps {
  name: string;
  href: string;
}

export function MenuLink({ name, href }: MenuLinkProps) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={cn(
        "text-center text-sm leading-6 text-title transition-all delay-150 ease-in-out lg:text-base",
        href === pathname
          ? "font-semibold"
          : "font-normal hover:underline hover:underline-offset-2",
      )}
    >
      {name}
    </Link>
  );
}

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
        "text-center text-sm leading-6 text-title transition-all delay-150 ease-in-out hover:underline-offset-2 lg:text-base",
        href === pathname
          ? "font-semibold hover:no-underline"
          : "font-normal hover:underline",
      )}
    >
      {name}
    </Link>
  );
}

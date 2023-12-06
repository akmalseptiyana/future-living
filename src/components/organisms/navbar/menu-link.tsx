import Link from "next/link";

interface MenuLinkProps {
  name: string;
  href: string;
}

export function MenuLink({ name, href }: MenuLinkProps) {
  return (
    <Link
      href={href}
      className="text-center text-sm font-light leading-6 text-title transition-all delay-150 ease-in-out hover:underline hover:underline-offset-2 lg:text-base lg:font-normal"
    >
      {name}
    </Link>
  );
}

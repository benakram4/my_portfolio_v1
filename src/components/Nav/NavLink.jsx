"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavLink({ href, children, ...props }) {
  const pathname = usePathname("");

  const activeLink = (path) => {
    return pathname === path
      ? " bg-gray-900 text-bold text-[#9b5de5] dark:text-[#9b5de5]"
      : " text-black dark:text-white text-bold hover:bg-gray-900 hover:text-white dark:hover:text-stone-200";
  };

  return (
    <li className="pb-2">
      <Link
        {...props}
        href={href}
        className={`rounded-md px-3 py-2 text-sm font-medium ${activeLink(
          href
        )}`}
        aria-current={pathname === href}
      >
        {children}
      </Link>
    </li>
  );
}

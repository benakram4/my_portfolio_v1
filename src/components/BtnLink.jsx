import Link from "next/link";

export default function BtnLink({ href, children }) {
  const btnStyle =
    "m-2 rounded-md bg-[#9b5de5] px-3.5 py-2.5 text-sm font-semibold text-stone-200  dark:text-stone-200 shadow-sm hover:bg-[#8c43e4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8333e4]";

  return (
    <button className={btnStyle}>
      <Link target="_blank" rel="noopener noreferrer" href={href}>
        {children}
      </Link>
    </button>
  );
}

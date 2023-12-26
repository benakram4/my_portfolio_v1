"use client";

import { useState, useEffect } from "react";
import { getScrollElementById } from "@/util/helpers";

export default function NavLink({ id, children, ...props }) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const elem = document.getElementById(id);
      const elemTop = elem?.offsetTop;
      const elemBottom = elemTop + elem?.offsetHeight;

      if (currentScrollY > elemTop && currentScrollY < elemBottom) {
        setActiveId(id);
      } else {
        setActiveId("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [id]);

  const activeLink = (path) => {
    return activeId === path
      ? " bg-gray-900 text-bold text-[#9b5de5] dark:text-[#9b5de5]"
      : " text-black dark:text-white text-bold hover:bg-gray-900 hover:text-white dark:hover:text-stone-200";
  };

  return (
    <li className="pb-2">
      <button
        {...props}
        onClick={(event) => getScrollElementById(event, id)}
        className={`rounded-md px-3 py-2 text-sm font-medium ${activeLink(
          id
        )}`}
        aria-current={activeId === id}
      >
        {children}
      </button>
    </li>
  );
}
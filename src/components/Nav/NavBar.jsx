"use client";

import { useEffect } from "react";
import NavBarMenu from "@/components/Nav/NavBarMenu";
import NavBarMobile from "@/components/Nav/NavBarMobile";
import BurgerMenu from "@/components/Nav/BurgerMenu";
import Logo from "@/components/Nav/Logo";
import Image from "next/image";
import { useAtom } from "jotai";
import { darkModeAtom } from "@/store";

export default function Header({ children }) {
  const [darkMode, setDarkMode] = useAtom(darkModeAtom);

  // On component mount, check if dark mode is enabled in local storage
  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
  }, []);

  // Whenever darkMode state changes, update the local storage and the class on the body
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);
  return (
    <>
      <header>
        <div className="mx-auto max-w-8xl px-2 sm:px-6 lg:px-8 ">
          <div className="relative flex h-16 items-center justify-between">
            <BurgerMenu />
            <div
              id="logo"
              className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
            >
              <Logo className="block dark:bg-transparent bg-black rounded-3xl h-14 w-auto lg:hidden" />
              <Logo className="hidden dark:bg-transparent bg-black rounded-3xl h-14 w-auto lg:block" />
            </div>
            <div className="hidden sm:block flex-grow">
              <NavBarMenu />
            </div>
            <button onClick={() => setDarkMode(!darkMode)}>
              {!darkMode ? (
                <Image
                  src="/theme/moon-fog-svgrepo-com.svg"
                  width={25}
                  height={25}
                  alt="Dark Mode Icon"
                />
              ) : (
                <Image
                  src="/theme/sun-2-svgrepo-com.svg"
                  width={25}
                  height={25}
                  alt="Light Mode Icon"
                />
              )}
            </button>
          </div>
        </div>
        <NavBarMobile />
      </header>
      {children}
    </>
  );
}

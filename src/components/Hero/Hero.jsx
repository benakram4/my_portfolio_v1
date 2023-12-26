"use client";
import { getScrollElementById } from "@/util/helpers";
import BtnLink from "@/components/BtnLink";
import SocialIcons from "./SocialIcons";

function Hero() {
  return (
    <div id="hero" className="mx-auto max-w-2xl py-28 sm:py-44 lg:py-52 ">
      <div className="text-center">
        <code className="dark:text-stone-200">Hi, My Name Is</code>
        {/* hr with black color */}
        <hr className="w-32 h-1 mx-auto mt-4 mb-6 bg-black" />

        <h1 className="text-4xl font-bold tracking-tight text-stone-900  dark:text-stone-200  sm:text-6xl">
          BEN AKRAM, <br />
          <span className="text-[#9b5de5]">I&apos;M A SOFTWARE-DEVELOPER</span>
        </h1>
        <p className="mt-6 text-lg leading-8 text-stone-700 dark:text-stone-200">
          Toronto-based Software Developer
          <br />
          Who
          <span className="font-bold text-[#9b5de5]"> LOVES</span> building apps
          that live on smart devices !
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <BtnLink
            href="https://drive.google.com/file/d/1EUP30Hf2CnHIAbgPZ2W6FVS-GudSfglW/view?usp=sharing"
          >
            My Resume
          </BtnLink>
          <button
            onClick={(event) => getScrollElementById(event, "about")}
            className="text-sm font-semibold leading-6 text-gray-900 dark:text-stone-200"
          >
            About Me <span aria-hidden="true">→</span>
          </button>
        </div>
        <div className="mt-10">
          <SocialIcons />
        </div>
      </div>
    </div>
  );
}

export default Hero;

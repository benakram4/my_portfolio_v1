"use client";

import skills from "./skillsList";
import Image from "next/image";
import { useAtom } from "jotai";
import { darkModeAtom } from "@/store";

export default function Skills() {
  const [darkMode] = useAtom(darkModeAtom);
  const blackFillItems = ["Next.js", "AWS", "Agile/Scrum", "CI/CD"];

  return (
    <div id="skills" className="container my-24 mx-auto md:px-6 py-3">
      <section className="mb-32">
        <h1 className="text-4xl font-bold text-stone-900 dark:text-stone-100 mb-12 text-center">
          My Skills
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="block rounded-lg bg-white/10 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700/10"
            >
              <h2 className="text-2xl font-bold my-5 text-stone-900 dark:text-stone-100 text-center ">
                {skill.title}
              </h2>
              <ul className="grid grid-cols-3 gap-4 m-9">
                {skill.items.map((item, index) => (
                  <li key={index} className="mb-2">
                    <Image
                      src={`/skills/${item.image}`}
                      height={60}
                      width={60}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt={item.name}
                      title={item.name}
                      style={{
                        filter:
                          !darkMode && blackFillItems.includes(item.name)
                            ? "invert(1)"
                            : "none",
                      }}
                    />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

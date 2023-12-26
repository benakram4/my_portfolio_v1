"use client";

import { useAtom } from "jotai";
import { navBurgerAtom } from "@/store";
import NavLink from "@/components/Nav/NavLink";

export default function NavBarMobile() {
  const [isExpanded, setIsExpanded] = useAtom(navBurgerAtom);

  const toggleMobileMenu = () => {
    setIsExpanded(!isExpanded);
    console.log("Clicked!");
  };

  return (
    <>
      {/*<!-- Mobile menu, show/hide based on menu state. --> */}
      <div
        className={`sm:hidden ${isExpanded ? "block" : "hidden"}`}
        id="mobile-menu"
      >
        <ul className="space-y-2 px-2 pb-3 pt-2 list-none">
          {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
          <NavLink  id="about" handleMobile={toggleMobileMenu}>
            About
          </NavLink>

          <NavLink id="skills" handleMobile={toggleMobileMenu}>
            Skills
          </NavLink>

          <NavLink id="projects" handleMobile={toggleMobileMenu}>
          Projects
          </NavLink>
        </ul>
      </div>
    </>
  );
}

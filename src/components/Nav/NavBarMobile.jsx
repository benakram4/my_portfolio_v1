"use client";

import { useAtom } from "jotai";
import { navBurgerAtom } from "@/store";
import NavLink from "@/components/Nav/NavLink";

export default function NavBarMobile() {
  const [isExpanded, setIsExpanded] = useAtom(navBurgerAtom);

  const toggleMobileMenu = () => {
    setIsExpanded(!isExpanded);
    console.log("Clicked!");
    console.log(isExpanded);
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
          <NavLink  href="/" onClick={toggleMobileMenu}>
            Home
          </NavLink>

          <NavLink href="/projects" onClick={toggleMobileMenu}>
            Projects
          </NavLink>

          <NavLink href="/contact" onClick={toggleMobileMenu}>
            Contact
          </NavLink>

          <NavLink
            href="https://drive.google.com/file/d/1EUP30Hf2CnHIAbgPZ2W6FVS-GudSfglW/view?usp=sharing"
            onClick={toggleMobileMenu}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </NavLink>
        </ul>
      </div>
    </>
  );
}

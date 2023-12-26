import NavLink from "@/components/Nav/NavLink";
import Link from "next/link";
//  Nav Bar for big screens
export default function NavBarMenu() {
  return (
    <div className="flex ">
      <ul className="flex justify-center space-x-4 list-none ">
        <NavLink id="about">About</NavLink>
        <NavLink id="skills">Skills</NavLink>
        <NavLink id="projects">Projects</NavLink>
      </ul>
    </div>
  );
}

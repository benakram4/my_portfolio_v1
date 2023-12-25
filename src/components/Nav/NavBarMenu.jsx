import NavLink from "@/components/Nav/NavLink";
import { getScrollElementById } from "@/util/helpers";

//  Nav Bar for big screens
export default function NavBarMenu() {
  return (
    <div className="flex ">
      <ul className="flex justify-center space-x-4 list-none ">
        <NavLink href="/">Home</NavLink>
        <NavLink href="#">Skills</NavLink>
        <NavLink href="/contact">Contact</NavLink>
        <NavLink
          href="https://drive.google.com/file/d/1EUP30Hf2CnHIAbgPZ2W6FVS-GudSfglW/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </NavLink>
      </ul>
    </div>
  );
}

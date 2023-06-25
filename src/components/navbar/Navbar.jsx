import React from "react";
import { Link, animateScroll } from "react-scroll";

const navItems = [
  {
    item: "About",
    to: "about",
  },
  {
    item: "Project",
    to: "project",
  },
  {
    item: "Contact",
    to: "contact",
  },
];

const Navbar = () => {
  return (
    <>
      <nav className="fixed w-full bg-[#202020] z-30 max-lg:hidden">
        <div className="flex justify-between px-longer2 py-shorter4 border-b-2 border-gradient-navbar">
          <div
            className="flex gap-1 drop-shadow-[3px_3px_4px_white] hover:cursor-pointer"
            onClick={() => animateScroll.scrollToTop()}
          >
            <div className="border-[1rem] border-white w-0 h-0 border-t-transparent border-r-transparent" />
            <div className="w-[2rem] bg-white" />
          </div>
          <ul className="flex items-center gap-10">
            {navItems.map((e, i) => (
              <li key={i} className="hover:cursor-pointer">
                <Link
                  to={e.to}
                  spy={true}
                  smooth={true}
                  offset={10}
                  duration={500}
                >
                  {e.item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

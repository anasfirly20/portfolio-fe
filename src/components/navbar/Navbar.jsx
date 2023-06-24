import React from "react";

const navItems = [
  {
    item: "About",
  },
  {
    item: "Project",
  },
  {
    item: "Contact",
  },
];

const Navbar = () => {
  return (
    <>
      <nav className="fixed w-full z-10 bg-[#202020]">
        <div className="flex justify-between px-longer2 py-shorter4 border-b-2 border-gradient-navbar">
          <div className="flex gap-1 drop-shadow-[3px_3px_4px_white]">
            <div className="border-[1rem] border-white w-0 h-0 border-t-transparent border-r-transparent" />
            <div className="w-[2rem] bg-white" />
          </div>
          <ul className="flex items-center gap-10">
            {navItems.map((e) => (
              <li className="hover:cursor-pointer">{e.item}</li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

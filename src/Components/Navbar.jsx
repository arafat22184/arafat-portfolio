import React, { useState } from "react";
import { FaHome, FaTools, FaProjectDiagram, FaEnvelope } from "react-icons/fa";
import { AiOutlineMenuUnfold } from "react-icons/ai";

const navItems = [
  { href: "#home", icon: <FaHome />, label: "Home" },
  { href: "#about", icon: <FaTools />, label: "About" },
  { href: "#skills", icon: <FaTools />, label: "Skills" },
  { href: "#projects", icon: <FaProjectDiagram />, label: "Projects" },
  { href: "#contact", icon: <FaEnvelope />, label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const liStyle =
    "flex items-center gap-2 px-3 py-2 text-black font-medium rounded-xl bg-white hover:bg-black/70 hover:text-white transition text-sm sm:text-base";

  return (
    <nav className="fixed bottom-4 left-0 right-0 z-50 flex justify-start px-4 max-w-3xl mx-auto">
      {/* Mobile Menu Button */}
      <div className="relative">
        {/* Dropdown Menu Above Button */}
        {isOpen && (
          <ul className="absolute bottom-full left-0 mb-2 flex flex-col gap-2 bg-orange-400 p-3 rounded-2xl shadow-lg w-56 sm:hidden">
            {navItems.map(({ href, icon, label }, index) => (
              <li key={index} onClick={() => setIsOpen(false)}>
                <a href={href} className={liStyle}>
                  {icon}
                  <span>{label}</span>
                </a>
              </li>
            ))}
          </ul>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`bg-orange-400 text-white p-3 rounded-2xl shadow-lg hover:bg-orange-500 transition ${
            isOpen ? "" : "animate-[bounce_5s_ease-in-out_infinite]"
          } sm:hidden`}
        >
          <AiOutlineMenuUnfold className="text-3xl" />
        </button>
      </div>

      {/* Desktop Navbar */}
      <ul className="hidden sm:flex flex-nowrap justify-center items-center gap-3 sm:gap-5 bg-orange-400 px-4 py-3 rounded-2xl shadow-lg mx-auto">
        {navItems.map(({ href, icon, label }, index) => (
          <li key={index}>
            <a href={href} className={liStyle}>
              {icon}
              <span>{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

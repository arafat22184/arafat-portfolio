import React from "react";
import { FaHome, FaTools, FaProjectDiagram, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  const liStyle =
    "flex items-center gap-1 px-3 py-2 text-black font-medium rounded-xl transition cursor-pointer bg-white hover:bg-black/70 hover:text-white";

  return (
    <nav className="fixed bottom-4 left-0 right-0 z-50 flex justify-center max-w-3xl mx-auto ">
      <ul className="flex flex-nowrap scrollbar-hide justify-center items-center gap-3 sm:gap-5 bg-orange-400 px-3 sm:px-4 py-3 rounded-2xl shadow-lg ">
        <li className={liStyle}>
          <a
            href="#home"
            className="flex items-center gap-2 whitespace-nowrap text-sm sm:text-base"
          >
            <FaHome className="text-base sm:text-lg" />
            <span>Home</span>
          </a>
        </li>
        <li className={liStyle}>
          <a
            href="#skills"
            className="flex items-center gap-2 whitespace-nowrap text-sm sm:text-base"
          >
            <FaTools className="text-base sm:text-lg" />
            <span>About</span>
          </a>
        </li>
        <li className={liStyle}>
          <a
            href="#skills"
            className="flex items-center gap-2 whitespace-nowrap text-sm sm:text-base"
          >
            <FaTools className="text-base sm:text-lg" />
            <span>Skill</span>
          </a>
        </li>
        <li className={liStyle}>
          <a
            href="#projects"
            className="flex items-center gap-2 whitespace-nowrap text-sm sm:text-base"
          >
            <FaProjectDiagram className="text-base sm:text-lg" />
            <span>Projects</span>
          </a>
        </li>
        <li className={liStyle}>
          <a
            href="#contact"
            className="flex items-center gap-2 whitespace-nowrap text-sm sm:text-base"
          >
            <FaEnvelope className="text-base sm:text-lg" />
            <span>Contact</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

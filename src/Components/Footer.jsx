import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const icons = [
  {
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/md-abdulla-all-arafat-8a9892200/",
  },
  { icon: <FaGithub />, href: "https://github.com/arafat22184" },
  { icon: <SiLeetcode />, href: "https://leetcode.com/u/arafat22184/" },
  { icon: <FaFacebook />, href: "https://www.facebook.com/a.al.arafat.5/" },
];

const Footer = () => {
  return (
    <footer className="bg-slate-900/70 border-t border-slate-700 py-8 text-white pb-28">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-between gap-6">
        {/* Logo */}
        <div>
          <img
            src="https://i.ibb.co/M5RNNrs9/arafat-Logo.png"
            alt="Logo"
            className="h-32"
          />
        </div>

        {/* Copyright */}
        <p className="text-sm text-slate-400 text-center">
          &copy; {new Date().getFullYear()} Arafat. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <div className="w-18 md:w-28 h-px bg-orange-400 opacity-70" />
          {icons.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-10 h-10 rotate-45 border border-orange-400 hover:bg-orange-500 transition duration-300 flex items-center justify-center shadow-md hover:scale-110"
            >
              <div className="-rotate-45 text-white text-xl">{item.icon}</div>
            </a>
          ))}
          <div className="w-18 md:w-28 h-px bg-orange-400 opacity-70" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

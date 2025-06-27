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

const VerticalSocialIcons = () => {
  return (
    <div className="flex md:flex-col items-center justify-center gap-4 mt-6 md:mt-0">
      {/* Line (only on desktop) */}
      <div className="hidden md:block w-px h-8 bg-orange-400 opacity-70" />

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

      {/* Line (only on desktop) */}
      <div className="hidden md:block w-px h-8 bg-orange-400 opacity-70" />
    </div>
  );
};

export default VerticalSocialIcons;

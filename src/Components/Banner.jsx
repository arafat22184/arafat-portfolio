/* eslint-disable no-unused-vars */
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import VerticalSocialIcons from "./VerticalSocialIcons";
import { PiReadCvLogoFill } from "react-icons/pi";

const Banner = () => {
  return (
    <section
      id="home"
      className="max-w-7xl mx-auto relative flex items-center justify-center px-4 sm:px-8 md:px-16 py-20 bg-[url('https://i.ibb.co/S4Q6wJqd/profile-Image.jpg')] bg-cover bg-center"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30 backdrop-blur-sm z-0"></div>

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white flex-1 text-center md:text-left flex flex-col-reverse md:flex-row gap-2 md:gap-6"
        >
          <VerticalSocialIcons></VerticalSocialIcons>
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
              Hi, I’m <span className="text-orange-400">Arafat</span>
            </h1>

            <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-6">
              I am{" "}
              <span className="text-orange-400">
                <Typewriter
                  words={[
                    "Frontend Web Developer",
                    "MERN Stack Developer",
                    "Creating Clean & Interactive UIs",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </span>
            </h2>

            <p className="text-slate-300 text-sm md:text-base max-w-xl mb-6 leading-relaxed">
              Web Development Creating dynamic, user-friendly web applications
              with a passion for learning and innovation.
            </p>

            <a
              href="https://drive.google.com/file/d/100fCbn6VLRefm-0kh9p66dkv99WtJvbz/view?usp=sharing"
              target="_blank"
              className="inline-flex items-center gap-1 bg-orange-500 hover:bg-orange-400 text-white font-semibold px-6 py-3 rounded-full transition duration-300"
            >
              Resume <PiReadCvLogoFill />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center"
        >
          <div className="relative w-[288px] h-[346px] mx-auto">
            {/* Animated Glowing Border Only */}
            <motion.div
              className="absolute inset-0 rounded-[32px] border-[10px] border-orange-400 blur-xs opacity-90 z-0"
              animate={{ scale: [1, 1.03, 1] }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "linear",
              }}
            />

            {/* Static Image */}
            <img
              src="https://i.ibb.co/WvMdL5kQ/IMG-5512-removebg-preview.png"
              alt="Arafat"
              className="relative w-full h-full object-cover rounded-[32px] border-4 border-orange-400 shadow-2xl z-10"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;

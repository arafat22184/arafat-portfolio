/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import developerImage from "../assets/undraw_hello_ccwj.svg";

const About = () => {
  return (
    <section
      id="about"
      className="pt-16 md:pt-18 px-4 sm:px-8 md:px-16 bg-slate-950 text-white max-w-7xl mx-auto"
    >
      {/* Heading */}
      <motion.div
        className="text-center mb-4"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-5xl font-bold text-orange-400">
          Who am I?
        </h2>
        <p className="text-slate-400 mt-2 text-base md:text-lg max-w-xl mx-auto">
          Get to know more about me, my journey, and what I love doing.
        </p>
      </motion.div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row items-stretch gap-6 xl:gap-14">
        {/* Developer Image */}
        <motion.div
          className="flex-1 lg:flex-3/8 border-4 border-orange-400 rounded-3xl p-4 bg-slate-900 shadow-lg min-h-[300px] lg:h-auto"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="h-full w-full flex items-center justify-center">
            <img
              src={developerImage}
              alt="Developer Illustration"
              className="object-contain h-full w-full max-h-full max-w-full"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* About Text */}
        <motion.div
          className="flex-1 lg:flex-5/8 bg-gradient-to-br from-slate-800/80 to-slate-900/70 rounded-3xl p-8 text-slate-200 text-lg leading-relaxed space-y-6 shadow-xl backdrop-blur-sm"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p>
            I'm{" "}
            <span className="text-orange-400 font-semibold text-xl">
              Arafat
            </span>
            , a passionate Frontend Web Developer with a strong foundation in{" "}
            <span className="font-semibold text-white">HTML</span>,{" "}
            <span className="font-semibold text-white">CSS</span>,{" "}
            <span className="font-semibold text-white">TailwindCSS</span>, and{" "}
            <span className="font-semibold text-white">JavaScript</span>.
          </p>
          <p>
            I specialize in building responsive and dynamic web applications
            using <span className="font-semibold text-white">React.js</span>. I
            also work with{" "}
            <span className="font-semibold text-white">Firebase</span> and{" "}
            <span className="font-semibold text-white">MongoDB</span> to manage
            backend and databases, and love integrating APIs to bring products
            to life.
          </p>
          <p>
            I thrive in fast-paced, creative environments and continuously seek
            to improve my skills. My mission is to create{" "}
            <span className="text-orange-400 font-semibold">
              efficient, elegant, and engaging
            </span>{" "}
            user experiences.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

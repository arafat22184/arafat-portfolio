/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const SkillCard = ({ skill }) => {
  const [hovered, setHovered] = useState(false);

  const tooltipVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2, ease: "easeOut" },
    },
  };

  return (
    <div
      className="relative flex flex-col items-center group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      tabIndex={0}
    >
      {/* Tooltip */}
      <motion.div
        className="absolute -top-10 bg-slate-800 text-white text-xs sm:text-sm px-3 py-1 rounded-full border border-orange-400 shadow-lg whitespace-nowrap z-50"
        variants={tooltipVariants}
        initial="hidden"
        animate={hovered ? "visible" : "hidden"}
      >
        {skill.name}
      </motion.div>

      {/* Tooltip Arrow */}
      <motion.div
        className="absolute -top-4 w-2 h-2 bg-slate-800 border-l border-b border-orange-400 rotate-45 z-50"
        animate={hovered ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.2 }}
      />

      {/* Tilt Card */}
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.25}
        glareColor="#f97316"
        glarePosition="all"
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        className="w-28 h-28 sm:w-44 sm:h-44 rounded-3xl overflow-hidden bg-slate-900/70 border border-slate-700 shadow-lg cursor-pointer focus:outline-none focus:ring-4 focus:ring-orange-400"
      >
        <motion.div
          className="flex items-center justify-center h-full text-6xl sm:text-7xl select-none relative"
          animate={{ scale: hovered ? 1.1 : 1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {skill.icon}

          {/* Optional: Pulse Glow */}
          <motion.div
            className="absolute inset-0 rounded-3xl border border-orange-400 pointer-events-none"
            animate={hovered ? { opacity: 0.3, scale: 1.05 } : { opacity: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </Tilt>
    </div>
  );
};

export default SkillCard;

"use client";

import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const Kompetens = () => {
  const skillsGroup1 = [
    "HTML",
    "CSS",
    "Tailwind CSS",
    "JavaScript",
    "WCAG",
    "React.js",
    "React Native",
    "Next.js",
  ];

  const skillsGroup2 = [
    "Node.js",
    "Express.js",
    "MySQL",
    "Docker",
    "AWS",
    "Figma",
    "GitHub",
    "Trello",
  ];

  return (
    <div
      id="skills"
      className="w-full min-h-screen flex flex-col justify-center items-center"
    >
      <div className="w-[90%] md:w-[70%] flex flex-col space-y-8">
        <div className="flex flex-col text-center mb-12">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Skills that I have
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-2xl text-gray-600"
          >
            These are the technologies I´ve worked with
          </motion.span>
        </div>

        {/* grupp 1 (går vänster till höger) */}
        <Marquee pauseOnHover gradient={false} speed={50} autoFill>
          {skillsGroup1.map((skill, i) => (
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              key={i}
              className="mx-3 px-3 py-3 rounded-full text-sm md:text-base font-medium text-black transition overflow-hidden"
            >
              {skill}
            </motion.span>
          ))}
        </Marquee>

        {/* grupp 2 (höger till vänster) */}
        <Marquee
          pauseOnHover
          gradient={false}
          speed={50}
          direction="right"
          autoFill
        >
          {skillsGroup2.map((skill, i) => (
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              key={i}
              className="mx-3 px-5 py-3 rounded-3xl text-sm md:text-base font-medium text-black transition overflow-hidden"
            >
              {skill}
            </motion.span>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Kompetens;

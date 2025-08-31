"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      id="about"
      className="w-full px-[12%] py-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h3
        className="text-center mb-3 mt-6 text-lg"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Introduction
      </motion.h3>
      <motion.h2
        className="text-center text-5xl mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        About me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20 my-20"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-64 sm:w-80 rounded-3xl max-w-none"
        >
          <Image
            src="/about-image.jpg"
            alt="Profile"
            width={320}
            height={320}
            className="w-full h-auto rounded-3xl object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex-1 flex flex-col justify-start"
        >
          <p className="mt-4 text-lg max-w-2xl mx-auto lg:mx-0">
            I’m a frontend developer creating web and mobile applications
            <br /> with some backend experience. I’m currently studying at Chas
            Academy in Stockholm to further develop my skills and constantly
            learn new technologies. I enjoy solving problems and work well in a
            team.
          </p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap items-center gap-6 mt-6"
          >
            <h2 className="text-xl w-full">Tech Stack |</h2>
            <Image src="/html-5.png" alt="HTML5" width={30} height={30} />
            <Image src="/css-3.png" alt="CSS3" width={30} height={30} />
            <Image src="/js.png" alt="JavaScript" width={30} height={30} />
            <Image src="/react.png" alt="React" width={30} height={30} />
            <Image
              src="/tailwindcss.svg"
              alt="TailwindCSS"
              width={30}
              height={30}
            />
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;

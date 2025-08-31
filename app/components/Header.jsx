"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Image
          src="/profil.jpg"
          alt=""
          width={100}
          height={100}
          className="rounded-full w-32"
        />
      </motion.div>

      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex gap-2 text-3xl sm:text-6xl lg:text-[66px]"
      >
        Frontend developer{" "}
        <Image src="/hand-icon.png" alt="" width={50} height={30} />
      </motion.h1>
      <motion.p
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="max-w-2xl mx-auto text-center"
      >
        Hi! My name is Ali Yusuf. A passionate frontend developer <br /> based
        in Stockholm, Sweden.
        <span className="inline-block ml-1">
          <Image src="/pin.png" alt="pin" width={16} height={16} />
        </span>
      </motion.p>

      <div className="flex justify-start gap-4">
        <motion.a
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          href="https://www.linkedin.com/in/ali-yusuf-839992186/"
          className="transition-transform hover:scale-110"
        >
          <Image src="/linkedin.png" alt="" width={30} height={30} />
        </motion.a>
        <motion.a
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          href="https://github.com/Alichas1"
          className="transition-transform hover:scale-110"
        >
          <Image src="/github.png" alt="" width={30} height={30} />
        </motion.a>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2"
        >
          contact me
          <Image
            src="/right-arrow-white.png"
            alt=""
            width={100}
            height={50}
            className="w-4"
          />
        </motion.a>
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="/Ali-resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
        >
          my resume
          <Image
            src="/download-icon.png"
            alt=""
            width={100}
            height={50}
            className="w-4"
          />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;

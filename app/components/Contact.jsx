"use client";

import { motion } from "framer-motion";
import { FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20 flex flex-col items-center pb-24"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center text-lg mb-2"
      >
        Connect with me
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center text-5xl"
      >
        Get in Touch
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12"
      >
        I'd love to hear from you! Click the circle below to open your email client
        and send me a message.
      </motion.p>

      {/* Circular Email Button */}
      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100, delay: 0.9 }}
        viewport={{ once: true }}
        href="mailto:Ali.adam.y@hotmail.com"
        className="w-48 h-48 flex flex-col justify-center items-center gap-3 rounded-full 
                   bg-gradient-to-tr from-blue-600 via-purple-500 to-pink-500 
                   dark:from-fuchsia-600 dark:to-cyan-500 text-white 
                   shadow-lg transition-all duration-300 cursor-pointer mx-auto
                   hover:-translate-y-2 hover:scale-[1.05] hover:shadow-[0_15px_40px_-5px_rgba(0,0,0,0.3)] 
                   dark:hover:shadow-[0_15px_40px_-5px_rgba(255,255,255,0.2)]"
      >
        <FaEnvelope className="text-4xl" />
        <span className="font-semibold text-lg tracking-wide">Email Me</span>
      </motion.a>
    </motion.div>
  );
};

export default Contact;

"use client";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Todo List",
    description:
      "A Todolist built with Vite, React.js, Tailwindcss and CRUD(create, read, update, delete).",
    image: "/todo.jpg",
    tech: ["React.js", "Tailwind CSS", "Vite.js"],
    codeLink: "https://github.com/Alichas1/Todo-List",
    liveLink: "https://todo-list-lake-omega-84.vercel.app/",
  },
  {
    title: "CartShop",
    description:
      "RandomCartShop en React-webbutik med Redux, där användare kan bläddra produkter, se detaljer och hantera kundvagnen i realtid.",
    image: "/cart.jpg",
    tech: [
      "React",
      "React Router",
      "Redux Toolkit",
      "Tailwind CSS",
      "JavaScript",
      "HTML",
      "CSS",
    ],

    codeLink: "https://github.com/Alichas1/Shopping-cart",
    liveLink: "https://shopping-cart-seven-zeta-47.vercel.app/",
  },
  {
    title: "Movie App",
    description:
      "I practiced building a movie app with search and favorite functionality, displaying movie details on hover.",
    image: "/pic.jpg",
    tech: ["React", "Fetch API", "CSS", "LocalStorage", "OMDb API"],
    codeLink: "https://github.com/Alichas1/Movie-app",
    liveLink: "https://movie-app-roan-three-48.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="w-full flex flex-col items-center py-20">
      {/* Huvudrubrik */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-3xl md:text-4xl font-bold mb-6 text-center"
      >
        Projects
      </motion.h2>

      <div className="flex flex-col space-y-24 w-[90%] md:w-[80%]">
        {projects.map((project, i) => (
          <div
            key={i}
            className={`flex flex-col md:flex-row items-center md:space-x-12 
              ${i % 2 === 1 ? "md:flex-row-reverse md:space-x-reverse" : ""}`}
          >
            {/* Bild */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2 flex justify-center bg-none"
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-xl w-96 object-contain hover:scale-105 transition-transform duration-300"
              />
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2 flex flex-col justify-center space-y-4 mt-6 md:mt-0"
            >
              <h3 className="text-2xl font-semibold">{project.title}</h3>

              <p className="text-gray-600 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <motion.div
                initial={{ x: 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-wrap gap-2"
              >
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-black border text-white text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>

              {/* Knappar */}
              <div className="flex space-x-4 mt-4">
                <motion.a
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.3 }}
                  viewport={{ once: true }}
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 border border-black text-black rounded-lg hover:bg-black hover:text-white transition"
                >
                  <FaGithub /> Code
                </motion.a>

                <motion.a
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.5 }}
                  viewport={{ once: true }}
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                >
                  <FaExternalLinkAlt /> Live Demo
                </motion.a>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}

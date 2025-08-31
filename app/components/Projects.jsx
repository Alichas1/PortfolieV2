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
    title: "Pokemon Cards",
    description:
      "Vi har skapat en Pokémon-samling där man kan samla sina favoritkort. Projektet ger oss träning i global state-hantering med Redux eller Context API, att hämta och visa data från ett externt API samt att implementera bokmärkesfunktionalitet.",
    image: "https://m.media-amazon.com/images/I/81U+9QM-aqL._AC_SL1500_.jpg",
    tech: ["Next.js", "React", "PokemonAPI", "Context API", " Tailwindcss"],
    codeLink: "https://github.com/username/chicken-crossing",
    liveLink: "https://pokemon-one-bay.vercel.app/",
  },
  {
    title: "Task Manager App",
    description:
      "A web app to create, edit, and track tasks with user authentication and real-time updates.",
    image:
      "https://media.istockphoto.com/id/506176142/sv/foto/vintage-radio.jpg?s=612x612&w=0&k=20&c=3ujqs3-qRrEaaStoKWFwf9IwWlnsS8cmsE0puqb4Pb0=",
    tech: ["Javascript", "HTML", "css"],
    codeLink: "https://github.com/Alichas1/Radioplayer",
    liveLink: "https://radioplayer-tau.vercel.app/",
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

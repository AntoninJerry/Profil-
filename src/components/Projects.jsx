import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import gestionImage from '../assets/img/gestion.png';
import didi from '../assets/img/didi.png'
import doo from '../assets/img/do.png'
import reggi from '../assets/img/reggi.png'
import treez from '../assets/img/treez.png'

const projects = [
  {
    title: "Docteur K",
    description: "Docteur K is the leading medical directory website where people from all over the US can find the nearest medical specialist that meets their healthcare needs.",
    image: gestionImage,
    techno: "React js, Node js , Tailwind Css",
    link: "https://github.com/AntoninJerry/Docteur-K/tree/master",
    category: "web"
  },
  {
    title: "REGGI - Boom Boom Ciao ♫ Befiana Music ♫",
    description: "Description of the video project goes here. It can be a brief overview of what the project entails.",
    image: reggi,
    techno: "Adobe premier pro, Adobe After Effect.",
    link: "https://www.youtube.com/watch?v=Vu8GuMTk4qw",
    category: "video"
  },
  {
    title: "Roean ft G-Gun -Suzanna- [official video 2020]",
    description: "Description of the video project goes here. It can be a brief overview of what the project entails.",
    image: doo,
    techno: "Adobe premier pro, Adobe After Effect.",
    link: "https://www.youtube.com/watch?v=XDO3L9fzXHc",
    category: "video"
  },
  {
    title: "TREEZEY_ Kara Ano (Officiel clip)",
    description: "Description of the video project goes here. It can be a brief overview of what the project entails.",
    image: treez,
    techno: "Adobe premier pro, Adobe After Effect.",
    link: "https://www.youtube.com/watch?v=OmUOWIc6K1w",
    category: "video"
  },
  {
    title: "Diyd Jam ft Charii bi Ankilano (Official video 2019)",
    description: "Description of the video project goes here. It can be a brief overview of what the project entails.",
    image: didi,
    techno: "Adobe premier pro, Adobe After Effect.", 
    link: "https://www.youtube.com/watch?v=sowVrhGG7_c",
    category: "video"
  }
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="py-12 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-semibold mt-10 mb-6 text-center">Projects</h2>
        <p className="text-center mb-10">Things I've built so far</p>
      
        <div className="flex justify-center mb-10">
          <button onClick={() => setSelectedCategory("all")} className={`mx-2 px-4 py-2 rounded ${selectedCategory === "all" ? "bg-gray-700" : "bg-gray-500"}`}>All</button>
          <button onClick={() => setSelectedCategory("web")} className={`mx-2 px-4 py-2 rounded ${selectedCategory === "web" ? "bg-gray-700" : "bg-gray-500"}`}>Web Projects</button>
          <button onClick={() => setSelectedCategory("design")} className={`mx-2 px-4 py-2 rounded ${selectedCategory === "design" ? "bg-gray-700" : "bg-gray-500"}`}>Design Projects</button>
          <button onClick={() => setSelectedCategory("video")} className={`mx-2 px-4 py-2 rounded ${selectedCategory === "video" ? "bg-gray-700" : "bg-gray-500"}`}>Video Projects</button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative rounded-lg overflow-hidden shadow-lg bg-gray-800"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                <p className="text-sm mb-4">{project.description}</p>
                <p className="text-xs text-gray-400 mb-4">{project.techno}</p>
              </div>
              <motion.div
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-bold opacity-0 hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <span className="flex items-center">
                  Visit the project
                  <FaArrowRight className="ml-2" />
                </span>
              </motion.div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

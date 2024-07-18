import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa6';
import profil from '../assets/img/profil2.png';
import cv from '../assets/cv.pdf';
import { TypeAnimation } from 'react-type-animation';
import './Style/Home.css'; // Assurez-vous de créer et d'importer ce fichier CSS

const Home = () => {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center text-white p-10">
            <div className="border-glow  flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between w-full max-w-4xl p-20 mt-20">
                <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
                    <h2 className="text-5xl mb-2">Hello, I'm <span className='font-semibold'>Antonin Jerry!</span></h2>
                    <p className="max-w-md mb-5 text-2xl font-bold">
                        I'm a
                        <TypeAnimation
                            sequence={[
                                " Web Developer",
                                1000,
                                " UI/UX Designer",
                                1000,
                                " Stutend IA & DataScience",
                                1000,
                                " Video Editor",
                                1000,
                            ]}
                            wrapper="span"
                            cursor={true}
                            repeat={Infinity}
                            speed={4}
                            style={{ transition: 'opacity 1s ease-in-out' }}
                            className="text-gradient"
                        />
                    </p>
                    <h3 className="text-2xl mb-4 text-gradient">I've built this website with React.js & Tailwind.</h3>
                    <a href={cv} download="AntoninJerry_CV.pdf" className="flex items-center space-x-2 bg-[#4c00ff] text-white px-2 py-2 rounded-md hover:bg-[#5c16ff]">
                        <motion.div
                            className="flex items-center space-x-2"
                            whileHover={{ scale: 1.05 }}
                        >
                            <motion.span>Download CV</motion.span>
                            <FaDownload />
                        </motion.div>
                    </a>
                    <div className="flex space-x-8 mt-4">
                        <a href="https://github.com/AntoninJerry"><FaGithub size={24} className="text-2xl hover:text-gray-400" /></a>
                        <a href="https://www.linkedin.com/in/misy-antonin-jerry-853667278?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedin size={24} className="text-2xl hover:text-gray-400" /></a>
                        <a href="https://wa.me/+261322411494"><FaWhatsapp size={24} className="text-2xl hover:text-gray-400" /></a>
                    </div>
                </div>
                <div className="lg:w-1/2 flex justify-start lg:justify-end mt-8 lg:mt-0">
                    <motion.img
                        src={profil}
                        alt="Profile"
                        className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-md lg:w-80 lg:h-80 object-cover object-bottom"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2 }}
                    />
                </div>

            </div>
        </section>
    );
};

export default Home;

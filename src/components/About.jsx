import React, { useEffect } from 'react';
import fl from '../assets/img/flstudio.png';
import py from '../assets/img/Py.png';
import { motion } from 'framer-motion';
import { FaCode, FaMobileAlt, FaPaintBrush, FaChalkboardTeacher, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaDatabase, FaBootstrap } from 'react-icons/fa';
import { SiAdobeaftereffects, SiAdobephotoshop, SiAdobepremierepro, SiMongodb, SiMysql } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <section className="min-h-screen  text-white p-10 flex flex-col items-center justify-center">
            <h2 className="text-4xl font-bold mb-4">ABOUT ME</h2>
            <p className="text-center text-lg font-medium shadow-md max-w-2xl mb-8">
                Hello there! I'm thrilled to welcome you to my portfolio. I'm a young and passionate student  in computer science, with a focus on web development during my three years of undergraduate studies and data science and artificial intelligence during my two years of master's. My creativity shines through my background in amateur audiovisual projects, including video editing, commercial spots, and film subtitling. My journey from a hobbyist in audiovisual arts to a tech-savvy developer and AI enthusiast reflects my commitment to blending creativity with technology.
            </p>
            <h3 className="text-3xl font-semibold mb-6">What I do!</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
                <motion.div
                    className="p-6 bg-orange-600 rounded-lg shadow-lg flex items-center space-x-4"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <FaCode size={100} className="text-4xl" />
                    <div data-aos="zoom-in-right">
                        <h4 className="text-xl font-bold">Web Development</h4>
                        <p className="mt-2">
                            As a developer, I find myself most captivated by the power and flexibility of React.js. I’m always eager to dive into new projects that leverage React and discover innovative ways to create fast, scalable, and user-friendly applications.
                        </p>
                    </div>
                </motion.div>
                <motion.div
                    className="p-6 bg-orange-600 rounded-lg shadow-lg flex items-center space-x-4"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <FaMobileAlt size={100} className="text-4xl" />
                    <div data-aos="zoom-in-left">
                        <h4 className="text-xl font-bold">App Development</h4>
                        <p className="mt-2">
                            With a focus on user-centric design and cutting-edge technologies, I thrive on building intuitive and efficient apps that make a positive impact on people’s lives. Let’s turn ideas into reality and shape the future together.
                        </p>
                    </div>
                </motion.div>
                <motion.div
                    className="p-6 bg-orange-600 rounded-lg shadow-lg flex items-center space-x-4"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <FaPaintBrush size={100} className="text-4xl" />
                    <div data-aos="zoom-in-right">
                        <h4 className="text-xl font-bold">UI/UX Designing</h4>
                        <p className="mt-2">
                            Crafting visually appealing and intuitive user interfaces that offer a delightful user experience is something I’m truly fanatic about.
                        </p>
                    </div>
                </motion.div>
                <motion.div
                    className="p-6 bg-orange-600 rounded-lg shadow-lg flex items-center space-x-4"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <FaChalkboardTeacher size={100} className="text-4xl" />
                    <div data-aos="zoom-in-left">
                        <h4 className="text-xl font-bold">Video Editing</h4>
                        <p className="mt-2">
                            I have been deeply involved in video editing, creating various projects like promotional videos, music videos, tiktok videos and Youtube videos...
                        </p>
                    </div>
                </motion.div>
            </div>
            <h3 className="text-4xl font-semibold mt-10 mb-6">Skills</h3>
            <h3 className="text-xl font-medium mt-2 mb-6 ">Front-end</h3>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-4xl">
                <div data-aos="zoom-in" className="flex flex-col items-center">
                    <FaHtml5 size={50} className="text-orange-500" />
                    <span className="mt-2">HTML5</span>
                </div>
                <div data-aos="zoom-in" className="flex flex-col items-center">
                    <FaCss3Alt size={50} className="text-blue-500" />
                    <span className="mt-2">CSS3</span>
                </div>
                <div data-aos="zoom-in" className="flex flex-col items-center">
                    <FaReact size={50} className="text-blue-400" />
                    <span className="mt-2">React</span>
                </div>
                <div data-aos="zoom-in" className="flex flex-col items-center">
                    <FaBootstrap size={50} className="text-purple-500" />
                    <span className="mt-2">Bootstrap</span>
                </div>
                <div data-aos="zoom-in" className="flex flex-col items-center">
                    <RiTailwindCssFill size={50} className="text-blue-500" />
                    <span className="mt-2">Tailwind Css</span>
                </div>
            </div>
            <h3 className="text-xl font-medium mt-2 mb-6">Back-end</h3>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 max-w-4xl">
                <div data-aos="zoom-in" className="flex flex-col items-center">
                    <FaNodeJs size={50} className="text-green-500" />
                    <span className="mt-2">Node.js</span>
                </div>
                <div data-aos="zoom-in" className="flex flex-col items-center">
                    <SiMysql size={50} className="text-orange-400" />
                    <span className="mt-2">MySQL</span>
                </div>
                <div data-aos="zoom-in" className="flex flex-col items-center">
                    <img src={py} className='w-12' alt="" />
                    <span className="mt-2">Python</span>
                </div>
                <div data-aos="zoom-in" className="flex flex-col items-center">
                    <SiMongodb size={50} className="text-green-400" />
                    <span className="mt-2">Mongodb</span>
                </div>
            </div>
            <h3 className="text-xl font-medium mt-2 mb-6">Multimédia</h3>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 max-w-4xl">
                <div data-aos="zoom-in" className="flex flex-col items-center">
                    <SiAdobephotoshop size={40} className="text-blue-800" />
                    <span className="mt-2">Photoshop</span>
                </div>
                <div data-aos="zoom-in" className="flex flex-col items-center">
                    <SiAdobepremierepro size={40} className="text-violet-800" />
                    <span className="mt-2">Premiere Pro</span>
                </div>
                <div data-aos="zoom-in" className="flex flex-col items-center">
                    <SiAdobeaftereffects size={40} className="text-violet-800" />
                    <span className="mt-2">After Effects</span>
                </div>
                <div data-aos="zoom-in" className="flex flex-col items-center">
                    <img src={fl} className='w-10' alt="" />
                    <span className="mt-2">FL Studio</span>
                </div>
            </div>
        </section>
    );
};

export default About;

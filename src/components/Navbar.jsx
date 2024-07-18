import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { AiFillSun } from 'react-icons/ai';
import { FaBars, FaXmark } from 'react-icons/fa6';
import { motion } from 'framer-motion';

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navItems = [
        { link: 'Home', path: 'home' },
        { link: 'About', path: 'about' },
        { link: 'Projects', path: 'projects' },
        { link: 'Contact', path: 'contact' },
    ];

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isMenuOpen]);

    return (
        <>
            <nav className='bg-gray-800 shadow-xl md:px-14 p-6 max-w-screen-3xl mx-auto text-white z-[10001] fixed top-0 right-0 left-0'>
                <div className='text-base container mx-auto flex justify-between items-center font-medium'>
                    <div className='flex space-x-28 items-center mx-auto cursor-pointer'>
                        <Link
                            to='home'
                            smooth={true}
                            duration={500}
                            className='text-xl font-semibold flex items-center space-x-3 text-white'
                        >
                            <span className='font-semibold'>Antonin.J</span>
                        </Link>
                        <ul className='md:flex space-x-12 hidden'>
                            {navItems.map(({ link, path }) => (
                                <Link
                                    to={path}
                                    smooth={true}
                                    duration={500}
                                    className='block transition-all'
                                    activeClass="active"
                                    spy={true}
                                    key={link}
                                >
                                    {link}
                                </Link>
                            ))}
                        </ul>
                        <div className='space-x-14 hidden md:flex items-center'>
                            <div className='hidden lg:flex items-center'>
                                <AiFillSun size={20} />
                            </div>
                        </div>
                    </div>
                    {/* Mobile device */}
                    <div className="md:hidden ">
                        <button
                            onClick={toggleMenu}
                            className="text-white focus:outline-none focus:text-gray-300 mt-2 cursor-pointer"
                        >
                            <motion.div
                                initial={{ rotate: 0, opacity: 1 }}
                                animate={{ rotate: isMenuOpen ? 180 : 0, opacity: isMenuOpen ? 0 : 1 }}
                                transition={{ duration: 0.3 }}
                                style={{ position: isMenuOpen ? 'absolute' : 'relative' }}
                            >
                                <FaBars className="w-6 h-6 text-white" />
                            </motion.div>
                            <motion.div
                                initial={{ rotate: 180, opacity: 0 }}
                                animate={{ rotate: isMenuOpen ? 0 : 180, opacity: isMenuOpen ? 1 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <FaXmark className="w-6 h-6 text-white" />
                            </motion.div>
                        </button>
                    </div>
                </div>
            </nav>
            <div
                className={`pt-24 pb-4 text-center space-y-2 bg-gray-800  fixed top-0 right-0 left-0 z-[10000] transform shadow-sm transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'
                    }`}
            >
                {navItems.map(({ link, path }) => (
                    <Link
                        onClick={toggleMenu}
                        to={path}
                        smooth={true}
                        duration={500}
                        className='text-white block transition-all text-lg border-gray-600'
                        activeClass="active"
                        spy={true}
                        key={link}
                    >
                        {link}
                    </Link>
                ))}
            </div>
            <div
                className={`fixed top-0 left-0 w-full h-full bg-black transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'
                    }`}
            />
        </>
    );
};

export default Nav;

import React, { useEffect, useState } from 'react';
import { FaWhatsapp, FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaPhone, FaCopyright } from 'react-icons/fa';
import AOS from 'aos';
import gmail from '../assets/img/gmail.png';
import 'aos/dist/aos.css';

const Contact = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !email || !message) {
            setError('Please fill out all fields.');
            return;
        }

        setError('');

        const mailtoLink = `mailto:misyantoninjerry@gmail.com?subject=Message from ${name}&body=${message}`;
        window.location.href = mailtoLink;
    };

    return (
        <div className="py-12  text-white flex flex-col items-center justify-center min-h-screen">
            <div className="bg-black p-8 rounded-lg shadow-lg w-full max-w-4xl mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div data-aos="fade-right" className="space-y-8">
                        <a data-aos="zoom-in" href="https://wa.me/+261322411494" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 bg-white text-black p-4 rounded-lg shadow-md transform hover:-translate-y-2">
                            <FaWhatsapp className="text-green-500 w-8 h-8" />
                            <div>
                                <p className="font-bold">WhatsApp</p>
                                <p>Contact me on WhatsApp</p>
                            </div>
                        </a>
                        <a data-aos="zoom-in" href="mailto:misyantoninjerry@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 bg-white text-black p-4 rounded-lg shadow-md">
                            <img src={gmail} className='w-8' alt="gmail" />
                            <div>
                                <p className="font-bold">E-mail</p>
                                <p>Send me an email</p>
                            </div>
                        </a>
                        <a data-aos="zoom-in" href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 bg-white text-black p-4 rounded-lg shadow-md">
                            <FaLinkedin className="text-blue-700 w-8 h-8" />
                            <div>
                                <p className="font-bold">LinkedIn</p>
                                <p>Connect with me on LinkedIn</p>
                            </div>
                        </a>
                        <a data-aos="zoom-in" href="https://github.com/AntoninJerry" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 bg-white text-black p-4 rounded-lg shadow-md">
                            <FaGithub className="text-gray-900 w-8 h-8" />
                            <div>
                                <p className="font-bold">GitHub</p>
                                <p>Check out my projects on GitHub</p>
                            </div>
                        </a>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold mb-6 text-center md:text-left">Let's talk with Me !</h2>
                        <form onSubmit={handleSubmit} data-aos="fade-left" className="space-y-4">
                            {error && <p className="text-red-500">{error}</p>}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium">Enter your name or company name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="mt-1 p-2 w-full rounded-md bg-white text-black"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium">Enter a valid email address</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="mt-1 p-2 w-full rounded-md bg-white text-black"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium">Your Message</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="mt-1 p-2 w-full rounded-md bg-white text-black"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                ></textarea>
                            </div>
                            <div className="text-center md:text-left">
                                <button type="submit" className="px-4 py-2 bg-blue-700 text-white rounded-md">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <footer className="w-full bg-black py-8 text-white mt-20 shadow-lg">
                <div className="flex flex-col md:flex-row items-center justify-between max-w-4xl mx-auto px-4">
                    <div className="flex items-center space-x-4">
                        <FaMapMarkerAlt className="text-white" />
                        <span>Madagascar</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <FaPhone className="text-white" />
                        <span>+261 32 24 11 494</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <FaEnvelope className="text-white" />
                        <span>misyantoninjerry@gmail.com</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <FaCopyright className="text-white" />
                        <span>2024 Antonin Jerry</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Contact;

import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Footer.css'; // Ensure the CSS path is correctly specified
import Logo from '../images/logo2.png';

const Footer = () => {
    return (
        <footer className="footer-bg-main">
            <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
            <img src={Logo} alt="Siddhesh Tours & Travels Logo" className="w-25 h-25 rounded-full" />
            <span className="ml-3 text-xl">Siddhesh Tours & Travels</span>
        </a>
                </div>
                <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Quick Links</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <Link className="text-white hover:text-gray-300">Contact Us</Link>
                            </li>
                            <li>
                                <Link className="text-white hover:text-gray-300">About Us</Link>
                            </li>
                            <li>
                                <Link className="text-white hover:text-gray-300">Gallery</Link>
                            </li>
                            <li>
                                <Link className="text-white hover:text-gray-300">Home Page</Link>
                            </li>
                            <li>
                                <Link to="/ether" className="text-white hover:text-gray-300">What is ether</Link>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Policies</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <Link className="text-white hover:text-gray-300">Terms of Use</Link>
                            </li>
                            <li>
                                <Link className="text-white hover:text-gray-300">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link className="text-white hover:text-gray-300">Payment Policy</Link>
                            </li>
                        </nav>
                    </div>
                    {/* Add additional columns as needed */}
                </div>
                {/* Contact Information */}
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Contact Us</h2>
                    <nav className="list-none mb-10">
                        <li>
                            <div className="flex items-center">
                                <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 mr-2 location-icon footer-svg-icon">
                                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                </svg>
                                <a href="#" className="text-white">Sid Tours & Travels , Bhusawal</a>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 mr-2 email-icon footer-svg-icon">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h2v2h-2zm4.4-4.4c-.74-.73-2.05-1.2-3.4-1.2s-2.66.47-3.4 1.2c-.37.37-.6.87-.6 1.4s.23 1.03.6 1.4l.94.94-1.42 1.42-.94-.94c-.78-.78-1.22-1.8-1.22-2.86s.44-2.08 1.22-2.86c.78-.78 1.8-1.22 2.86-1.22s2.08.44 2.86 1.22c.78.78 1.22 1.8 1.22 2.86s-.44 2.08-1.22 2.86l-.94.94 1.42 1.42.94-.94c.37-.37.6-.87.6-1.4s-.23-1.03-.6-1.4z" />
                                </svg>
                                <a href="mailto:contact@siddheshtours.com" className="text-white">contact@siddheshtours.com</a>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 mr-2 phone-icon footer-svg-icon">
                                    <path d="M3 18v2h18v-2H3zm13.75-9.12v.01l-2.07 2.44a6.06 6.06 0 01-1.5-.92L8.45 15H7V9h1.45l3.73 4.46c.24.29.51.55.81.79V8.88c0-.24.09-.46.27-.63.17-.17.39-.26.63-.26h1.53c.24 0 .46.09.63.26.17.17.26.39.26.63z" />
                                </svg>
                                <a href="tel:+917821016088" className="text-white">+91 7821016088</a>
                            </div>
                        </li>
                    </nav>
                </div>
            </div>
            <div className="bg-gray-800 footer-bg-bottom">
                <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                    <p className="text-white text-sm text-center sm:text-left">© 2024 Siddhesh Tours & Travels</p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                        <a className="text-white">
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                        </a>
                        <a className="ml-3 text-white">
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                            </svg>
                        </a>
                        <a className="ml-3 text-white">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg>
                        </a>
                        <a className="ml-3 text-white">
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                                <path stroke="none" d="M16 8a6 6 0 106 6 6 6 0 00-6-6zm0 10a4 4 0 110-8 4 4 0 010 8zm2-7h-4V7h4zm0 4h-4v-2h4z"></path>
                            </svg>
                        </a>
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

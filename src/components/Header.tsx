import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaFacebook, FaInstagram, FaMoon, FaSun } from 'react-icons/fa';

const Header: React.FC = () => {
  // State for managing the theme (light/dark)
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // Toggle theme between light and dark
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Persist theme preference in local storage
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  return (
    <header className={`p-4 sm:p-8 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        {/* Logo */}
        <h1 className={`text-2xl sm:text-3xl font-bold font-serif ${isDarkMode ? 'text-white' : 'text-black'}`}>
          SM
        </h1>
        
        {/* Navigation Links */}
        <nav className="flex-grow sm:flex sm:justify-center">
          <ul className={`flex flex-col sm:flex-row space-y-2 ml-[120px] sm:space-y-0 sm:space-x-6 items-center gap-4 font-serif ${isDarkMode ? 'text-white' : 'text-black'}`}>
            <li>
              <a href="/home" className="hover:underline">Home</a>
            </li>
            <li>
              <a href="/about" className="hover:underline">About</a>
            </li>
            <li>
              <a href="/projects" className="hover:underline">Projects</a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">Contact</a>
            </li>
          </ul>
        </nav>

        {/* Social Media & Theme Toggle */}
        <div className="flex space-x-4 mt-4 sm:mt-0 items-center">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleDarkMode}
            className="relative w-14 h-8 bg-gray-300 dark:bg-gray-600 rounded-full focus:outline-none transition-colors duration-300 flex items-center"
          >
            <span
              className={`absolute left-1 transition-transform duration-300 transform ${isDarkMode ? 'translate-x-6' : 'translate-x-0'}`}
            >
              {isDarkMode ? <FaSun size={20} className="text-yellow-400" /> : <FaMoon size={20} className="text-gray-500" />}
            </span>
          </button>

          {/* Social Icons */}
          <a href="https://www.linkedin.com/in/sahil-mohite-a39957235/" className={`${isDarkMode ? 'text-white' : 'text-black'} hover:text-blue-600`}>
            <FaLinkedin size={24} />
          </a>
          <a href="#" className={`${isDarkMode ? 'text-white' : 'text-black'} hover:text-blue-600`}>
            <FaFacebook size={24} />
          </a>
          <a href="https://www.instagram.com/sahil_mohite26" className={`${isDarkMode ? 'text-white' : 'text-black'} hover:text-pink-600`}>
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

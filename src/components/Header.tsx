import React, { useEffect, useRef, useState } from 'react';
import { FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import gsap from 'gsap';

const Header: React.FC = () => {
  // State for managing the background color of the "Buy Me Coffee" link
  const [coffeeLinkBg, setCoffeeLinkBg] = useState<string>('bg-yellow-300');

  // Refs for navigation links, social media icons, and logo
  const navRef = useRef<HTMLUListElement>(null);
  const iconsRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null); // Change to div for the logo

  // Handle click on the "Buy Me Coffee" link
  const handleCoffeeLinkClick = () => {
    setCoffeeLinkBg('bg-white'); // Change the background color to white
  };

  // Use effect to trigger animations on component mount
  useEffect(() => {
    if (logoRef.current) {
      gsap.fromTo(logoRef.current, 
        { opacity: 0, y: -20 }, 
        { opacity: 1, y: 0, duration: 0.5 }
      );
    }

    if (navRef.current) {
      gsap.fromTo(navRef.current.children, 
        { opacity: 0, y: -20 }, 
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.5, delay: 0.1 }
      );
    }

    if (iconsRef.current) {
      gsap.fromTo(iconsRef.current.children, 
        { opacity: 0, y: -20 }, 
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.5, delay: 0.2 }
      );
    }
  }, []);

  return (
    <header className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 p-4 sm:p-8">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        {/* Logo with white border */}
        <div 
          ref={logoRef} 
          className="p-2 ml-24 border-2 border-white mt-3 flex justify-center items-center"
        >
          <h1 className="text-1xl sm:text-1xl font-bold font-serif text-white">
            SM
          </h1>
        </div>

        {/* Navigation Links */}
        <nav className="flex-grow sm:flex sm:justify-center ml-[-170px]">
          <ul ref={navRef} className="flex flex-col sm:flex-row space-y-2 ml-[120px] sm:space-y-0 sm:space-x-8 items-center gap-2 font-serif text-white">
            <li>
              <a 
                href="/home" 
                className="text-sm sm:text-base transform transition-transform duration-300 opacity-80 hover:opacity-100 hover:scale-125"
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="/about" 
                className="text-sm sm:text-base transform transition-transform duration-300 opacity-80 hover:opacity-100 hover:scale-125"
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="/projects" 
                className="text-sm sm:text-base transform transition-transform duration-300 opacity-80 hover:opacity-100 hover:scale-125"
              >
                Projects
              </a>
            </li>
            <li>
              <a 
                href="/contact" 
                className="text-sm sm:text-base transform transition-transform duration-300 opacity-80 hover:opacity-100 hover:scale-125"
              >
                Contact
              </a>
            </li>
            <li>
              <a 
                href="/buy-me-a-coffee" 
                className={`hover:underline ${coffeeLinkBg} text-black p-1 text-sm rounded-lg`} 
                onClick={handleCoffeeLinkClick}
              >
                Buy Me Coffee
              </a>
            </li>
          </ul>
        </nav>

        {/* Social Media Icons */}
        <div ref={iconsRef} className="flex space-x-2 mt-4 sm:mt-0 items-center">
          <a href="https://www.linkedin.com/in/sahil-mohite-a39957235/" className="text-white hover:text-blue-600">
            <FaLinkedin size={20} />
          </a>
          <a href="#" className="text-white hover:text-blue-600">
            <FaFacebook size={20} />
          </a>
          <a href="https://www.instagram.com/sahil_mohite26" className="text-white hover:text-pink-600">
            <FaInstagram size={20} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

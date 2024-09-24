import React from 'react';
import { FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';


const Header: React.FC = () => {
  return (
    <header className="bg-white text-white p-8">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold text-black font-serif">SM</h1>
        <nav className="flex-grow">
          <ul className="flex justify-center space-x-4 items-center  gap-10 font-serif  text-black">
            <li>
              <a href="/home" className="hover:underline ">Home</a>
            </li>
            <li>
              <a href="/about" className="hover:underline ">About</a>
            </li>
            <li>
              <a href="#" className="hover:underline ">Projects</a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="flex space-x-4">
          <a href="https://www.linkedin.com/in/sahil-mohite-a39957235/" className="text-black hover:text-blue-600">
            <FaLinkedin size={24} />
          </a>
          <a href="#" className="text-black hover:text-blue-600">
            <FaFacebook size={24} />
          </a>
          <a href="https://www.instagram.com/sahil_mohite26" className="text-black hover:text-pink-600">
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

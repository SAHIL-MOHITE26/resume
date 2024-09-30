import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import image1 from '../assets/images/my photo.jpg'; 

const BackgroundSection: React.FC = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/contact"); 
  };

  // State for managing animation delays
  const [isTextVisible, setTextVisible] = useState(false);
  const [isSubTextVisible, setSubTextVisible] = useState(false);
  const [isButtonVisible, setButtonVisible] = useState(false);
  const [isBgVisible, setBgVisible] = useState(false);  // State for background visibility

  // Trigger animations with slight delays
  useEffect(() => {
    setTimeout(() => setBgVisible(true), 200);         // Background fades in first
    setTimeout(() => setTextVisible(true), 500);       // Main text after background
    setTimeout(() => setSubTextVisible(true), 1000);   // Subtext after main text
    setTimeout(() => setButtonVisible(true), 1500);    // Button last
  }, []);

  return (
    <div
      className={`h-screen bg-fixed bg-cover transition-opacity duration-1000 ease-in-out ${isBgVisible ? 'opacity-100' : 'opacity-0'}`} // Fade-in for background image
      style={{
        backgroundImage: `url(${image1})`, 
        backgroundPosition: 'center 1%', 
      }}
    >
      <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-50">
        {/* Main Title Animation */}
        <h2 
          className={`text-white text-5xl sm:text-6xl font-serif font-bold tracking-wide text-center transform transition-all duration-1000 ${
            isTextVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`}
        >
          Sahil Mohite
        </h2>

        {/* Subtext Animation */}
        <h1 
          className={`text-white text-lg sm:text-xl font-serif text-center mt-1 transform transition-all duration-1000 ${
            isSubTextVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
          React JS | Front-End | UI/UX
        </h1>

        {/* Button Animation */}
        <button
          className={`mt-4 px-6 py-2 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition duration-200 transform transition-all duration-1000 ${
            isButtonVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          onClick={handleButtonClick}
        >
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default BackgroundSection;

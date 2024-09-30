import React from 'react';
import { useNavigate } from "react-router-dom";


const BackgroundSection: React.FC = () => {

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/contact"); 
  };

  return (
    
      <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-50">
        <h2 className="text-white text-5xl sm:text-6xl font-serif font-bold tracking-wide text-center">Sahil Mohite</h2>
        <h1 className="text-white text-lg sm:text-xl font-serif text-center">React JS | Front-End | UI/UX</h1>
        <button
      className="mt-4 px-6 py-2 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition duration-200"
      onClick={handleButtonClick}
    >
      Contact Me
    </button>
      </div>
    
  );
};

export default BackgroundSection;

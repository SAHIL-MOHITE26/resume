import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useNavigate } from "react-router-dom";
import image1 from '../assets/images/my photo.jpg';

const BackgroundSection: React.FC = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/contact"); 
  };

  // Refs for the text elements
  const bgRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLHeadingElement | null>(null);
  const subTextRef = useRef<HTMLHeadingElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Background fade-in
    tl.to(bgRef.current, {
      opacity: 1,
      duration: 1,
      ease: 'power2.out',
    })
    // Main text animation
    .fromTo(
      textRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, ease: 'elastic.out(1, 0.8)' }
    )
    // Subtext animation
    .fromTo(
      subTextRef.current,
      { opacity: 0, y: -10 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' },
      '-=0.5' // Overlap slightly with the main text animation
    )
    // Button animation
    .fromTo(
      buttonRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power2.out' },
      '-=0.5' // Overlap slightly with the subtext animation
    );
  }, []);

  return (
    <div
      ref={bgRef}
      className="h-screen bg-fixed bg-cover opacity-0" // Start with hidden background
      style={{
        backgroundImage: `url(${image1})`, 
        backgroundPosition: 'center 1%',
      }}
    >
      <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-50">
        {/* Main Title Animation */}
        <h1 
          ref={textRef} 
          className="text-white text-4xl mb-2 tracking-wide text-center"
        >
          Hello, I'm
        </h1>

        <h2 
          className="text-white text-5xl sm:text-6xl font-serif font-bold tracking-wide text-center"
        >
          Sahil Mohite
        </h2>

        {/* Subtext Animation */}
        <h1 
          ref={subTextRef}
          className="text-white text-1xl sm:text-1xl font-serif text-center mt-1"
        >
          React JS | Front-End | UI/UX
        </h1>

        {/* Button Animation */}
        <button
          ref={buttonRef}
          className="mt-4 px-6 py-2 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition duration-200"
          onClick={handleButtonClick}
        >
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default BackgroundSection;

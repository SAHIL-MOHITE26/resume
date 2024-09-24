import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 mt-10 font-serif">About Me</h1>
      
      <section className="mb-8 flex">
        <div className="flex-1">
          <p className="mb-4">
            Hello! I'm Sahil Mohite, a passionate front-end developer with experience in building responsive and user-friendly web applications. My journey in tech began with a love for design and aesthetics, which naturally evolved into a career in development.
          </p>
          {/* Grey button with no rounding */}
          <a
            href="src/assets/images/Sahil Resume.pdf" // Replace with the actual path to your PDF
            target="_blank" // Opens in a new tab
            rel="noopener noreferrer" // Security feature
            className="mt-4 mb-10 inline-block px-4 py-3 bg-gray-500 text-white font-semibold border border-transparent hover:bg-gray-600 text-center"
          >
            Download Resume
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;

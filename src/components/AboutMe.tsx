import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 mt-10 font-serif text-left">About Me</h1>
      
      <section className="mb-8 flex flex-col sm:flex-row">
        <div className="flex-1 mb-4 sm:mb-0 sm:mr-4">
          <p className="mb-4 text-lg sm:text-base">
            Hello! I'm Sahil Mohite, a passionate front-end developer with experience in building responsive and user-friendly web applications. My journey in tech began with a love for design and aesthetics, which naturally evolved into a career in development.
          </p>
          {/* Grey button with no rounding */}
          <a
            href="/assets/images/Sahil Resume.pdf" // Replace with the actual path to your PDF
            target="_blank" // Opens in a new tab
            rel="noopener noreferrer" // Security feature
            className="mt-4 mb-10 inline-block px-6 py-3 bg-gray-500 text-white font-semibold border border-transparent hover:bg-gray-600 text-center transition-all duration-200"
          >
            Download Resume
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;

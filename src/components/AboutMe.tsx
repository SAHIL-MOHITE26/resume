import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <div className="w-full sm:w-[1568px] mx-auto p-4 sm:p-6 mb-[-60px]">
      {/* Container with rounded corners */}
      <div className="bg-white shadow-lg rounded-lg p-6 mt-[-40px]">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 mt-10 font-serif text-left">About Me</h1>
        
        {/* Content Section */}
        <section className="mb-8 flex flex-col sm:flex-row">
          <div className="flex-1 mb-4 sm:mb-0 sm:mr-4">
            {/* Paragraph about yourself */}
            <p className="mb-4 text-lg sm:text-base">
              Hello! I'm Sahil Mohite, a passionate front-end developer with experience in building responsive and user-friendly web applications. My journey in tech began with a love for design and aesthetics, which naturally evolved into a career in development.
            </p>
            
            {/* Download Resume Button */}
            <a
              href="https://drive.google.com/file/d/1876GR4qdVvc45DDEGwyf8HhgXszM3SVy/view?usp=sharing" // Link to your resume
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 mb-10 inline-block px-6 py-3 bg-gray-500 text-white font-semibold border border-transparent rounded hover:bg-gray-600 text-center transition-all duration-200"
            >
              Download Resume
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutMe;

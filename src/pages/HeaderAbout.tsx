import React from "react";

const HeaderAbout: React.FC = () => {
  // Array of images for the cards
  const cardImages = [
    "https://www.ied.edu/_default_upload_bucket/1081/image-thumb__1081__scaleByWidth1000/1600x952px_Le%20scuole_Design.jpg",
    "https://www.adorama.com/alc/wp-content/uploads/2021/11/Types-of-Shots-for-Filmmakers-e1641493485327-1024x590.jpg",
    "https://www.thestatesman.com/wp-content/uploads/2023/01/iStock-1019326950.jpg",
    "https://picsum.photos/200/300?random=4",
    "https://picsum.photos/200/300?random=5",
    "https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?cs=srgb&dl=pexels-pixabay-46798.jpg&fm=jpg",
  ];

  // Array of hover texts corresponding to each image
  const hoverTexts = [
    "Designing",
    "Filmmaking",
    "Bike riding",
    "Travelling",
    "Visiting beaches",
    "Football",
  ];

  return (
    <div className="container mx-auto my-10 relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('your-background-image-url-here.jpg')" }}
      ></div>

      {/* Big Card */}
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg p-6 max-w-7xl mx-auto mb-8 relative z-10">
        {/* Description Section */}
        <div className="md:w-2/3 p-6 flex flex-col justify-center">
          <h2 className="text-5xl font-serif font-bold text-gray-800 mb-4">About.</h2>
          <p className="text-lg text-gray-600 mb-4">
            Hi, I'm Sahil Mohite, a passionate front-end developer with a knack for creating responsive and interactive
            websites. I enjoy working with React, TypeScript, and staying up-to-date with the latest trends in web
            development.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            When I'm not coding, you can find me exploring new technologies, reading, or working on personal projects that
            help improve my skills.
          </p>
          <a
            href="https://www.linkedin.com/in/sahil-mohite-a39957235/"
            className="text-blue-500 hover:underline mt-2 inline-block"
          >
            Connect with me on LinkedIn
          </a>
        </div>

        {/* Photo Section */}
        <div className="md:w-1/3 flex justify-center items-center">
          <img
            src="src/assets/images/cutout.jpg"
            alt="Sahil Mohite"
            className="w-100 h-80 object-cover  "
          />
        </div>
      </div>

      {/* 6 Small Cards Below */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 max-w-7xl mx-auto z-10 relative">
        {cardImages.map((image, index) => (
          <div key={index} className="relative group">
            <img
              src={image}
              alt={`Card ${index + 1}`}
              className="w-full h-40 object-cover mb-2 rounded transition-transform transform group-hover:scale-105"
            />
            {/* Hover Text */}
            <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold opacity-0 transition-opacity duration-300 bg-black bg-opacity-50 group-hover:opacity-100">
              {hoverTexts[index]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeaderAbout;

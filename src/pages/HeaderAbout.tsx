import React from "react";
import cutoutImage from "/src/assets/images/cutout.jpg";

const HeaderAbout: React.FC = () => {
  // Array of images for the small cards
  const cardImages = [
    "https://www.ied.edu/_default_upload_bucket/1081/image-thumb__1081__scaleByWidth1000/1600x952px_Le%20scuole_Design.jpg",
    "https://www.adorama.com/alc/wp-content/uploads/2021/11/Types-of-Shots-for-Filmmakers-e1641493485327-1024x590.jpg",
    "https://www.thestatesman.com/wp-content/uploads/2023/01/iStock-1019326950.jpg",
    "https://picsum.photos/200/300?random=4",
    "https://afar.brightspotcdn.com/dims4/default/d5567ae/2147483647/strip/true/crop/3024x2016+504+0/resize/900x600!/quality/90/?url=https%3A%2F%2Fk3-prod-afar-media.s3.us-west-2.amazonaws.com%2Fbrightspot%2F2d%2F61%2F5c02357f462b9bc155732b96e111%2Fsanta-monica-michelle-heimerman-lede.jpg",
    "https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?cs=srgb&dl=pexels-pixabay-46798.jpg&fm=jpg",
  ];

  // Array of hover texts for hobbies
  const hoverTexts = [
    "Designing",
    "Filmmaking",
    "Bike riding",
    "Travelling",
    "Visiting beaches",
    "Football",
  ];

  // Array of objects for certifications (images, names, descriptions, and URLs)
  const certifications = [
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/HackerRank_Icon-1000px.png/800px-HackerRank_Icon-1000px.png",
      name: "HackerRank CSS",
      description: "A certification demonstrating proficiency in CSS fundamentals.",
      url: "https://www.hackerrank.com/certificates/iframe/b95f1c6c4084" // Replace with actual URL
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-In86mhCDZRUZ0JLgHoEWkgZLD8spyD1U0g&s",
      name: "NITTR Bhopal AI/ML",
      description: "An advanced certification in Artificial Intelligence and Machine Learning.",
      url: "https://drive.google.com/file/d/1jLSc9c6D3uyt-nUUk7SOP39B8gfLVOYV/view" // Replace with actual URL
    },
    {
      image: "https://media.licdn.com/dms/image/C4D12AQHTWmXtImF2sw/article-cover_image-shrink_720_1280/0/1578556490672?e=2147483647&v=beta&t=GUbMSYJ4ekAJkRsZoFYWOjV7v47x0wUFZsHTFRrg5pM",
      name: "UI/UX Design Certification",
      description: "A comprehensive course covering UI and UX design principles.",
      url: "https://www.example.com/uiux-certification" // Replace with actual URL
    },
  ];

  return (
    <div className="container mx-auto my-10 relative">

      {/* Big Card */}
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg p-6 max-w-7xl mx-auto mb-8 relative z-10">
        {/* Description Section */}
        <div className="md:w-2/3 p-6 flex flex-col justify-center">
          <h2 className="text-5xl font-serif font-bold text-gray-800 mb-4">about.</h2>
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
            src={cutoutImage}
            alt="Sahil Mohite"
            className="w-100 h-80 object-cover"
          />
        </div>
      </div>

      {/* 6 Small Cards Below for Hobbies */}
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

      {/* Certifications Section */}
      <h2 className="text-3xl font-serif font-bold text-gray-800 my-8 text-center">Certifications</h2>
      <div className="bg-white rounded-lg shadow-lg p-4 max-w-7xl mx-auto z-10 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {certifications.map((certification, index) => (
            <div key={index} className="relative group flex flex-col items-center">
              <img
                src={certification.image}
                alt={`Certification ${index + 1}`}
                className="w-full h-40 object-cover mb-2 rounded transition-transform transform group-hover:scale-105"
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-1">{certification.name}</h3>
              <p className="text-gray-600 mb-2 text-center">{certification.description}</p>
              <a
                href={certification.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 mb-10 inline-block px-6 py-3 bg-gray-500 text-white font-semibold border border-transparent hover:bg-gray-600 text-center transition-all duration-200"
          
              >
                View Certification
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeaderAbout;

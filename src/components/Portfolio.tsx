import React from 'react';
import { useNavigate } from 'react-router-dom';

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const navigate = useNavigate(); // Use useNavigate for navigation

  const images = [
    'src/assets/images/junkyard.jpg',
    'src/assets/images/portfolio.jpg',
    'src/assets/images/sei-admin.jpg',
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [images.length]);

  // Function to handle the button click
  const handleSeeMoreClick = () => {
    navigate('/projects'); // Redirect to the HeaderProjects page
  };

  return (
    <>
      <div>
        <h1 className='text-5xl font-serif font-bold text-center mt-10 mb-2'>Portfolio</h1>
        <button
          className='bg-black text-white px-4 py-2 mb-2 ml-auto block mx-auto rounded-lg' // Center button and adjust margin
          onClick={handleSeeMoreClick} // Add onClick handler
        >
          See more
        </button>
      </div>
      <div className="flex justify-center mb-12">
        <div className="relative w-full max-w-7xl mx-auto h-[500px] md:h-[600px] lg:h-[700px]">
          <div className="overflow-hidden rounded-lg">
            {images.map((image, index) => (
              <div
                key={index}
                className={`transition-opacity duration-700 ease-in-out absolute inset-0 ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg" // Keep rounded corners for images
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;

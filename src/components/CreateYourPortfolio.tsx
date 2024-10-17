import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type CarouselItem = {
  imageSrc: string;
  description: string;
  buttonText: string;
};

const carouselItems: CarouselItem[] = [
  {
    imageSrc: 'https://www.w3schools.com/howto/blackandwhiteportfolio-heros.png',
    description: 'Description for item 1',
    buttonText: 'Learn More',
  },
  {
    imageSrc: 'https://www.w3schools.com/howto/myportfolio.png',
    description: 'Description for item 2',
    buttonText: 'Discover',
  },
  {
    imageSrc: 'https://imgproxy.epicpxls.com/Ibf0JpqFqNSJpjjipt1tex9ZqmbdbyqB5zIsybibYqU/rs:fill:800:600:0/g:no/aHR0cHM6Ly9pdGVt/cy5lcGljcHhscy5j/b20vdXBsb2Fkcy9w/aG90by81ZjY5NGQ3/OTc2NWI4NmMzYmU0/YmRhZWIyNGI1YTcx/OA.jpg',
    description: 'Description for item 3',
    buttonText: 'See More',
  },
];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPopUpOpen, setIsPopUpOpen] = useState(false); // State for pop-up

  const navigate = useNavigate();

  
  const handleRedirect = () => {
    navigate('/contact');
     // Replace '/your-new-page' with the desired route
  };

  // Keep description and button text constant
  const constantDescription = "Want to create your portfolio? Let's do it!";
  const constantButtonText = "Click Here";

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const handleButtonClick = () => {
    setIsPopUpOpen((prev) => !prev); // Toggle the pop-up on button click
  };

  const closePopUp = () => {
    setIsPopUpOpen(false);
  };

  return (
    <div className="flex items-center justify-center bg-gradient-to-b from-white to-gray-400 p-4 mt-[-35px] rounded-lg">

      <div className="w-1/2">
        <img 
          src={carouselItems[currentIndex].imageSrc} 
          alt="Carousel" 
          className="w-full h-[600px] object-cover rounded-lg mb-12 mt-12" 
        />
      </div>
      <div className="w-1/2 p-4 ml-8">
        <p className="text-5xl text-left font-bold mb-2"> 
          {constantDescription} 
        </p>
        <div className="relative">
          <button 
            className="mt-4 mb-10 inline-block px-6 py-3 bg-transparent font-semibold text-gray-500 border border-gray-500 hover:bg-gray-500 hover:text-white text-center transition-all duration-200"
            onClick={handleButtonClick}
          >
            {constantButtonText}
          </button>

          {/* Pop-up */}
          {isPopUpOpen && (
            <div className="absolute left-0 mt-2 bg-white p-4 rounded shadow-lg z-50">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-bold">Choose an Option</h2>
                <button onClick={closePopUp} className="text-gray-500 hover:text-red-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9.586l-4.293-4.293-1.414 1.414L8.586 10l-4.293 4.293 1.414 1.414L10 10.414l4.293 4.293 1.414-1.414L11.414 10l4.293-4.293-1.414-1.414L10 9.586z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex justify-between">
                <button 
                  className="inline-block px-6 py-3 bg-transparent font-semibold text-gray-500 border border-gray-500 hover:bg-blue-500 hover:text-white text-center transition-all duration-200"
                  onClick={() => window.location.href = '/template'}
                >
                  Choose your template
                </button>
                <button 
                  className="inline-block px-6 py-3 bg-transparent font-semibold text-gray-500 border border-gray-500 hover:bg-green-500 hover:text-white text-center transition-all duration-200"
                  onClick={handleRedirect}
                >
                  Give your idea
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Carousel;

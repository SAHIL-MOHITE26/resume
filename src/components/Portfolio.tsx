import React from 'react';
import { useNavigate } from 'react-router-dom';

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const navigate = useNavigate(); // Use useNavigate for navigation

  const images = [
    'https://productiveshop.com/wp-content/uploads/2022/10/image30-1536x760.png.webp',
    'https://bestfreehtmlcsstemplates.com/uploads/templates-images/13ff21b90b362a19d4a1513f1b6222f2.webp',
    'https://www.bookingpressplugin.com/wp-content/uploads/2024/01/Baker-Tilly.webp',
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
      
      <div className="flex justify-center mb-[68px] mt-1">
        <div className="relative  w-[1500px] mx-auto lg:h-[500px]">
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
                  className="w-[1800px] h-full object-cover rounded-t-2xl mb-1" // Keep rounded corners for images
                />
        <div className=' h-16'>
        </div>
        <button
          className='bg-white font-bold font-serif text-black px-[702px] py-2 mb-5 mt-[-60px] ml-auto block mx-auto ' // Center button and adjust margin
          onClick={handleSeeMoreClick} // Add onClick handler
        >
         Work Done
        </button>
              </div>
              
              
            ))}
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;

import { useEffect, useState } from 'react';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    'https://productiveshop.com/wp-content/uploads/2022/10/image30-1536x760.png.webp',
    'https://websitesetup.org/wp-content/uploads/2020/12/OnePageLove.com-december-2020.jpg',
    'https://colorlib.com/wp/wp-content/uploads/sites/2/cool-website-template-ideas.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [images.length]);

  return (
    <>
      <div>
        
        <h1 className='text-5xl font-serif font-bold text-center mt-10 mb-5'>Portfolio</h1>
        <button className='bg-black text-white px-4 py-2 mb-2 ml-[710px] '>See more</button>
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
                  className="w-full h-full object-cover rounded-lg" // Added rounded-lg here
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

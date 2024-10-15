const cardData = [
    { id: 1, imageUrl: 'https://colorlib.com/wp/wp-content/uploads/sites/2/glint-free-fullscreen-small-business-template.jpg.webp', reviewLink: 'https://colorlib.com/wp/template/glint/' },
    { id: 2, imageUrl: 'https://colorlib.com/wp/wp-content/uploads/sites/2/nitro-free-template-353x278.jpg.avif', reviewLink: 'https://colorlib.com/wp/template/nitro/' },
    { id: 3, imageUrl: 'https://colorlib.com/wp/wp-content/uploads/sites/2/rezume-free-template.jpg.avif', reviewLink: 'https://colorlib.com/wp/template/rezume/' },
    { id: 4, imageUrl: 'https://colorlib.com/wp/wp-content/uploads/sites/2/rezume-free-template.jpg.avif', reviewLink: 'https://colorlib.com/wp/template/rezume/' },
    { id: 5, imageUrl: 'https://colorlib.com/wp/wp-content/uploads/sites/2/orbit-free-template.jpg.avif', reviewLink: 'https://colorlib.com/wp/template/orbit/' },
    { id: 6, imageUrl: 'https://colorlib.com/wp/wp-content/uploads/sites/2/busicol-free-template.jpg.avif', reviewLink: 'https://colorlib.com/wp/template/busicol/' },
    { id: 7, imageUrl: 'https://colorlib.com/wp/wp-content/uploads/sites/2/skater-free-template.jpg.avif', reviewLink: 'https://colorlib.com/wp/template/skater/' },
    { id: 8, imageUrl: 'https://colorlib.com/wp/wp-content/uploads/sites/2/myphotography-free-template.jpg.avif', reviewLink: 'https://colorlib.com/wp/template/myphotography/' },
    { id: 9, imageUrl: 'https://colorlib.com/wp/wp-content/uploads/sites/2/eroo-colorlib-template.jpg.avif', reviewLink: 'https://colorlib.com/wp/template/myphotography/' },
  ];
  
  const Templates = () => {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
        
        {/* Heading Section */}
        <h1 className="text-4xl font-bold mt-10">Choose Your Templates</h1> {/* Centered Heading */}
        
        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-8 w-[1200px]">
          {cardData.map((card) => (
            <div 
              key={card.id} 
              className="bg-white shadow-lg rounded-lg p-6 transform transition-all duration-300 hover:shadow-xl hover:scale-105 overflow-hidden" // Card hover effects
            >
              <div className="overflow-hidden rounded-md mb-4"> {/* Image container */}
                <img 
                  src={card.imageUrl} 
                  className="w-full h-56 object-cover transition-transform duration-300 hover:scale-110" // Image hover zoom effect
                />
              </div>
      
              {/* Buttons section */}
              <div className="flex justify-between">
                <button className="px-11 py-2 bg-blue-500 text-white hover:bg-blue-600 transition-all duration-200 ml-2">
                  Choose
                </button>
                <a href={card.reviewLink} target="_blank" rel="noopener noreferrer" className="px-12 py-2 bg-gray-500 text-white hover:bg-gray-600 transition-all duration-200 mr-2">
                  Review
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Templates;
  
import React, { useState } from 'react';
import portfolioImage from '/src/assets/images/portfolio.jpg';
import seiAdminImage from '/src/assets/images/sei-admin.jpg';
import gadgetsImage from '/src/assets/images/gadjets.png';

const MyPortfolio: React.FC = () => {
  // Sample project data with images and links
  const projects = [
    { id: 1, title: 'Personal Portfolio', category: 'Completed', imgSrc: portfolioImage, link: 'https://sahilmohite.netlify.app' },
    { id: 2, title: 'JunkYard', category: 'Completed', imgSrc: 'https://varner.com/globalassets/our_consepts/junkyard/junkyard_20_mob.jpg', link: 'https://junkyard.com' },
    { id: 3, title: 'Gadgets.in', category: 'Completed', imgSrc: gadgetsImage, link: 'https://www.figma.com/design/cHbTG4tjDAyDnkzeecm3HE/Gadgets.in?node-id=29-76&m=dev' },
    { id: 4, title: 'Project 4', category: 'Ongoing', imgSrc: 'https://media.licdn.com/dms/image/C4D12AQHTWmXtImF2sw/article-cover_image-shrink_720_1280/0/1578556490672?e=2147483647&v=beta&t=GUbMSYJ4ekAJkRsZoFYWOjV7v47x0wUFZsHTFRrg5pM', link: 'https://yourproject4.com' },
    { id: 5, title: 'SEI Admin Panel', category: 'Completed', imgSrc: seiAdminImage, link: 'https://sei-adminpanel.netlify.app/' },
    { id: 6, title: 'Photography Portfolio', category: 'Completed', imgSrc: seiAdminImage, link: 'https://sei-adminpanel.netlify.app/' },
  ];

  // State for the selected filter
  const [selectedFilter, setSelectedFilter] = useState('All');

  // Filter projects based on selected filter
  const filteredProjects = selectedFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedFilter);

  // Function to get a random height for each card
  const getCardHeight = (id: number) => {
    const heights = ['h-48', 'h-56', 'h-64', 'h-64']; // Smaller height classes
    return heights[id % heights.length]; // Rotate through heights based on id
  };

  return (
    <div className="w-full p-8 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600  mb-40">
      <h1 className="text-5xl mb-6 text-white text-center mt-12">My Portfolio</h1>

      <div className="flex justify-center space-x-4 mb-8">
        {/* Filter Buttons */}
        <button 
          className={`py-2 px-4 rounded transition duration-300 ease-in-out 
              ${selectedFilter === 'All' ? 'text-lime-400' : 'text-white hover:text-lime-400'}`}
          onClick={() => setSelectedFilter('All')}
        >
          All
        </button>
        <button 
          className={`py-2 px-4 rounded transition duration-300 ease-in-out 
              ${selectedFilter === 'Completed' ? 'text-lime-400' : 'text-white hover:text-lime-400'}`}
          onClick={() => setSelectedFilter('Completed')}
        >
          Completed
        </button>
        <button 
          className={`py-2 px-4 rounded transition duration-300 ease-in-out 
              ${selectedFilter === 'Ongoing' ? 'text-lime-400' : 'text-white hover:text-lime-400'}`}
          onClick={() => setSelectedFilter('Ongoing')}
        >
          Ongoing
        </button>
        <button 
          className={`py-2 px-4 rounded transition duration-300 ease-in-out 
              ${selectedFilter === 'Upcoming' ? 'text-lime-400' : 'text-white hover:text-lime-400'}`}
          onClick={() => setSelectedFilter('Upcoming')}
        >
          Upcoming
        </button>
      </div>

      {/* Portfolio Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {filteredProjects.map((project) => (
          <a key={project.id} href={project.link} target="_blank" rel="noopener noreferrer" className={`relative bg-gray-700 overflow-hidden text-white flex flex-col ${getCardHeight(project.id)} group`}>
            {/* Image Section */}
            <div className="flex-1">
              <img 
                src={project.imgSrc} 
                alt={project.title} 
                className="w-full h-full rounded-lg object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110" // Zoom effect
              />
              {/* Title Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h2 className="text-4xl font-bold">{project.title}</h2>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default MyPortfolio;

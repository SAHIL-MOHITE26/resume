import React from 'react';
import { FaCheckCircle, FaClock } from 'react-icons/fa';

interface Project {
  id: number;
  title: string;
  description: string;
  status: 'completed' | 'ongoing';
  imageUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Personal Portfolio',
    description: 'A personal website to showcase my work and skills.',
    status: 'completed',
    imageUrl: 'https://productiveshop.com/wp-content/uploads/2022/10/image30-1536x760.png.webp', // Replace with your image URL
  },
  {
    id: 2,
    title: 'JetSetWheels',
    description: 'An online store for selling products.',
    status: 'ongoing',
    imageUrl: 'https://websitesetup.org/wp-content/uploads/2020/12/OnePageLove.com-december-2020.jpg', // Replace with your image URL
  },
  {
    id: 3,
    title: 'JunkYard',
    description: 'A platform for writing and sharing blog posts.',
    status: 'completed',
    imageUrl: 'https://colorlib.com/wp/wp-content/uploads/sites/2/cool-website-template-ideas.jpg', // Replace with your image URL
  },
  {
    id: 4,
    title: 'SEI Admin Panel',
    description: 'An app to manage and track tasks efficiently.',
    status: 'ongoing',
    imageUrl: 'https://via.placeholder.com/150', // Replace with your image URL
  },
  {
    id: 5,
    title: 'Gadgets.in',
    description: 'FIGMA file.',
    status: 'completed',
    imageUrl: 'https://via.placeholder.com/150', // Replace with your image URL
  },
];

const Projects: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Projects</h1>
      <div className="flex flex-col space-y-8">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="bg-white shadow-lg rounded-lg p-6 flex items-center transition-transform transform hover:scale-105" 
            style={{ minHeight: '250px' }} // Increased the height
          >
            {/* Image Section */}
            <img 
              src={project.imageUrl} 
              alt={project.title} 
              className="w-32 h-32 object-cover rounded-md mr-6" // Made the image larger
            />
            {/* Text Content Section */}
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
              <p className="mb-4">{project.description}</p>
              <div className="flex items-center">
                {project.status === 'completed' ? (
                  <FaCheckCircle className="text-green-500 mr-2" />
                ) : (
                  <FaClock className="text-yellow-500 mr-2" />
                )}
                <span className="text-lg font-medium">
                  {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

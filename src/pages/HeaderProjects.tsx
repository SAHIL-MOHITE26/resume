import React from 'react';
import { FaCheckCircle, FaClock } from 'react-icons/fa';

interface Project {
  id: number;
  title: string;
  description: string;
  status: 'completed' | 'ongoing';
  imageUrl: string;
  externalLink: string; // External URL
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Personal Portfolio',
    description: 'A personal website to showcase my work and skills.',
    status: 'completed',
    imageUrl: 'https://productiveshop.com/wp-content/uploads/2022/10/image30-1536x760.png.webp',
    externalLink: 'https://sahilmohite.netlify.app/home', // External URL
  },
  {
    id: 2,
    title: 'JetSetWheels',
    description: 'An online store for selling products.',
    status: 'ongoing',
    imageUrl: 'https://websitesetup.org/wp-content/uploads/2020/12/OnePageLove.com-december-2020.jpg',
    externalLink: 'https://jetsetwheels.com', // External URL
  },
  {
    id: 3,
    title: 'JunkYard',
    description: 'A platform for writing and sharing blog posts.',
    status: 'completed',
    imageUrl: 'https://colorlib.com/wp/wp-content/uploads/sites/2/cool-website-template-ideas.jpg',
    externalLink: 'https://junkyard.com', // External URL
  },
  {
    id: 4,
    title: 'SEI Admin Panel',
    description: 'An app to manage and track tasks efficiently.',
    status: 'ongoing',
    imageUrl: 'https://via.placeholder.com/150',
    externalLink: 'https://seiadmin.com', // External URL
  },
  {
    id: 5,
    title: 'Gadgets.in',
    description: 'FIGMA file.',
    status: 'completed',
    imageUrl: 'https://media.licdn.com/dms/image/C4D12AQHTWmXtImF2sw/article-cover_image-shrink_720_1280/0/1578556490672?e=2147483647&v=beta&t=GUbMSYJ4ekAJkRsZoFYWOjV7v47x0wUFZsHTFRrg5pM',
    externalLink: 'https://www.figma.com/design/cHbTG4tjDAyDnkzeecm3HE/Gadgets.in?node-id=29-76&m=dev', // External URL
  },
];

const Projects: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Projects</h1>
      <div className="flex flex-col space-y-8">
        {projects.map((project) => (
          <a 
            key={project.id} 
            href={project.externalLink} // External link
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white shadow-lg rounded-lg p-6 flex items-center transition-transform transform hover:scale-105 cursor-pointer"
            style={{ minHeight: '250px' }} 
          >
            {/* Image Section */}
            <img 
              src={project.imageUrl} 
              alt={project.title} 
              className="w-32 h-32 object-cover rounded-md mr-6" 
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
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;

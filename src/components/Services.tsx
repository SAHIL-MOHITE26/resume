import React from 'react';
import { useNavigate } from 'react-router-dom';

interface CardProps {
  title: string;
  image: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ title, image, onClick }) => {
  return (
    <div
      className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
      onClick={onClick}
    >
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Overlay (Title and Button) */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-white text-xl font-semibold mb-4">{title}</h3>
      </div>
    </div>
  );
};

const CardGrid: React.FC = () => {
  const navigate = useNavigate();

  const cards = [
    {
      title: 'Services',
      image: 'https://www.yeta.in/Content/img/Services.png',
      onClick: () => {
        // Add logic for navigation if needed
      },
    },
    {
      title: 'Buy me a coffee',
      image: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1627326063491/iWr_Ppp1_.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp',
      onClick: () => {
        // Navigate to the desired page
        navigate('/buy-me-a-coffee');
      },
    },
    {
      title: 'Book your slot',
      image: 'https://miro.medium.com/v2/resize:fit:1400/1*pE5cYSFDmx0jZpjapjgPhA.png',
      onClick: () => {
        // Add logic for navigation if needed
      },
    },
  ];

  return (
    <div className="container mx-auto px-4 py-9 bg-gray-800 mb-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            image={card.image}
            onClick={card.onClick}
          />
        ))}
      </div>
    </div>
  );
};

export default CardGrid;

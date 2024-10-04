import React from 'react';

interface CardProps {
  title: string;
  image: string;
}

const Card: React.FC<CardProps> = ({ title, image }) => {
  return (
    <div className="relative group overflow-hidden rounded-lg shadow-lg">
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Overlay (Title and Button) */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-white text-xl font-semibold mb-4">{title}</h3>
        <button className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 transition">
          Learn More
        </button>
      </div>
    </div>
  );
};

const CardGrid: React.FC = () => {
  const cards = [
    { title: 'Card 1', image: 'https://www.yeta.in/Content/img/Services.png' },
    { title: 'Card 2', image: 'https://via.placeholder.com/400x300' },
    { title: 'Card 3', image: 'https://via.placeholder.com/400x300' },
    { title: 'Card 4', image: 'https://via.placeholder.com/400x300' },
    { title: 'Card 5', image: 'https://via.placeholder.com/400x300' },
    { title: 'Card 6', image: 'https://via.placeholder.com/400x300' },
  ];

  return (
    <>
    
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <Card key={index} title={card.title} image={card.image} />
        ))}
      </div>
    </div>
    </>
  );
};

export default CardGrid;

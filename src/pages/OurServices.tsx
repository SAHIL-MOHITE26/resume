import React from 'react';

type Service = {
  title: string;
  description: string;
  imageSrc: string;
  altText: string;
};

const services: Service[] = [
  {
    title: 'Website Design',
    description: 'Crafting beautiful and responsive website designs.',
    imageSrc: 'https://webcentral.au/wp-content/uploads/2024/03/Website-example-2-frostleadership-2.png',
    altText: 'Website Design Icon',
  },
  {
    title: 'Frontend Development',
    description: 'Building interactive and modern user interfaces.',
    imageSrc: 'https://media.geeksforgeeks.org/wp-content/uploads/20240703165023/Frontend-Development-(1).webp',
    altText: 'Frontend Development Icon',
  },
  {
    title: 'UI Designing',
    description: 'Creating aesthetic and pleasing designs for your website.',
    imageSrc: 'https://miro.medium.com/v2/resize:fit:1400/1*C1mfcJTe-LGKQF3XR09_fg.jpeg',
    altText: 'UI Designing Icon',
  },
];

const ServicesPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center bg-gray-800 p-2 text-white rounded-t-lg mt-2">My Services</h1>
      <style>{`
        .flip-card {
          background-color: transparent;
          perspective: 1000px;
          width: 320px;
          height: 300px;
        }
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }
        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }
        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          border-radius: 0.75rem;
        }
        .flip-card-back {
          transform: rotateY(180deg);
          background-color: white; /* White background for the back side */
          color: black; /* Black text color */
        }
      `}</style>
      <div className="flex justify-center bg-slate-800 p-5 rounded-b-lg mb-[-10px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-gray-800">
          {services.map((service, index) => (
            <div key={index} className="flip-card">
              <div className="flip-card-inner">
                {/* Front of the card */}
                <div className="flip-card-front bg-white shadow-md rounded-lg p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <img src={service.imageSrc} alt={service.altText} className="w-72 h-48 object-fill" />
                  </div>
                  <h2 className="text-2xl font-semibold mb-2">{service.title}</h2>
                </div>
                {/* Back of the card */}
                <div className="flip-card-back shadow-md rounded-lg p-8 text-center">
                  <h2 className="text-2xl font-semibold mb-2">{service.title}</h2>
                  <p className="text-gray-800">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;

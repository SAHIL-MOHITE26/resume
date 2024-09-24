import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
        <div>
          <h2 className="text-lg font-bold">Sahil Mohite</h2>
          <p className="text-sm">Frontend Developer | UI/UX Designer</p>
        </div>
        <div>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-gray-400">Home</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">About</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">Skills</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} Sahil Mohite. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

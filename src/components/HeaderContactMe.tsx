import React from "react";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

const ContactMe: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 max-w-4xl w-full flex flex-col md:flex-row">

        {/* Form Section */}
        <div className="flex-1 mb-6 md:mb-0">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Contact Me</h2>
          <p className="text-gray-600 text-center mb-4">
            I'd love to hear from you! Please fill out the form below to get in touch.
          </p>

          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Your Message"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Vertical Line */}
        <div className="hidden md:block border-l border-gray-300 mx-4 md:mx-7" style={{ height: 'auto' }} />

        {/* Social Media Icons Section */}
        <div className="flex-1 rounded-lg p-6 flex flex-col items-center">
          <h2 className="text-xl font-bold text-gray-800 mb-4 mt-10 md:mt-40">Connect with Me</h2>
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/sahil-mohite-a39957235/" className="text-black hover:text-blue-600">
              <FaLinkedin size={28} />
            </a>
            <a href="#" className="text-black hover:text-blue-600">
              <FaFacebook size={28} />
            </a>
            <a href="https://www.instagram.com/sahil_mohite26" className="text-black hover:text-pink-600">
              <FaInstagram size={28} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;

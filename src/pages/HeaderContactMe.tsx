import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ContactMe: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted'); // Check if this is printed

    if (form.current) {
      console.log('Sending email...'); // Check if this is printed
      emailjs.sendForm(
        'service_slc22cr',  // Replace with your actual service ID
        'template_3wmkua6', // Replace with your actual template ID
        form.current,
        '84C3XoEudcHQ7BC64lRI9"'   // Replace with your actual public key
      )
      .then((result) => {
        console.log('Email successfully sent:', result.text); // Check if this is printed
        setIsSubmitted(true);
        setTimeout(() => {
          navigate("/");  // Redirect to home page after submission
        }, 2000);
      })
      .catch((error) => {
        console.error('Email failed to send:', error.text); // Check if this is printed
      });
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 max-w-4xl w-full flex flex-col md:flex-row">
        <div className="flex-1 mb-6 md:mb-0">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Contact Me</h2>
          <p className="text-gray-600 text-center mb-4">
            I'd love to hear from you! Please fill out the form below to get in touch.
          </p>

          {!isSubmitted ? (
            <form ref={form} onSubmit={sendEmail}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700">Name</label>
                <input
                  type="text"
                  name="from_name"
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="from_email"
                  placeholder="Your Email"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700">Message</label>
                <textarea
                  name="message"
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
          ) : (
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-green-500">Message Submitted!</h2>
              <p className="text-gray-600">Redirecting to the home page...</p>
            </div>
          )}
        </div>

        <div className="hidden md:block border-l border-gray-300 mx-4 md:mx-7" style={{ height: 'auto' }} />

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

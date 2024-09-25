import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";


const ContactMe: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm(
        'service_kblcleh',      // Replace with your actual service ID
        'template_3tkavzg',     // Replace with your actual template ID
        form.current,
        'AWbwVlk6ek5gPlbrY'
      )
      .then((result) => {
        console.log('Email successfully sent:', result.text);
        setIsSubmitted(true);
      })
      .catch((error) => {
        console.error('Email failed to send:', error);
      });
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 max-w-4xl w-full flex flex-col">
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
            <p className="text-gray-600">Thank you for getting in touch.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactMe;

import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
// Import icons from react-icons
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaGitAlt } from 'react-icons/fa';

const Skills: React.FC = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Array of skills and their proficiency levels
  const skills = [
    { name: 'React.js', icon: <FaReact size={50} title="React" />, proficiency: 90 },
    { name: 'JavaScript', icon: <FaJs size={50} title="JavaScript" />, proficiency: 85 },
    { name: 'HTML & CSS', icon: <FaHtml5 size={50} title="HTML5" />, proficiency: 80 },
    { name: 'UI/UX Design', icon: <FaCss3Alt size={50} title="CSS3" />, proficiency: 75 },
    { name: 'Git & Version Control', icon: <FaGitAlt size={50} title="Git" />, proficiency: 70 },
  ];

  return (
    <div className="w-full p-8 bg-gray-800 mb-9">
      <div className="flex flex-col md:flex-row md:space-x-8 h-full">
        {/* Skills List Section */}
        <section className="flex-1 text-white mb-8 md:mb-0">
          <h1 className="ml-20 font-bold text-5xl mt-8">My Skills</h1>
          <hr className="w-80 border-lime-400 mt-5 ml-20"></hr>
          <h2 className="ml-20 mt-4 mr-2">
            "As a front-end web developer, I specialize in creating engaging and responsive user interfaces. My skills are rooted in HTML & CSS, the building blocks of web design, allowing me to craft visually appealing and structurally sound layouts. With JavaScript, I bring functionality and interactivity to websites, ensuring a dynamic user experience.
            I’m proficient in React.js, a powerful library that helps me build fast, scalable, and interactive web applications. By leveraging UI/UX Design principles, I focus on user-centric designs that enhance usability, ensuring that every interaction feels intuitive and seamless."
          </h2>
          
          {/* Buttons Section */}
          <div className="ml-20 mt-6 flex space-x-6">
            <button 
              className="bg-lime-400 text-black font-semibold py-2 px-4 rounded hover:bg-lime-500 transition duration-300"
              onClick={() => navigate('/about')} // Redirects to '/about' page
            >
              Know Me
            </button>
            <button 
              className="bg-transparent border border-lime-400 text-lime-400 font-semibold py-2 px-4 rounded hover:bg-lime-500 hover:text-black transition duration-300"
              onClick={() => navigate('/resume')} // Redirects to '/resume' page
            >
              Download Resume
            </button>
          </div>
        </section>

        {/* Progress Lines Section */}
        <section className="flex-1">
          <div className="p-6 rounded-lg h-full">
            {skills.map((skill, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-semibold">{skill.name}</span>
                  <span className="text-white">{skill.proficiency}%</span>
                </div>
                {/* Progress Bar */}
                <div className="w-full bg-gray-300 rounded-full h-2 relative group">
                  <div
                    className="bg-blue-500 h-full rounded-full"
                    style={{ width: `${skill.proficiency}%` }}
                  />
                  {/* Hover Tooltip */}
                  <div
                    className="absolute left-0 top-[-20px] bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ left: `${skill.proficiency}%` }}
                  >
                    {skill.proficiency}%
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Skills;

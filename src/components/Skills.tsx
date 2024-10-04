import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  BarController,
} from 'chart.js';

// Import icons from react-icons
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaGitAlt } from 'react-icons/fa';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, BarController);

const Skills: React.FC = () => {
  // Data for the bar graph
  const data = {
    labels: ['React.js', 'JavaScript', 'HTML & CSS', 'UI/UX Design', 'Git & Version Control'],
    datasets: [
      {
        label: 'Proficiency (%)',
        data: [90, 85, 80, 75, 70], // Adjust your skill levels here
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        borderColor: 'rgba(255, 255, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis: 'y' as const, // Makes the bar chart horizontal
    scales: {
      x: {
        beginAtZero: true,
        max: 100, // Set max proficiency to 100%
        ticks: {
          color: 'white', // White labels on the x-axis
        },
      },
      y: {
        ticks: {
          color: 'white', // White labels on the y-axis
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: 'white', // White legend text
        },
      },
    },
  };

  return (
    <div className="w-full p-8 bg-gray-800 rounded-lg mb-10">
      <h1 className="text-5xl font-bold mb-6 text-white font-serif text-center">Skills</h1>
      <h2 className='text-center mb-10 text-white'>
        As a front-end web developer, I create visually appealing and user-friendly interfaces. Proficient in HTML, CSS, and JavaScript, I use React.js to build dynamic, responsive web applications. My UI/UX design expertise enables me to craft intuitive layouts for seamless interaction across devices. Familiar with Git for version control, I ensure efficient collaboration and code management, aiming to blend aesthetics with functionality for high-quality web solutions.
      </h2>

      <div className="flex flex-col md:flex-row md:space-x-8 h-full">
        {/* Skills List Section */}
        <section className="flex-1 text-white mb-8 md:mb-0">
          <h2 className="text-2xl font-semibold mb-4 text-center mt-20">Technical Skills</h2>
          <hr className="border-t border-white w-2/3 mx-auto mb-4" />
          <div className="flex justify-center space-x-6 mt-8 flex-wrap">
            {/* Icon List */}
            <FaReact size={50} title="React" />
            <FaJs size={50} title="JavaScript" />
            <FaHtml5 size={50} title="HTML5" />
            <FaCss3Alt size={50} title="CSS3" />
            <FaGitAlt size={50} title="Git" />
          </div>
        </section>

        {/* Bar Graph Section */}
        <section className="flex-1">
          <div className="p-6 rounded-lg h-full">
            <Bar data={data} options={options} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Skills;

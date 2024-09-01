// src/components/AboutDeveloper.js

import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGithub } from 'react-icons/fa';
import { FaDatabase } from 'react-icons/fa6';
import { SiTailwindcss } from 'react-icons/si';

const AboutDeveloper = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <section className="text-center mb-6">
        <img
          src="https://via.placeholder.com/150" 
          alt="[Your Name]"
          className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-500 shadow-lg"
        />
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Hi, I'm Mr. Developer</h1>
        <p className="text-lg text-gray-700 mb-4">
        Hi there! I’m Ujjwal Kumar Roy, a 4th-year B.Tech student with a passion for software development. As I’m currently wrapping up my studies, I’ve been diving into various technologies and frameworks to build a solid foundation for my career.

I’ve gained hands-on experience with React.js for creating dynamic front-end interfaces, and I’m also proficient in Express.js, Node.js, and MongoDB for developing backend solutions. On the Java side, I’ve been working with Spring Boot to build RESTful APIs.

I’m particularly enthusiastic about data structures and algorithms, which I find crucial for solving complex problems efficiently. I’m excited to apply my skills in real-world projects and am always eager to learn and grow. If you’re interested in discussing tech or exploring potential opportunities, I’d love to connect!        </p>
        <a
          href="mailto:your-email@example.com"
          className="bg-blue-600 text-black py-2 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
        >
          Get in Touch
        </a>
      </section>

      <section className="mb-6">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">Skills</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <FaHtml5 className="text-orange-600 text-4xl mb-2" />
            <h3 className="text-xl font-semibold text-gray-800">HTML5</h3>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <FaCss3Alt className="text-blue-600 text-4xl mb-2" />
            <h3 className="text-xl font-semibold text-gray-800">CSS3</h3>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <FaJsSquare className="text-yellow-500 text-4xl mb-2" />
            <h3 className="text-xl font-semibold text-gray-800">JavaScript</h3>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <FaReact className="text-blue-400 text-4xl mb-2" />
            <h3 className="text-xl font-semibold text-gray-800">React</h3>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
  <FaNodeJs className="text-gray-800 text-4xl mb-2" /> 
  <h3 className="text-xl font-semibold text-gray-800">Express.js</h3>
</div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <FaNodeJs className="text-green-500 text-4xl mb-2" />
            <h3 className="text-xl font-semibold text-gray-800">Node.js</h3>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <SiTailwindcss className="text-cyan-500 text-4xl mb-2" />
            <h3 className="text-xl font-semibold text-gray-800">Tailwind CSS</h3>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
  <FaDatabase className="text-green-600 text-4xl mb-2" /> 
  <h3 className="text-xl font-semibold text-gray-800">MongoDB</h3>
</div>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">Projects</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/3">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Project One</h3>
            <p className="text-gray-700 mb-4">
              A brief description of this project goes here. Highlight key features and technologies used.
            </p>
            <a
              href="#"
              className="text-blue-600 hover:underline"
            >
              View Project
            </a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/3">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Project Two</h3>
            <p className="text-gray-700 mb-4">
              A brief description of this project goes here. Highlight key features and technologies used.
            </p>
            <a
              href="#"
              className="text-blue-600 hover:underline"
            >
              View Project
            </a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/3">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Project Three</h3>
            <p className="text-gray-700 mb-4">
              A brief description of this project goes here. Highlight key features and technologies used.
            </p>
            <a
              href="#"
              className="text-blue-600 hover:underline"
            >
              View Project
            </a>
          </div>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">Get in Touch</h2>
        <p className="text-lg text-gray-700 mb-4">
          Interested in collaborating or want to reach out? Feel free to connect with me on GitHub or drop me a message.
        </p>
        <a
          href="https://github.com/yourusername" 
          className="bg-gray-900 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-gray-800 transition duration-300"
        >
          <FaGithub className="inline-block mr-2" /> Follow me on GitHub
        </a>
      </section>
    </div>
  );
};

export default AboutDeveloper;

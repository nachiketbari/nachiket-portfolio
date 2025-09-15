// src/PortfolioNachiket.jsx
import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaPython,
  FaDatabase,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function PortfolioNachiket() {
  const skills = [
    { icon: <FaHtml5 className="text-orange-500" />, name: "HTML" },
    { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS" },
    { icon: <FaJsSquare className="text-yellow-400" />, name: "JavaScript" },
    { icon: <FaPython className="text-green-500" />, name: "Python" },
    { icon: <FaDatabase className="text-indigo-500" />, name: "SQL / MongoDB" },
    { name: "Django" },
    { name: "Bootstrap" },
    { name: "Machine Learning" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white font-['Open_Sans']">
      {/* Header */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center py-10"
      >
        <img
          src="/images/nachiket-profile.jpg" // <-- replace with your actual image path
          alt="Nachiket Bari"
          className="w-36 h-36 rounded-full border-4 border-white shadow-xl mb-4"
        />
        <h1 className="text-4xl font-bold tracking-wide text-white">
          Nachiket Bari
        </h1>
        <p className="mt-2 text-lg text-gray-300">
          Data Software Engineer | SQL | Python | Django | Machine Learning
        </p>
        <div className="flex space-x-6 mt-4 text-3xl">
          <a
            href="https://www.linkedin.com/in/YOUR_LINKEDIN_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:youremail@example.com"
            className="hover:text-cyan-400 transition-colors"
          >
            <FaEnvelope />
          </a>
        </div>
      </motion.header>

      {/* About */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-3xl mx-auto px-6 py-10 text-center"
      >
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-200 leading-relaxed">
          I’m a passionate Data Software Engineer from Pune, India, with a
          strong background in SQL, Python, and web development. I enjoy
          creating modern web applications and exploring data-driven solutions.
          My goal is to build scalable, user-friendly products that deliver
          real-world impact.
        </p>
      </motion.section>

      {/* Skills */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-5xl mx-auto px-6 py-10"
      >
        <h2 className="text-3xl font-semibold mb-8 text-center">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {skills.map((s, i) => (
            <div
              key={i}
              className="flex flex-col items-center bg-white/10 rounded-xl p-4 shadow hover:bg-white/20 transition"
            >
              {s.icon && <div className="text-4xl mb-2">{s.icon}</div>}
              <span>{s.name}</span>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Certifications */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto px-6 py-10"
      >
        <h2 className="text-3xl font-semibold mb-6 text-center">Certifications</h2>
        <div className="bg-white/10 rounded-xl p-6 shadow-md text-center">
          <h3 className="text-xl font-medium mb-2">
            IBM Certification: Python for Web Development
          </h3>
          <p className="text-gray-200">
            Completed professional training covering Python web frameworks,
            backend integration, and deployment best practices.
          </p>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="text-center py-6 border-t border-white/20 mt-10 text-gray-400 text-sm">
        © {new Date().getFullYear()} Nachiket Bari. All rights reserved.
      </footer>
    </div>
  );
}

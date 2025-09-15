// src/PortfolioModern.jsx
import React from "react";

export default function PortfolioModern() {
  return (
    <div className="font-sans text-gray-800">
      {/* ===== Hero Section with Split Layout ===== */}
      <section
        id="home"
        className="relative min-h-screen flex flex-col md:flex-row"
      >
        {/* Left: Info */}
        <div className="flex-1 flex flex-col justify-center px-8 md:px-16 bg-gradient-to-br from-blue-700 to-indigo-800 text-white">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Nachiket Bari
          </h1>
          <p className="mt-4 text-lg text-blue-100">
            Data Software Engineer | Full-Stack & Cloud
          </p>
          <p className="mt-6 text-blue-100 max-w-md">
            I build scalable applications and manage cloud infrastructure
            with Python, Django, React, AWS, and more.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#projects"
              className="bg-white text-blue-700 px-5 py-2 rounded-md font-semibold shadow hover:bg-blue-50"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-white px-5 py-2 rounded-md font-semibold hover:bg-white hover:text-blue-700"
            >
              Contact
            </a>
          </div>

          <div className="mt-6 flex gap-4 text-2xl">
            <a href="https://github.com/your-github" className="hover:text-yellow-300">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/your-link" className="hover:text-yellow-300">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="mailto:you@example.com" className="hover:text-yellow-300">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>

        {/* Right: Background Image */}
        <div className="flex-1 relative">
          <img
            src="/images/bg-tech.jpg"
            alt="Tech background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
          <div className="absolute bottom-6 left-6">
            <img
              src="/images/nachiket.jpg"
              alt="Nachiket Bari"
              className="w-40 h-40 rounded-full border-4 border-white shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* ===== About ===== */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold text-center text-gray-800">
          About Me
        </h2>
        <p className="mt-6 text-center text-gray-600 max-w-3xl mx-auto">
          I’m a results-driven engineer experienced in Python/Django, React,
          Advanced SQL, MongoDB, and AWS. I design and deploy full-stack,
          data-driven solutions with a focus on scalability and cloud
          infrastructure.
        </p>
      </section>

      {/* ===== Projects ===== */}
      <section id="projects" className="bg-gray-50 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center text-gray-800">
            Projects
          </h2>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {title: "FlightFinder - FlyNow", desc: "Flight & taxi booking app with booking management and payment integration."},
              {title: "Gamestop", desc: "Modern ecommerce-style site for selling games built with Django and React."},
              {title: "Nagvel Vikas Dairy", desc: "Small-business product site with Django admin and Bootstrap UI."}
            ].map((p) => (
              <div key={p.title} className="bg-white rounded-lg shadow hover:shadow-lg transition">
                <div className="h-40 bg-gradient-to-br from-blue-100 to-indigo-100"></div>
                <div className="p-5">
                  <h3 className="font-semibold text-lg text-blue-700">{p.title}</h3>
                  <p className="text-sm text-gray-600 mt-2">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Contact ===== */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold text-center text-gray-800">
          Get In Touch
        </h2>
        <form className="mt-8 space-y-4">
          <input
            className="w-full border border-gray-300 rounded-md p-3"
            placeholder="Your name"
          />
          <input
            className="w-full border border-gray-300 rounded-md p-3"
            placeholder="Your email"
          />
          <textarea
            className="w-full border border-gray-300 rounded-md p-3 h-32"
            placeholder="Message"
          ></textarea>
          <button className="bg-blue-700 text-white px-6 py-3 rounded-md shadow hover:bg-blue-600">
            Send Message
          </button>
        </form>
      </section>

      <footer className="border-t text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} Nachiket Bari — Built with Tailwind & React
      </footer>
    </div>
  );
}

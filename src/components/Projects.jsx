import React from "react";
import gymimg from "./images/gym.png"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  
  {
    title: "E-commerce App",
    description: "Shop online with React + Node.js backend.",
    image: "/images/ecommerce.jpg",
    liveLink: "https://example.com/ecommerce",
    codeLink: "https://github.com/example/ecommerce",
  },
  {
    title: "Blog Platform",
    description: "Write and share tech blogs, MERN stack project.",
    image: "/images/blog.jpg",
    liveLink: "https://example.com/blog",
    codeLink: "https://github.com/example/blog",
  },
  {
    title: "Gym Website",
    description: "Responsive MERN website for fitness enthusiasts.",
    image: gymimg ,
    liveLink: "https://aashishraghav230.github.io/x-gym/",
    codeLink: "https://github.com/AashishRaghav230/x-gym",
  },
  {
    title: "Portfolio Website",
    description: "Showcase skills and projects in a personal portfolio.",
    image: "/images/portfolio.jpg",
    liveLink: "https://example.com/portfolio",
    codeLink: "https://github.com/example/portfolio",
  },
];



export default function Projects() {
    useEffect(() => {
        AOS.init({ duration: 1000 }); 
      }, []);
  return (
    <section
      id="projects"
      className="w-full bg-black text-white py-16 px-6 md:px-20"
    >
      <div data-aos="fade-up" className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-purple-500 mb-6">
           <span className="text-white">My</span> Projects
        </h2>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
          Some of my recent works. I focus on clean, modern UI with smooth
          interactions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group bg-neutral-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-purple-500/50 transition-shadow duration-300"
            >
              {/* Image with hover zoom effect */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col gap-3">
                <h3 className="text-lg font-semibold text-purple-400">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm">{project.description}</p>

                {/* Buttons */}
                <div className="flex gap-3 mt-3">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-purple-500 text-black py-2 rounded hover:bg-purple-400 transition-colors"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-gray-800 text-white py-2 rounded hover:bg-gray-700 transition-colors"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

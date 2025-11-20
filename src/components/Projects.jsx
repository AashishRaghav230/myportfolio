import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import gym from "./images/gym.png";

export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const allProjects = [
    {
      id: 1,
      category: "React",
      title: "Gym Website",
      desc: "Responsive gym website using React + Tailwind.",
      img: gym,
      tech: ["React", "Tailwind", "AOS"],
      live: "https://aashishraghav230.github.io/x-gym/",
      code: "https://github.com/AashishRaghav230/x-gym",
    },
    {
      id: 2,
      category: "MERN",
      title: "E-Commerce Store",
      desc: "Full MERN stack e-commerce with authentication.",
      img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
      tech: ["React", "Tailwind", "AOS"],
      live: "https://your-live-link.com",
      code: "https://github.com/your-code",
    },
    {
      id: 3,
      category: "UI",
      title: "Portfolio Website",
      desc: "Clean UI portfolio with animations & dark mode.",
      img: "https://images.unsplash.com/photo-1522199710521-72d69614c702",
      tech: ["React", "Tailwind", "AOS"],
      live: "https://your-live-link.com",
      code: "https://github.com/your-code",
    },
  ];

  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", "React", "MERN", "UI"];

  const filteredProjects =
    activeFilter === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === activeFilter);

  return (
    <section className="py-20 bg-black text-white" id="projects">
      <div className="max-w-6xl mx-auto px-5">

        <h2 data-aos="fade-up" className="text-4xl font-bold text-center mb-3">
          <span className="text-purple-500">My</span> Projects
        </h2>

        <p
          data-aos="fade-up"
          data-aos-delay="150"
          className="text-center text-gray-400 max-w-2xl mx-auto mb-10"
        >
          Some of my recent works. I focus on clean, modern UI with smooth
          interactions.
        </p>

        {/* Filter Buttons */}
        <div
          data-aos="fade-up"
          data-aos-delay="250"
          className="flex justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-sm border transition 
              ${
                activeFilter === filter
                  ? "bg-purple-600 border-purple-500"
                  : "border-gray-700 hover:border-purple-500"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((p, i) => (
            <div
              key={p.id}
              data-aos="fade-up"
              data-aos-delay={200 + i * 150}
              className="p-[2px] rounded-2xl glow-border"
            >
              <div className="tilt-card bg-gray-900/60 backdrop-blur-xl rounded-2xl overflow-hidden shadow-xl relative group">
                
                {/* Shine */}
                <div className="shine absolute inset-0 opacity-0 group-hover:opacity-100"></div>

                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-48 object-cover transform group-hover:scale-110 duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <p className="text-gray-300 mt-2">{p.desc}</p>

                  <div className="flex flex-wrap gap-2 mt-3">
                    {p.tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-xs bg-purple-600/20 border border-purple-500 px-3 py-1 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mt-5">

                    <a
                      href={p.live}
                      target="_blank"
                      className="flex items-center gap-2 text-purple-400 hover:text-purple-300"
                    >
                      <FaExternalLinkAlt /> Live
                    </a>

                    <a
                      href={p.code}
                      target="_blank"
                      className="flex items-center gap-2 text-purple-400 hover:text-purple-300"
                    >
                      <FaGithub /> Code
                    </a>

                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

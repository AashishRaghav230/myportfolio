import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiJavascript, SiTailwindcss, SiExpress } from "react-icons/si";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const skills = [
  { title: "HTML", icon: FaHtml5, level: 90 },
  { title: "CSS", icon: FaCss3Alt, level: 88 },
  { title: "JavaScript", icon: SiJavascript, level: 85 },
  { title: "React", icon: FaReact, level: 84 },
  { title: "Tailwind CSS", icon: SiTailwindcss, level: 82 },
  { title: "Node.js", icon: FaNodeJs, level: 32 },
  { title: "Express.js", icon: SiExpress, level: 30 },   // ⭐ NEW ADDED
  { title: "MongoDB", icon: SiMongodb, level: 30 },
];

export default function Skills() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);
  return (
    <section
      id="skills"
      className="w-full bg-black text-white py-16 px-6 md:px-20"
    >
      <div data-aos="fade-up" className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-purple-500 mb-6">
           <span className="text-white">My</span> Skills
        </h2>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-10">
          Technologies I work with — hands-on experience building responsive and
          production-ready UI with modern stacks.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, idx) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={idx}
                className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-5 flex flex-col items-center text-center hover:translate-y-[-6px] transition-transform duration-300"
              >
                <div className="text-purple-400 mb-3">
                  <IconComponent className="text-4xl md:text-5xl" />
                </div>

                <h4 className="text-white font-semibold">{skill.title}</h4>

                {/* Progress Bar */}
                <div className="w-full mt-3">
                  <div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
                    <div
                      className="h-2 bg-purple-400 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <div className="text-xs text-gray-400 mt-1">
                    {skill.level}%
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-400">
            Want to see these in action? Check my{" "}
            <span className="text-purple-400 font-semibold">Projects</span>{" "}
            section.
          </p>
        </div>
      </div>
    </section>
  );
}

import myImage from "./images/coder.svg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // repeatable animations
  }, []);

  return (
    <section id="about" className="w-full bg-black text-white py-16 px-6 md:px-20 overflow-hidden">
      <div className="mx-auto">

        {/* Heading */}
        <h2 data-aos="fade-up" className="text-3xl font-bold text-center mb-4">
          About <span className="text-purple-500">Me</span>
        </h2>

        <p data-aos="fade-up" data-aos-delay="150" className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Get to know more about my background and passion
        </p>

        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">

          {/* Left: Image */}
          <div data-aos="fade-right" data-aos-delay="200" className="w-full md:w-1/2 flex justify-center">
            <img
              src={myImage}
              alt="Ashish"
              className="w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-[420px] lg:w-[420px] lg:h-[420px] xl:w-[500px] xl:h-[500px] rounded-3xl border-4 border-purple-500 shadow-[0_0_30px_#a855f7]"
            />
          </div>

          {/* Right: Content */}
          <div data-aos="fade-left" data-aos-delay="250" className="w-full md:w-1/2 max-w-xl space-y-6 flex flex-col justify-center">

            <p className="text-lg leading-7 text-gray-300 text-center md:text-left">
              Hi, I’m <span className="text-purple-400 font-semibold">Aashish</span> — 
              a passionate <span className="text-purple-400">MERN Stack Developer</span> focused on building
              stylish, responsive and user-friendly frontend experiences. I build clean and modern interfaces that feel smooth and responsive.
              I create polished digital experiences that connect design and function. When I’m not coding, I love exploring new tools and learning modern tech.
              I stay updated by exploring new ideas and experimenting with fresh tools. I keep growing by learning new skills & new technology.
            </p>

            {/* Strengths */}
            <div data-aos="fade-up" data-aos-delay="350">
              <h3 className="text-2xl font-semibold text-purple-400 mb-2">My Strengths</h3>
              <ul className="space-y-1 text-gray-300">
                <li>• Strong frontend knowledge</li>
                <li>• Quick learner & problem solver</li>
                <li>• Clean coding style</li>
              </ul>
            </div>

            {/* Goal */}
            <div data-aos="fade-up" data-aos-delay="450">
              <h3 className="text-2xl font-semibold text-purple-400 mb-2">My Goal</h3>
              <p className="text-gray-300">
                To work as a <span className="text-purple-400 font-semibold">Frontend or Full-Stack Developer</span> 
                and build impactful, modern applications.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

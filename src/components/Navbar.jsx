import { useState, useEffect } from "react";
import Ashish from "./images/A.svg";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

function Navbar() {
  const [showmenu, setshowmenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll background change
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed w-full z-50 py-4 px-8 transition-all duration-300 
        ${isScrolled ? "bg-tranparent " : "bg-transparent"}`}
      >
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <a href="#">
              <img src={Ashish} />
            </a>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-10">
            <a href="#home" className="relative text-white transition duration-300 hover:text-purple-500 group">
              <span>Home</span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </a>

            <a href="#about" className="relative text-white transition duration-300 hover:text-purple-500 group">
              <span>About</span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </a>

            <a href="#skills" className="relative text-white transition duration-300 hover:text-purple-500 group">
              <span>Skills</span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </a>

            <a href="#projects" className="relative text-white transition duration-300 hover:text-purple-500 group">
              <span>Projects</span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </a>


            <a href="#contact" className="relative text-white transition duration-300 hover:text-purple-500 group">
              <span>Contact</span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          {/* Mobile button */}
          <div className="md:hidden text-white">
            {showmenu ? (
              <FaXmark
                onClick={() => setshowmenu(!showmenu)}
                className="text-2xl cursor-pointer"
              />
            ) : (
              <FaBars
                onClick={() => setshowmenu(!showmenu)}
                className="text-2xl cursor-pointer"
              />
            )}
          </div>
        </div>

        {/* Mobile menu */}
        {showmenu && (
          <div className="md:hidden mt-4 bg-black h-screen rounded-lg p-4 flex flex-col space-y-4 text-center justify-center">
            <a onClick={() => setshowmenu(!showmenu)} href="#home" className="text-white hover:text-purple-500">Home</a>
            <a onClick={() => setshowmenu(!showmenu)} href="#about" className="text-white hover:text-purple-500">About</a>
            <a onClick={() => setshowmenu(!showmenu)} href="#skills" className="text-white hover:text-purple-500">Skills</a>
            <a onClick={() => setshowmenu(!showmenu)} href="#projects" className="text-white hover:text-purple-500">Projects</a>
            <a onClick={() => setshowmenu(!showmenu)} href="#contact" className="text-white hover:text-purple-500">Contact</a>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
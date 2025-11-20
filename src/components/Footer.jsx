import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="bg-black text-white py-6 text-center">
      {/* Social Icons */}
      <div className="flex justify-center gap-5 mb-4">
        <a
          href="#"
          className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-blue-600 hover:text-white transition-all"
        >
          <FaFacebookF />
        </a>
        <a
          href="#"
          className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-gradient-to-tr hover:from-pink-500 hover:via-purple-500 hover:to-yellow-500 hover:text-white transition-all"
        >
          <FaInstagram />
        </a>
        <a
          href="#"
          className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-blue-600 hover:text-white transition-all"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="#"
          className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-purple-500 hover:text-white transition-all"
        >
          <FaGithub />
        </a>
      </div>

      {/* All Rights Reserved */}
      <p className="text-white/70 text-sm">
        © {new Date().getFullYear()} Aashish Raghav — All Rights Reserved
      </p>
    </footer>
  );
}

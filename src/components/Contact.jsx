import React from "react";
import contact from "./images/contact.svg"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);
  return (
   
    <div id="contact" className="w-full min-h-screen  pt-16 bg-gradient-to-r from-pink-700 via-purple-700 to-indigo-700 flex justify-center items-center px-4 py-10">
      
      <div data-aos="fade-up" className="max-w-6xl w-full grid lg:grid-cols-2 gap-10 items-center">
        
        {/* LEFT IMAGE */}
        <div className="hidden lg:block">
          <img 
            src={contact} 
            alt="contact illustration"
            className="w-full"
          />
        </div>

        {/* RIGHT FORM */}
        <div className="text-white">
          <h1 className="text-4xl font-bold mb-8">Get In Touch</h1>

          <form className="space-y-6">
            {/* FIRST & LAST NAME */}
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="First Name"
                className="bg-transparent border border-white/40 px-5 py-4 rounded-xl outline-none text-white placeholder-white/60"
              />

              <input
                type="text"
                placeholder="Last Name"
                className="bg-transparent border border-white/40 px-5 py-4 rounded-xl outline-none text-white placeholder-white/60"
              />
            </div>

            {/* EMAIL & PHONE */}
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-transparent border border-white/40 px-5 py-4 rounded-xl outline-none text-white placeholder-white/60"
              />

              <input
                type="number"
                placeholder="Phone No."
                className="bg-transparent border border-white/40 px-5 py-4 rounded-xl outline-none text-white placeholder-white/60"
              />
            </div>

            {/* MESSAGE BOX */}
            <textarea
              rows="5"
              placeholder="Message"
              className="bg-transparent border border-white/40 px-5 py-4 rounded-xl w-full outline-none text-white placeholder-white/60"
            ></textarea>

            {/* SEND BUTTON */}
            <button className="bg-white text-black font-semibold px-12 py-3 rounded-xl hover:scale-105 transition-all">
              Send
            </button>
          </form>
        </div>

      </div>
    </div>
 
  );
}

export default Contact;
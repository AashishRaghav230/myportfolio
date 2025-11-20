import { motion } from "framer-motion";
import right from "./images/right.svg"


function Home() {
    return ( 
        <>
         <motion.div
         id="home"
         className="back min-h-screen flex items-center pt-20 pb-16"
         >
            <div className=" container mx-auto px-6 flex flex-col md:flex-row items-center justify-between relative top-12 md:top-5">
                {/* left side content */}
                <div className="md:w-1/2 mb-10 md:mb-0 text-white">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Hi, I'm <span className="text-purple-500">Aashish Raghav</span> 
                    </h1>
                    <h2 className=" text-2xl md:text-4xl font-semibold mb-6 typewriter">Mern Stack Developer</h2>
                    <p className="text-lg text-gray-300 mb-8">I create stunning web experiences with modern technologies and innovative design.</p>
                    <div className="flex space-x-4">
                        <a href="" className="px-6 py-3 bg-purple-500 rounded-lg font-medium hover:bg-purple-700 transition duration-300 ">Download CV</a>
                        <a href="contact" className="px-6 py-3 border border-purple-500 rounded-lg font-medium hover:bg-purple-700 transition  ">Contact Me</a>

                    </div>
                </div>

                {/* right side content */}
                <div className="md:w-1/2 flex justify center ">
                    <div className="relative w-64 h-64 md:w-96 md:h-96">
                        <motion.img
                        animate={{y:[0, -20, 0]}}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "easeInOut"
                        }}
                        className="relative  w-64 h-64 md:h-96 md:w-96 lg:ml-32 z-10  animate-float"
                        src={right}
                        />
                    </div>
                </div>
            </div>

         </motion.div>
        </>
     );
}

export default Home;
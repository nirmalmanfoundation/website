import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { news } from "../data";
const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % news.length);
    }, 7000); // Slow transition every 8 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-red-200 py-12 flex flex-col items-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Impact</h2>

      <div className="relative w-full max-w-6xl h-[400px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={news[currentIndex].id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 1.2 }}
            className="absolute w-full h-full flex flex-col md:flex-row bg-red-100 shadow-lg rounded-xl overflow-hidden"
          >
            {/* Left Side: Image */}
            <div className="w-full md:w-1/2 h-auto flex justify-center items-center">
              <img
                src={news[currentIndex].image}
                alt="Slide"
                className="w-full h-auto max-h-[500px] object-contain"
              />
            </div>


            {/* Right Side: Text */}
            <div className="w-full md:w-1/2 flex flex-col justify-center p-6 md:p-10">
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">{news[currentIndex].title}</h3>
              <p className="text-gray-600 mt-3 text-lg leading-relaxed">{news[currentIndex].description}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Hero;

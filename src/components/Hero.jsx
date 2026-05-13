import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {news} from "../data/data"

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const impactData = news?.length ? news : [
    { id: 1, title: "Feeding the Hungry", description: "Daily meals provided to over 500 families..." }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % impactData.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [impactData.length]);

  return (
    <section className="w-full py-16 px-4 md:px-8 bg-[#FDF6EC] flex flex-col items-center">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-['Yatra_One',_cursive] text-[#800020]">
          Our Divine Impact
        </h2>
        <div className="w-24 h-1 bg-[#FF9933] mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="relative w-full max-w-6xl h-[500px] md:h-[400px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={impactData[currentIndex].id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 flex flex-col md:flex-row bg-white shadow-xl rounded-2xl overflow-hidden border border-[#C9A84C]/30"
          >
            {/* Left Image */}
            <div className="w-full md:w-1/2 h-64 md:h-full bg-gray-100 flex items-center justify-center p-4">
               <div className="w-full h-full border-2 border-dashed border-[#C9A84C] flex items-center justify-center bg-[#FDF6EC]">
                  <span className="text-[#800020] font-['Yatra_One',_cursive] text-lg text-center">
                    <img src={impactData[currentIndex].image} alt={impactData[currentIndex].title} />
                  </span>
               </div>
            </div>

            {/* Right Content */}
            <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-12 bg-[#800020] text-[#FDF6EC]">
              <h3 className="text-3xl md:text-4xl font-['Yatra_One',_cursive] text-[#C9A84C] mb-4">
                {impactData[currentIndex].title}
              </h3>
              <p className="text-lg text-gray-200 leading-relaxed font-['Crimson_Pro',_serif]">
                {impactData[currentIndex].description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Hero;
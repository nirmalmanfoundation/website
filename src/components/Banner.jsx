import React, { useState, useEffect } from "react";
import { bannerData } from "../data/data"; // Assuming this exists

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Fallback data if bannerData is empty during testing
  const slides = bannerData?.length ? bannerData : [1, 2, 3]; 

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative w-full max-w-7xl mx-auto mt-6 rounded-xl overflow-hidden shadow-2xl border-4 border-[#C9A84C] bg-white min-h-[50vh] md:min-h-[70vh] flex items-center justify-center">
      <div 
        className="flex w-full h-full transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)`, width: `${slides.length * 100}%` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0 relative">
            
            {/* Image Placeholder */}
            <div className="w-full h-full min-h-[50vh] md:min-h-[70vh] flex items-center justify-center bg-[#FDF6EC] m-1">
              <span className="text-[#800020] font-['Yatra_One',_cursive] text-xl md:text-3xl text-center px-4">
                <img src={bannerData[currentSlide].image} alt={bannerData[currentSlide].title} />
              </span>
            </div>
            
            {/* Subtle Gradient Overlay for Text Readability (if you add text over images later) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
          </div>
        ))}
      </div>

      {/* Saffron Dots Navigation */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? "bg-[#FF9933] scale-150 shadow-[0_0_8px_rgba(255,153,51,0.8)]" 
                : "bg-white/60 hover:bg-white"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Banner;
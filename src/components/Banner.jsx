import React, { useState, useEffect } from "react";
import { bannerData } from "../data";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerData.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative w-full h-screen min-h-[60vh] overflow-hidden flex items-center justify-center">
      {/* Slideshow Container */}
      <div 
        className="flex w-full h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {bannerData.map((slide) => (
          <div key={slide.id} className="w-full h-full flex-shrink-0 relative flex items-center justify-center">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover md:object-contain"
            />
          </div>
        ))}
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3">
        {bannerData.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-amber-500 scale-125" : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Banner;

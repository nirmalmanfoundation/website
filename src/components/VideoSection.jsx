import { useRef } from "react";
import { videos } from "../data/ytdata";

const VideoSection = () => {
  const containerRef = useRef();

  const scroll = (direction) => {
    const container = containerRef.current;
    const scrollAmount = container.offsetWidth * 0.8;
    container.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
  };

  return (
    <section className="py-16 px-4 bg-[#FDF6EC]">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-['Yatra_One',_cursive] text-[#800020]">
          Witness Our Journey
        </h2>
        <div className="w-24 h-1 bg-[#C9A84C] mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto group">
        <button
          onClick={() => scroll("left")}
          className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-10 bg-[#FF9933] text-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-[#800020]"
          aria-label="Scroll left"
        >
          &larr;
        </button>

        <div
          ref={containerRef}
          className="flex space-x-6 overflow-x-auto pb-8 px-4 scroll-smooth hide-scrollbar snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {videos.map((vid) => (
            <a
              key={vid.id}
              href={vid.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 w-[85vw] sm:w-[60vw] md:w-[400px] snap-center bg-white rounded-xl shadow-lg border border-[#C9A84C]/20 overflow-hidden transform transition hover:-translate-y-1 group"
            >
              <div className="relative w-full aspect-video border-b border-[#C9A84C]/20">
                {/* Thumbnail */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${vid.thumbnail})` }}
                ></div>

                {/* Custom play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-[#FF9933]/90 rounded-full flex items-center justify-center group-hover:bg-[#800020]/90 transition-colors">
                    <div className="w-0 h-0 border-l-8 border-l-white border-t-6 border-b-6 border-t-transparent border-b-transparent ml-1"></div>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-white">
                <h3 className="text-xl font-bold text-[#800020] mb-2 font-['Crimson_Pro',_serif]">
                  {vid.title}
                </h3>
              </div>
            </a>
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-10 bg-[#FF9933] text-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-[#800020]"
          aria-label="Scroll right"
        >
          &rarr;
        </button>
      </div>
    </section>
  );
};

export default VideoSection;
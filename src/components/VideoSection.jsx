import { useRef } from "react";
const videos = [
  {
    id: 1,
    title: "Our Mission in Action",
    url: "https://www.youtube.com/embed/SKyfzbbKcyg?si=UmsGvID4rhqetKmw",
  },
  {
    id: 2,
    title: "Volunteer Testimonials",
    url: "https://www.youtube.com/embed/E8oN3D-WEfo?si=4nPYRdos42LsIP4_",
  },
  {
    id: 3,
    title: "Food Drive Highlights",
    url: "https://www.youtube.com/embed/Uh1PKqtZZRo?si=EDbX5sNQ-5RmX4-J",
  },
  {
    id: 4,
    title: "Food Drive Highlights",
    url: "https://www.youtube.com/embed/ry-AsQFd0uQ?si=A-DAYpwOewW-0w2v",
  },
  {
    id: 5,
    title: "Food Drive Highlights",
    url: "https://www.youtube.com/embed/ry-AsQFd0uQ?si=A-DAYpwOewW-0w2v",
  },
  {
    id: 6,
    title: "Food Drive Highlights",
    url: "https://www.youtube.com/embed/ry-AsQFd0uQ?si=A-DAYpwOewW-0w2v",
  },
];

const VideoSection = () => {
  const containerRef = useRef();

  const scroll = (direction) => {
    const container = containerRef.current;
    const scrollAmount = container.offsetWidth * 0.95;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-amber-900 mb-2">
          Watch Our Work
        </h2>
        <p className="text-gray-700 text-sm sm:text-base">
          See how we're impacting lives through real stories and events
        </p>
      </div>

      <div className="relative">
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md hover:shadow-lg p-2 rounded-full"
        >
          <svg
            className="w-6 h-6 text-amber-800"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div
          ref={containerRef}
          className="h-full flex space-x-6 overflow-x-auto pb-4 px-8 scroll-smooth hide-scrollbar"
        >
          {videos.map((video) => (
            <div
              key={video.id}
              className="flex-shrink-0 w-[90vw] sm:w-[80vw] md:w-[400px] bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-full aspect-video overflow-hidden rounded-t-xl">
                <iframe
                  className="w-full h-full rounded-t-xl"
                  src={video.url}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-4">
                <h3 className="text-md font-semibold text-gray-800">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md hover:shadow-lg p-2 rounded-full"
        >
          <svg
            className="w-6 h-6 text-amber-800"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default VideoSection;

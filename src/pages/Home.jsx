import React from "react";
import Banner from "../components/Banner";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-gray-100">
      <div className="w-full">
        <Banner />
      </div>

      <div className="w-full max-w-screen-xl mx-auto px-4 md:px-8">
        <Hero />
      </div>
    </div>
  );
};

export default Home;

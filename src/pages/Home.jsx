import React from "react";
import Banner from "../components/Banner";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div className="w-full bg-red-200">
      <Banner />
      <div className="mt-5 w-full h-10 bg-yellow-400"></div>
      <Hero />
    </div>
  );
};

export default Home;

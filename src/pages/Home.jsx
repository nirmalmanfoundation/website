import React from "react";
import Banner from "../components/Banner";
import Hero from "../components/Hero";
import VideoSection from "../components/VideoSection";

const Home = () => {
  return (
    <div className="w-full bg-red-200">
      <Banner />
      <div className="mt-5 w-full h-10 bg-yellow-300"></div>
      <VideoSection/>
      {/* <div className="mt-5 w-full h-10 bg-yellow-300"></div> */}
      <Hero />
    </div>
  );
};

export default Home;

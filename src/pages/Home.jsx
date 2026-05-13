import React from "react";
import Banner from "../components/Banner";
import Hero from "../components/Hero";
import Team from "../components/Team";
import VideoSection from "../components/VideoSection";
import QR from "../components/QR";

const Divider = () => (
  <div className="w-full flex items-center justify-center py-8 opacity-60">
    <div className="w-1/3 h-px bg-gradient-to-r from-transparent to-[#C9A84C]"></div>
    <span className="text-[#C9A84C] mx-4 text-2xl font-['Yatra_One',_cursive]">ॐ</span>
    <div className="w-1/3 h-px bg-gradient-to-l from-transparent to-[#C9A84C]"></div>
  </div>
);

const Home = () => {
  return (
    <div className="w-full bg-[#FDF6EC]">
      <Banner />
      <Divider />
      <Hero />
      <Divider />
      <QR />
      <Divider />
      <VideoSection />
      <Divider />
      <Team />
    </div>
  );
};

export default Home;
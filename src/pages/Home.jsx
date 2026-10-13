import React from "react";
import Banner from "../components/Banner";
import ImpactBand from "../components/ImpactBand";
import MissionSplit from "../components/MissionSplit";
import SevaGrid from "../components/SevaGrid";
import Hero from "../components/Hero";
import QR from "../components/QR";
import VideoSection from "../components/VideoSection";
import Team from "../components/Team";
import CtaBand from "../components/CtaBand";

export default function Home() {
  return (
    <div className="w-full bg-cream-100">
      <Banner />
      <ImpactBand />
      <MissionSplit />
      <SevaGrid />
      <Hero />
      <QR />
      <VideoSection />
      <Team />
      <CtaBand />
    </div>
  );
}

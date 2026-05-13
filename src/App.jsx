import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import WhatsAppButton from "./components/WhatsAppButton";
import News from "./pages/News";

function App() {
  return (
    <div className="min-h-screen bg-[#FDF6EC] font-['Crimson_Pro',_serif] text-gray-800 antialiased selection:bg-[#FF9933] selection:text-white">
      <Router>
        <NavBar />
        <main className="w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/news" element={<News />} />
          </Routes>
        </main>
        <WhatsAppButton />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
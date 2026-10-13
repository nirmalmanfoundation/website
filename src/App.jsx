import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import WhatsAppButton from "./components/WhatsAppButton";
import News from "./pages/News";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

function App() {
  return (
    <div className="min-h-screen bg-cream-100 font-sans text-stone-800 antialiased selection:bg-saffron-500 selection:text-white">
      <Router>
        <ScrollToTop />
        <NavBar />
        <main className="w-full overflow-clip">
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

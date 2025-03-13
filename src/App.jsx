import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <Router>
      <NavBar />

      <Routes>
        <Route
          path="/"
          element={
            <div className="w-full">
              <Home />
            </div>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>

      <div className="fixed bottom-6 right-6 z-50 sm:bottom-4 sm:right-4">
        <WhatsAppButton />
      </div>

      <Footer />
    </Router>
  );
}

export default App;

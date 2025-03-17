import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`sticky top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md" : "bg-white/80"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/">
            <img className="h-16" src="/logofinal.png" alt="NGO Logo" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-amber-900 hover:text-amber-600 font-semibold">
              Home
            </Link>
            <Link to="/news" className="text-amber-900 hover:text-amber-600 font-semibold">
              News
            </Link>
            <Link to="/about" className="text-amber-900 hover:text-amber-600 font-semibold">
              About Us
            </Link>
            <Link to="/gallery" className="text-amber-900 hover:text-amber-600 font-semibold">
              Gallery
            </Link>
            <Link to="/contact" className="text-amber-900 hover:text-amber-600 font-semibold">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-amber-900 hover:text-amber-600 focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="h-6 w-6 ml-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 ml-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md absolute w-full left-0 top-20 z-50">
          <div className="p-3 space-y-2">
            <Link to="/" className="block text-amber-900 hover:text-amber-600 font-medium" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link to="/news" className="block text-amber-900 hover:text-amber-600 font-medium" onClick={() => setIsOpen(false)}>
              News
            </Link>
            <Link to="/about" className="block text-amber-900 hover:text-amber-600 font-medium" onClick={() => setIsOpen(false)}>
              About Us
            </Link>
            <Link to="/gallery" className="block text-amber-900 hover:text-amber-600 font-medium" onClick={() => setIsOpen(false)}>
              Gallery
            </Link>
            <Link to="/contact" className="block text-amber-900 hover:text-amber-600 font-medium" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;

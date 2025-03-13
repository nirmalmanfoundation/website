import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-amber-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and mission */}
          <div className="mb-8 md:mb-0">
            <Link to="/" className="flex items-center mb-4">
              <img src="/logo2.png" alt="NGO Logo" className="h-12 w-auto" />
            </Link>
            <p className="text-amber-200 mb-4 text-sm">
              Dedicated to providing nutritious meals and support to homeless elderly mothers with dignity and compassion.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61573913919317" target="_blank" rel="noopener noreferrer" className="text-amber-200 hover:text-white transition-colors duration-300">
                <FaFacebookF className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/nirmalman.foundation" target="_blank" rel="noopener noreferrer" className="text-amber-200 hover:text-white transition-colors duration-300">
                <FaInstagram className="h-6 w-6" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-amber-200 hover:text-white transition-colors duration-300">
                <FaYoutube className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-amber-200 hover:text-white transition-colors duration-300">About Us</Link></li>
              <li><Link to="/gallery" className="text-amber-200 hover:text-white transition-colors duration-300">Gallery</Link></li>
              <li><Link to="/contact" className="text-amber-200 hover:text-white transition-colors duration-300">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-amber-400 mt-1 mr-3" />
                <span className="text-amber-200">
                  269 A Ganesh Vatika I,<br />
                  Kallawala, Vatika Road,<br />
                  Sanganer, Jaipur - 303905
                </span>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="text-amber-400 mr-3" />
                <span className="text-amber-200">+91 9694711457, +91 9829333137</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-amber-400 mr-3" />
                <span className="text-amber-200">nirmalmanfoundation@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-amber-200 mb-4 text-sm">
              Coming Soon...
            </p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-amber-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-amber-200 text-sm">
              &copy; 2025 Nirmal Mann Foundation Trust. All rights reserved.  
            </p>    
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

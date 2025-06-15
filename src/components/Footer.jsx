import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-amber-900 text-white w-full">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo and mission */}
          <div className="flex flex-col items-start">
            <Link to="/" className="mb-4">
              <img src="/logo2.png" alt="NGO Logo" className="h-14 w-auto" />
            </Link>
            <p className="text-amber-200 text-sm leading-relaxed">
              Committed to uplifting society by supporting underprivileged communities, caring for animals, and promoting overall well-being with compassion and dignity.            </p>
            {/* Social Icons */}
            <div className="flex space-x-4 mt-4">
              <a href="https://www.facebook.com/profile.php?id=61573913919317" target="_blank" rel="noopener noreferrer" className="text-amber-200 hover:text-white transition">
                <FaFacebookF className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/nirmalman.foundation" target="_blank" rel="noopener noreferrer" className="text-amber-200 hover:text-white transition">
                <FaInstagram className="h-6 w-6" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-amber-200 hover:text-white transition">
                <FaYoutube className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-amber-200 hover:text-white transition">About Us</Link></li>
              <li><Link to="/gallery" className="text-amber-200 hover:text-white transition">Gallery</Link></li>
              <li><Link to="/contact" className="text-amber-200 hover:text-white transition">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-amber-400 mt-1 mr-3" />
                <span className="text-amber-200 text-sm leading-relaxed">
                  269 A Ganesh Vatika I, Kallawala,<br />
                  Vatika Road, Sanganer, Jaipur - 303905
                </span>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="text-amber-400 mr-3" />
                <span className="text-amber-200 text-sm">+91 9694711457, +91 9829333137</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-amber-400 mr-3" />
                <span className="text-amber-200 text-sm">nirmalmanfoundation@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Donation</h3>
            <p className="text-amber-200 text-sm">NIRMALMANFOUNDATION TRUST<br></br>
              A/C No: 6951004944<br></br>
              Kotak Mahindra Bank<br></br>
              IFSC: KKBK0003549</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-6 border-t border-amber-700 text-center text-sm text-amber-200">
          &copy; 2025 NirmalMan Foundation Trust. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;

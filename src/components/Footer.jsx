import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#800020] text-[#FDF6EC] w-full border-t-[6px] border-[#C9A84C] relative">
      {/* Decorative Top Border Pattern (Simulated with CSS) */}
      <div className="absolute top-0 left-0 w-full h-2 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iMiIgZmlsbD0iI0M5QTg0QyIgLz48L3N2Zz4=')] opacity-30"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Logo & Mission */}
          <div className="flex flex-col items-start">
             <div className="w-24 h-16 border-2 border-dashed border-[#C9A84C] flex items-center justify-center bg-white mb-6">
                 <span ><img src="logofinal.png" alt="" /></span>
             </div>
            <p className="text-[#FDF6EC]/80 text-sm leading-loose font-['Crimson_Pro',_serif]">
              Committed to uplifting society by supporting underprivileged communities, caring for animals, and promoting overall well-being with compassion and dignity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-['Yatra_One',_cursive] text-[#C9A84C] mb-6">Quick Links</h3>
            <ul className="space-y-3 font-['Crimson_Pro',_serif] text-lg text-[#FDF6EC]/90">
              <li><Link to="/about" className="hover:text-[#FF9933] transition-colors">About Us</Link></li>
              <li><Link to="/gallery" className="hover:text-[#FF9933] transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-[#FF9933] transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-['Yatra_One',_cursive] text-[#C9A84C] mb-6">Reach Us</h3>
            <ul className="space-y-4 font-['Crimson_Pro',_serif] text-[#FDF6EC]/80 text-sm">
              <li className="leading-relaxed">
                <span className="block text-[#FF9933] font-bold mb-1">Address:</span>
                269 A Ganesh Vatika I, Kallawala,<br />
                Vatika Road, Sanganer, Jaipur - 303905
              </li>
              <li>
                <span className="block text-[#FF9933] font-bold mb-1">Phone:</span>
                +91 9694711457, +91 9829333137
              </li>
              <li>
                <span className="block text-[#FF9933] font-bold mb-1">Email:</span>
                nirmalmanfoundation@gmail.com
              </li>
            </ul>
          </div>

          {/* Bank Details */}
          <div className="bg-[#800020] p-6 rounded-xl border border-[#C9A84C]/40 shadow-inner">
            <h3 className="text-xl font-['Yatra_One',_cursive] text-[#FF9933] mb-4">Direct Donation</h3>
            <div className="font-['Crimson_Pro',_serif] text-[#FDF6EC] text-sm space-y-2">
              <p className="font-bold text-base tracking-wide">NIRMALMANFOUNDATION TRUST</p>
              <div className="w-full h-px bg-[#C9A84C]/30 my-2"></div>
              <p><span className="text-[#C9A84C]">A/C No:</span> 6951004944</p>
              <p><span className="text-[#C9A84C]">Bank:</span> Kotak Mahindra Bank</p>
              <p><span className="text-[#C9A84C]">IFSC:</span> KKBK0003549</p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 pt-8 border-t border-[#C9A84C]/30 text-center font-['Crimson_Pro',_serif] text-[#FDF6EC]/60 text-sm flex flex-col items-center">
          <span className="text-[#C9A84C] text-2xl mb-4 font-['Yatra_One',_cursive]">ॐ</span>
          &copy; {new Date().getFullYear()} NirmalMan Foundation Trust. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
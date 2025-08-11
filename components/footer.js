import React from 'react';
import Link from 'next/link';
import { Twitter, Instagram } from 'lucide-react';

// Custom TikTok icon since Lucide doesn't have one
const TikTokIcon = ({ className }) => (
  <svg 
    className={className}
    viewBox="0 0 24 24" 
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-white border-t border-[#C8C8C8] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Main footer content */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-16">
          {/* Logo section */}
          <img src="/IpsumSCH.svg" draggable="false" className="h-12 w-auto mb-4 lg:mb-0" alt="IpsumSCH Logo" />

          {/* Navigation links */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 flex-1 lg:justify-center">
            {/* Left column */}
            <div className="flex flex-col space-y-4">
              <Link 
                href="/sekolah" 
                className="text-gray-700 hover:text-black transition-colors duration-200 font-medium"
              >
                Sekolah
              </Link>
              <Link 
                href="/jenjang" 
                className="text-gray-700 hover:text-black transition-colors duration-200 font-medium"
              >
                Jenjang
              </Link>
              <Link 
                href="/tentang" 
                className="text-gray-700 hover:text-black transition-colors duration-200 font-medium"
              >
                Tentang
              </Link>
              <Link 
                href="/kontak" 
                className="text-gray-700 hover:text-black transition-colors duration-200 font-medium"
              >
                Kontak
              </Link>
            </div>

            {/* Right column */}
            <div className="flex flex-col space-y-4">
              <Link 
                href="/ppdb" 
                className="text-gray-700 hover:text-black transition-colors duration-200 font-medium"
              >
                PPDB
              </Link>
              <Link 
                href="/formulir" 
                className="text-gray-700 hover:text-black transition-colors duration-200 font-medium"
              >
                Formulir
              </Link>
              <Link 
                href="/school-tour" 
                className="text-gray-700 hover:text-black transition-colors duration-200 font-medium"
              >
                School Tour
              </Link>
            </div>
          </div>

          {/* Social media icons */}
          <div className="flex space-x-6 flex-shrink-0">
            <Link 
              href="https://twitter.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-black transition-colors duration-200"
              aria-label="Follow us on Twitter"
            >
              <Twitter size={24} />
            </Link>
            <Link 
              href="https://instagram.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-black transition-colors duration-200"
              aria-label="Follow us on Instagram"
            >
              <Instagram size={24} />
            </Link>
            <Link 
              href="https://tiktok.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-black transition-colors duration-200"
              aria-label="Follow us on TikTok"
            >
              <TikTokIcon className="w-6 h-6" />
            </Link>
          </div>
        </div>

        {/* Copyright section */}
        <div className="mt-16 pt-8 border-t border-[#C8C8C8]">
          <p className="text-gray-500 text-sm">
            Copyright ©2025 IpsumSCH. All Rights Reserved. Made with love by ME
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
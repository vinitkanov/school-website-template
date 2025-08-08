'use client';

import { Menu, ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu
  const [dropdownOpen, setDropdownOpen] = useState(false); // Dropdown menu
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="flex justify-between items-center p-4 pt-8 border-b border-[#C8C8C8] pb-6">
      {/* Logo */}
      <div>
        <img
          src="/IpsumSCH.svg"
          alt="Ipsum School Logo"
          draggable="false"
        />
      </div>

      {/* Mobile menu button */}
      <Menu
        className="md:hidden h-6 w-6 cursor-pointer"
        onClick={toggleMenu}
        aria-expanded={isOpen}
      />

      {/* Desktop nav */}
      <div className="hidden nav-links md:flex items-center gap-6">
        <ul className="flex gap-8 font-regular items-center">
          {/* Dropdown */}
          <li
            className="relative"
            ref={dropdownRef}
            onMouseEnter={() => setDropdownOpen(true)}
          >
            <button
              className="hover:underline flex items-center"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Jenjang <ChevronDown className="inline h-4 w-4 ml-1" />
            </button>

            {dropdownOpen && (
              <ul className="p-4 absolute left-0 mt-2 w-40 bg-white text-black rounded shadow-lg border border-[#C8C8C8]">
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a href="#">SMA</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a href="#">SMP</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a href="#">SD</a>
                </li>
              </ul>
            )}
          </li>

          <li>
            <a href="/about" className="hover:underline">Tentang</a>
          </li>
          <li>
            <a href="/courses" className="hover:underline">Galeri</a>
          </li>
          <li>
            <a href="/contact" className="hover:underline">Kontak</a>
          </li>
        </ul>
        <button className="bg-[#E70CFF] shadow-lg rounded-xl pl-8 pr-8 pt-2 pb-2 text-white">
          PPDB
        </button>
      </div>

      {/* Mobile nav */}
      <div
        className={`nav-links md:hidden ${
          isOpen ? 'block' : 'hidden'
        } absolute top-16 left-0 w-full bg-white shadow-lg p-4`}
      >
        <ul className="flex flex-col gap-6 font-regular text-center mt-5">
          <li><a href="/">Jenjang</a></li>
          <li><a href="/about">Tentang</a></li>
          <li><a href="/courses">Galeri</a></li>
          <li><a href="/contact">Kontak</a></li>
        </ul>
        <button className="bg-[#E70CFF] shadow-lg rounded-xl pl-8 pr-8 pt-2 pb-2 text-white mt-4 w-full">
          PPDB
        </button>
      </div>
    </nav>
  );
}

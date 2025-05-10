import React, { useState, useEffect, useRef } from "react";
import Logo from '../assets/Logo.png'

function Header(){
        const [dropdownOpen, setDropdownOpen] = useState(false);
        const dropdownRef = useRef(null);
      
        const toggleDropdown = () => {
          setDropdownOpen((prev) => !prev);
        };
      
        const handleClickOutside = (event: { target: any; }) => {
          if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setDropdownOpen(false);
          }
        };
      
        useEffect(() => {
          document.addEventListener("mousedown", handleClickOutside);
          return () => {
            document.removeEventListener("mousedown", handleClickOutside);
          };
        }, []);
      
    return(
        <div>
            <header className="bg-white fixed top-0 left-0 right-0 shadow-lg z-50">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-700">DesignHub</h1>
        <nav className="hidden md:flex space-x-8 text-sm font-medium relative">
          <a href="#about" className="hover:text-blue-700">About</a>

          <div className="relative" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className="hover:text-blue-700 focus:outline-none"
            >
              Services
            </button>
            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-50">
                <a href="#services" className="block px-4 py-2 text-sm hover:bg-gray-100">Brand Strategy</a>
                <a href="#services" className="block px-4 py-2 text-sm hover:bg-gray-100">Web Development</a>
                <a href="#services" className="block px-4 py-2 text-sm hover:bg-gray-100">Digital Marketing</a>
              </div>
            )}
          </div>

          <a href="#projects" className="hover:text-blue-700">Projects</a>
          <a href="#contact" className="hover:text-blue-700">Contact</a>
        </nav>
      </div>

            </header>
        </div>

    );

}
export default Header
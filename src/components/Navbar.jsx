import React, { useState } from "react";
import { Link } from "react-router-dom";
import linkedin from "../assets/linkedin.svg";
import gmail from "../assets/gmail.svg";
import github from "../assets/github.svg";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-[#363543] text-white font-title">
      <nav className="px-4 py-4 md:px-8 md:py-6 relative">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          {/* Logo/Hamburger Menu */}
          <div className="flex items-center">
            {/* Mobile Hamburger */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            {/* Desktop Logo */}
            <a href="#home" className="hidden md:block text-2xl md:text-3xl font-semibold">
              Iqbal
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 text-base md:text-xl">
            <a href="#home" className="hover:text-gray-300">
              Home
            </a>
            <a href="#portofolio" className="hover:text-gray-300">
              Portofolio
            </a>
            <a href="#testimonial" className="hover:text-gray-300">
              Testimonial
            </a>
            <a href="#contact" className="hover:text-gray-300">
              Contact
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/iqbal-ramadan-1aa02834a/"
              target="_blank"
            >
              <img
                src={linkedin}
                alt="linkedin"
                className="w-5 h-4 cursor-pointer"
              />
            </a>
            <a
              href="mailto:iqbal.gitlab@gmail.com"
              target="_blank"
            >
              <img src={gmail} alt="gmail" className="w-4 h-5 cursor-pointer" />
            </a>
            <a href="https://github.com/ibayeye" target="_blank">
              <img
                src={github}
                alt="github"
                className="w-4 h-5 cursor-pointer"
              />
            </a>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-[#363543] z-50 h-screen">
            {/* Close Button */}
            <div className="flex justify-between items-center p-4">
              <button onClick={() => setIsMenuOpen(false)}>
                <X size={24} />
              </button>
              <div className="flex space-x-3">
                <a
                  href="https://www.linkedin.com/in/iqbal-ramadan-1aa02834a/"
                  target="_blank"
                >
                  <img
                    src={linkedin}
                    alt="linkedin"
                    className="w-5 h-4 cursor-pointer"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/iqbal-ramadan-1aa02834a/"
                  target="_blank"
                >
                  <img
                    src={gmail}
                    alt="gmail"
                    className="w-4 h-5 cursor-pointer"
                  />
                </a>
                <a href="https://github.com/ibayeye" target="_blank">
                  <img
                    src={github}
                    alt="github"
                    className="w-4 h-5 cursor-pointer"
                  />
                </a>
              </div>
            </div>

            {/* Mobile Menu Items */}
            <div className="flex flex-col items-center pt-20 space-y-8">
              <a
                href="#home"
                className="text-2xl hover:text-gray-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#portofolio"
                className="text-2xl hover:text-gray-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Portofolio
              </a>
              <a
                href="#testimonial"
                className="text-2xl hover:text-gray-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonial
              </a>
              <a
                href="#contact"
                className="text-2xl hover:text-gray-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;

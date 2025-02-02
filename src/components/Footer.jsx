import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <footer className="footer bg-[#2D2D39] font-title p-10 ">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Web Development</a>
          <a className="link link-hover">Mobile App Development</a>
          <a className="link link-hover">Design</a>
        </nav>
        <nav>
          <h6 className="footer-title">About</h6>
          <a className="link link-hover">My History</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <a href="https://www.linkedin.com/in/iqbal-ramadan-1aa02834a/" target="_blank">
              <FaLinkedin className="h-6 w-6 cursor-pointer" />
            </a>
            <a href="https://www.instagram.com/iqbalramadann_/" target="_blank">
              <FaInstagram className="h-6 w-6 cursor-pointer" />
            </a>
            <a>
              <FaFacebook className="h-6 w-6 cursor-pointer" />
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;

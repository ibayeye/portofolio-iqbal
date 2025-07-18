import React from "react";
import iqbal from "../assets/iqbal-removebg.png";
import elipse from "../assets/Ellipse.svg";
import arrow from "../assets/arrow.svg";
import x from "../assets/x.svg";
import ig from "../assets/ig.svg";
import fb from "../assets/fb.svg";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#363543] font-title relative overflow-hidden">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 relative">
        {/* Mobile Layout */}
        <div className="flex flex-col items-center md:hidden">
          {/* Header Text */}
          <div className="w-full text-center mb-8 pt-6">
            <div className="text-gray-400 text-3xl">I'm</div>
            <h1 className="text-4xl font-bold text-white">
              Iqbal Ramadan
              <div className="h-1 w-32 bg-yellow-500 mt-4 mx-auto"></div>
            </h1>
          </div>

          {/* Profile and Ellipse */}
          <div className="relative">
            <div className="absolute">
              <img src={elipse} alt="" className="w-[300px] h-[300px]" />
            </div>
            <div className="relative z-20">
              <img
                src={iqbal}
                alt=""
                className="w-[200px] h-[300px] object-cover"
              />
            </div>
          </div>

          {/* Description and Services */}
          <div className="text-center max-w-sm mx-auto mt-8">
            <p className="text-gray-400">
              A freelancer who provides services for digital programming and
              design content needs, for all businesses with more than 20 years
              of experience
            </p>
          </div>

          <div className="mt-8 w-full max-w-sm">
            <div className="rounded-lg p-6">
              <h2 className="text-2xl mb-4 text-white text-center">Services</h2>
              <p className="text-gray-300 mb-4 text-center">
                Let's build quality products in programming and design with my
                services
              </p>
              <a
                href="#services"
                className="flex items-center text-yellow-500 cursor-pointer justify-center"
              >
                <span>show more</span>
                <img src={arrow} alt="arrow" className="ml-2" />
              </a>
              <a className="flex space-x-4 mt-6 justify-center">
                <a
                  href="https://x.com/?mx=2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-500 cursor-pointer"
                >
                  <img src={x} alt="" />
                </a>
                <a
                  href="https://www.instagram.com/iqbalramadann_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-500 cursor-pointer"
                >
                  <img src={ig} alt="" />
                </a>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-500 cursor-pointer"
                >
                  <img src={fb} alt="" />
                </a>
              </a>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block relative py-12">
          {/* Background Ellipse */}
          <div className="relative">
            <img
              src={elipse}
              alt=""
              className="relative z-0 w-[500px] h-[500px] mx-auto"
            />
          </div>

          {/* Left Text Section */}
          <div className="absolute left-0 top-20 z-10">
            <div className="text-gray-400 text-5xl">I'm</div>
            <h1 className="text-8xl font-bold text-white">
              Iqbal Ramadan
              <div className="h-1 w-64 bg-yellow-500 mt-4"></div>
            </h1>
            <p className="text-gray-400 max-w-sm mt-8">
              A freelancer who provides services for digital programming and
              design content needs, for all businesses with more than 10 years
              of experience
            </p>
          </div>

          {/* Center Profile Image */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <img
              src={iqbal}
              alt=""
              className="w-[400px] h-[600px] object-cover"
            />
          </div>

          {/* Right Services Section */}
          <div className="absolute top-20 right-0 z-30">
            <div className="rounded-lg p-6 max-w-sm">
              <h2 className="text-2xl mb-4 text-white">Services</h2>
              <p className="text-gray-300 mb-4">
                Let's build quality products in programming and design with my
                services
              </p>
              <a
                href="#services"
                className="flex items-center text-yellow-500 cursor-pointer"
              >
                <span>show more</span>
                <img src={arrow} alt="arrow" className="ml-2" />
              </a>
              <a className="flex space-x-4 mt-6">
                <a
                  href="https://x.com/?mx=2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-500 cursor-pointer"
                >
                  <img src={x} alt="" />
                </a>
                <a
                  href="https://www.instagram.com/iqbalramadann_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-500 cursor-pointer"
                >
                  <img src={ig} alt="Instagram" />
                </a>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-500 cursor-pointer"
                >
                  <img src={fb} alt="" />
                </a>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

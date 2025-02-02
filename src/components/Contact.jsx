import React from "react";
import github from "../assets/github.svg";
import iqbal from "../assets/iqbal-removebg.png";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-[#363543] font-title relative overflow-hidden px-4 md:px-12 lg:px-24 py-8 md:py-12 lg:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Left Section */}
        <div>
          <h1 className="text-4xl md:text-5xl font-semibold text-white leading-snug">
            Let's Hire Me And Make The Best Product
          </h1>

          {/* Avatar Section */}
          <div className="avatar mt-6 block md:hidden">
            <div className="w-40 h-40 mx-auto rounded-full overflow-hidden">
              <img
                src={iqbal}
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <p className="text-gray-400 max-w-sm mt-4 leading-relaxed">
            Contact me if you are interested in entrusting your work to me, or
            you can check out my GitHub or LinkedIn to see how I work. Thanks!
          </p>
          <div className="flex gap-4 mt-6">
            {/* GitHub Button */}
            <button
              onClick={() =>
                window.open("https://github.com/ibayeye", "_blank")
              }
              className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white font-semibold rounded-md shadow-md hover:bg-gray-800 transition duration-300"
            >
              <img src={github} alt="GitHub" className="w-6 h-6" />
              GitHub
            </button>
            {/* LinkedIn Button */}
            <button
              onClick={() =>
                window.open("https://www.linkedin.com/in/iqbal-ramadan-1aa02834a/", "_blank")
              }
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-800 transition duration-300"
            >
              <FaLinkedin className="w-6 h-6" />
              LinkedIn
            </button>
          </div>
        </div>

        {/* Avatar Section for Desktop */}
        <div className="avatar hidden md:block">
          <div className="mx-auto rounded-full overflow-hidden">
            <img
              src={iqbal}
              alt="Avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import React from "react";

const Card = ({ title, subtitle, buttonText, view, image }) => {
  return (
    <div className="flex flex-col gap-4 justify-center">
      <div className="flex flex-col gap-2 bg-[#2D2D39] rounded-lg shadow-md">
        <div className="flex flex-row items-center">
          <div className="flex flex-row justify-between items-center w-full text-white p-3 md:p-4">
            <div className="flex flex-col">
              <p className="font-bold text-yellow-500 text-xl md:text-2xl">
                {title}
              </p>
              <p className="mt-1 md:mt-2 text-gray-300 font-light text-sm md:text-base">
                {subtitle}
              </p>
            </div>
            <a
              href="https://github.com/ibayeye"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:opacity-80 transition"
            >
              <p className="text-yellow-500 text-sm md:text-base hidden md:block">
                {buttonText}
              </p>
              <img src={view} alt="view" className="w-5 h-5 md:w-6 md:h-6" />
            </a>
          </div>
        </div>
        <div className="flex flex-row justify-end pl-4">
          <img
            src={image}
            alt={title}
            className="w-full h-48 md:h-64 lg:h-40 object-cover rounded-tl-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;

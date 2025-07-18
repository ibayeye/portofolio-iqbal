import React from "react";
import web from "../assets/web.png";
import mobile from "../assets/mobile.png";
import arrow from "../assets/arrow.svg";

const Services = () => {
  return (
    <div className="min-h-full bg-[#2D2D39] font-title relative overflow-hidden px-4 md:px-12 lg:px-24 py-8 md:py-12 lg:py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white text-center md:text-left">
            What Can I Do For Your Needs
            <div className="h-1 w-32 md:w-48 lg:w-64 bg-yellow-500 mt-2 md:mt-4 mx-auto md:mx-0"></div>
          </h1>
          <p className="text-gray-400 text-base md:text-lg lg:text-xl mt-4 text-center md:text-left max-w-full md:max-w-sm">
            It is easier to entrust the work to the experts because they are
            able to provides the best results with reliable quality
          </p>
          <div className="grid grid-cols-2 gap-4 md:gap-6 mt-6 md:mt-8 text-center md:text-left">
            {[
              { number: "17+", text: "Project Completed" },
              { number: "9", text: "Contract Remote" },
              { number: "10+", text: "Community Network" },
              { number: "2", text: "Years Experience" },
            ].map((item, index) => (
              <div key={index}>
                <h1 className="text-2xl md:text-4xl font-bold text-yellow-500">
                  {item.number}
                </h1>
                <p className="text-white text-sm md:text-base">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 md:gap-6 justify-center">
          {[
            { image: web, title: "Web Development", projects: "10 Project" },
            {
              image: mobile,
              title: "Mobile App Development",
              projects: "7 Project",
            },
          ].map((service, index) => (
            <div key={index} className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-4">
                <div className="flex-shrink-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-32 md:w-[200px] h-24 md:h-[150px] object-cover rounded-lg"
                  />
                </div>
                <div className="flex flex-row justify-between items-center w-full text-white">
                  <div className="flex flex-col">
                    <p className="font-bold text-lg md:text-2xl">
                      {service.title}
                    </p>
                    <p className="mt-1 md:mt-2 text-gray-300 font-light text-sm md:text-base">
                      {service.projects}
                    </p>
                  </div>
                  <a
                    href="#projects"
                    className="flex items-centercursor-pointer"
                  >
                    <img
                      src={arrow}
                      alt="arrow"
                      className="w-5 h-5 md:w-6 md:h-6 "
                    />
                  </a>
                </div>
              </div>
              <div className="h-[1px] w-full bg-yellow-500"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

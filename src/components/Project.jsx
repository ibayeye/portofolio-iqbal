import React from "react";
import mern from "../assets/mern.png";
import pelem from "../assets/pelem.png";
import pmo from "../assets/pmo.png";
import pos from "../assets/pos.png";
import sapu from "../assets/sapu.png";
import kakasualan from "../assets/kakasualan.png";
import arrow from "../assets/arrow.svg";
import Card from "./Card";

const Project = () => {
  return (
    <div className="min-h-full bg-[#363543] font-title relative overflow-hidden px-4 md:px-12 lg:px-24 py-8 md:py-12 lg:py-16">
      <div className="container mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center md:text-left">
          My Best Selected Projects
        </h1>
        <div className="h-1 w-[200px] md:w-[400px] lg:w-[600px] bg-yellow-500 mt-2 md:mt-4 mx-auto md:mx-0"></div>
        <p className="text-gray-400 text-lg md:text-xl lg:text-2xl mt-4 text-center md:text-left">
          The following are the best projects during
          <br />
          the career path as a freelancer
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mt-8">
          <Card
            title="Web Application"
            subtitle="E - Commerce"
            buttonText="View"
            view={arrow}
            image={mern}
          />
          <Card
            title="Web Application"
            subtitle="Project Management Office"
            buttonText="View"
            view={arrow}
            image={pmo}
          />
          <Card
            title="Web Application"
            subtitle="Point of Sales"
            buttonText="View"
            view={arrow}
            image={pos}
          />
          <Card
            title="Mobile Application"
            subtitle="Fetch Api TMBD Flutter"
            buttonText="View"
            view={arrow}
            image={pelem}
          />
          <Card
            title="Mobile Application"
            subtitle="Pendataan dan Monitoring Siswa"
            buttonText="View"
            view={arrow}
            image={sapu}
          />
          <Card
            title="Mobile Application"
            subtitle="Katalog Sepatu"
            buttonText="View"
            view={arrow}
            image={kakasualan}
          />
        </div>
        <div className="flex justify-center mt-6 md:mt-8">
          <button
            onClick={() => window.open("https://github.com/ibayeye", "_blank")}
            className="btn btn-outline btn-warning font-light text-sm md:text-base"
          >
            More Projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;

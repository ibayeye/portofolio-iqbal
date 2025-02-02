import React, { useState } from "react";
import testi1 from "../assets/testi.png";
import testi2 from "../assets/testi2.jpg";
import kutip from "../assets/kutip.svg";
import arrowLeft from "../assets/arrow-left.svg";
import arrow from "../assets/arrow.svg";

const testimonials = [
  {
    id: 1,
    text: "I like working with Iqbal because he is very competent at work and very honest, I really like how he does the various tasks I give him and it's all done on time and satisfactorily.",
    name: "Cece",
    position: "CEO of PT Leuwijaya Utama Textile",
    image: testi1,
  },
  {
    id: 2,
    text: "Working with Iqbal has been a pleasure. His problem-solving skills and dedication are remarkable. I highly recommend him for any project.",
    name: "Celine",
    position: "CTO of Tech Innovators",
    image: testi2,
  },
  // Tambahkan testimoni lainnya jika diperlukan
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="min-h-full bg-[#2D2D39] font-title relative overflow-hidden px-4 py-8 md:px-12 lg:px-24 lg:py-16">
      <div className="container mx-auto">
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center md:text-left">
            Here's What They Say
            <div className="h-1 w-[200px] md:w-[350px] lg:w-[460px] bg-yellow-500 mt-2 md:mt-4 mx-auto md:mx-0"></div>
          </h1>
          <div className="mt-8">
            <div className="flex flex-col md:flex-row rounded-lg shadow-xl">
              <figure className="md:w-1/2 lg:w-[500px]">
                <img
                  src={currentTestimonial.image}
                  alt="Testimonial"
                  className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
                />
              </figure>
              <div className="p-6 md:w-1/2 flex flex-col justify-center">
                <img
                  src={kutip}
                  alt="kutip"
                  className="w-8 h-8 md:w-12 md:h-12 mb-4 mx-auto md:mx-0"
                />
                <h1 className="text-xl md:text-2xl lg:text-3xl text-white font-light text-center md:text-left mb-4">
                  {currentTestimonial.text}
                </h1>
                <p className="text-xl md:text-2xl lg:text-3xl font-bold text-white text-center md:text-left mt-4">
                  {currentTestimonial.name}
                  <br />
                  <span className="text-sm md:text-base font-light">
                    {currentTestimonial.position}
                  </span>
                </p>
                <div className="flex items-center justify-between mt-4">
                  <button onClick={prevTestimonial}>
                    <img
                      src={arrowLeft}
                      alt="arrow-left"
                      className="w-[28px] h-[20px] md:w-[38px] md:h-[28px] cursor-pointer"
                    />
                  </button>
                  <div className="flex items-center justify-center space-x-2">
                    <p className="text-2xl md:text-3xl font-bold text-yellow-500">
                      {String(currentIndex + 1).padStart(2, "0")}
                    </p>
                    <span className="text-sm md:text-base font-light text-white">
                      /{testimonials.length}
                    </span>
                  </div>
                  <button onClick={nextTestimonial}>
                    <img
                      src={arrow}
                      alt="arrow-right"
                      className="w-[28px] h-[20px] md:w-[38px] md:h-[28px] cursor-pointer"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

"use client";
import Image from "next/image";
import React, { useState } from "react";
import { sliderData } from "./sliderData";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

function Slider() {
  const [current, setCurrent] = useState(0);
  const length = sliderData.length;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  if (!Array.isArray(sliderData) || sliderData.length <= 0) {
    return null;
  }
  return (
    <div id="gallery" className="max-w-[1240px] mx-auto">
      <h1 className="text-2xl font-bold text-center p-4">Gallery</h1>
      <div className="relative flex justify-center p-4">
        {sliderData.map((slide, index) => {
          return (
            <div
              key={index}
              className={
                index === current
                  ? "opacity-[1] ease-in duration-1000"
                  : "opacity-0"
              }
            >

              <FaArrowCircleLeft size={50} onClick={prevSlide} className="absolute top-[50%] left-[30px] text-white/70 cursor-pointer select-none z-[2]"/>
              {index === current && (
                <Image
                key={index}
                src={slide.images}
                alt="/"
                width="1400"
                height="600"
                objectFit="cover"
              />
              )}
              <FaArrowCircleRight size={50} onClick={nextSlide} className="absolute top-[50%] right-[30px] text-white/70 cursor-pointer select-none z-[2]" />
              </div>
          );
        })}
        </div>
    </div>
  );
}

export default Slider;

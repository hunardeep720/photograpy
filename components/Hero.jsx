import React from "react";

function Hero({ heading, message }) {
  return (
    <div className="flex justify-center items-center mb-[10rem]  h-screen bg-fixed bg-center bg-cover custom-img">
      {/* Overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]" />
      <div className="p-5 text-white z-[2] mb-[3rem]">
        <h2 className="text-5xl font-bold">{heading}</h2>
        <p className="py-5 text-xl">{message}</p>
        <button className="py-1 px-5 border">Book</button>
      </div>
    </div>
  );
}

export default Hero;

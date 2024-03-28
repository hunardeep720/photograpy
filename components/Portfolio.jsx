import Image from "next/image";
import React from "react";

function Portfolio() {
  return (
    <div className="max-w-[1240px] mx-auto py-6">
      <h1 className="text-center font-bold text-2xl mb-10">Travel Photos</h1>
      <div className="grid grid-rows-2 grid-cols-2 sm:grid-cols-4 sm:grid-rows-2 p-3 gap-3">
        <div className="w-full h-full col-span-2 row-span-2 sm:col-span-2 sm:row-span-2">
          <Image
            src="https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_1280.jpg"
            alt="/"
            width={200}
            height={218}
            layout="responsive"
          />
        </div>
        <div className="w-full h-full">
          <Image
            src="https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072_1280.jpg"
            alt="/"
            width={200}
            height={218}
            layout="responsive"
          />
        </div>
        <div className="w-full h-full">
          <Image
            src="https://cdn.pixabay.com/photo/2017/01/20/00/30/maldives-1993704_1280.jpg"
            alt="/"
            width={200}
            height={218}
            layout="responsive"
          />
        </div>
        <div className="w-full h-full">
          <Image
            src="https://cdn.pixabay.com/photo/2017/03/05/00/34/panorama-2117310_1280.jpg"
            alt="/"
            width={200}
            height={218}
            layout="responsive"
          />
        </div>
        <div className="w-full h-full">
          <Image
            src="https://cdn.pixabay.com/photo/2018/10/19/12/14/train-3758523_1280.jpg"
            alt="/"
            width={200}
            height={218}
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;

import Image from 'next/image'
import React from 'react'
import {sliderData} from './sliderData';

function Slider() {
  return (
    <div id='gallery'>
        <div>
            {sliderData.map((slide, index)=>{
                return<Image key={index} src={slide.images} alt='/' width='1400' height='500' objectFit='cover'/>;
            })}
        </div>
    </div>
  )
}

export default Slider
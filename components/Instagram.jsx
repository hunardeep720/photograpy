import React from 'react'
import Instagraming from './Instagraming'
import image from './InstagramImg';

function Instagram() {
  return (
    <div className='max-w-[12240px] mx-auto text-center py-4'>
        <p className='text-2xl font-bold'>Follow me on Instagram</p>
        <p className='pb-4 font-semibold'>@Capture</p>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
            <Instagraming sourceImg={image[0].image}/>
            <Instagraming sourceImg={image[1].image}/>
            <Instagraming sourceImg={image[2].image}/>
            <Instagraming sourceImg={image[3].image}/>
            <Instagraming sourceImg={image[4].image}/>
            <Instagraming sourceImg={image[5].image}/>
        </div>
    </div>
  )
}

export default Instagram
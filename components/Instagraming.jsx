import React from 'react'
import Image from 'next/image'
import image from './InstagramImg'
import { FaInstagram } from 'react-icons/fa'

function Instagraming({sourceImg}) {
  return (
    <div className='relative'>
      <Image src={sourceImg} alt='instagram' className='w-full h-full'  width={1400} height={600}/>
      <div className='flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/50 group'>
      <p className='hidden text-gray-400 group-hover:block'><FaInstagram size={30}/></p>
      </div>

    </div>
  )
}

export default Instagraming
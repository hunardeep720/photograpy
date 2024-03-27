"use client";
import Link from 'next/link'
import { useState } from 'react';
import React from 'react'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navbar() {
    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(!open)
    }
  return (
    <div className='fixed left-0 top-0 w-full z-10 ease-in duration-300'> 
        <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>
            <Link href="/">
               <h1 className='font-bold text-4xl'>Capture</h1> 
            </Link>
            <ul className='hidden sm:flex'>
                <li className='p-4'>
                    <Link href='/'>Home</Link>
                </li>
                <li className='p-4'>
                    <Link href='/#gallery'>Gallery</Link>
                </li>
                <li className='p-4'>
                    <Link href='/portfolio'>Work</Link>
                </li>
                <li className='p-4'>
                    <Link href='/contact'>Contact</Link>
                </li>
            </ul>
            <div className='block sm:hidden z-10'>
                {open ? (null) : (<AiOutlineMenu size={20} onClick={handleOpen} />)
                }
            </div>
            <div className={open? ('sm:hidden absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-end items-center w-44 h-screen bg-black text-center ease-in duration-300'):('sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex flex-col justify-end items-center w-44 h-screen bg-black text-center ease-in duration-300')}>
                {open? (<AiOutlineClose size={28} className='mb-[20rem] ml-20' onClick={handleOpen} />): (null)}
            <ul className='mb-[12rem] mt-[-12rem]'>
                <li className='p-4 text-4xl hover:text-gray-500'>
                    <Link href='/'>Home</Link>
                </li>
                <li className='p-4 text-4xl hover:text-gray-500'>
                    <Link href='/#gallery'>Gallery</Link>
                </li>
                <li className='p-4 text-4xl hover:text-gray-500'>
                    <Link href='/portfolio'>Work</Link>
                </li>
                <li className='p-4 text-4xl hover:text-gray-500'>
                    <Link href='/contact'>Contact</Link>
                </li>
            </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar
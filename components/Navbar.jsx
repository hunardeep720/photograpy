"use client";
import Link from 'next/link'
import { useState, useEffect } from 'react';
import React from 'react'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navbar() {
    const [open, setOpen] = useState(false)
    const [color, setColor] = useState('transparent');
    const [textColor, setTextColor] = useState('#ffffff');
    const handleOpen = () => {
        setOpen(!open)
    };
    useEffect(() => {
        const changeColor = () => {
            if (window.scrollY >= 80) {
                setColor('#ffffff')
                setTextColor('#000000')
            } 
            else {
                setColor('transparent')
                setTextColor('#ffffff')
            }
        }
        window.addEventListener('scroll', changeColor)
    },[])
  return (
    <div style={{backgroundColor:color}} className='fixed left-0 top-0 w-full z-10 ease-in duration-300 h-24'> 
        <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>
            <Link className='mt-3' href="/">
                {open ?(<h1 style={{color:textColor}} className='font-bold text-4xl ml-48 ease-in duration-300'>Capture</h1>):(<h1 style={{color:textColor}} className='font-bold text-4xl ease-in duration-200 '>Capture</h1>)}
                
            </Link>
            <ul style={{color:textColor}} className='hidden sm:flex'>
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
                {open ? (null) : (<AiOutlineMenu size={20} style={{color:textColor}} className='mt-[1rem]' onClick={handleOpen} />)
                }
            </div>
            <div className={open? ('sm:hidden absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-end items-center w-44 h-screen bg-black text-center ease-in duration-300 z-[18]'):('sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex flex-col justify-end items-center w-44 h-screen bg-black text-center ease-in duration-300 z-[18]')}>
                {open? (<AiOutlineClose size={28} className='mb-[20rem] ml-20' onClick={handleOpen} />): (null)}
            <ul  className='mb-[12rem] mt-[-12rem]'>
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
        <div className='h-10' />
    </div>
  )
}

export default Navbar
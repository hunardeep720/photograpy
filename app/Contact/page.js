import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import React from 'react'

function page() {
  return (
    <div>
      <Hero heading='Contact' message='Submit the form below for work and quotes' />
      <Contact />
    </div>
  )
}

export default page
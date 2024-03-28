import Hero from '@/components/Hero'
import Portfolio from '@/components/Portfolio'
import React from 'react'

function page() {
  return (
    <div>
        <Hero heading='My Work' message='This is some my recent work traveling the world' />
        <Portfolio/>
    </div>
  )
}

export default page
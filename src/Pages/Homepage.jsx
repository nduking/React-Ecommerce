import React from 'react'
import Hero from '../Components/Hero'
import Navbar from '../Components/Navbar'
import Preview from '../Components/Preview'

const Homepage = () => {
  return (
    <main>
        <Navbar/>
        <Hero/>
        <Preview/>
    </main>
  )
}

export default Homepage
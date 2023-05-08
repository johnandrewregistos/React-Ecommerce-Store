import React from 'react'
import { Link } from 'react-router-dom'


const Hero = () => {
  return (
    <section className="h-[30vh] md:h-[70vh] text-gray-600 body-font bg-hero bg-cover bg-center bg-no-repeat bg-opacity-50">
      <div className="container mx-auto h-full flex px-5 md:flex-row flex-col justify-center items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="hidden md:block title-font text-xl md:text-4xl mb-4 font-medium text-gray-900">Before they sold out
            <br className="hidden lg:inline-block"/>
            <span className='blockmd:hidden'></span> readymade gluten
          </h1>
          <p className="hidden md:block mb-8 text-gray-500 leading-relaxed md:w-[400px]">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
          <div className="flex justify-center">
            <Link to={'/products/'} className="inline-flex text-white bg-red-500 tracking-wider border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-2xl md:text-lg">Shop Now</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
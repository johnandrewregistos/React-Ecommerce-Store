import React, { useState, useEffect } from 'react'
import { BiMenuAltRight } from 'react-icons/bi';
import { AiFillCloseSquare } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menu, setMenu] = useState(false)

  const handleMenu = () => {
    setMenu(true);
    document.getElementById("menu").classList.add('hidden');
  }
  const handleClose = () => {
    setMenu(false);
    document.getElementById("menu").classList.remove('hidden');
  }

  useEffect(() => {
    const handleScroll = () => {
      setMenu(false);
      document.getElementById("menu").classList.remove('hidden');
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="text-gray-600 body-font shadow-md">
      <div className="container mx-auto relative flex flex-wrap p-5 flex-row justify-between items-center">
        <Link to={'/'} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-red-500 rounded-full" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Drew</span>
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	hidden md:flex flex-wrap items-center text-base justify-center">
          <Link to={'/about/'} className="mr-5 hover:text-gray-900 cursor-pointer">About</Link>
          <Link to={'/products/'} className="mr-5 hover:text-gray-900 cursor-pointer">Products</Link>
          <Link to={'/blogs/'} className="mr-5 hover:text-gray-900 cursor-pointer">Blogs</Link>
        </nav>
        <Link to={'/cart/'} className="hidden md:flex items-center bg-red-500 border-0 py-1 px-3 focus:outline-none hover:bg-red-600 rounded text-base text-white ">Cart
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </Link >
        <button
          onClick={() => handleMenu()}
          className="block md:hidden items-center bg-red-500 border-0 py-1 px-3 focus:outline-none hover:bg-red-600 rounded text-2xl text-white "><BiMenuAltRight /></button>

        {
          menu === true ?
            <div className="w-[200px] h-screen flex flex-col items-center bg-white/50 absolute top-0 right-0 px-2 duration-300 transition-all">
              <div className="w-full flex justify-end h-10 mt-6 mr-5">
                <button
                  onClick={() => handleClose()}
                  className="flex items-center bg-red-500 border-0 py-1 px-2 focus:outline-none hover:bg-red-600 rounded text-xl text-white "><AiFillCloseSquare /></button>
              </div>
              <nav className=" flex flex-col items-center text-base justify-center">
                <Link to={'/about/'} className="mt-5 hover:text-gray-900 cursor-pointer">About</Link>
                <Link to={'/products/'} className="mt-5 hover:text-gray-900 cursor-pointer">Products</Link>
                <Link to={'/blogs/'} className="my-5 hover:text-gray-900 cursor-pointer">Blogs</Link>
              </nav>
              <Link to={'/cart/'} className="flex items-center bg-red-500 border-0 py-1 px-3 focus:outline-none hover:bg-red-600 rounded text-base text-white ">Cart
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
            :
            <></>
        }
      </div>
    </header>
  )
}

export default Navbar

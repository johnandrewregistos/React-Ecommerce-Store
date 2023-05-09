import React from 'react'
import Footer from './components/Footer'
import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './components/Home'
import Item from './components/Item'
import Navbar from './components/Navbar'
import About from './components/About'
import ItemsTotal from './components/ItemsTotal'
import Blogs from './components/Blogs'
import Cart from './components/Cart'
import Hero from './components/Hero'

function App() {
  const location = useLocation()

  const isHomePage = location.pathname === '/React-Ecommerce-Store/'

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products/:id' element={<Item/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/products/' element={<ItemsTotal/>}/>
        <Route path='/blogs/' element={<Blogs/>}/>
        <Route path='/cart/' element={<Cart/>}/>
      </Routes>
      {isHomePage && <Hero />}
      <Footer />
    </>
  )
}

export default App

import React from 'react'
import Footer from './components/Footer'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Item from './components/Item'
import Navbar from './components/Navbar'
import About from './components/About'
import ItemsTotal from './components/ItemsTotal'
import Blogs from './components/Blogs'

function App() {

  

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products/:id' element={<Item/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/products/' element={<ItemsTotal/>}/>
        <Route path='/blogs/' element={<Blogs/>}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App

import React, { useState, useEffect} from 'react'
import Product from './Product'
import Hero from './Hero'

const Home = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products?limit=12')
      const data = await response.json()
      console.log(data)
      setProducts(data)
    }
    fetchProducts()
  }, []);

  return (
    <div id='home'>
    <Hero />
    {
      products.length > 0 ? 
      <Product products={products} /> 
      :
      <div className='text-2xl font-bold flex justify-center items-center'>Loading...</div>
    }
    </div>
  )
}

export default Home

import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const ItemsTotal = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json()
      console.log(data)
      setProducts(data)
    }
    fetchProducts()
  }, []);

  if(!Object.keys(products).length > 0) return <div className='w-full h-[300px] flex justify-center items-center text-xl font-bold'>Loading...</div>


  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h2 class="text-xs text-red-500 tracking-widest font-medium title-font mb-1">ALL ITEMS</h2>
          <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">MOST POPULAR PRODUCTS</h1>
        </div>
        <div class="flex flex-wrap -m-4">
          {
            products?.map((product) => {
              console.log(product);
              return (
                <Link to={`/products/${product.id}`} className="lg:w-1/4 md:w-1/2 p-4 w-full border border-opacity-40">
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img alt={product.title} className="object-contain object-center w-full h-full block cursor-pointer" src={product.image} />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-sm font-semibold tracking-widest title-font mb-1 uppercase">{product.category}</h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">{product.title}</h2>
                    <p className="mt-1 text-md font-semibod">$ <span></span>{product.price}</p>
                  </div>
                </Link>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default ItemsTotal
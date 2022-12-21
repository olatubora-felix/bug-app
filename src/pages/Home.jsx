import React from 'react'
import Products from '../components/Home/Products'
import Slider from '../components/Home/Slider'

const Home = () => {
  return (
    <main className=" bg-gray-100">
      <Slider />
      <Products />
    </main>
  )
}

export default Home

import React from 'react'
import Banner from '../components/Banner'
import Category from '../components/Home/Category'
import ProductList from '../components/Home/ProductList'

const Home = () => {
  return (
    <main className="mx-auto container my-4 p-4 md:p-0">
      <Banner />
      <div className="py-6 grid-wrapper">
        <Category />
        <ProductList />
      </div>
    </main>
  )
}

export default Home

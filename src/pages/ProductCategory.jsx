import React from 'react'
import { useParams } from 'react-router-dom'
import Banner from '../components/Banner'

import ProductList from '../components/Home/ProductList'
import Category from '../components/Home/Category'

const ProductCategory = () => {
  const { category } = useParams()
  return (
    <main className="mx-auto container my-4 p-4 md:p-0">
      <Banner />
      <div className="py-6 grid-wrapper">
        <Category />
        <ProductList category={category} />
      </div>
    </main>
  )
}

export default ProductCategory

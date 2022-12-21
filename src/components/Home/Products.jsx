import React, { useContext } from 'react'
import { Input } from '@material-tailwind/react'
import ProductContext from '../../context/productContext'
import Items from '../products/Items'
import { Link } from 'react-router-dom'

const Products = () => {
  const ctx = useContext(ProductContext)
  const { products, onChangeSearch, onClickSearch, searchProduct } = ctx
  return (
    <section className="mx-auto container p-4 mt-8">
      <div className="flex justify-between items-center md:flex-row flex-col">
        <h1 className=" text-primary md:text-2xl text-base font-semibold mb-4">
          Our Latest Product
        </h1>
        <div className="w-full md:w-80">
          <Input
            type={'search'}
            label="Search Products..."
            onChange={onChangeSearch}
            value={searchProduct}
            icon={<i class="bi bi-search" onClick={onClickSearch}></i>}
            className=""
          />
        </div>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-4 my-6">
        {products.length >= 1 &&
          products
            ?.slice(0, 8)
            .map((product) => <Items key={product.id} product={product} />)}
      </div>
      {products.length <= 0 && (
        <div className="text-center h-[50px]">
          <h2 className="text-blue-600 font-body text-2xl">
            No Product Result
          </h2>
        </div>
      )}
      <div className="text-center my-6">
        <Link to={'/products'} className="text-blue-600 text-xl">
          View More
        </Link>
      </div>
    </section>
  )
}

export default Products

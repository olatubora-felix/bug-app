import React, { useContext, useState } from 'react'
import { FiMinus } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import ProductContext from '../../context/productContext'

const Category = () => {
  const [open, setOpen] = useState(false)
  const ctx = useContext(ProductContext)
  const { categories } = ctx
  let content

  if (categories.status === 'loading') {
    return (content = <h1 className="text-2xl text-blue-600">Loading...</h1>)
  } else if (categories.status === 'error') {
    return (content = (
      <h1 className="text-xl text-red-600">{categories.error.message}</h1>
    ))
  } else if (categories.status === 'success') {
    content = categories?.data.slice(0, 6).map((category) => (
      <li key={category} className="px-4 mb-3 text-xl">
        <Link
          to={`/products/${category}`}
          className="font-normal text-base text-light_dark "
        >
          {category}
        </Link>
      </li>
    ))
  }
  return (
    <div className="mr-[50px] flex-6">
      <div
        className="flex items-center justify-between bg-main p-3 rounded-md cursor-pointer shadow-md"
        onClick={() => setOpen(!open)}
      >
        <h4 className="font-medium text-xl text-white">Category</h4>
        <FiMinus fontSize={32} className="text-white" />
      </div>
      <ul className={`my-3 ${open ? 'hidden' : 'block'}`}>{content}</ul>
    </div>
  )
}

export default Category

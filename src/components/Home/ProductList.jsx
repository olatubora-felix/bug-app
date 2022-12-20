import axios from 'axios'
import Items from '../products/Items'
import { useEffect, useState } from 'react'

const ProductList = ({ category }) => {
  // const { status, error, data } = useQuery('product', async () => {
  //   const res = await axios.get(
  //     `https://dummyjson.com/products/category/${category}`
  //   )
  //   return res.data
  // })

  const [status, setStatus] = useState('idle')
  const [data, setData] = useState({})
  const [error, setError] = useState('')

  useEffect(() => {
    const getProduct = async () => {
      setStatus('loading')
      try {
        const res = await axios.get(
          `https://dummyjson.com/products/category/${category}`
        )
        if (res.data) {
          setData(res.data)
          setStatus('success')
        }
      } catch (error) {
        setStatus('error')
        setError(error.message)
      }
    }
    getProduct()
  }, [category])

  let content
  if (status === 'loading') {
    return (content = <h1 className="text-2xl text-blue-600">Loading...</h1>)
  } else if (status === 'success') {
    content = data?.products.map((product) => (
      <Items key={product.id} product={product} />
    ))
  } else if (status === 'error') {
    return (content = <h1 className="text-xl text-red-600">{error.message}</h1>)
  }

  return (
    <section className="flex-8 border border-gray-100 shadow-md rounded-md bg-[#BED8FF0D]">
      <div className="flex justify-between w-full border-b border-b-[#3785F7] p-4 ">
        <h2 className=" uppercase text-[#3785F7] font-semibold">
          {category} {data?.total} <span>Items</span>
        </h2>
        <div>
          <span className="mr-3">Sort by:</span>
          <select name="" id="">
            <option>New Products</option>
            <option>Price - Low to High</option>
            <option>Price - High to Low</option>
          </select>
        </div>
      </div>
      <section className="p-4 grid grid-cols-3 gap-4">{content}</section>
    </section>
  )
}

export default ProductList

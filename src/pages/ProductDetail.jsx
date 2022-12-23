import React, { useState } from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'
import facebook from '../assets/facebook.svg'
import twitter from '../assets/twitter.svg'
import linkedin from '../assets/linkedin.svg'
import { Button } from '@material-tailwind/react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { useQuery } from 'react-query'
import Message from '../components/UI/Message'
const ProductDetail = () => {
  const { id } = useParams()
  const [quantity, setQuantity] = useState(1)

  const fetchProduct = async (id) => {
    const res = await axios.get(`https://dummyjson.com/products/${id}`)
    return res.data
  }

  const {
    data: product,
    status,
    error,
  } = useQuery(['product-detail', id], () => fetchProduct(id))
  // Get the product price and multiply it by quantity
  const tottal = product?.price * quantity
  if (status === 'loading') {
    return <Message text="Loading" className="text-blue-600" />
  }

  if (status === 'error') {
    return <Message text={error.message} className="text-red-600" />
  }

  const addQuantity = () => {
    setQuantity((prevState) => prevState + 1)
  }

  // const subQuantity = () => {
  //   setQuantity((prevState) => prevState - 1)
  // }
  const subQuantity = () => {
    setQuantity((prevState) => {
      if (prevState >= 2) {
        return prevState - 1
      }

      return prevState
    })
  }

  const addTocart = () => {
    const data = {
      id: product?.id,
      tottal: tottal,
      title: product?.title,
    }

    console.log(data, 'Cart Added')
  }

  return (
    <main className=" py-6 bg-gray-50">
      <div className="mx-auto container ">
        <ul className="flex gap-1 items-center px-4">
          <li className="text-sm font-normal">Home</li>
          <li className="text-sm font-normal">
            <MdKeyboardArrowRight />
          </li>
          <Link
            to={`/products/${product?.category}`}
            className="text-sm font-normal"
          >
            {product?.category}
          </Link>
          <li className="text-sm font-normal">
            <MdKeyboardArrowRight />
          </li>
          <li className="text-sm font-normal text-blue-500">
            {product?.title}
          </li>
        </ul>
        <section className="my-6 bg-white p-4 rounded-md shadow-lg">
          <div className="flex  md:flex-row flex-col">
            <Carousel showStatus={false} showArrows={false} className="details">
              {product?.images?.map((productImage, i) => (
                <div key={i}>
                  <img
                    src={productImage}
                    alt={product?.title}
                    className="h-[400px]"
                  />
                </div>
              ))}
            </Carousel>
            <div className="flex-1 md:ml-12 ml-0">
              <h4 className="md:text-2xl text-xl font-medium md:mb-6 mb-2">
                {product?.title}
              </h4>
              <span className="md:text-xl text-base font-normal text-black ">
                Product Code: 1234
              </span>
              <div className="md:my-3 my-1 py-4 px-2 border-t-blue-200 border-t border-b-blue-200 border-b">
                <span>${tottal}</span>
              </div>
              <div className="border-b-blue-200 border-b">
                <div className="flex items-center py-3 md:justify-start justify-between">
                  <h4 className="mr-3">Quantity</h4>
                  <div className="text-blue-500 border border-blue-500 flex justify-between items-center rounded-md  w-32">
                    <button
                      className="border-r border-blue-500 flex justify-center items-center flex-1"
                      onClick={subQuantity}
                    >
                      -
                    </button>
                    <span className="border-r border-blue-500 flex justify-center items-center flex-1">
                      {quantity}
                    </span>
                    <button
                      className=" flex justify-center items-center flex-1"
                      onClick={addQuantity}
                    >
                      +
                    </button>
                  </div>
                </div>
                <Button
                  className="my-6 capitalize md:w-[425px] w-full"
                  onClick={addTocart}
                >
                  Add To Cart
                </Button>
              </div>
              <div className="my-4">
                <h4>Share Product</h4>
                <div className="flex my-2">
                  <img src={facebook} alt="" className="w-[38px] h-[38px]" />
                  <img src={twitter} alt="" className="w-[38px] h-[38px]" />
                  <img src={linkedin} alt="" className="w-[38px] h-[38px]" />
                </div>
              </div>
            </div>
          </div>
          <div className="my-6">
            <h4 className="font-medium text-xl text-black">Product Details</h4>
            <p className="font-normal text-sm text-gray-600">
              {product?.description}
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}

export default ProductDetail

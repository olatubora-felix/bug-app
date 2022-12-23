import React, { useState } from 'react'
import fill from '../../assets/fill-wishlist.svg'
import outline from '../../assets/outline-wishlist.svg'
import { Button } from '@material-tailwind/react'
import { Link } from 'react-router-dom'

const Items = ({ product }) => {
  const [wish, setWish] = useState(false)

  return (
    <div className="bg-white p-3 shadow-md w-full md:w-[300px]">
      <Link to={`/products/detail/${product.id}`}>
        <img
          src={product.thumbnail}
          alt=""
          className="h-[200px] w-full md:w-[300px]"
        />
        <div className="flex justify-between my-3 items-center">
          <span>{product.title}</span>
          <div>
            {wish ? (
              <img
                src={fill}
                alt="fill"
                onClick={() => setWish(false)}
                className="cursor-pointer"
              />
            ) : (
              <img
                src={outline}
                alt="outline"
                onClick={() => setWish(true)}
                className="cursor-pointer"
              />
            )}
          </div>
        </div>
        <h3 className="text-blue-500">N{product.price}</h3>
      </Link>
      <Button fullWidth className="my-3">
        Add To Cart
      </Button>
    </div>
  )
}

export default Items

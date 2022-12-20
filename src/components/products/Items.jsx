import React, { useState } from 'react'
import fill from '../../assets/fill-wishlist.svg'
import outline from '../../assets/outline-wishlist.svg'
import { Button } from '@material-tailwind/react'
import { closePaymentModal, useFlutterwave } from 'flutterwave-react-v3'

const Items = ({ product }) => {
  const [wish, setWish] = useState(false)
  const config = {
    public_key: 'FLWPUBK_TEST-e7b07b57bf6009bad5e1bb0181b21583-X',
    tx_ref: Date.now(),
    amount: product.price,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: 'olatuborafelix05@gmail.com',
      phone_number: '07086514426',
      name: 'john Adewale',
    },
    customizations: {
      title: product.title,
      description: product.description,
      logo: product.thumbnail,
    },
    redirect_url: 'http://localhost:3002/success',
  }
  const handleFlutterPayment = useFlutterwave(config)
  return (
    <div className="bg-white p-3 shadow-md w-[300px]">
      <img src={product.thumbnail} alt="" className="h-[200px] w-[300px]" />
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
      <Button
        fullWidth
        className="my-3"
        onClick={() => {
          handleFlutterPayment({
            callback: (response) => {
              console.log(response)
              closePaymentModal() // this will close the modal programmatically
            },
            onClose: () => {},
          })
        }}
      >
        Buy Items
      </Button>
    </div>
  )
}

export default Items

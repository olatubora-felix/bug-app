import axios from 'axios'
import { createContext, useEffect, useState } from 'react'
import { useQuery } from 'react-query'

const BASE_URL = 'https://dummyjson.com'
const ProductContext = createContext({
  categories: {},
  products: [],
  onChangeSearch: () => {},
  result: '',
  productStatus: '',
  productError: '',
  searchProduct: '',
  onClickSearch: () => {},
})

export const ProductContextApi = ({ children }) => {
  const [products, setProducts] = useState([])
  const [searchProduct, setSearchProduct] = useState('')
  const [result, setResult] = useState('')
  const [productStatus, setProductStatus] = useState('idle')
  const [productError, setProductError] = useState('')

  const fetchCategory = async () => {
    const { data } = await axios.get(`${BASE_URL}/products/categories`)
    return data
  }

  // Get product List
  const { status, error, data } = useQuery('categories', () => fetchCategory())

  const categories = {
    data,
    status,
    error,
  }

  // Handle Search Change
  const onChangeSearch = (e) => {
    setSearchProduct(e.target.value)
  }

  // Get All Products
  useEffect(() => {
    const fetchProducts = async () => {
      setProductStatus('loading')
      try {
        const { data } = await axios.get(
          result
            ? `${BASE_URL}/products/search?q=${result}`
            : `${BASE_URL}/products`
        )
        if (data) {
          setProductStatus('success')
          setProducts(data.products)
        }
      } catch (error) {
        setProductStatus('loading')
        if (error) {
          setTimeout(() => {
            setProductError(error.message)
            setProductStatus('failed')
          }, 5000)
        }
      }
    }

    fetchProducts()
  }, [result])

  const onClickSearch = () => {
    if (searchProduct && searchProduct !== '') {
      setResult(searchProduct)
      setSearchProduct('')
    }
  }

  return (
    <ProductContext.Provider
      value={{
        categories,
        products,
        result,
        productError,
        productStatus,
        onClickSearch,
        onChangeSearch,
        searchProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export default ProductContext

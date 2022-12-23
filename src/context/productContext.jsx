import axios from 'axios'
import { createContext, useState } from 'react'
import { useQuery } from 'react-query'

const BASE_URL = 'https://dummyjson.com'
const ProductContext = createContext({
  categories: {},
  products: {},
  onChangeSearch: () => {},
  result: '',
  productStatus: '',
  productError: '',
  searchProduct: '',
  onClickSearch: () => {},
})

export const ProductContextApi = ({ children }) => {
  const [searchProduct, setSearchProduct] = useState('')
  const [result, setResult] = useState('')

  const fetchCategory = async () => {
    const { data } = await axios.get(`${BASE_URL}/products/categories`)
    return data
  }

  // Get Caterogry List
  const categories = useQuery('categories', () => fetchCategory())

  const fetchProducts = async (result) => {
    const { data } = await axios.get(
      result
        ? `https://dummyjson.com/products/search?q=${result}`
        : `https://dummyjson.com/products`
    )
    return data.products
  }

  // Get products List
  const products = useQuery(['products', result], () => fetchProducts(result))

  // Handle Search Change
  const onChangeSearch = (e) => {
    setSearchProduct(e.target.value)
  }

  setTimeout(() => {
    if (result) {
      setResult('')
    }
  }, 5000)

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
        result,
        onClickSearch,
        onChangeSearch,
        searchProduct,
        products,
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export default ProductContext

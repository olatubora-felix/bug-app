import axios from 'axios'
import { createContext } from 'react'
import { useQuery } from 'react-query'

const BASE_URL = ' https://dummyjson.com'
const ProductContext = createContext({
  categories: {},
})

export const ProductContextApi = ({ children }) => {
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
  return (
    <ProductContext.Provider value={{ categories }}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductContext

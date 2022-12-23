import axios from 'axios'
import { useQuery } from 'react-query'

const fetchProduct = ({ queryKey }) => {
  const id = queryKey[1]
  return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
}
export const useProductData = (id) => {
  useQuery(['product-details', id], () => fetchProduct(id))
}

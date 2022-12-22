import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/layouts/Navbar'
import Home from './pages/Home'
import ProductCategory from './pages/ProductCategory'
import ProductDetail from './pages/ProductDetail'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductCategory />} />
        <Route path="/products/detail/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

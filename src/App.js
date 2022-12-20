import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/layouts/Navbar'
import Home from './pages/Home'
import ProductCategory from './pages/ProductCategory'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductCategory />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import Account from './Menu'

const Navbar = () => {
  return (
    <header className="border border-b w-full p-4 md:px-0">
      <nav className="container mx-auto flex items-center justify-between">
        <Link to={'/'}>
          <img src={logo} alt="logo" className="w-20 md:w-28" />
        </Link>
        <div>
          <i class="bi bi-list text-3xl md:hidden block"></i>
        </div>
        <ul className="md:flex hidden items-center gap-4">
          <li>
            <NavLink>About Us</NavLink>
          </li>
          <li>
            <NavLink>Products</NavLink>
          </li>
          <li>
            <NavLink>Help</NavLink>
          </li>
          <li>
            <NavLink>Cart</NavLink>
          </li>
          <li>
            <Account />
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar

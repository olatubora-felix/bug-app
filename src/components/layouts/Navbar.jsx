import { useState, useEffect } from 'react'
import { Navbar, MobileNav, IconButton } from '@material-tailwind/react'
import Account from './GetAccount'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { routes } from '../../constant/data'

export default function Example() {
  const [openNav, setOpenNav] = useState(false)

  useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false)
    )
  }, [])

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {routes.map((route) => (
        <li key={route.id}>
          <NavLink className="text-blue-600" to={route.link}>
            {route.name}
          </NavLink>
        </li>
      ))}
    </ul>
  )

  return (
    <Navbar className=" py-2 px-4 lg:px-8 lg:py-4" fullWidth>
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Link to={'/'}>
          <img src={logo} alt="logo" className="w-20" />
        </Link>
        <div className="hidden lg:block">{navList}</div>

        <Account className="hidden lg:block" />
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        {navList}
        <Account className="block lg:hidden" />
      </MobileNav>
    </Navbar>
  )
}

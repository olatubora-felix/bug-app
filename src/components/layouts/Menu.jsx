import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from '@material-tailwind/react'

const Account = () => {
  return (
    <Menu>
      <MenuHandler>
        <Button variant="gradient">Get Account</Button>
      </MenuHandler>
      <MenuList>
        <MenuItem>Login</MenuItem>
        <MenuItem>Sign Up</MenuItem>
      </MenuList>
    </Menu>
  )
}

export default Account

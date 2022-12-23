import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from '@material-tailwind/react'

const Account = ({ className }) => {
  return (
    <div className={className}>
      <Menu>
        <MenuHandler>
          <Button variant="gradient" fullWidth>
            Get Account
          </Button>
        </MenuHandler>
        <MenuList>
          <MenuItem>Login</MenuItem>
          <MenuItem>Sign Up</MenuItem>
        </MenuList>
      </Menu>
    </div>
  )
}

export default Account

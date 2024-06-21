import { useState } from "react";
import { useLogout } from "../../hooks/useLogout"
import { useAuthContext } from "../../hooks/useAuthContext"
import { NavLink } from "react-router-dom"

import { Avatar, Chip, Divider } from "@mui/material";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import MenuIcon from '@mui/icons-material/Menu';
import Notify from "./utility/Notify";

function Header() {
  const { logout } = useLogout()
  const { user } = useAuthContext()

  const handleLogout = () =>{
    logout()
  }

  const [anchorContact, setAnchorContact] = useState(null);
  const [anchorMenu, setAnchorMenu] = useState(null);
  const [snackOpen, setSnackOpen] = useState(false);

  const contactOpen = Boolean(anchorContact);
  const menuOpen = Boolean(anchorMenu);

  const copyClick = () => {
    setSnackOpen(true);
    navigator.clipboard.writeText("09123456789");
  }

  const openContact = (event) => {
    setAnchorContact(event.currentTarget);
  };
  const openMenu = (event) => {
    setAnchorMenu(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorContact(null);
    setAnchorMenu(null);
  };


  return(
    <div className="flex h-full flex-row items-center justify-between bg-slate-50 px-5 md:px-28 lg:px-36 xl:px-48">
      <NavLink to={"/"} >
        <img src="/logo.svg" alt="Motherly Logo" className="h-6"/>
      </NavLink>

      <div className="hidden lg:flex xl:flex">
        <Button>Home</Button>
        <Button>About Us</Button>
        <Button>FAQ&apos;s</Button>
        <Button
          id="basic-button"
          aria-controls={contactOpen ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={contactOpen ? 'true' : undefined}
          onClick={openContact}
        >
          Contact Us {contactOpen ? <ArrowDropDownIcon/> : <ArrowDropUpIcon/>}
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorContact}
          open={contactOpen}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleClose}>Email</MenuItem>
          <MenuItem onClick={copyClick}>Phone: +63 912 345 6789</MenuItem>
        </Menu>
      </div>

      <div className="hidden lg:flex xl:flex gap-3 items-center">
        {user ? 
          <>
            <NavLink to={"/profile"}>
              <Chip 
                avatar={
                  <Avatar 
                    sx={{ width: 26, height: 26 }}
                    alt={user.email}
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" 
                  />
                }
                label={user.email}
                variant="outlined"
              />              
            </NavLink>
            <Button onClick={handleLogout} variant="text">Logout</Button>
          </>
          :
          <>
            <Button onClick={()=>(location.href = "/signup")} variant="text">Signup</Button>
            <Button onClick={()=>(location.href = "/login")} variant="contained">Login</Button>
          </>
        }
      </div>

      <div className="flex items-center lg:hidden xl:hidden gap-3">
        {user ?
          <NavLink to={"/profile"}>
            <Avatar 
              sx={{ width: 26, height: 26 }}  
              alt={user.email}
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </NavLink>
          :
          <></>
        }

        <IconButton
          aria-controls={contactOpen ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={contactOpen ? 'true' : undefined}
          aria-label="Open menu"
          color="primary"
          onClick={openMenu}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorMenu}
          open={menuOpen}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem>Home</MenuItem>
          <MenuItem>About Us</MenuItem>
          <MenuItem>FAQ&apos;s</MenuItem>
          <MenuItem>Contact Us</MenuItem>
          <MenuItem>&emsp;Email</MenuItem>
          <MenuItem onClick={copyClick}>&emsp;Phone: +63 912 345 6789</MenuItem>
          <Divider/>
          <MenuItem onClick={()=>(location.href = "/signup")}>Signup</MenuItem>
          <MenuItem onClick={()=>(location.href = "/login")}>Login</MenuItem>
        </Menu>
      </div>

      <Notify 
        open={snackOpen}
        setOpen={setSnackOpen}
        message="Text Copied to clipboard"
      />
    </div>
  )  
}

export default Header
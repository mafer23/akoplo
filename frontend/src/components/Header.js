import React, { useState } from "react"
import {HeaderWrapper} from "./styles/HeaderStyles"
import {Navbar} from "./Navbar"
import {MenuButton} from "./MenuButton"
import logo from "../akoplo-white.png";


function Header() {
    const [open, setOpen] = useState(false)
  
    const handleClick = () => {
      setOpen(!open)
    }
  
    return (
      <HeaderWrapper>
        <img src={logo} id="logo"/>
        <Navbar open={open} />
        <MenuButton open={open} handleClick={handleClick} />
      </HeaderWrapper>
    )
  }
  
  export {Header};
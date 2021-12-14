import React from "react"
import { NavbarWrapper } from "./styles/NavbarStyles"

function Navbar({ open }) {
  return (
    <NavbarWrapper open={open}>
      <a href="#">Home</a>
      <a href="#">Mi cuenta</a>
      <a href="#">Contacto</a>

    </NavbarWrapper>
  )
}

export {Navbar};
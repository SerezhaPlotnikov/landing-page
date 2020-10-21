import React from 'react'
import { FaBars } from 'react-icons/fa'
import {
  MobileIcon,
  Nav,
  NavBtn,
  NavBtnLink,
  NavContainer,
  NavItem,
  NavLinks,
  NavLog,
  NavMenu,
} from './NavbarElements'

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavContainer>
          <NavLog to='/'>Project Ones</NavLog>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='about'>About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='discover'>Discover</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='services'>Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='singup'>Sing Up</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/singin'>Sing In</NavBtnLink>
          </NavBtn>
        </NavContainer>
      </Nav>
    </>
  )
}

export default Navbar

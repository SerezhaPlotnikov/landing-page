import React from 'react'
import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  SidebarRouter,
  SidebarWrapper,
  SideBtnWrap,
} from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='about' onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink to='discover' onClick={toggle}>
            Discover
          </SidebarLink>
          <SidebarLink to='services' onClick={toggle}>
            Services
          </SidebarLink>
          <SidebarLink to='signup' onClick={toggle}>
            Sing Up
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRouter to='/signin'>Sing In</SidebarRouter>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}
export default Sidebar

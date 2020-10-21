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
          <SidebarLink to='about'>About</SidebarLink>
          <SidebarLink to='discover'>Siscover</SidebarLink>
          <SidebarLink to='services'>Services</SidebarLink>
          <SidebarLink to='singup'>Sing Up</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRouter to='/singin'>Sing In</SidebarRouter>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}
export default Sidebar

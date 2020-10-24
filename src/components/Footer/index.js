import React from 'react'
import {
  FooterContainer,
  FooterItems,
  FooterLink,
  FooterTitle,
  FooterWrapper,
} from './FooterElements'
export default function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterItems>
          <FooterTitle>About us</FooterTitle>
          <FooterLink to='/signin'>About us</FooterLink>
          <FooterLink to='/signin'>About us</FooterLink>
          <FooterLink to='/signin'>About us</FooterLink>
          <FooterLink to='/signin'>About us</FooterLink>
          <FooterLink to='/signin'>About us</FooterLink>
        </FooterItems>
      </FooterWrapper>
    </FooterContainer>
  )
}

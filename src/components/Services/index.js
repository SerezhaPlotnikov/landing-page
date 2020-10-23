import React from 'react'
import Icon1 from '../../assets/images/svg-1.svg'
import {
  ServicesCard,
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  ServicesP,
  ServicesWrapper,
} from './ServicesElements'

export default function Services() {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} alt='text' />
          <ServicesH2>Reduce expenses</ServicesH2>
          <ServicesP>We help you reduce your expense by reducing</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon1} alt='text' />
          <ServicesH2>Reduce expenses</ServicesH2>
          <ServicesP>We help you reduce your expense by reducing</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon1} alt='text' />
          <ServicesH2>Reduce expenses</ServicesH2>
          <ServicesP>We help you reduce your expense by reducing</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

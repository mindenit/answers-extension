import React, { useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  display: inline-block;

  &:hover .tooltip {
    opacity: 1;
    visibility: visible;
  }
`

const Icon = styled.svg`
  width: 16px;
  height: 16px;
  fill: #92c353;
`

export const CheckCircleIcon: React.FC = () => {
  return (
    <Wrapper>
      <Icon viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
        <path d="M128 24a104 104 0 1 0 104 104A104.2 104.2 0 0 0 128 24Zm45.7 85.9l-58.6 56a8.1 8.1 0 0 1-5.6 2.1a8.3 8.3 0 0 1-5.6-2.1l-29.3-28a8 8 0 1 1 11.2-11.4l23.7 22.5l53-50.7a8 8 0 0 1 11.2 11.6Z" />
      </Icon>
    </Wrapper>
  )
}

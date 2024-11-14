import React from 'react'
import styled from 'styled-components'
import { renderMathContent } from '../utils/utils'

interface ModalTitleProps {
  title: string
}

const Title = styled.h1`
  grid-area: title;
  margin: 0;
  font-size: 1rem;
  line-height: 1.5rem;
  color: !#fff;
`

export const ModalTitle: React.FC<ModalTitleProps> = ({ title }) => {
  return <Title>{renderMathContent(title)}</Title>
}

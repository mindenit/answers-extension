import React from 'react'
import styled from 'styled-components'
import { renderMathContent } from '../utils/utils'

interface ModalTitleProps {
  title: string
}

const Title = styled.h2`
  grid-area: title;
  margin: 0;
  font-size: 1.125rem;
  color: white;
`

export const ModalTitle: React.FC<ModalTitleProps> = ({ title }) => {
  return <Title>{renderMathContent(title)}</Title>
}

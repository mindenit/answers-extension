import React from 'react'
import styled from 'styled-components'
import { CloseButton } from './CloseButton'
import { ModalTitle } from './ModalTitle'
import { AnswerSection } from './AnswerSection'
import { IdSection } from './IdSection'

interface ModalProps {
  isVerified: boolean
  title: string
  answer: string
  id: number
  x: number
  y: number
  onClose: () => void
}

const ModalContainer = styled.div<{ x: number; y: number }>`
  position: absolute;
  background-color: #111628;
  padding: 1.25rem; /* 5 in Tailwind spacing scale */
  border-radius: 0.5rem; /* Rounded corners */
  border: 1px solid #344050;
  box-shadow: 0 4px 12px rgba(33, 150, 243, 0.2);
  width: 500px;
  z-index: 9999;
  display: grid;
  gap: 0.625rem; /* 2.5 in Tailwind spacing scale */
  grid-template-columns: 1fr auto;
  grid-template-areas:
    'title close'
    'question question'
    'answer answer'
    'id id';
  top: ${({ y }) => `${y}px`};
  left: ${({ x }) => `${x}px`};
`

export const Modal: React.FC<ModalProps> = ({ isVerified, title, answer, id, x, y, onClose }) => {
  return (
    <ModalContainer x={x} y={y}>
      <ModalTitle title={title} />
      <CloseButton onClose={onClose} />
      <AnswerSection answer={answer} isVerified={isVerified} />
      <IdSection id={id} />
    </ModalContainer>
  )
}

import React from 'react'
import styled from 'styled-components'
import { CheckCircleIcon } from './ui/CheckCircleIcon'
import { renderMathContent } from '../utils/utils'

interface AnswerSectionProps {
  isVerified: boolean
  answer: string
}

const Container = styled.div`
  padding: 0.625rem;
  background-color: #18260d;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  color: white;
`

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem; 
`

export const AnswerSection: React.FC<AnswerSectionProps> = ({ answer, isVerified }) => {
  return (
    <Container>
      <ContentWrapper>
        {isVerified ? <CheckCircleIcon /> : null}
        {renderMathContent(answer)}
      </ContentWrapper>
    </Container>
  )
}

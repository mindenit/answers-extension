import React from 'react';
import styled from 'styled-components';
import { CheckCircleIcon } from './CheckCircleIcon';
import { renderMathContent } from '../utils/utils';

interface AnswerSectionProps {
  isVerified: boolean;
  answer: string;
}

const Container = styled.div`
    grid-area: answer;
    accent-color: #344050;
    width: 100%;
    padding: 0.625rem; /* 2.5 in Tailwind spacing scale */
    background-color: #18260d;
    border-radius: 0.375rem; /* Rounded corners */
    font-size: 0.875rem; /* Text-sm */
    color: white;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem; /* 2 in Tailwind spacing scale */
`;

// Helper function to render math content


export const AnswerSection: React.FC<AnswerSectionProps> = ({ answer, isVerified }) => {
  return (
    <Container>
      <ContentWrapper>
        {
          isVerified 
           ? <CheckCircleIcon />
           : null
        }
        {renderMathContent(answer)}
      </ContentWrapper>
    </Container>
  );
};
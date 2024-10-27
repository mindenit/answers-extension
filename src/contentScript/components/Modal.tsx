import React from 'react';
import styled from 'styled-components';
import { CloseButton } from './CloseButton';
import { ModalTitle } from './ModalTitle';
import { AnswerSection } from './AnswerSection';
import { IdSection } from './IdSection';

interface ModalProps {
  title: string;
  answer: string;
  id: number;
  x: number;
  y: number;
  onClose: () => void;
}

const ModalContainer = styled.div<{ x: number; y: number }>`
    --tw-ring-offset-width: 0px;
    --tw-ring-offset-color: #fff;
    --tw-ring-color: rgba(59, 130, 246, .5);
    --tw-ring-offset-shadow: 0 0 #0000;
    --tw-ring-shadow: 0 0 #0000;
    --tw-shadow: 0 0 #0000;
    --tw-shadow-colored: 0 0 #0000;
    accent-color: #6368f2;
    position: absolute;
    background-color: #111628;
    padding: 20px;
    border-radius: 8px;
    border: 1px solid #344050;
    box-shadow: 0 4px 12px rgba(33, 150, 243, 0.2);
    width: 400px;
    z-index: 9999;
    display: grid;
    grid-template-areas: 
      "title close"
      "question question"
      "answer answer"
      "id id";
    grid-template-columns: 1fr auto;
    row-gap: 10px;
  top: ${({ y }) => `${y}px`};
  left: ${({ x }) => `${x}px`};
`;

export const Modal: React.FC<ModalProps> = ({
  title,
  answer,
  id,
  x,
  y,
  onClose,
}) => {
  return (
    <ModalContainer x={x} y={y}>
      <ModalTitle title={title} />
      <CloseButton onClose={onClose} />
      <AnswerSection answer={answer} />
      <IdSection id={id} />
    </ModalContainer>
  );
};

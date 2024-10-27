import styled from 'styled-components';

export const ModalContainer = styled.div<{ x: number; y: number }>`
  position: absolute;
  top: ${({ y }) => `${y}px`};
  left: ${({ x }) => `${x}px`};
  background-color: ${({ theme }) => theme.colors.background};
  padding: 20px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.modal};
  width: 500px;
  z-index: 9999;
  display: grid;
  grid-template-areas: 
    "title close"
    "question question"
    "answer answer"
    "id id";
  grid-template-columns: 1fr auto;
  gap: 10px;
`;

export const ModalTitle = styled.h2`
  grid-area: title;
  margin: 0;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const CloseButton = styled.button`
  grid-area: close;
  color: ${({ theme }) => theme.colors.text.primary};
  width: 24px;
  height: 24px;
  border: none;
  background: none;
  border-radius: 50%;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
  padding: 0;
  line-height: 1;
  justify-self: end;

  &:hover {
    transform: rotate(90deg);
  }
`;

export const AnswerContainer = styled.div`
  grid-area: answer;
  width: 100%;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.answer.background};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 14px;
`;

export const IdSection = styled.div`
  grid-area: id;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 14px;
  text-align: right;
  margin-top: 5px;
`;
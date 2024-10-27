import React from 'react';
import styled from 'styled-components';

interface CloseButtonProps {
  onClose: () => void;
}

const StyledButton = styled.button`
  color: white;
  width: 1.5rem;
  height: 1.5rem;
  border: none;
  background: none;
  border-radius: 50%;
  cursor: pointer;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  line-height: 1;
  transition: transform 0.3s ease-in-out;
  justify-self: end;

  &:hover {
    transform: rotate(90deg);
  }
`;

export const CloseButton: React.FC<CloseButtonProps> = ({ onClose }) => {
  return <StyledButton onClick={onClose}>✕</StyledButton>;
};

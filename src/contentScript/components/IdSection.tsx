import React from 'react';
import styled from 'styled-components';

interface IdSectionProps {
  id: number;
}

const Container = styled.div`
    grid-area: id;
    color: white;
    font-size: 0.875rem;
    text-align: right;
    margin-top: 0.375rem;
`;

const StrongText = styled.strong`
  font-weight: bold;
`;

export const IdSection: React.FC<IdSectionProps> = ({ id }) => {
  return (
    <Container>
      <StrongText>ID Питання: </StrongText>
      {id}
    </Container>
  );
}
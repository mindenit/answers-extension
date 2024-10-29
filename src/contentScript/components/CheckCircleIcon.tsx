import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  display: inline-block;

  &:hover .tooltip {
    opacity: 1;
    visibility: visible;
  }
`;

const Icon = styled.svg`
  width: 16px;
  height: 16px;
  fill: #92C353;
`;

const Tooltip = styled.div`
  display: inline-block;
  white-space: nowrap;
  border-radius: 9999px;
  padding: 2px 8px;
  font-size: 0.75rem;
  font-weight: 500;
  background-color: transparent;
  position: absolute;
  color: #fff;
  padding: 0.3rem;
  border-radius: 2rem;
  border: 1px solid #59872c;
  color: #59872c;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 10;
  left: -0.5rem;
  top: 3.5rem;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s, visibility 0.3s;
`;

export const CheckCircleIcon: React.FC = () => {
  return (
    <Wrapper>
      <Icon viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
        <path d="M128 24a104 104 0 1 0 104 104A104.2 104.2 0 0 0 128 24Zm45.7 85.9l-58.6 56a8.1 8.1 0 0 1-5.6 2.1a8.3 8.3 0 0 1-5.6-2.1l-29.3-28a8 8 0 1 1 11.2-11.4l23.7 22.5l53-50.7a8 8 0 0 1 11.2 11.6Z" />
      </Icon>
      <Tooltip className="tooltip">Верифіковано</Tooltip>
    </Wrapper>
  );
};
import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { SelectionPosition } from '../types/types'

interface SelectionIconProps {
  iconLogoPath: string
  position: SelectionPosition
  onIconClick: (e: React.MouseEvent) => void
}

const IconContainer = styled.div<{ position: SelectionPosition }>`
  position: absolute;
  z-index: 9999;
  background-color: white;
  border-radius: 50%;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  width: 1.75rem;
  height: 1.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  top: ${({ position }) => `${position.y}px`};
  left: ${({ position }) => `${position.x}px`};

  &:hover {
    transform: scale(1.1);
  }
`

const IconImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: fill;
`

export const SelectionIcon = forwardRef<HTMLDivElement, SelectionIconProps>(
  ({ iconLogoPath, position, onIconClick }, ref) => {
    return (
      <IconContainer ref={ref} position={position} onClick={onIconClick}>
        <IconImage src={iconLogoPath} alt="Selection Icon" />
      </IconContainer>
    )
  },
)

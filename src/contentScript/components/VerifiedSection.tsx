import React from 'react'
import styled from 'styled-components'

const Tooltip = styled.div`
    border-radius: 9999px;
    padding: 2px 8px;
    font-size: 0.75rem;
    font-weight: 500;
    background-color: transparent;
    color: #fff;
    padding: 0.3rem;
    border-radius: 2rem;
    border: 1px solid #59872c;
    color: #59872c;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

export const VerifiedSection: React.FC = () => {
  return <Tooltip className="tooltip">Верифіковано</Tooltip>
}

import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { AnswerBlock } from './AnswerBlock';

const MainSection = styled.main`
  height: 100vh;
  width: 92%;
  background: #090f1f;
  position: absolute;
  top: 0;
  left: 0;
  overflow-y: auto;
  padding: 1rem
`;

export const SidePanel = () => {
  const [countSync, setCountSync] = useState(0)
  const link = 'https://github.com/guocaoyi/create-chrome-ext'

  useEffect(() => {
    chrome.storage.sync.get(['count'], (result) => {
      setCountSync(result.count || 0)
    })
    chrome.runtime.onMessage.addListener((request) => {
      if (request.type === 'COUNT') {
        setCountSync(request.count || 0)
      }
    })
  }, [])

  return (
    <MainSection>
      <AnswerBlock />
    </MainSection>
  )
}

export default SidePanel
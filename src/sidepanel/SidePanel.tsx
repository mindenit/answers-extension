import { useState, useEffect } from 'react'
import styled from 'styled-components'

const MainSection = styled.main`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #090f1f;
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
      <h3>SidePanel Page</h3>
      <h4>Count: {countSync}</h4>
      <a href={link} target="_blank">
        generated by create-chrome-ext
      </a>
    </MainSection>
  )
}

export default SidePanel
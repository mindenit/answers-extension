import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import HomeIcon from '../../components/ui/HomeIcon'
import ToggleSwitch from '../../components/ui/Switch'


interface ToggleStates {
  experimentalStyles: boolean;
  betaAI: boolean;
  darkMode: boolean;
}

export const Popup = () => {
  const ANSWERS_LINK = 'https://answers.mindenit.org'
  
  const [toggleStates, setToggleStates] = useState<ToggleStates>({
    experimentalStyles: true,
    betaAI: false,
    darkMode: false,
  })

  useEffect(() => {
    chrome.storage.sync.get(['toggleStates'], (result) => {
      if (result.toggleStates) {
        console.log('Loaded from storage:', result.toggleStates);
        setToggleStates((prev) => ({
          ...prev,
          ...result.toggleStates,
        }));
      } else {
        const defaultStates = {
          experimentalStyles: true,
          betaAI: false,
          darkMode: false,
        };
        chrome.storage.sync.set({ toggleStates: defaultStates });
        setToggleStates(defaultStates);
      }
    });
  }, []);
  
  

  const handleToggle = (key: keyof ToggleStates) => {
    setToggleStates((prev) => {
      const newStates = { ...prev, [key]: !prev[key] };
  
      chrome.storage.sync.set({ toggleStates: newStates }, () => {
        console.log('Updated storage:', newStates);
  
        if (key === 'experimentalStyles') {
          chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (tabs[0]?.id) {
              chrome.tabs.sendMessage(tabs[0].id, {
                type: 'TOGGLE_EXPERIMENTAL_STYLES',
                enabled: newStates[key], 
              });
  
              if (!newStates[key]) {
                chrome.tabs.reload(tabs[0].id);
              }
            }
          });
        }
      });
  
      return newStates;
    });
  };
  
  

  const SETTINGS_OPTIONS = [
    { key: 'experimentalStyles' as keyof ToggleStates, label: 'Експериментальні можливості' },
    // { key: 'betaAI' as keyof ToggleStates, label: 'Beta версія ШІ' },
    // { key: 'darkMode' as keyof ToggleStates, label: 'Темна тема' },
  ]

  const SUPPORT_LINKS = [
    { href: 'https://t.me/mindenit_support', label: 'Підтримка 📨' },
    { href: 'https://send.monobank.ua/jar/2hMH9Gr7Dn', label: 'Монобанка 🐈' },
    { href: 'https://base.monobank.ua/DHfiSksgyjSYDT', label: 'Монобаза 💵' },
  ]

  return (
    <Container>
      <Title>Вітаємо вас у розширені Mindenit Answers!</Title>
      <Description>
        Знаходьте відповіді ефективніше з нами!❤️
      </Description>
      
      <HomeLink href={ANSWERS_LINK} target="_blank" rel="noopener noreferrer">
        <HomeIcon />
      </HomeLink>

      <FeaturesContainer>
        <FeatureList>
          <SectionTitle>Налаштування ⚙️</SectionTitle>
          {SETTINGS_OPTIONS.map(({ key, label }) => (
            <ToggleSwitch 
              key={key}
              handleToggle={() => handleToggle(key)}
              initialState={toggleStates[key]}
              label={label}
            />
          ))}
        </FeatureList>

        <FeatureList>
          <SectionTitle>Підтримати проект 💝</SectionTitle>
          {SUPPORT_LINKS.map(({ href, label }) => (
            <SupportLink
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {label}
            </SupportLink>
          ))}
        </FeatureList>
      </FeaturesContainer>
    </Container>
  )
}

const Container = styled.div`
  padding: 1rem;
  width: 450px;
  z-index: 9999;
  display: grid;
  gap: 0.625rem;
  grid-template-columns: 2fr auto;
  grid-template-areas:
    'title home'
    'content content'
    'links links';
  color: white;
`

const Title = styled.h1`
  margin: 0;
  grid-area: title;
`

const Description = styled.p`
  margin: 0;
  grid-area: content;
`

const HomeLink = styled.a`
  grid-area: home;
  color: white;
  width: 50%;
  height: 50%;
`

const FeaturesContainer = styled.div`
  grid-area: links;
  display: flex;
  justify-content: space-around;
  gap: 1rem;
  width: 100%;
`

const FeatureList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const SectionTitle = styled.h2`
  margin: 0;
`

const SupportLink = styled.a`
  color: inherit;
  text-decoration: none;
  padding: 0.5rem;
  border-radius: 0.25rem;
  background-color: rgba(255, 255, 255, 0.1);
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`


export default Popup
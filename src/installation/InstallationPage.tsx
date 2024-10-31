import React from 'react';
import styled from 'styled-components';
import { Check } from 'lucide-react';

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to right, #0057B8, #FFD700);
  padding: 1rem;
`;

const Card = styled.div`
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  padding: 2rem;
  max-width: 28rem;
  width: 100%;
  text-align: center;
`;

const IconContainer = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
`;

const IconCircle = styled.div`
  background-color: #dcfce7;
  border-radius: 9999px;
  padding: 0.75rem;

  svg {
    width: 3rem;
    height: 3rem;
    color: #16a34a;
  }
`;

const Title = styled.h1`
  font-size: 1.875rem;
  font-weight: bold;
  color: #111827;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.25rem;
  color: #4b5563;
  margin-bottom: 1.5rem;
`;

const Footer = styled.div`
  font-size: 1.125rem;
  color: #374151;
`;

const FooterText = styled.p`
  margin-bottom: 0.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const InstallationPage = () => {
  return (
    <PageContainer>
      <Card>
        <IconContainer>
          <IconCircle>
            <Check />
          </IconCircle>
        </IconContainer>
        
        <Title>
          Дякуємо за встановлення!
        </Title>
        
        <Description>
          Ми раді вітати вас у нашій спільноті. Сподіваємось, що наше розширення стане корисним інструментом у вашій роботі.
        </Description>
        
        <Footer>
          <FooterText>🇺🇦 Слава Україні!</FooterText>
          <FooterText>Бажаємо вам приємного користування!</FooterText>
        </Footer>
      </Card>
    </PageContainer>
  );
};

export default InstallationPage;
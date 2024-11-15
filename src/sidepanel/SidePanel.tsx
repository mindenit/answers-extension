import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { AnswerBlock } from './AnswerBlock';
import { ApiQuestions } from '../contentScript/requests/Questions';

const MainSection = styled.main`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  height: 100vh;
  background: #090f1f;
  position: absolute;
  top: 0;
  left: 0;
  overflow-y: auto;
  padding: 1rem;
`;

export const SidePanel = () => {
  const [answers, setAnswersSync] = useState<ApiQuestions.IResponse[]>([]);

  useEffect(() => {
    chrome.storage.sync.get(['answers'], (result: { answers: ApiQuestions.IResponse[] }) => {
      setAnswersSync(result.answers || []);
      console.log(result);
    });
  }, []);

  return (
    <MainSection>
      {answers.map(({ testId, name, answer, isVerified }) => (
        <AnswerBlock
          key={testId}
          id={testId}
          title={name}
          answer={answer}
          isVerified={isVerified}
        />
      ))}
    </MainSection>
  );
};

export default SidePanel;

import styled from 'styled-components'

import { ModalTitle } from './ui/ModalTitle';
import { IdSection } from './ui/IdSection';
import { AnswerSection } from './AnswerSection';
import { VerifiedSection } from './ui/VerifiedSection';

const Block = styled.div`
    background: #111628;
    padding: 0.75rem;
    border-radius: 0.75rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

const TopRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const IdSectionStyled = styled(IdSection)`
    color: #6B7280;
`;

const ModalTitleStyled = styled(ModalTitle)`
    color: white;
    font-size: 1.125rem;
    font-weight: 600;
`;

const AnswerSectionStyled = styled(AnswerSection)`
    background: rgba(34, 197, 94, 0.1);
    padding: 0.5rem;
    border-radius: 4px;
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;



interface IProps {
    id: number,
    title: string,
    answer: string,
    isVerified: boolean 
}

export const AnswerBlock:React.FC<IProps> = ({
    id,
    title,
    answer,
    isVerified
}) => {
    return (
        <Block>
            <TopRow>
                <IdSectionStyled id={id}/>
                <VerifiedSection/>
            </TopRow>
            <ModalTitleStyled title={title} />
            <AnswerSectionStyled answer={answer} isVerified={isVerified} />
        </Block>
    )
}

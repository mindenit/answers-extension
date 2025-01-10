import React, {useState, useEffect} from "react";
import styled from "styled-components";

interface IProps {
  handleToggle: () => void;
  initialState: boolean;
  label: string;
}

const ToggleSwitch: React.FC<IProps> = ({ handleToggle, initialState, label }) => {
 const [isChecked, setIsChecked] = useState(initialState);

  useEffect(() => {
    setIsChecked(initialState); // Оновлюємо локальний стан, коли initialState змінюється
  }, [initialState]);

  const toggleHandler = () => {
    setIsChecked(!isChecked);
    handleToggle(); // Викликаємо функцію-обробник
  };

 return (
   <Container>
     <ToggleContainer>
       <SwitchLabel>
         <SwitchInput
           type="checkbox"
           checked={isChecked}
           onChange={toggleHandler}
         />
         <SwitchSlider />
       </SwitchLabel>
       <ToggleLabel>{label}</ToggleLabel>
     </ToggleContainer>
   </Container>
 );
};

const Container = styled.div`
 display: flex;
 flex-direction: column;
 gap: 0.5rem;
`;

const ToggleContainer = styled.div`
 display: flex;
 align-items: center;
 gap: 0.5rem;
`;

const SwitchLabel = styled.label`
 position: relative;
 display: inline-block;
 width: 48px;
 height: 24px;
 flex-shrink: 0;
`;

const SwitchInput = styled.input`
 opacity: 0;
 width: 0;
 height: 0;
`;

const SwitchSlider = styled.span`
 position: absolute;
 cursor: pointer;
 top: 0;
 left: 0;
 right: 0;
 bottom: 0;
 background-color: #111628;
 border: 1px solid #344050;
 transition: 0.4s;
 border-radius: 24px;

 &:before {
   position: absolute;
   content: "";
   height: 16px;
   width: 16px;
   left: 4px;
   bottom: 3px;
   background-color: white;
   transition: 0.4s;
   border-radius: 50%;
 }

 ${SwitchInput}:checked + & {
   background-color: #2196f3;
 }

 ${SwitchInput}:checked + &::before {
   transform: translateX(24px);
 }
`;

const ToggleLabel = styled.span`
 font-size: 0.9rem;
 color: #e2e6ea;
`;

export default ToggleSwitch;
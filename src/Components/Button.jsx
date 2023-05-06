import React, {useContext} from 'react';
import styled from 'styled-components';
import { DarkModeContext } from '../Context/DarkModeContext';

export default function Button({ children, onClick, selected }) {

  const { darkMode } = useContext(DarkModeContext);

  return (
    <HeaderButton darkMode = {darkMode} selected={selected} onClick={onClick}>
      {children}
    </HeaderButton>
  );
}

const HeaderButton = styled.button`
  color: ${(props) => (props.selected ? 'white' : 'rgb(184,133,107)')};
  border: none;
  background-color: ${(props) => (props.darkMode ? 'rgb(20, 20, 40)' : 'rgb(29, 30, 61)')};
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    color: white;
  }
`;


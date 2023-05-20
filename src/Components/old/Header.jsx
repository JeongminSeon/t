import React, { useContext, useState } from 'react';
import { MdDarkMode } from 'react-icons/md';
import { DarkModeContext } from '../Context/DarkModeContext';
import Button from './Button';
import styled from 'styled-components';

export default function Header({ setActiveIndex }) {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(0);

  const handleButtonClick = (index) => {
    setActiveIndex(index);
    setSelectedButtonIndex(index);
  };

  return (
    <Tab darkMode={darkMode}>
      <DarkButton darkMode={darkMode}
        onClick={() => {
          toggleDarkMode();
        }}
      >
        <Icon darkMode={darkMode} />
      </DarkButton>

      <div
        style={{
          display: 'flex',
          marginLeft: 'auto',
        }}
      >
        <Button
          selected={selectedButtonIndex === 0}
          onClick={() => handleButtonClick(0)}
        >
          ALL
        </Button>
        <Button
          selected={selectedButtonIndex === 1}
          onClick={() => handleButtonClick(1)}
        >
          Active
        </Button>
        <Button
          selected={selectedButtonIndex === 2}
          onClick={() => handleButtonClick(2)}
        >
          Completed
        </Button>
      </div>
    </Tab>
  );
}

const Tab = styled.div`
  background-color: ${(props) => (props.darkMode ? 'rgb(20, 20, 40)' : 'rgb(29, 30, 61)')};
  color: white;
  display: flex;
  padding: 10px;
`;

const Icon = styled(MdDarkMode)`
  background-color: ${(props) => (props.darkMode ? 'rgb(20, 20, 40)' : 'rgb(29, 30, 61)')};
  color: white;
  width: 20px;
  height: 20px;
  cursor: pointer;

  &:hover {
    color: red;
  }
`;

const DarkButton = styled.button`
  background-color: ${(props) => (props.darkMode ? 'rgb(20, 20, 40)' : 'rgb(29, 30, 61)')};
  border: 'none';
`
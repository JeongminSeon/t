import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { DarkModeContext } from '../Context/DarkModeContext';
import { useContext } from 'react';

export default function Input({ todo, setTodo }) {
  const [name, setName] = useState('');

  const { darkMode } = useContext(DarkModeContext);
  const handleSubmit = (event) => {
    event.preventDefault();

    const newItem = {
      id: todo.length + 1,
      todoName: name,
      achieve: true,
    };
    setTodo([...todo, newItem]);
    setName('');
    event.target.reset();
  };

  return (
    <InputWrapper darkMode={darkMode}>
      <Form onSubmit={handleSubmit}>
        <StyledInput
          required
          type="text"
          id="name"
          name="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <Button type="submit">Submit</Button>
      </Form>
    </InputWrapper>
  );
}

const Form = styled.form`
  display: flex;
  justify-content: center;
  padding: 10px;
`;


const Button = styled.button`
  background-color: rgb(242, 143, 54);
  border: none;
  margin-left: 10px;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  color: white;
  font-weight: bold;

  &:hover {
    background-color: rgb(255, 165, 79);
  }
`;

const InputWrapper = styled.div`
  background-color: ${(props) =>
    props.darkMode ? 'rgb(20, 20, 40)' : 'rgb(29, 30, 61)'};
`;

const StyledInput = styled.input`
  width: 200px;
  padding: 5px;
  border: none;
  border-radius: 4px;
  background-color: ${(props) => (props.darkMode ? 'rgb(40, 40, 60)' : 'white')};
  color: ${(props) => (props.darkMode ? 'white' : 'black')};
`;
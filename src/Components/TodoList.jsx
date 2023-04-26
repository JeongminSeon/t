import React from 'react';
import Content from './Content';
import Header from './Header';
import InputBox from './InputBox';
import styled from 'styled-components';

export default function TodoList() {
  return (
    <List>
      <Header />
      <Content />
      <InputBox />
    </List>
  )
}

const List = styled.div`
    
`;
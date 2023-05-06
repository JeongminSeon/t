import React, { Fragment, useState } from 'react';
import Content from './Content';
import Header from './Header';
import Input from './Input';
import styled from 'styled-components';

export default function TodoList() {

  const [activeIndex, setActiveIndex] = useState(0);
  const [Todo, setTodo] = useState([]);

  return (
    <Box>
      <Header setActiveIndex = {setActiveIndex}/>
      <Content activeIndex = {activeIndex} Todo = {Todo}/>
      <Input setTodo = {setTodo}/>
    </Box>
  )
}

const Box = styled.div`
  width : 300px;
  margin-top : 100px;
`

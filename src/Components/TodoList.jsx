import React, { Fragment, useState, useEffect } from 'react';
import Content from './Content';
import Header from './Header';
import Input from './Input';
import styled from 'styled-components';

export default function TodoList() {

  const [activeIndex, setActiveIndex] = useState(0);
  const [todo, setTodo] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo));
  }, [todo]);

  return (
    <Box>
      <Header setActiveIndex = {setActiveIndex} />
      <Content activeIndex = {activeIndex} todo = {todo} setTodo = {setTodo}/>
      <Input todo = {todo} setTodo = {setTodo}/>
    </Box>
  )
}

const Box = styled.div`
  width : 300px;
  margin-top : 100px;
`

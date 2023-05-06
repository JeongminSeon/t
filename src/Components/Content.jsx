import React, { useContext} from "react";
import styled from "styled-components";
import { AiFillDelete } from "react-icons/ai";
import { DarkModeContext } from '../Context/DarkModeContext';


export default function Content({ todo, setTodo, activeIndex }) {

  const {darkMode} = useContext(DarkModeContext);
  const handleAchieve = (item) => {
    setTodo(
      todo.map((list) => {
        if (item.id === list.id) {
          return {
            ...list,
            achieve: !item.achieve,
          };
        }
        return list;
      })
    );
  };
  
  const handleDelete = (item) => {
    setTodo(
      todo.filter((list) => item.id !== list.id)
    )
  }


  return (
    <Container darkMode={darkMode} style={{ minHeight: "275px" }}>
      {todo.map((item) => {
        if (activeIndex === 0) {
          return (
            <Wrapper key={item.id}>
              <CheckBox
                type="checkbox"
                onChange={() => {
                  handleAchieve(item);
                }}
              />
              {item.achieve ? (
                <span>{item.todoName}</span>
              ) : (
                <span style={{ textDecoration: "line-through" }}>{item.todoName}</span>
              )}
              <DeleteButton onClick={() => handleDelete(item)}>
                <AiFillDelete />
              </DeleteButton>
            </Wrapper>
          );
        } else if (activeIndex === 1 && item.achieve === true) {
          return (
            <Wrapper key={item.id}>
              <CheckBox
                type="checkbox"
                onChange={() => {
                  handleAchieve(item);
                }}
              />
              <span>{item.todoName}</span>
              <DeleteButton onClick={() => handleDelete(item)}>
                <AiFillDelete />
              </DeleteButton>
            </Wrapper>
          );
        } else if (activeIndex === 2 && item.achieve === false) {
          return (
            <Wrapper key={item.id}>
              <CheckBox
                type="checkbox"
                onChange={() => {
                  handleAchieve(item);
                }}
              />
              <span style={{ textDecoration: "line-through" }}>{item.todoName}</span>
              <DeleteButton onClick={() => handleDelete(item)}>
                <AiFillDelete />
              </DeleteButton>
            </Wrapper>
          );
        } else {
          return null;
        }
      })}
    </Container>
  );
}

const Container = styled.div`
  background-color: ${(props) =>
    props.darkMode ? 'rgb(20, 20, 40)' : 'rgb(39, 41, 68)'};
  width: 100%;
`;

const Wrapper = styled.div `
  display : flex;
  color : white;
  font-weight : bold;
  padding-left : 10px;
  padding-right : 10px;
  padding-top : 5px;
`

const CheckBox = styled.input`
  margin-right : 10px;
`

const DeleteButton = styled.button`
  margin-left: auto;
  background-color: transparent;
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    color: red;
  }
`;
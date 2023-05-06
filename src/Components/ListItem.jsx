import React, {useContext, useState} from 'react'
import {AiFillDelete} from 'react-icons/ai'
import styled from 'styled-components';

export default function ListItem({children}) {

  const [achieve, setAchieve] = useState(true);

  const toggleAchieve = () => {
    setAchieve((mode) => !mode)
  }

  return (
    <Wrapper>
      <CheckBox type='checkbox' onChange={() => {
        toggleAchieve();
        console.log(achieve);
      }}/>
      {
        achieve ? (
          <span>{children}</span>
        ) : (
          <span style={{textDecoration : 'line-through'}}>{children}</span>
        )
      }
      <Button><AiFillDelete/></Button>
    </Wrapper>
  )
}

const Button = styled.button`
  margin-left : auto;
`

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


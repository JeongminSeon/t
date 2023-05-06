import React, { useContext } from 'react'
import { useState } from 'react';
import styled from 'styled-components';
import {MdDarkMode} from 'react-icons/md';
import { DarkModeContext } from '../Context/DarkModeContext';

export default function Header({setActiveIndex}) {
  const {toggleDarkMode} = useContext(DarkModeContext);

  return (
    <Tab>
      <button style={{
        marginLeft : '10px',
        border : 'none',
        backgroundColor : 'rgb(29,30,61)',
        }}
        onClick={() => {
          toggleDarkMode();
        }}
      ><Icon /></button>

      <div style ={{
        display : 'flex',
        marginLeft : 'auto',
        marginRight : '10px'
      }}>
      <Button>ALL</Button>
      <Button>Active</Button>
      <Button>Completed</Button>
      </div>
    </Tab>
  )
}

const Tab = styled.div`
  background-color : rgb(29,30,61);
  color : white;
  display : flex;
`

const Button = styled.button`
  color : rgb(184,133,107);
  border : none;
  background-color : rgb(29,30,61);
  font-size : 15px;
  font-weight : bold;
`

const Icon = styled(MdDarkMode)`
  color : white;
  width : 20px;
  height : 20px;
`
import React, { useState } from 'react'
import ListItem from './ListItem'
import styled from 'styled-components';

export default function Content() {
  const [list, setList] = useState(['list1','list2','list3']);

  return (
    <Container>
      {
        list.map((item) => <ListItem>{item}</ListItem>)
      }
    </Container>
  )
}


const Container = styled.div`
  background-color : rgb(39,41,68);
  width : 100%;
`
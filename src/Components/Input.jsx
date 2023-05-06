import React, {useState} from 'react'
import styled from 'styled-components';

export default function Input() {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div style={{
      backgroundColor : 'rgb(29,30,61)',
    }}
    >
      <Form style={{
      }}>
        <input
          type = 'text'
          id = 'name'
          name = 'name'
          onChange = {(e) => setName(e.target.value)}
          style={{
            width : 200
          }}
        />
        <button style={{
        }}>
          Submit
        </button>
      </Form>
    </div>
  )
}


const Form = styled.form`
  display : flex;
  justify-content : space-between;
  padding : 10px
`


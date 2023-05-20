import React from 'react'

export default function AddTodo({onAdd}) {
  const [text, setText] = useState('');

  const handleChange = (e) => setText(e.target.value);
  return (
    <form>
      <input type = 'text' placeholder='Add Todo' value = {text} onChange={handleChange}/>
    </form>
  )
}

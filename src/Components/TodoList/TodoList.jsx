import React from 'react'
import AddTodo from '../AddTodo/AddTodo';

export default function TodoList() {
  const [todos, setTodos] = useState([
    {id : '123', text : '장보기', status : 'active'},
    {id : '124', text : '공부하기', status : 'active'},
  ]);
  
  const handleAdd = (todo) => {
    // 새로운 투두를 todo에 update해야함 
  }
  return (
    <section>
      <ul>
        {
          todos.map((item) => (
          <li key = {item.id}>{item.text}</li>
          ))
        }
      </ul>
      <AddTodo onAdd = {handleAdd}/>
    </section>
  )
}

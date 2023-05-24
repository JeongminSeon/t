import React from 'react'
import AddTodo from '../AddTodo/AddTodo';
import { useState } from 'react';
import Todo from '../Todo/Todo';
import styles from './TodoList.module.css'

export default function TodoList({filter}) {
  const [todos, setTodos] = useState([
    {id : '123', text : '장보기', status : 'active'},
    {id : '124', text : '공부하기', status : 'active'},
  ]);
  
  const handleAdd = (todo) => {
    setTodos([...todos, todo]);
  }
  const handleUpdate = (updated) => {
    setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
  }
  const handleDelete = (deleted) => {
    setTodos(todos.filter((t) => (t.id !== deleted.id)));
  }

  const filterd = getFilterdItems(todos, filter)

  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {
          filterd.map((item) => (
          // <li key = {item.id}>{item.text}</li>
          <Todo
            key = {item.id} 
            todo = {item} o
            onUpdate = {handleUpdate} 
            onDelete={handleDelete}
          />
          ))
        }
      </ul>
      <AddTodo onAdd = {handleAdd}/>
    </section>
  )
}

function getFilterdItems(todos, filter){

  if(filter === 'all') {
    return todos;
  }
  return todos.filter(todo => todo.status === filter)

}      
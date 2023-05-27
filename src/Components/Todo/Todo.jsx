import React from 'react'
import {FaTrashAlt} from 'react-icons/fa'
import styles from './Todo.module.css'

export default function Todo({todo, onUpdate, onDelete}) {
  // todo 반복해서 입력할 필요 없음
  const {id, text, status} = todo;

  // 객체 분해할당 부분 참고
  const handleChange = (e) => {
    const status = e.target.checked ? 'completed' : 'active';

    // status를 변경해서 넘겨준다.
    onUpdate({...todo, status});
  }

  const handleDelete = (e) => onDelete(todo);
  return (
    <li className={styles.todo}>
      <input 
        className={styles.checkbox} 
        type='checkbox' 
        id={id}
        checked = {status === 'completed'} 
        onChange={handleChange}
      />
      <label htmlFor={id} className={styles.text}>
        {text}
      </label>
      <span className={styles.icon}>
        <button onClick = {handleDelete} className={styles.button}>
          <FaTrashAlt />
        </button>
      </span>
    </li>
  )
}

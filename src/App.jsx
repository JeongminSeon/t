import React, { Fragment } from 'react'
import TodoList from './Components/TodoList/TodoList';
import Header from './Components/Header/Header';
import { useState } from 'react';
// import {DarkModeProvider} from './Context/DarkModeContext';

const filters = ['all', 'active', 'completed'];
export default function App() {

  const [filter, setFilter] = useState(filters[0])

  return (
    // <DarkModeProvider value = "dark">
    //   <div 
    //     style={{ 
    //       display : 'flex', 
    //       justifyContent : 'center', 
    //       alignContent : 'center'
    //     }}
    //   >
    //     <TodoList />
    //   </div>
    // </DarkModeProvider>
    <>
      <Header filters = {filters} filter={filter} onFilterChange={setFilter}/>
      <TodoList filter = {filter}/>
    </>
  )
}

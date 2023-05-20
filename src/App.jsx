import React from 'react'
import TodoList from './Components/TodoList/TodoList';

import {DarkModeProvider} from './Context/DarkModeContext';

export default function App() {
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

    <div>
      <TodoList />
    </div>
  )
}

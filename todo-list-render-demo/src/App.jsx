import { useState } from 'react'
import './App.css'
import AddTodoBar from './AddTodoBar';

function App() {
  const [todos, setTodos] = useState([
    {title: "finish project", done: false},
    {title: "go to lecture", done: false},
    {title: "eat lunch", done: true}
  ]);
  
  function handleAddTodo(title) {
    setTodos([
      ...todos,
      {title, done: false}
    ]);
  };



  // use map to render a list of items
  // corresponding to the todo list
  // bonus: break into individual task components,
  // each receiving a todo item prop
  return (
    <>
      <AddTodoBar handleAdd={handleAddTodo}></AddTodoBar>

    </>
  )
}

export default App

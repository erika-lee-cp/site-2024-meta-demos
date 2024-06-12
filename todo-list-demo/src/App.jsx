import { useState } from 'react'
import './App.css'
import AddTodoBar from './AddTodoBar';

function App() {
  
  const [todos, setTodos] = useState([
    {title: "finish project", done: false},
    {title: "go to lecture", done: false},
    {title: "eat lunch", done: true}
  ]);
  
  // Update this code to get the add button working
  function handleAddTodo(title) {
    setTodos((prev) => [
      ...prev,
      {title: title, done: false}
    ]);
  };

  // Verify that todos are being added by logging 
  console.log(todos);

  return (
    <>
      <AddTodoBar handleAdd={handleAddTodo}></AddTodoBar>
    </>
  )
}

export default App

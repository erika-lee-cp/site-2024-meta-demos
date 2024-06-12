import { useState } from 'react'
import './App.css'

function AddTodoBar(props) {
  const [title, setTitle] = useState("");

  const handleChange = function(event) {
    setTitle(event.target.value);
  }
  const handleClick = function(event) {
    props.handleAdd(title);
    setTitle("");
  }

  return (
    <>
      <input onChange={handleChange} value={title}></input>
      <button onClick={handleClick}>Add</button>
    </>
  )
}

export default AddTodoBar

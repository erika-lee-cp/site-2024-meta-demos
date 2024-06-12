import { useState } from 'react';
import './App.css'

function App() {

  const [text, setText] = useState("");
  // TODO: useState to put the value of the
  // <input> element
  // in the <p> element

  const handleChange = function (event) {
    setText(event.target.value);
  }

  const handleClear = function () {
    setText("");
  }
  // TODO: get the clear button to work
  return (
    <>
      <input onChange={handleChange} value={text}></input>
      <p>current text value: {text}</p>
      <button onClick={handleClear}>clear</button>
    </>
  );
}

export default App

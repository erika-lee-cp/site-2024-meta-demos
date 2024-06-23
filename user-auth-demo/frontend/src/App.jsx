import {useState } from 'react'
import './App.css'

function App() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState("");

  const handleChangeUser = (e) => {
    setUser(e.target.value);
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleClick = () => {
    fetch(`${import.meta.env.VITE_BACKEND_ADDRESS}/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user,
          password,
        }), 
      })
      .then(response => {
        if (response.ok) {
          setResult("success!");
        }
        else {
          setResult("failed to login!");
        }
      })
      .catch(error => {
        setResult("failed to login!");
      });
  }

  return (
    <div>       
      <label>user:</label>
      <input onChange={handleChangeUser} value={user}></input>
      <label>password:</label>
      <input onChange={handleChangePassword} value={password}></input>
      <button onClick={handleClick}>Login</button>
      { result && <p>{result}</p>}
    </div>
  )
}

export default App;

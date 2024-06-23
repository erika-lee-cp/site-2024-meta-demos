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

  const handleCreate = () => {
    fetch(`${import.meta.env.VITE_BACKEND_ADDRESS}/create`,
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
        console.log(response)
        if (response.ok) {
          setResult("create success!");
        }
        else {
          setResult("failed to create!");
        }
      })
      .catch(error => {
        setResult("failed to create!");
      });
  }

  const handleLogin = () => {
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
          setResult("login success!");
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
      <button onClick={handleCreate}>Create</button>
      <button onClick={handleLogin}>Login</button>
      { result && <p>{result}</p>}
    </div>
  )
}

export default App;

import { useState } from 'react'

import './App.css'


function App() {
  
  const [profiles, setProfiles] = useState([
    {name: "alice", age: 10}, 
    {name: "bob", age: 62},
    {name: "charlie", age: 33}
  ]);

  // use .map() to generate a list of JSX <p> elements
  // with content "{name} is {age} years old"
  
  const profileElements= profiles.map(function (value, i) {
    return (
      <p key={i}>{value.name} is {value.age} years old</p>
    );
  });

  return (
    <>
      {profileElements}
    </>
  )
}

export default App

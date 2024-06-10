import './App.css'
import Post from './components/Post';

function App() {
  return (
    <>
      <h1> Welcome to Web 102  &#127881;</h1>
      <p>Write a post about you what you excited to learn about!</p>
      <Post
        name="Justine Ezarik"
        content="I want to be a Javascript Wizard"
        numLikes={500}
      />
      <Post
        name="Gabriella Sammy"
        content="My name is strange"
        numLikes="2"
      />
    </>
  )
}

export default App;

import './App.css'
import {PostWithProps, PostNoProps} from './Post';

function App() {

  return (
    <>
      <div id="main">
        <h1>Welcome to Web 102 &#127881;</h1>
        <h2>Write a post about what you are excited to learn about!</h2>
        <div id="post-container">
          <PostNoProps/>
          <PostWithProps
            name="Justine Ezarik"
            content="I want to be a Javascript Wizard"
            numLikes={500}
          />
        </div>
      </div>
    </>
  )
}

export default App;

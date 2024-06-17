import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PageOne from './pages/PageOne';
import PageTwo from './pages/PageTwo';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/one" element={<PageOne />} />
        <Route path="/two/:id" element={<PageTwo />} />        
      </Routes>
    </Router>
  )
}

export default App

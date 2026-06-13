import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import ReactHooksComponent from './React-Interview-topics/react-hooks/react-hooks';
import ReactInterviewTopicComponent from './React-Interview-topics/react-interview-topics/react-interview-topics';

function App() {

  return (
    <div className="main-container">
      <Router>
        <Routes>
          <Route path="/" element={<ReactInterviewTopicComponent />}></Route>
          <Route path="/hooks" element={<ReactHooksComponent />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App

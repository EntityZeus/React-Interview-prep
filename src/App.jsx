import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import ReactHooksComponent from './React-Interview-topics/react-hooks';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="main-container">
      <Router>
        <Routes>
          <Route path="/hooks" element={<ReactHooksComponent />}></Route>
        </Routes>
      </Router>
      <h3>React Js Important Topics</h3>
      <ul class="list-group">
        <li class="list-group-item">React Hooks</li>
        <li class="list-group-item">Higher Order Components</li>
        <li class="list-group-item">Lifecyle Methods</li>
        <li class="list-group-item">State Management</li>
        <li class="list-group-item">Redux and zustand</li>
        <li class="list-group-item">Lazy and suspense</li>
        <li class="list-group-item">Virtual DOM</li>
        <li class="list-group-item">SSR and CSR</li>
        <li class="list-group-item">Role-base Routing</li>
        <li class="list-group-item">Async Task</li>
        <li class="list-group-item">Testing</li>
        <li class="list-group-item">Promises</li>
        <li class="list-group-item">Performance Improvement</li>
        <li class="list-group-item">Accessibility</li>
      </ul>
    </div>
  )
}

export default App

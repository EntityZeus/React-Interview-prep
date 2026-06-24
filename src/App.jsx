import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import ReactHooksComponent from './React-Interview-topics/react-hooks/react-hooks';
import ReactInterviewTopicComponent from './React-Interview-topics/react-interview-topics/react-interview-topics';
import TodoMiniApp from './React-Interview-topics/react-todo-use-reducer/react-useReducer';
import TodoAppWithContext from './React-Interview-topics/react-context/TodoAppWithContext';
import {TodoAppContextProvider} from './context/todoContext';
function App() {

  return (
    <div className="main-container">
      <TodoAppContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<ReactInterviewTopicComponent />}></Route>
            <Route path="/hooks" element={<ReactHooksComponent />}></Route>
            <Route path="/use-reducer" element={<TodoMiniApp />}></Route>
            <Route path='/todo-app-context' element={<TodoAppWithContext />}></Route>
          </Routes>
        </Router>
      </TodoAppContextProvider>
    </div>
  )
}

export default App

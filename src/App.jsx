import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import ReactHooksComponent from './React-Interview-topics/react-hooks/react-hooks';
import ReactInterviewTopicComponent from './React-Interview-topics/react-interview-topics/react-interview-topics';
import TodoMiniApp from './React-Interview-topics/react-todo-use-reducer/react-useReducer';
import TodoAppWithContext from './React-Interview-topics/react-context/TodoAppWithContext';
import {TodoAppContextProvider} from './context/todoContext';
import ReactMachineTest from './React-Interview-topics/React-machine-test/react-machine-test';
import LoginForm from './React-Interview-topics/React-machine-test/Login-form/login-form';
import LoginConfirm from './React-Interview-topics/React-machine-test/Login-form/Login-success';
import PageNotFound from './React-Interview-topics/Page-not-found/PageNotFound';
import AutoComplete from './React-Interview-topics/React-machine-test/Filter/Autocomplete';
import { UserLoginContextProvider } from './context/userLoginContext';

function App() {

  return (
    <div className="main-container">
      <TodoAppContextProvider>
        <UserLoginContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<ReactInterviewTopicComponent />}></Route>
              <Route path="/hooks" element={<ReactHooksComponent />}></Route>
              <Route path="/use-reducer" element={<TodoMiniApp />}></Route>
              <Route path='/todo-app-context' element={<TodoAppWithContext />}></Route>
              <Route path='/react-machine-test' element={<ReactMachineTest />}>
                <Route path='login-test' element={<LoginForm />}></Route>
                <Route path='login-success' element={<LoginConfirm />} />
                <Route path='autocomplete' element={<AutoComplete />}></Route>
              </Route>
              <Route path="*" element={<PageNotFound />}></Route>
          </Routes>
        </Router>
        </UserLoginContextProvider>
      </TodoAppContextProvider>
    </div>
  )
}

export default App

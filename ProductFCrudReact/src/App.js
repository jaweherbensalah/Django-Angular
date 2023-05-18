import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import ShowTodo from './components/ShowTodo';
import AddTodo from './components/AddTodo';
import NavbarMenu from './components/Navbar';
import TodoDetail from './components/TodoDetail';
import UpdateTodo from './components/UpdateTodo'; 
import Login from './components/Login';



function App() {

  const [token, setToken] = useState('');

  const userLogin = (tok) => {
    setToken(tok);
  }
  return (
    <div className="App">
    <h1>Django React App</h1>
    
      <div>
     
      {/* In react-router-dom 6+ we should use element instead of component */}
        <Router>
        <NavbarMenu /> 
          <Routes>
            <Route exact path="/login" element={ <Login userLogin={userLogin}/>} />
            <Route exact path="/" element={<ShowTodo/>} />
            <Route exact path="/add-todo" element={<AddTodo/>} />
            <Route exact path="/:id/update" element={<UpdateTodo/>} />
            <Route exact path="/:id/" element={<TodoDetail/>}  />
          </Routes>
        </Router>
      </div>
  </div>
  );
}

export default App;
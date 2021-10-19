import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'

import Home from './components/util/home';
import AccountForm from './components/util/AccountForm';

  const baseURL = 'https://fitnesstrac-kr.herokuapp.com/api'
  
  const App = () => {
    const [token, setToken] = useState('')
    const [user, setUser] = useState('')
    
    console.log('token: ', token)
    console.log('user: ', user)
    return <>
            <div id='container'>
                <header className = 'header'>
                  <h1>Fitness Trac.kr</h1>
                  <div id='navbar' className='navbar'>
                    <Link to='/'>Home</Link> | <Link to='/users/register'>Register</Link> | <Link to='/users/login'>Login</Link> | 
                  </div>
                </header>
            <div id='main-section'>
              <Route exact path='/'>
                <Home username={user.username}/>
              </Route>
              <Route exact path='/users/:method'>
                <AccountForm setToken={setToken} setUser={setUser}/>
              </Route>
            </div>
            </div>
          </>

  }

ReactDOM.render(
  <Router>
    <App />
  </Router>,
    
  document.getElementById('app'),

);
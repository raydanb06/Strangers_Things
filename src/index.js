import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { Posts, Login } from './components';

const App = () => {
  return <>
    <Link to='/'>Home</Link> | <Link to='/posts'>Posts</Link> | <Link to='/login'>Login/Register</Link>
    <Route exact path='/'>
      <h1>HomePage</h1>
    </Route>
    <Route path='/posts'>
      <Posts />
    </Route>
    <Route path='/login'>
      <Login />
    </Route>
  </>
};

ReactDOM.render(
  <Router><App /></Router>,
  document.getElementById('app'),
);
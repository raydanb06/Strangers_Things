import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { Posts, Account, Homepage } from './components';

const App = () => {
  const [ token, setToken ] = useState('');

  return <>
    <Link to='/'>Home</Link> | <Link to='/posts'>Posts</Link> | <Link to='/account'>Login/Register</Link>
    <Route exact path='/'>
      <Homepage token={token}/>
    </Route>
    <Route path='/posts'>
      <Posts token={token}/>
    </Route>
    <Route path='/account'>
      <Account setToken={setToken}/>
    </Route>
  </>
};

ReactDOM.render(
  <Router><App /></Router>,
  document.getElementById('app'),
);
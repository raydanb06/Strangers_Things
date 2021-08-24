import React, { useState } from 'react';

import Register from './Register';
import Login from './Login'

const Account = (props) => {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const { setToken } = props;

  return <>
    <h1>LoginPage</h1>
    <Register setToken={setToken} username={username} setUsername={setUsername} password={password} setPassword={setPassword}/>
    <Login setToken={setToken} username={username} setUsername={setUsername} password={password} setPassword={setPassword}/>
  </>
};

export default Account;
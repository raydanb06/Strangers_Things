import React, { useState } from 'react';

import Register from './Register';

const Login = (props) => {
  const { setToken } = props;

  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleLoginSubmit = (ev) => {
    ev.preventDefault();
    console.log(username);
    console.log(password);
    fetch('https://strangers-things.herokuapp.com/api/2105-SJS-RM-WEB-PT/users/login', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: `${username}`,
          password: `${password}`
        }
      })
    })
    .then(response => response.json())
    .then(result => {
      setToken(result.data.token),
      console.log(result);
    })
    .catch(console.error);
    setUsername('');
    setPassword('');
  };

  return <>
    <h1>LoginPage</h1>
    <Register />

    <h2 className='login'>Login</h2>
    <form onSubmit={handleLoginSubmit}>
      <label htmlFor='username'>Username:</label>
      <input placeholder='Username' type='text' value={username} onChange={
        ev => setUsername(ev.target.value)
      }></input>

      <label htmlFor='password'>Password:</label>
      <input placeholder='Password' type='password' /*minLength='8'*/ value={password} onChange={
        ev => setPassword(ev.target.value)
      }></input>

      <button type='submit'>Submit</button>
    </form>
  </>
};

export default Login;
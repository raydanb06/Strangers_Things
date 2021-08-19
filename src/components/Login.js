import React, { useState } from 'react';

const Login = (props) => {
  const { setToken } = props;

  const [ newUsername, setNewUsername ] = useState('');
  const [ newPassword, setNewPassword ] = useState('');
  const [ newPasswordCheck, setNewPasswordCheck ] = useState('');

  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(newUsername, typeof newUsername);
    console.log(newPassword);
    console.log(newPasswordCheck);
    fetch('https://strangers-things.herokuapp.com/api/2105-SJS-RM-WEB-PT/users/register', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: `${newUsername}`,
          password: `${newPassword}`
        }
      })
    })
    .then(response => response.json())
    .then(result => {
      setToken(result.data.token),
      console.log(result);
    })
    .catch(console.error);
    setNewUsername('');
    setNewPassword('');
    setNewPasswordCheck('');
  }

  return <>
    <h1>LoginPage</h1>
    <form onSubmit={handleSubmit}>
      <label htmlFor='new-username'>Username:</label>
      <input placeholder='New Username' type='text' value={newUsername} onChange={
        ev => setNewUsername(ev.target.value)
      }></input>

      <label htmlFor='new-password'>Password:</label>
      <input placeholder='New Password' type='password' /*minLength='8'*/ value={newPassword} onChange={
        ev => setNewPassword(ev.target.value)
      }></input>

      <label htmlFor='new-password-check'>Re-enter Password:</label>
      <input placeholder='Re-enter New Password' type='password' /*minLength='8'*/ value={newPasswordCheck} onChange={
        ev => setNewPasswordCheck(ev.target.value)
      }></input>

      <button type='submit'>Submit</button>
    </form>
  </>
};

export default Login;
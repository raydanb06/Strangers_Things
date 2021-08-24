import React, { useState } from 'react';
import { useHistory } from 'react-router'

const { REACT_APP_BASE_URL } = process.env;

const Register = (props) => {
  const { setToken } = props;
  const [ newUsername, setNewUsername ] = useState('');
  const [ newPassword, setNewPassword ] = useState('');
  const [ newPasswordCheck, setNewPasswordCheck ] = useState('');
  const history = useHistory();

  const handleRegisterSubmit = (ev) => {
    ev.preventDefault();
    // console.log(newUsername, typeof newUsername);
    // console.log(newPassword);
    // console.log(newPasswordCheck);
    fetch(`${REACT_APP_BASE_URL}/users/register`, {
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
      if (result.data.token) {
        history.push('/');
      }
    })
    .catch(console.error);
    setNewUsername('');
    setNewPassword('');
    setNewPasswordCheck('');
  };

  return <>
    <h2 className='register'>Register</h2>
    <form onSubmit={handleRegisterSubmit}>
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

      <button type='submit'>Register</button>
    </form>
  </>
}

export default Register;
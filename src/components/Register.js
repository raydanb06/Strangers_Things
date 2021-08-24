import React, { useState } from 'react';
import { useHistory } from 'react-router'
import { callAPI } from '../util';

const { REACT_APP_BASE_URL } = process.env;

const Register = (props) => {
  const { setToken } = props;
  const [ newUsername, setNewUsername ] = useState('');
  const [ newPassword, setNewPassword ] = useState('');
  const [ newPasswordCheck, setNewPasswordCheck ] = useState('');
  const history = useHistory();

  const handleRegisterSubmit = async (ev) => {
    ev.preventDefault();

    const registerObj = await callAPI({
      url: 'users/register',
      method: 'POST',
      body: {
        user: {
          username: `${newUsername}`,
          password: `${newPassword}`
        }
      }
    });

    if (registerObj.data) {
      setToken(registerObj.data.token);
      if (registerObj.data.token) {
        history.push('/');
      }
    }

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
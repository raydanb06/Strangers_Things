import React, { useState } from 'react';

import Register from './Register';
import Login from './Login'

const Account = (props) => {
  const { setToken } = props;

  return <>
    <h1>LoginPage</h1>
    <Register setToken={setToken}/>
    <Login setToken={setToken}/>
  </>
};

export default Account;
import React from 'react';

import { Register, Login } from '../components';

const Account = (props) => {
  const { setToken } = props;

  return <>
    <h1>LoginPage</h1>
    <Register setToken={setToken}/>
    <Login setToken={setToken}/>
  </>
};

export default Account;
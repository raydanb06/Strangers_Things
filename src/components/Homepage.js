import React from 'react';

const Homepage = (props) => {
  const { token } = props;
  console.log('token: ', token);

  token ? console.log('got a token') : console.log('no token');

  return <>
    <h1>Homepage</h1>
    {
      token ? 
      <div>You are logged in.</div> 
      : 
      <div>Login to do more.</div>
    }
  </>
}

export default Homepage;
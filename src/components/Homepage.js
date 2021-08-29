import React from 'react';

const Homepage = (props) => {
  const { token } = props;
  
  return <>
    <h1 className='header'>Homepage</h1>
    {
      token ? 
      <div>You are logged in.</div> 
      : 
      <div>Login to do more.</div>
    }
  </>
}

export default Homepage;
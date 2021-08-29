import React from 'react';

const Homepage = (props) => {
  const { token } = props;
  console.log(token);
  
  return <>
    <h1 class='header'>Homepage</h1>
    {
      token ? 
      <div>You are logged in.</div> 
      : 
      <div>Login to do more.</div>
    }
  </>
}

export default Homepage;
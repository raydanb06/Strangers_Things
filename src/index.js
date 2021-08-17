import React from 'react';
import ReactDOM from 'react-dom';

import Posts from './Posts'

const App = () => {
  return <>
    <h1>Title</h1>
    <Posts />
  </>
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
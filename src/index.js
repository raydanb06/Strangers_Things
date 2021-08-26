import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { Posts, Account, Homepage, Messaging } from './components';
import { callAPI } from './util';

const App = () => {
  const [ token, setToken ] = useState('');
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const postObj = await callAPI({
      url: 'posts',
      method: 'GET',
      token: `${token}`
    });
    if (postObj.data) {
      setPosts(postObj.data.posts);
    }
};

  useEffect(() => {
      fetchPosts()
    }, [ token ]);

  return <>
    <Link to='/'>Home</Link> | <Link to='/posts'>Posts</Link> | <Link to='/account'>Login/Register</Link>
    <Route exact path='/'>
      <Homepage token={token}/>
    </Route>
    <Route path='/posts'>
      <Posts token={token} posts={posts} fetchPosts={fetchPosts}/>
    </Route>
    <Route path='/account'>
      <Account setToken={setToken}/>
    </Route>
    <Route path='/messaging'>
      <Messaging />
    </Route>
  </>
};

ReactDOM.render(
  <Router><App /></Router>,
  document.getElementById('app'),
);
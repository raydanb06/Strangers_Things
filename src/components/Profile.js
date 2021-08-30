import React, { useState, useEffect } from 'react';
import { callAPI } from '../util';

const Profile = (props) => {
  const { token } = props;
  const [ myPosts, setMyPosts ] = useState([]);
  const [ myMessages, setMyMessages ] = useState([]);

  const loadProfile = async () => {
    try {
      const profile = await callAPI({
        url: 'users/me',
        method: 'GET',
        token: `${token}`
      })
  
      setMyPosts(profile.data.posts);
      setMyMessages(profile.data.messages);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    loadProfile()
  }, []);

  return <>
    <h1 className='header'>Profile</h1>
    <h2 className='header'>My Posts</h2>
    {
      myPosts.map((post, idx) => {
        return <div key={post._id} className='post'>
          {post.title}, {post.description}, {post.price}
        </div>
      })
    }
    <h2 className='header'>Messages</h2>
    {
      myMessages.map((message,idx) => {
        return <div key={message._id} className='message'>
          {message.fromUser.username}, {message.content} { ' in ' } { message.post.title}
        </div>
      })
    }
  </>
}



export default Profile;
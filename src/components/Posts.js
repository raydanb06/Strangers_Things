import React, { useState, useEffect } from 'react';
import { callAPI } from '../util';
import AddPost from './AddPost';

const Posts = (props) => {
  const { token } = props;
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
    }, []);

  return <>
    <h1 className='post-header'>Posts</h1>
    {
      token ? <AddPost /> : null
    }
    {
      posts.map((post, idx) => {
        return <div key={idx} className='post'>
          {post.title}, {post.price}
        </div>
      })
    }
    </>
};

export default Posts;
import React, { useState, useEffect } from 'react';

const { REACT_APP_BASE_URL } = process.env;

const Posts = () => {
  const [posts, setPosts] = useState([]);
  console.log('posts: ', posts);
    
  const fetchPosts = async () => {
    fetch(`${REACT_APP_BASE_URL}/posts`)
    .then(response => response.json())
    .then(result => { setPosts(result.data.posts) })
    .catch(console.error);
};

  useEffect(() => {
      fetchPosts()
    }, []);

  return <>
    <h1 className='post-header'>Posts</h1>
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
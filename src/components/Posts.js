import React, { useState, useEffect } from 'react';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  console.log('posts: ', posts);
    
  const fetchPosts = async () => {
    fetch('https://strangers-things.herokuapp.com/api/2105-SJS-RM-WEB-PT/posts')
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
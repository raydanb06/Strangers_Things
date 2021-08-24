import React from 'react';
import { callAPI } from '../util';
import AddPost from './AddPost';

const Posts = (props) => {
  const { token, posts, fetchPosts } = props;


  return <>
    <h1 className='post-header'>Posts</h1>
    {
      token ? <AddPost token={token} fetchPosts={fetchPosts}/> : null
    }
    {
      posts.map((post, idx) => {
        return <div key={idx} className='post'>
          {post.title}, {post.description}, {post.price}
        </div>
      })
    }
    </>
};

export default Posts;
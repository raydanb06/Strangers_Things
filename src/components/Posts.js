import React from 'react';
import AddPost from './AddPost';

import { PostSingle } from './';

const Posts = (props) => {
  const { token, posts, fetchPosts } = props;

  return <>
    <h1 className='header'>Posts</h1>
    {
      token ? <AddPost token={token} fetchPosts={fetchPosts}/> : null
    }
    {
      posts.map((post, idx) => {
        return <PostSingle key={post._id} post={post} token={token} fetchPosts={fetchPosts} />
      })
    }
    </>
};

export default Posts;
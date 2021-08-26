import React from 'react';
import { callAPI } from '../util';
import AddPost from './AddPost';

const Posts = (props) => {
  const { token, posts, fetchPosts } = props;

  const handleDelete = async (postId) => {
    const deleteObj = await callAPI({
      url: `posts/${postId}`,
      method: 'DELETE',
      token: `${token}`
    });
    console.log('deleteObj: ', deleteObj);
    await fetchPosts();
  };

  return <>
    <h1 className='post-header'>Posts</h1>
    {
      token ? <AddPost token={token} fetchPosts={fetchPosts}/> : null
    }
    {
      posts.map((post, idx) => {
        return <div key={post._id} className='post'>
          {post.title}, {post.description}, {post.price}
          {
            post.isAuthor && <button onClick={() => handleDelete(post._id)}>Delete</button>
          }
        </div>
      })
    }
    </>
};

export default Posts;
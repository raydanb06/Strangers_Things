import React from 'react';
import { callAPI } from '../util';
import { Link } from 'react-router-dom';

const PostSingle = (props) => {
  const { post, token, fetchPosts } = props;

  const handleDelete = async (postId) => {
    const deleteObj = await callAPI({
      url: `posts/${postId}`,
      method: 'DELETE',
      token: `${token}`
    });
    
    await fetchPosts();
  };

  return <>
    <div key={post._id} className='post'>
      {post.title}, {post.description}, {post.price}
    </div>
    {
      post.isAuthor && <button onClick={() => handleDelete(post._id)}>Delete</button>
    }
    {
      token && !post.isAuthor && <Link to={`/posts/${post._id}`}>Message</Link>
    }
  </>
}

export default PostSingle;
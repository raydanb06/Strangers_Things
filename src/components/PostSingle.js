import React from 'react';
import { callAPI } from '../util';
import { Link } from 'react-router-dom';

const PostSingle = (props) => {
  const { post, token, fetchPosts } = props;

  const handleDelete = async (postId) => {
    try {
      const deleteObj = await callAPI({
        url: `posts/${postId}`,
        method: 'DELETE',
        token: `${token}`
      });
    } catch (error) {
      console.error(error);
    }

    
    await fetchPosts();
  };

  return <>
    <div key={post._id} className='post'>
      {post.title}, {post.description}, {post.price}
      {
        post.isAuthor && <button onClick={() => handleDelete(post._id)}>Delete</button>
      }
      {
        token && !post.isAuthor && <Link className='post-link' to={`/posts/${post._id}`}>Message</Link>
      }
      {
        token && post.isAuthor && <Link className='post-link' to={`/posts/${post._id}`}>View Details</Link>
      }
    </div>
  </>
}

export default PostSingle;
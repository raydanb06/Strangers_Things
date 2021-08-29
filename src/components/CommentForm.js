import React, { useState } from 'react';
import { callAPI } from '../util';

const CommentForm = (props) => {
  const { token, post } = props;
  const [ content, setContent ] = useState('');
  
  const handleSubmit = async (ev) => {
    ev.preventDefault();
    try {
      const message = await callAPI({
        method: 'post',
        url: `posts/${post._id}/messages`,
        token: `${token}`,
        body: {
          message: {
            content
          }
        }
      })
    } catch (error) {
      console.error(error);
    }
    setContent('');
  }

  return <>
    <h2 className='header'>Comment</h2>
    <form onSubmit={handleSubmit}>
      <input placeholder='Comment Here' type='text' value={content} onChange={(ev) => setContent(ev.target.value)}/>
      <button type='submit'>Add Comment</button>
    </form>
  </>
}

export default CommentForm;
import React, { useState } from 'react';
import { callApi } from '../util';

const CommentForm = () => {
  const [ content, setContent ] = useState('');
  
  const handleSubmit = async (ev) => {
    ev.preventDefault();
    
  }

  return <>
    <h2>Comment</h2>
    <form onSubmit={handleSubmit}>
      <input placeholder='Comment Here' type='text' value={content} onChange={(ev) => setContent(ev.target.value)}/>
      <button type='submit'>Add Comment</button>
    </form>
  </>
}

export default CommentForm;
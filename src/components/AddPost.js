import React, { useState } from 'react';

const AddPost = () => {
  const [ title, setTitle] = useState('');
  const [ description, setDescription ] = useState('');
  const [ price, setPrice ] = useState('');

  const handleAddPost = async (ev) => {
    ev.preventDefault();

    
  };

  return <>
    <form onSubmit={handleAddPost}>
      <input placeholder='Title' type='text' value={title} onChange={
        ev => setTitle(ev.target.value)
      }></input>
      <input placeholder='Description' type='text' value={description} onChange={
        ev => setDescription(ev.target.value)
      }></input>
      <input placeholder='Price' type='text' value={price} onChange={
        ev => setPrice(ev.target.value)
      }></input>
      <button type='submit'>Add Post</button>
    </form>
  </>
};

export default AddPost;
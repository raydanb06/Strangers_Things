import React, { useState } from 'react';
import { callAPI } from '../util';

const AddPost = ({ token, fetchPosts }) => {
  const [ title, setTitle] = useState('');
  const [ description, setDescription ] = useState('');
  const [ price, setPrice ] = useState('');

  const handleAddPost = async (ev) => {
    ev.preventDefault();

    try {
      const AddPostResp = await callAPI({
        url: 'posts',
        method: 'POST',
        token: `${token}`,
        body: {
          post: {
            title: `${title}`,
            description: `${description}`,
            price: `${price}`
          }
        }
      });
    } catch (error) {
      console.error(error);
    }


    await fetchPosts();
    setTitle('');
    setDescription('');
    setPrice('');
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
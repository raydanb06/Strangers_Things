import React from 'react';
import { useParams } from 'react-router';

import { PostSingle } from '../components'

const PostView = (props) => {
  const { token, posts } = props;
  const { postId } = useParams();
  console.log('postId', postId);
  console.log(posts);
  const post = posts.find(post => post._id === Number(postId));
  console.log('post', post);



  return <>
    <h1>Post Viewing</h1>
  </>
}

export default PostView;
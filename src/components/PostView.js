import React from 'react';
import { useParams } from 'react-router';

import { PostSingle, CommentForm } from '../components'

const PostView = (props) => {
  const { token, posts } = props;
  const { postId } = useParams();
  const post = posts.find(post => post._id === postId);

  return <>
    <h1>Post Viewing</h1>
    <PostSingle post={post} />
    <CommentForm token={token} post={post}/>
  </>
}

export default PostView;
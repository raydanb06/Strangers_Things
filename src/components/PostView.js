import React from 'react';
import { useParams } from 'react-router';

import { PostSingle, CommentForm } from '../components'

const PostView = (props) => {
  const { token, posts } = props;
  const { postId } = useParams();
  const post = posts.find(post => post._id === postId);
  console.log(post);

  return <>
    <h1 className='header'>Post Viewing</h1>
    <PostSingle post={post} />
    {
      token && post.isAuthor && post.messages.map(comment => <div key={comment._id}>
        <div>From User: {comment.fromUser.username}, Comment: {comment.content}</div>
      </div>)
    }
    {
      token && !post.isAuthor && <CommentForm token={token} post={post}/>
    }
  </>
}

export default PostView;
import React, { useState } from 'react';
import AddPost from './AddPost';

import { PostSingle, SearchForm } from './';

const Posts = (props) => {
  const { token, posts, fetchPosts } = props;
  const [ searchTerm, setSearchTerm ] = useState('');

  const filteredPosts = posts.filter(post => post.title.includes(searchTerm));

  return <>
    <h1 className='header'>Posts</h1>
    {
      <SearchForm className='search-form' posts={posts} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
    }
    {
      !searchTerm && token ? <AddPost token={token} fetchPosts={fetchPosts}/> : null
    }
    {
      !searchTerm && posts.map(post => <PostSingle key={post._id} post={post} token={token} fetchPosts={fetchPosts} />)
    }
    {
      searchTerm && filteredPosts.map(filteredPost => <PostSingle key={filteredPost._id} post={filteredPost} token={token}/>)
    }
    </>
};

export default Posts;
import React, { useState, useEffect } from 'react';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    console.log('posts: ', posts);
    console.log(typeof(posts));
    
    const fetchPosts = async () => {
        await fetch('https://strangers-things.herokuapp.com/api/2105-SJS-RM-WEB-PT/posts')
        .then(response => response.json())
        .then(result => { setPosts(result.data.posts) })
        .catch(console.error);
    };

    useEffect(() => {
        fetchPosts()
    }, []);

    return <>
        <h2 className='post-header'>Posts</h2>
        {
            posts.map((post, idx) => {
                return <div key={idx} className='post'>
                    {post.title}, {post.price}
                </div>
            })
        }
    </>
}

export default Posts;
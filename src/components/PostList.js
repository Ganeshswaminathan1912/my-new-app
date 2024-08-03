import React, { useState, useEffect } from 'react';
    import axios from 'axios';

    function PostList() {
      const [posts, setPosts] = useState([]);

      useEffect(() => {
        axios.get('/api/posts/') // Update with your backend URL
          .then(res => setPosts(res.data))
          .catch(err => console.error(err));
      }, []);

      return (
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.content}</p>
              <small>By: {post.author}</small>
            </li>
          ))}
        </ul>
      );
    }

    export default PostList;
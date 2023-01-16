import React, { useEffect, useState } from 'react';
import './App.css';
import BlogPosts from './Components/BlogPosts';
import { PostInfo } from './types';

function App() {
  const [postData, setPostData] = useState<PostInfo[]>([]);

  useEffect(() => {
    const getData = async () => {
        const response = await fetch("https://dummyjson.com/posts");
        const postResults = await response.json();
        setPostData(postResults.posts);
    }
    getData();
}, []);

  return (
    <div className="App">
      <BlogPosts postData={postData}></BlogPosts>
    </div>
  );
}

export default App;

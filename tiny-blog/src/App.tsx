import React, { useEffect, useState } from 'react';
import './App.css';
import BlogPosts from './Components/BlogPosts';
import Header from './Components/Header';
import Welcome from './Components/Welcome';
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
      <Header></Header>
      <Welcome></Welcome>
      <BlogPosts postData={postData}></BlogPosts>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import './App.css';
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
      <h1>Hey there! Here is our {postData.length} posts!</h1>
      
    </div>
  );
}

export default App;

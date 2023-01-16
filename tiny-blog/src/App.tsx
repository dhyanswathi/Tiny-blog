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
      <h1>Hey there! Here is our posts!</h1>
      <section className='posts-section'>
        <h2>Love</h2>
        <ul className="posts-love">
            {
              postData.filter(post => post.tags.includes("love")).slice(0, 5)
              .map(post => 
                <li key={post.postId} className="posts-list">
                  <article className='posts-article'>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                    <footer>{post.tags.map(tag => <span>{tag + " "} </span>)}</footer>
                  </article>
                </li>)
            }
        </ul>
      </section>
    </div>
  );
}

export default App;

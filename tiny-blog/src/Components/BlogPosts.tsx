import React from "react";
import { PostInfo } from "../types";

interface IPostComponentProps {
    postData : PostInfo[]
  }

function BlogPosts({postData} : IPostComponentProps) {

    return (
      <>
        
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
  
        <section className='posts-section'>
          <h2>Mystery</h2>
          <ul className="posts-mystery">
              {
                postData.filter(post => post.tags.includes("mystery")).slice(0, 5)
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
  
        <section className='posts-section'>
          <h2>Fiction</h2>
          <ul className="posts-fiction">
              {
                postData.filter(post => post.tags.includes("fiction")).slice(0, 5)
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
  
        <section className='posts-section'>
          <h2>Classic</h2>
          <ul className="posts-classic">
              {
                postData.filter(post => post.tags.includes("classic")).slice(0, 5)
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
  
        <section className='posts-section'>
          <h2>History</h2>
          <ul className="posts-history">
              {
                postData.filter(post => post.tags.includes("history")).slice(0, 5)
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
      </>
    );
}

export default BlogPosts;
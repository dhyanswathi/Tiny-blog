import React from "react";
import { PostInfo } from "../types";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

interface IPostComponentProps {
    postData : PostInfo[]
  }

function BlogPosts({postData} : IPostComponentProps) {

    return (
      <>
        <Container>
        <section className='posts-section'>
          <h2>Love</h2>
          <Row>
              {
                postData.filter(post => post.tags.includes("love")).slice(0, 5)
                .map(post => <Col>
                  <Card style={{ width: '18rem' }} className='card'>
                  <Card.Body>
                      <Card.Title>{post.title}</Card.Title>
                      <Card.Text>{post.body}</Card.Text>
                      {post.tags.map(tag =><Badge bg="secondary">{tag}</Badge>)}
                      </Card.Body></Card>
                  </Col>)
              }
          </Row>
        </section></Container>
  
        <section className='posts-section'>
          <h2>Mystery</h2>
          <ul className="posts">
              {
                postData.filter(post => post.tags.includes("mystery")).slice(0, 5)
                .map(post => 
                  <li key={post.postId} className="posts-list">
                    <article className='posts-article'>
                      <h3>{post.title}</h3>
                      <p>{post.body}</p>
                      <footer className="tags">{post.tags.map(tag => <span>{tag + " "} </span>)}</footer>
                    </article>
                  </li>)
              }
          </ul>
        </section>
  
        <section className='posts-section'>
          <h2>Fiction</h2>
          <ul className="posts">
              {
                postData.filter(post => post.tags.includes("fiction")).slice(0, 5)
                .map(post => 
                  <li key={post.postId} className="posts-list">
                    <article className='posts-article'>
                      <h3>{post.title}</h3>
                      <p>{post.body}</p>
                      <footer className="tags">{post.tags.map(tag => <span>{tag + " "} </span>)}</footer>
                    </article>
                  </li>)
              }
          </ul>
        </section>
  
        <section className='posts-section'>
          <h2>Classic</h2>
          <ul className="posts">
              {
                postData.filter(post => post.tags.includes("classic")).slice(0, 5)
                .map(post => 
                  <li key={post.postId} className="posts-list">
                    <article className='posts-article'>
                      <h3>{post.title}</h3>
                      <p>{post.body}</p>
                      <footer className="tags">{post.tags.map(tag => <span>{tag + " "} </span>)}</footer>
                    </article>
                  </li>)
              }
          </ul>
        </section>
  
        <section className='posts-section'>
          <h2>History</h2>
          <ul className="posts">
              {
                postData.filter(post => post.tags.includes("history")).slice(0, 5)
                .map(post => 
                  <li key={post.postId} className="posts-list">
                    <article className='posts-article'>
                      <h3>{post.title}</h3>
                      <p>{post.body}</p>
                      <footer className="tags">{post.tags.map(tag => <span>{tag + " "} </span>)}</footer>
                    </article>
                  </li>)
              }
          </ul>
        </section>
      </>
    );
}

export default BlogPosts;
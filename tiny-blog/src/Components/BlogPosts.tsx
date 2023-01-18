import React from "react";
import { PostInfo } from "../types";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Accordion from 'react-bootstrap/Accordion';
import './BlogPosts.css';

interface IPostComponentProps {
    postData : PostInfo[]
  }

function BlogPosts({postData} : IPostComponentProps) {

    return (
      <><Accordion>
        <h1>Our top categories...</h1>
        <Container>
        <section className='posts-section'>
        <Accordion.Item eventKey="0">
        <Accordion.Header>Love</Accordion.Header>
        <Accordion.Body>
          <Row>
              {
                postData.filter(post => post.tags.includes("love")).slice(0, 5)
                .map(post => <Col>
                  <Card style={{ width: '20rem', minHeight: '27rem', backgroundColor:  'rgb(239, 243, 210)' }} className='card'>
                  <Card.Body>
                      <Card.Header style={{ backgroundColor: 'black', color: 'white' }}>{post.title}</Card.Header>
                      <Card.Text>{post.body}</Card.Text>
                      <footer className="card-footer">{post.tags.map(tag =><Badge bg="secondary">{tag}</Badge>)}</footer>
                      </Card.Body></Card>
                  </Col>)
              }
          </Row></Accordion.Body></Accordion.Item>
        </section></Container>

        <Container>
        <section className='posts-section'>
        <Accordion.Item eventKey="1">
        <Accordion.Header>Mystery</Accordion.Header>
        <Accordion.Body>
          <Row>
              {
                postData.filter(post => post.tags.includes("mystery")).slice(0, 5)
                .map(post => <Col>
                  <Card style={{ width: '20rem' }} className='card'>
                  <Card.Body>
                      <Card.Title>{post.title}</Card.Title>
                      <Card.Text>{post.body}</Card.Text>
                      {post.tags.map(tag =><Badge bg="secondary">{tag}</Badge>)}
                      </Card.Body></Card>
                  </Col>)
              }
          </Row></Accordion.Body></Accordion.Item>
        </section></Container>

        <Container>
        <section className='posts-section'>
        <Accordion.Item eventKey="2">
        <Accordion.Header>Fiction</Accordion.Header>
        <Accordion.Body>
          <Row>
              {
                postData.filter(post => post.tags.includes("fiction")).slice(0, 5)
                .map(post => <Col>
                  <Card style={{ width: '20rem' }} className='card'>
                  <Card.Body>
                      <Card.Title>{post.title}</Card.Title>
                      <Card.Text>{post.body}</Card.Text>
                      {post.tags.map(tag =><Badge bg="secondary">{tag}</Badge>)}
                      </Card.Body></Card>
                  </Col>)
              }
          </Row></Accordion.Body></Accordion.Item>
        </section></Container>

        <Container>
        <section className='posts-section'>
        <Accordion.Item eventKey="0">
        <Accordion.Header>Classic</Accordion.Header>
        <Accordion.Body>
          <Row>
              {
                postData.filter(post => post.tags.includes("classic")).slice(0, 5)
                .map(post => <Col>
                  <Card style={{ width: '20rem' }} className='card'>
                  <Card.Body>
                      <Card.Title>{post.title}</Card.Title>
                      <Card.Text>{post.body}</Card.Text>
                      {post.tags.map(tag =><Badge bg="secondary">{tag}</Badge>)}
                      </Card.Body></Card>
                  </Col>)
              }
          </Row></Accordion.Body></Accordion.Item>
        </section></Container>

        <Container>
        <section className='posts-section'>
        <Accordion.Item eventKey="0">
        <Accordion.Header>History</Accordion.Header>
        <Accordion.Body>
          <Row>
              {
                postData.filter(post => post.tags.includes("history")).slice(0, 5)
                .map(post => <Col>
                  <Card style={{ width: '20rem' }} className='card'>
                  <Card.Body>
                      <Card.Title>{post.title}</Card.Title>
                      <Card.Text>{post.body}</Card.Text>
                      {post.tags.map(tag =><Badge bg="secondary">{tag}</Badge>)}
                      </Card.Body></Card>
                  </Col>)
              }
          </Row></Accordion.Body></Accordion.Item>
        </section></Container>
        </Accordion>
      </>
    );
}

export default BlogPosts;
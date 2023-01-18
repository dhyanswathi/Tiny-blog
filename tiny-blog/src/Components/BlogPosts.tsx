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
        <Accordion.Header><h2>Love</h2></Accordion.Header>
        <Accordion.Body>
          <Row>
              {
                postData.filter(post => post.tags.includes("love")).slice(0, 5)
                .map(post => <Col>
                  <Card style={{ width: '20rem', minHeight: '27rem', backgroundColor:  'rgb(250, 251, 241)' }} className='card'>
                    <Card.Body>
                      <Card.Header style={{ backgroundColor: 'rgb(35, 1, 4)', color: 'rgb(250, 251, 241)' }}>{post.title}</Card.Header>
                      <Card.Text>{post.body}</Card.Text>
                    </Card.Body>
                      <Card.Footer>Tags: {post.tags.map(tag =><Badge bg="dark">{tag}</Badge>)}</Card.Footer>
                  </Card>
                </Col>)
              }
          </Row></Accordion.Body></Accordion.Item>
        </section></Container>

        <Container>
        <section className='posts-section'>
        <Accordion.Item eventKey="1">
        <Accordion.Header><h2>Mystery</h2></Accordion.Header>
        <Accordion.Body>
          <Row>
              {
                postData.filter(post => post.tags.includes("mystery")).slice(0, 5)
                .map(post => <Col>
                  <Card style={{ width: '20rem', minHeight: '27rem', backgroundColor:  'rgb(250, 251, 241)' }} className='card'>
                  <Card.Body>
                      <Card.Header style={{ backgroundColor: 'rgb(35, 1, 4)', color: 'rgb(250, 251, 241)' }}>{post.title}</Card.Header>
                      <Card.Text>{post.body}</Card.Text>
                    </Card.Body>
                      <Card.Footer>Tags: {post.tags.map(tag =><Badge bg="dark">{tag}</Badge>)}</Card.Footer>
                  </Card>
                  </Col>)
              }
          </Row></Accordion.Body></Accordion.Item>
        </section></Container>

        <Container>
        <section className='posts-section'>
        <Accordion.Item eventKey="2">
        <Accordion.Header><h2>Fiction</h2></Accordion.Header>
        <Accordion.Body>
          <Row>
              {
                postData.filter(post => post.tags.includes("fiction")).slice(0, 5)
                .map(post => <Col>
                  <Card style={{ width: '20rem', minHeight: '27rem', backgroundColor:  'rgb(250, 251, 241)' }} className='card'>
                   <Card.Body>
                      <Card.Header style={{ backgroundColor: 'rgb(35, 1, 4)', color: 'rgb(250, 251, 241)' }}>{post.title}</Card.Header>
                      <Card.Text>{post.body}</Card.Text>
                    </Card.Body>
                      <Card.Footer>Tags: {post.tags.map(tag =><Badge bg="dark">{tag}</Badge>)}</Card.Footer> 
                  </Card>
                  </Col>)
              }
          </Row></Accordion.Body></Accordion.Item>
        </section></Container>

        <Container>
        <section className='posts-section'>
        <Accordion.Item eventKey="3">
        <Accordion.Header><h2>Classic</h2></Accordion.Header>
        <Accordion.Body>
          <Row>
              {
                postData.filter(post => post.tags.includes("classic")).slice(0, 5)
                .map(post => <Col>
                  <Card style={{ width: '20rem', minHeight: '27rem', backgroundColor:  'rgb(250, 251, 241)' }} className='card'>
                  <Card.Body>
                      <Card.Header style={{ backgroundColor: 'rgb(35, 1, 4)', color: 'rgb(250, 251, 241)' }}>{post.title}</Card.Header>
                      <Card.Text>{post.body}</Card.Text>
                    </Card.Body>
                      <Card.Footer>Tags: {post.tags.map(tag =><Badge bg="dark">{tag}</Badge>)}</Card.Footer>
                  </Card>
                  </Col>)
              }
          </Row></Accordion.Body></Accordion.Item>
        </section></Container>

        <Container>
        <section className='posts-section'>
        <Accordion.Item eventKey="4">
        <Accordion.Header><h2>History</h2></Accordion.Header>
        <Accordion.Body>
          <Row>
              {
                postData.filter(post => post.tags.includes("history")).slice(0, 5)
                .map(post => <Col>
                  <Card style={{ width: '20rem', minHeight: '27rem', backgroundColor:  'rgb(250, 251, 241)' }} className='card'>
                  <Card.Body>
                      <Card.Header style={{ backgroundColor: 'rgb(35, 1, 4)', color: 'rgb(250, 251, 241)' }}>{post.title}</Card.Header>
                      <Card.Text>{post.body}</Card.Text>
                    </Card.Body>
                      <Card.Footer>Tags: {post.tags.map(tag =><Badge bg="dark">{tag}</Badge>)}</Card.Footer>
                  </Card>
                  </Col>)
              }
          </Row></Accordion.Body></Accordion.Item>
        </section></Container>
        </Accordion>
      </>
    );
}

export default BlogPosts;
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
        <h1 className="category">Our top categories</h1>
        <Container>
        <section className='posts-section'>
        <Accordion.Item eventKey="0">
        <Accordion.Header><h3>Love</h3></Accordion.Header>
        <Accordion.Body>
          <Row>
              {
                postData.filter(post => post.tags.includes("love")).slice(0, 6)
                .map(post => <Col>
                  <Card style={{ width: '20rem', minHeight: '27rem', backgroundColor:  'rgb(250, 251, 241)' }} className='card'>
                    <Card.Body>
                      <Card.Header style={{ backgroundColor: '#474242', color: 'rgb(250, 251, 241)' }}>{post.title}</Card.Header>
                      <Card.Text>{post.body}</Card.Text>
                    </Card.Body>
                      <Card.Footer>Tags: {post.tags.map(tag =><Badge bg="secondary">{tag}</Badge>)}</Card.Footer>
                  </Card>
                </Col>)
              }
          </Row></Accordion.Body></Accordion.Item>
        </section></Container>

        <Container>
        <section className='posts-section'>
        <Accordion.Item eventKey="1">
        <Accordion.Header><h3>Mystery</h3></Accordion.Header>
        <Accordion.Body>
          <Row>
              {
                postData.filter(post => post.tags.includes("mystery")).slice(0, 6)
                .map(post => <Col>
                  <Card style={{ width: '20rem', minHeight: '27rem', backgroundColor:  'rgb(250, 251, 241)' }} className='card'>
                  <Card.Body>
                      <Card.Header style={{ backgroundColor: '#474242', color: 'rgb(250, 251, 241)' }}>{post.title}</Card.Header>
                      <Card.Text>{post.body}</Card.Text>
                    </Card.Body>
                      <Card.Footer>Tags: {post.tags.map(tag =><Badge bg="secondary">{tag}</Badge>)}</Card.Footer>
                  </Card>
                  </Col>)
              }
          </Row></Accordion.Body></Accordion.Item>
        </section></Container>

        <Container>
        <section className='posts-section'>
        <Accordion.Item eventKey="2">
        <Accordion.Header><h3>Fiction</h3></Accordion.Header>
        <Accordion.Body>
          <Row>
              {
                postData.filter(post => post.tags.includes("fiction")).slice(0, 6)
                .map(post => <Col>
                  <Card style={{ width: '20rem', minHeight: '27rem', backgroundColor:  'rgb(250, 251, 241)' }} className='card'>
                   <Card.Body>
                      <Card.Header style={{ backgroundColor: '#474242', color: 'rgb(250, 251, 241)' }}>{post.title}</Card.Header>
                      <Card.Text>{post.body}</Card.Text>
                    </Card.Body>
                      <Card.Footer>Tags: {post.tags.map(tag =><Badge bg="secondary">{tag}</Badge>)}</Card.Footer> 
                  </Card>
                  </Col>)
              }
          </Row></Accordion.Body></Accordion.Item>
        </section></Container>

        <Container>
        <section className='posts-section'>
        <Accordion.Item eventKey="3">
        <Accordion.Header><h3>Classic</h3></Accordion.Header>
        <Accordion.Body>
          <Row>
              {
                postData.filter(post => post.tags.includes("classic")).slice(0, 6)
                .map(post => <Col>
                  <Card style={{ width: '20rem', minHeight: '27rem', backgroundColor:  'rgb(250, 251, 241)' }} className='card'>
                  <Card.Body>
                      <Card.Header style={{ backgroundColor: '#474242', color: 'rgb(250, 251, 241)' }}>{post.title}</Card.Header>
                      <Card.Text>{post.body}</Card.Text>
                    </Card.Body>
                      <Card.Footer>Tags: {post.tags.map(tag =><Badge bg="secondary">{tag}</Badge>)}</Card.Footer>
                  </Card>
                  </Col>)
              }
          </Row></Accordion.Body></Accordion.Item>
        </section></Container>

        <Container>
        <section className='posts-section'>
        <Accordion.Item eventKey="4">
        <Accordion.Header><h3>History</h3></Accordion.Header>
        <Accordion.Body>
          <Row>
              {
                postData.filter(post => post.tags.includes("history")).slice(0, 6)
                .map(post => <Col>
                  <Card style={{ width: '20rem', minHeight: '27rem', backgroundColor:  'rgb(250, 251, 241)' }} className='card'>
                  <Card.Body>
                      <Card.Header style={{ backgroundColor: '#474242', color: 'rgb(250, 251, 241)' }}>{post.title}</Card.Header>
                      <Card.Text>{post.body}</Card.Text>
                    </Card.Body>
                      <Card.Footer>Tags: {post.tags.map(tag =><Badge bg="secondary">{tag}</Badge>)}</Card.Footer>
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
import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap';

const Header = () => {
    return (
    <Navbar bg="light" variant="light">
     <Container>
        <LinkContainer to="/">
            <Navbar.Brand>Keep Scribbling</Navbar.Brand>
        </LinkContainer>
      <Nav className="me-auto">
      <LinkContainer to="/">
        <Nav.Link href="#home">Home</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/about">
        <Nav.Link href="#about">About</Nav.Link>
      </LinkContainer>
      </Nav>
     </Container>
    </Navbar>
    )
}

export default Header;
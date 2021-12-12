import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function NavigationBar() {
return (
    <Navbar bg="dark" expand="lg" variant="dark">
    <Navbar.Brand href="#">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <LinkContainer to="/login">
            <Nav.Link>Login</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/todoapp">
            <Nav.Link>TodoApp</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/preferences">
            <Nav.Link>Preferences</Nav.Link>
         </LinkContainer>
        </Nav>
    </Navbar.Collapse>
    </Navbar>
    );
}
export default NavigationBar;
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import {motion} from 'framer-motion'

function NavigationBar(props) {
return (
    <Navbar bg="dark" expand="md" variant="dark" className="navbar fixed-top">
    <Navbar.Brand href="#">KAM's 
        <motion.span  animate={{rotate:360}} transition={{repeat:Infinity, duration:2,ease:"linear",delay:1}}>🌸</motion.span> todos 
        <motion.span  animate={{rotate:-360}} transition={{repeat:Infinity, duration:2,ease:"linear",delay:1}}>🍀</motion.span>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
            <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login">
                <Nav.Link>{props.token?'Logout':'Login'}</Nav.Link>
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
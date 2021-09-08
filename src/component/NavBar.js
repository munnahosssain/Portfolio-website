import React from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import logo from './images/logo.jpg';

const NavBar = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"><Image height="60" width="60" src={logo} roundedCircle /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto"></Nav>
                        <Nav className="ml-auto">
                            <Nav.Link href="#features" className="me-4">Features</Nav.Link>
                            <Nav.Link href="#pricing" className="me-4">Pricing</Nav.Link>
                            <Nav.Link href="#pricing" className="me-4">Pricing</Nav.Link>
                            <Nav.Link href="#pricing" className="me-4">Pricing</Nav.Link>
                            <Nav.Link href="#pricing" className="me-4">Pricing</Nav.Link>
                            <Nav.Link href="#pricing" className="me-4">Pricing</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;
import './NavBar.css'
import React from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import logo from '../images/logo.jpg';

const NavBar = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className="p-2 fixed-top navbar" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <Image className="logo" src={logo} roundedCircle />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto"></Nav>
                        <Nav className="ml-auto active">
                            <Nav.Link href="#home" className="me-5 nav-link">Home</Nav.Link>
                            <Nav.Link href="#about" className="me-5 nav-link">About</Nav.Link>
                            <Nav.Link href="#services" className="me-5 nav-link">services</Nav.Link>
                            <Nav.Link href="#how-work" className="me-5 nav-link">how work</Nav.Link>
                            <Nav.Link href="#portfolio" className="me-5 nav-link">portfolio</Nav.Link>
                            <Nav.Link href="#contacts" className="me-5 nav-link">contacts</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;
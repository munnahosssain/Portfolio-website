import './NavBar.css'
import React from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" fixed="top" bg="dark" variant="dark">
                <Container>
                    <Link to="/">
                        <Image className="logo" src={logo} />
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto"></Nav>
                        <Nav className="ml-auto">
                            <Nav.Link to="/" href="#home" className="me-5 nav-link">Home</Nav.Link>
                            <Nav.Link to="/about" href="#about" className="me-5 nav-link">About</Nav.Link>
                            <Nav.Link to="/services" href="#services" className="me-5 nav-link">services</Nav.Link>
                            <Nav.Link to="/experience" href="#experience" className="me-5 nav-link">experience</Nav.Link>
                            <Nav.Link to="/contacts" href="#contact" className="me-5 nav-link">contacts</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;
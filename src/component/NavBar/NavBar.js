import './NavBar.css'
import React from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className="fixed-to" bg="dark" variant="dark">
                <Container>
                    <Link to="/">
                        <Image className="logo" src={logo} />
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto"></Nav>
                        <Nav className="ml-auto">
                            <Link to="/" id="home" className="me-5 nav-link">Home</Link>
                            <Link to="/about" id="about" className="me-5 nav-link">About</Link>
                            <Link to="/services" id="services" className="me-5 nav-link">services</Link>
                            <Link to="/experience" id="experience" className="me-5 nav-link">experience</Link>
                            <Link to="/contacts" id="contact" className="me-5 nav-link">contacts</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;
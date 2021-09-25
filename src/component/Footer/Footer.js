import './Footer.css'
import React from 'react';
import { Image, Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import logo from '../images/logo.png';

const Footer = () => {
    return (
        <div class="footer-bg">
            <div class="container">
                <div class="row row-cols-1 row-cols-md-3 footer-wrapper">
                    <div class="col">
                        <Navbar.Brand href="#home">
                            <Image className="logo mb-3" src={logo} /> <br />
                        </Navbar.Brand>
                        <FontAwesomeIcon icon={faEnvelope} />
                        <span class="ms-2">Email: <a class="footer-anchor" href="mailto:mayinuddin.munna@gmail.com"> mayinuddin.munna@gmail.com</a></span><br /> <br />
                        <FontAwesomeIcon icon={faPhoneAlt} />
                        <span class="ms-2">Phone: <a class="footer-anchor" href="tel:01572394249">01572394249, 01988545311</a></span>
                    </div>
                    <div class="col">
                        <Nav.Link href="#home" >Home</Nav.Link>
                        <Nav.Link href="#about" >About</Nav.Link>
                        <Nav.Link href="#services" >services</Nav.Link>
                        <Nav.Link href="#experience" >experience</Nav.Link>
                        <Nav.Link href="#portfolio" >portfolio</Nav.Link>
                        <Nav.Link href="#contacts" >contacts</Nav.Link>
                    </div>
                    <div class="col">
                        <div className="social-connect fa-icon">
                            <h5>Follow us</h5>
                            <a href="https://github.com/munnahosssain" target="_blank" rel="noopener noreferrer"><i class="fab fa-github-square ms-3 text-white"></i></a>
                            <a href="https://www.linkedin.com/in/munna-hossain-b8b9541a1/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin ms-3 text-white"></i></a>
                            <a href="https://web.facebook.com" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook-square ms-3 text-white"></i></a>
                        </div>
                    </div>
                </div>
                <footer className="blockquote-footer text-center">
                    Copyright © 2021 -M200
                </footer>
            </div>
        </div>
    );
};

export default Footer;
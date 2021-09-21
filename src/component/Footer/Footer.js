import './Footer.css'
import React from 'react';
import { Image, Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhoneAlt, faGithub } from '@fortawesome/free-solid-svg-icons'
import logo from '../images/logo.png';

const Footer = () => {
    return (
        <div className="footer-bg">
            <div className="footer-wrapper container">
                <div className="contact-us col-4">
                    <Navbar.Brand href="#home">
                        <Image className="logo mb-3" src={logo} /> <br />
                    </Navbar.Brand>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <span class="ms-2">Email: <a class="text-white" href="mailto:mayinuddin.munna@gmail.com"> mayinuddin.munna@gmail.com</a></span><br /> <br />
                    <FontAwesomeIcon icon={faPhoneAlt} />
                    <span class="ms-2">Phone: <a class="text-white" href="tel:01572394249">01572394249, 01988545311</a></span>
                </div>
                <div className="menu-links col-4">
                    <Nav.Link href="#home" >Home</Nav.Link>
                    <Nav.Link href="#about" >About</Nav.Link>
                    <Nav.Link href="#services" >services</Nav.Link>
                    <Nav.Link href="#experience" >experience</Nav.Link>
                    <Nav.Link href="#portfolio" >portfolio</Nav.Link>
                    <Nav.Link href="#contacts" >contacts</Nav.Link>
                </div>
                <div className="social-connect col-4 fa-icon">
                    <h5>Follow us</h5>
                    <a href="https://github.com/munnahosssain" target="_blank" rel="noopener noreferrer"><i class="fab fa-github-square ms-3 text-white"></i></a>
                    <a href="https://www.linkedin.com/in/munna-hossain-b8b9541a1/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin ms-3 text-white"></i></a>
                    <a href="https://web.facebook.com" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook-square ms-3 text-white"></i></a>
                </div>
            </div>
            <footer className="blockquote-footer text-center">
                Copyright © 2021 -M 200
            </footer>
        </div>
    );
};

export default Footer;
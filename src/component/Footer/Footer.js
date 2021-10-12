import './Footer.css'
import React from 'react';
import { Image, Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer-bg">
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 footer-wrapper">
                    <div className="col">
                        <Link to="/">
                            <Image className="logo mb-3" src={logo} /> <br />
                        </Link>
                        <FontAwesomeIcon icon={faEnvelope} />
                        <span className="ms-2">Email: <a class="footer-anchor" href="mailto:mayinuddin.munna@gmail.com"> mayinuddin.munna@gmail.com</a></span><br /> <br />
                        <FontAwesomeIcon icon={faPhoneAlt} />
                        <span className="ms-2">Phone: <a class="footer-anchor" href="tel:01572394249">01572394249, 01988545311</a></span>
                    </div>
                    <div className="col">
                        <div className="social-connect">
                            <Link className="footer-nav" to="/">Home</Link>
                            <Link className="footer-nav" to="/about">About</Link>
                            <Link className="footer-nav" to="/services" >services</Link>
                            <Link className="footer-nav" to="/experience" >experience</Link>
                            <Link className="footer-nav" to="/contacts" >contacts</Link>
                        </div>
                    </div>
                    <div className="col">
                        <div className="social-connect fa-icon">
                            <h5 className="text-white">Follow us</h5>
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
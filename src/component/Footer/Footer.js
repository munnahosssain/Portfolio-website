import './Footer.css'
import React from 'react';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <div className="footer-bg">
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 footer-wrapper">
                    <div className="col">
                        <Link to="/">
                            <Image className="logo mb-3" src={logo} /> <br />
                        </Link>
                        <FontAwesomeIcon icon={faEnvelope} />
                        <span className="ms-2">Email: <a class="footer-anchor" href="mailto:mayinuddin.munna@gmail.com"> mayinuddin.munna@gmail.com</a></span><br /> <br />
                        <FontAwesomeIcon icon={faPhoneAlt} />
                        <span className="ms-2">Phone: <a class="footer-anchor" href="tel:01572394249">01572394249 || 01988545311</a></span>
                    </div>
                    {/* <div className="col">
                        <div className="social-connect">
                            <Link className="footer-nav" to="/" href="#home">Home</Link>
                            <Link className="footer-nav" to="/about" href="#about">About</Link>
                            <Link className="footer-nav" to="/services" href="#services">services</Link>
                            <Link className="footer-nav" to="/experience" href="#experience">experience</Link>
                            <Link className="footer-nav" to="/contacts" href="#contacts">contacts</Link>
                        </div>
                    </div> */}
                    <div className="col">
                        <div className="social-connect fa-icon">
                            <h5 className="">Connect with</h5>
                            <a href="https://github.com/munnahosssain" target="_blank" rel="noopener noreferrer"><i class="fab fa-icon fa-github-square mt-4 ms-3 text-white fa-3x"></i></a>
                            <a href="https://www.linkedin.com/in/munna-hossain-b8b9541a1/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin ms-3 text-white fa-3x"></i></a>
                            <a href="https://join.skype.com/invite/Q1ajR6vuVWYD" target="_blank" rel="noopener noreferrer"><i class="fab fa-skype ms-3 text-white fa-3x"></i></a>
                            <a href="https://web.facebook.com" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook-square ms-3 text-white fa-3x"></i></a>
                            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter-square ms-3 text-white fa-3x"></i></a>
                            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram-square ms-3 text-white fa-3x"></i></a>
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
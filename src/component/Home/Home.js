import './Home.css'
import React from 'react';
import { Image } from 'react-bootstrap';
import headerBg from '../images/headerBg.jpg'
import Typed from "react-typed";
import Particle from '../Particle/Particle';
import About from '../About/About';
import Services from '../Services/Services';
import Experience from '../Experience/Experience';
import Contacts from '../Contacts/Contacts';
import Footer from '../Footer/Footer';
import ClientReview from '../ClientReview/ClientReview';
const Header = () => {
    return (
        <div id="home" className="header-wrapper">
            <Particle />
            <img src={headerBg} alt="" style={{ width: "100%", height: "100%" }} fluid />
            <div>
                <h1 className="main-info centered">Development and website promotions</h1>
                <Typed
                    className="typed-text centered"
                    strings={[
                        "Web design",
                        "Web development",
                        "responsive design",
                        "wordpress design",
                    ]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <a href="#contact" className="btn-main btn-centered">Contact me</a>
            </div>
            <About />
            <Services />
            <Experience />
            {/* <ClientReview /> */}
            <Contacts />
            <Footer />
        </div>
    );
};

export default Header;
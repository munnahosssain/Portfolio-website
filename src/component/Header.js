import React from 'react';
import { Button, Image } from 'react-bootstrap';
import headerBg from './images/headerBg.jpg';
import Typed from "react-typed";
const Header = () => {
    return (
        <div className="header-wrapper">
            <Image src={headerBg} style={{ width: "100%", height: "100%" }} fluid />
            <div>
                <h1 className="main-info centered">Development and website promotions</h1>
                <Typed
                    className="typed-text centered"
                    strings={[
                        "Web design",
                        "Web development",
                        "wordpress website"
                    ]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <a href="#" className="btn-main btn-centered">Contact me</a>
            </div>
        </div>
    );
};

export default Header;
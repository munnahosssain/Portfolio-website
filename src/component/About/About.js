import './About.css'
import '../../App.css'
import React from 'react';
import logo from '../images/logo.jpg'

const About = () => {
    return (
        <div class="mt-5 mb-5">
            <div class="container">
                <div class="row g-0">
                    <div class="col-md-6">
                        <img src={logo} class="img-fluid img-centered round-circle" alt="..." />
                    </div>
                    <div class="col-md-6">
                        <div class="card-body about-text-centered">
                            <h2 class="card-title fw-normal">about me</h2>
                            <p class="card-text mt-3 fs-5">Hello! I am Munna. I have been developing website for less then 1 year. I'm Front End Web Developer. Technologies I use ReactJs. I create responsive website that are displayed on all devices desktop, tab and smartphone. Of course, before I being developing any webApp, Landing Page, Business website or E-commerce,I need to have a ready-made project layout(sketch) And i'm ready to do this for you, before we start developing your website, we will discuss all the details of your nice with you ,I'll conduct a survey of your competitors and make a list of there advantages and weaknesses. All this is necessary to give your customers somethings that your competitors do't provide, or to present or service. It is essential that your potential clients know about you. I'll create an advertising campaign for you in <span>Google Adwords and Facebook!</span>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
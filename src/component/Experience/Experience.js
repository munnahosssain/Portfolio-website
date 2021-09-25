import './Experience.css'
import React from 'react';
import { Card, CardGroup, Container } from 'react-bootstrap';
import pinMatcher from '../images/pinMatcher.png';
import flightBooking from '../images/flightBooking.png';
import pionerBank from '../images/pionerBank.png';
import shopingEcom from '../images/shopingEcom.png';
import code from '../images/code.png';
import tabIcon from '../images/tabIcon.png';
const Experience = () => {
    return (
        <div>
            <h1 className="experience-text fw-normal text-experience">Experience</h1>
            <Container>
                <h4 className="ms-4">Javascript Projects...</h4>
                <CardGroup className="mt-3 mb-5">
                    <Card className="card-shadow ms-2">
                        <img src={pinMatcher} class="experience-img mt-2 ms-2 me-2" alt="..." />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, dolore.</p>
                        <div className="url-customized d-flex justify-content-evenly">
                            <a className="fas fa-video" href="https://munnahosssain.github.io/Pin-Macher/"> LIVE</a>
                            <a className="fab fa-github" href="https://github.com/munnahosssain/Pin-Macher"> CODE</a>
                        </div>
                    </Card>
                    <Card className="card-shadow me-3 ms-3">
                        <img src={flightBooking} class="experience-img mt-2 ms-2 me-2" alt="..." />
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, quia?</p>
                        <div className="url-customized d-flex justify-content-evenly">
                            <a className="fas fa-video" href="https://munnahosssain.github.io/Flight-Booking/"> LIVE</a>
                            <a className="fab fa-github" href="https://github.com/munnahosssain/Flight-Booking"> CODE</a>
                        </div>
                    </Card>
                    <Card className="card-shadow">
                        <img src={pionerBank} class="experience-img mt-2 ms-2 me-2" alt="..." />
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, sapiente?</p>
                        <div className="url-customized d-flex justify-content-evenly">
                            <a className="fas fa-video" href="https://munnahosssain.github.io/Pioneer-Bank/"> LIVE</a>
                            <a className="fab fa-github" href="https://github.com/munnahosssain/Pioneer-Bank"> CODE</a>
                        </div>
                    </Card>
                    <Card className="card-shadow me-2 ms-2">
                        <img src={shopingEcom} class="experience-img mt-2 ms-2 me-2" alt="..." />
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, sapiente?</p>
                        <div className="url-customized d-flex justify-content-evenly">
                            <a className="fas fa-video" href="https://munnahosssain.github.io/Pioneer-Bank/"> LIVE</a>
                            <a className="fab fa-github" href="https://github.com/munnahosssain/Shoping-e-com"> CODE</a>
                        </div>
                    </Card>
                </CardGroup>
                <h4 className="ms-4">ReactJS Projects...</h4>
                <CardGroup className="mt-3 mb-5">
                    <Card className="card-shadow ms-2">
                        <img src={tabIcon} class="experience-img mt-2 ms-2 me-2" alt="..." />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, dolore.</p>
                        <div className="url-customized d-flex justify-content-evenly">
                            <a className="fas fa-video" href="https://munnahosssain.github.io/Pin-Macher/"> LIVE</a>
                            <a className="fab fa-github" href="https://github.com/munnahosssain/Pin-Macher"> CODE</a>
                        </div>
                    </Card>
                    <Card className="card-shadow me-3 ms-3">
                        <img src={code} class="experience-img mt-2 ms-2 me-2" alt="..." />
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, quia?</p>
                        <div className="url-customized d-flex justify-content-evenly">
                            <a className="fas fa-video" href="https://munnahosssain.github.io/Flight-Booking/"> LIVE</a>
                            <a className="fab fa-github" href="https://github.com/munnahosssain/Flight-Booking"> CODE</a>
                        </div>
                    </Card>
                    <Card className="card-shadow">
                        <img src={tabIcon} class="experience-img mt-2 ms-2 me-2" alt="..." />
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, sapiente?</p>
                        <div className="url-customized d-flex justify-content-evenly">
                            <a className="fas fa-video" href="https://munnahosssain.github.io/Pioneer-Bank/"> LIVE</a> <br />
                            <a className="fab fa-github" href="https://github.com/munnahosssain/Pioneer-Bank"> CODE</a>
                        </div>
                    </Card>
                    <Card className="card-shadow me-2 ms-2">
                        <img src={code} class="experience-img mt-2 ms-2 me-2" alt="..." />
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, sapiente?</p>
                        <div className="url-customized d-flex justify-content-evenly">
                            <a className="fas fa-video" href="https://munnahosssain.github.io/Pioneer-Bank/"> LIVE</a>
                            <a className="fab fa-github" href="https://github.com/munnahosssain/Shoping-e-com"> CODE</a>
                        </div>
                    </Card>
                </CardGroup>
            </Container>
        </div>
    );
};

export default Experience;
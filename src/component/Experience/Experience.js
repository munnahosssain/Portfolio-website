import './Experience.css'
import React from 'react';
import { Card, CardGroup, Container } from 'react-bootstrap';
import pinMatcher from '../images/pinMatcher.png';
import flightBooking from '../images/flightBooking.png';
import pionerBank from '../images/pionerBank.png';
import shopingEcom from '../images/shopingEcom.png';
const Experience = () => {
    return (
        <div>
            {/* <Container> */}
            <h1 className="experience-text fw-normal text-experience">Experience</h1>
            <h4>Javascript Projects...</h4>
            <CardGroup className="mt-5 mb-5">
                <Card className="card-shadow ms-5">
                    <img src={pinMatcher} class="experience-img mt-2 ms-2 me-2" alt="..." />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, dolore.</p>
                    <div className="url-customized">
                        <span>Preview: <a href="https://munnahosssain.github.io/Pin-Macher/">https://munnahosssain.github.io/Pin-Macher/</a></span> <br />
                        <span>Github: <a href="https://github.com/munnahosssain/Pin-Macher">https://github.com/munnahosssain/Pin-Macher</a></span>
                    </div>
                </Card>
                <Card className="card-shadow me-5 ms-5">
                    <img src={flightBooking} class="experience-img mt-2 ms-2 me-2" alt="..." />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, quia?</p>
                    <div className="url-customized">
                        <span>Preview: <a href="https://munnahosssain.github.io/Flight-Booking/">https://munnahosssain.github.io/Flight-Booking/</a></span> <br />
                        <span>Github: <a href="https://github.com/munnahosssain/Flight-Booking">https://github.com/munnahosssain/Flight-Booking</a></span>
                    </div>
                </Card>
                <Card className="card-shadow">
                    <img src={pionerBank} class="experience-img mt-2 ms-2 me-2" alt="..." />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, sapiente?</p>
                    <div className="url-customized">
                        <span>Preview: <a href="https://munnahosssain.github.io/Pioneer-Bank/">https://munnahosssain.github.io/Pioneer-Bank/</a></span> <br />
                        <span>Github: <a href="https://github.com/munnahosssain/Pioneer-Bank">https://github.com/munnahosssain/Pioneer-Bank</a></span>
                    </div>
                </Card>
                <Card className="card-shadow me-5 ms-5">
                    <img src={shopingEcom} class="experience-img mt-2 ms-2 me-2" alt="..." />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, sapiente?</p>
                    <div className="url-customized">
                        <span>Preview: <a href="https://munnahosssain.github.io/Pioneer-Bank/">https://munnahosssain.github.io/Shoping-e-com/</a></span> <br />
                        <span>Github: <a href="https://github.com/munnahosssain/Shoping-e-com">https://github.com/munnahosssain/Shoping-e-com</a></span>
                    </div>
                </Card>
            </CardGroup>
            <h4>ReactJS Projects...</h4>
            <CardGroup className="mt-5 mb-5">
                <Card>
                    <img src={pinMatcher} class="img-sizing mt-5 ms-5" alt="..." />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, autem.</p>
                    <span class="">Preview: <a href="mayinuddin.munna@gmail.com"> mayinuddin.munna@gmail.com</a></span>
                    <span class="">Github: <a href="mayinuddin.munna@gmail.com"> mayinuddin.munna@gmail.com</a></span>
                </Card>
                <Card className="me-3 ms-3">
                    <img src={pinMatcher} class="img-sizing mt-5 ms-5" alt="..." />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, autem.</p>
                    <span class="">Preview: <a href="mayinuddin.munna@gmail.com"> mayinuddin.munna@gmail.com</a></span>
                    <span class="">Github: <a href="mayinuddin.munna@gmail.com"> mayinuddin.munna@gmail.com</a></span>
                </Card>
                <Card>
                    <img src={pinMatcher} class="img-sizing mt-5 ms-5" alt="..." />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, autem.</p>
                    <span class="">Preview: <a href="mayinuddin.munna@gmail.com"> mayinuddin.munna@gmail.com</a></span>
                    <span class="">Github: <a href="mayinuddin.munna@gmail.com"> mayinuddin.munna@gmail.com</a></span>
                </Card>
            </CardGroup>
            {/* </Container> */}
        </div>
    );
};

export default Experience;
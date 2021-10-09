import './ClientReview.css'
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Card, Container } from 'react-bootstrap';
import logo from '../images/logo.png'
const ClientReview = () => {

    return (
        <div className="client-part">
            <h1 className="client-text">Client Review</h1>
            <Container>
                <OwlCarousel
                    className='owl-theme'
                    dots={true}
                    arrows={false}
                    loop={true}
                    // autoplay={true}
                    items={1}
                    margin={0}
                    // nav={true}
                    speeds={3}
                    smartSpeed={1000}
                >
                    <div className='item'>
                        <Card className='card-style'>
                            <div class="row g-0">
                                <div class="col-md-5">
                                    <img src={logo} class="img-sizing ms-5" alt="..." />
                                </div>
                                <div class="col-md-6">
                                    <div class="card-body text-rev">
                                        <h4 class="card-title">John Doe</h4>
                                        <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti iure quisquam, harum minus aut, sint porro consequatur eum labore facere illo sit dolor incidunt, libero officiis velit nam officia. Mollitia veritatis officiis vero tempora maxime pariatur eligendi voluptates, ipsam corrupti odit eaque exercitationem quam sit rerum ipsum reprehenderit culpa recusandae.</p>
                                        <p class="card-text"><small class="text-muted">Last updated a days ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className='item'>
                        <Card className='card-style'>
                            <div class="row g-0">
                                <div class="col-md-5">
                                    <img src={logo} class="img-sizing mt-5 ms-5" alt="..." />
                                </div>
                                <div class="col-md-6">
                                    <div class="card-body text-rev">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className='item'>
                        <Card className='card-style'>
                            <div class="row g-0">
                                <div class="col-md-5">
                                    <img src={logo} class="img-sizing mt-5 ms-5" alt="..." />
                                </div>
                                <div class="col-md-6">
                                    <div class="card-body text-rev">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className='item'>
                        <Card className='card-style'>
                            <div class="row g-0">
                                <div class="col-md-5">
                                    <img src={logo} class="img-sizing mt-5 ms-5" alt="..." />
                                </div>
                                <div class="col-md-6">
                                    <div class="card-body text-rev">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </OwlCarousel>
            </Container>
        </div>
    );
};

export default ClientReview;
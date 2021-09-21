import './ClientReview.css'
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Card, Col, Container, Image } from 'react-bootstrap';
import cliPhot1 from '../images/cliBg.png'
const ClientReview = () => {

    return (
        <div>
            <Container>
                <OwlCarousel
                    className='owl-theme'
                    dots={false}
                    arrows={false}
                    loop={true}
                    // autoplay={true}
                    items={1}
                    margin={0}
                    nav={true}
                    speeds={3}
                    smartSpeed={1000}
                >
                    <div className='item'>
                        
                    </div>
                    <div className='item'>
                        <Card style={{ width: '100%', height: '28rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='item'>
                        <Card style={{ width: '100%', height: '28rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='item'>
                        <Card style={{ width: '100%', height: '28rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='item'>
                        <Card style={{ width: '100%', height: '28rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </OwlCarousel>
            </Container>
        </div>
    );
};

export default ClientReview;
import './Experience.css'
import React from 'react';
import { Card, Button, Row, CardGroup, Container, Col } from 'react-bootstrap';

const Experience = () => {
    return (
        <div>
            <Container>
                <h1 className="experience-text fw-normal text-experience">Experience</h1>
                <CardGroup className="mt-5">
                    <Card>
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                                additional content. This content is a little bit longer.
                                additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                        <h6>Preview: <a href="https://github.com/laurenchen0631/react-owl-carousel/blob/master/example/index.tsx">github.com/laurenchen0631/</a></h6>
                        <h6>Github: <a href="http://" /> </h6>
                    </Card>
                    <Card className="me-3 ms-3">
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to additional
                                content.{' '}
                            </Card.Text>
                        </Card.Body>
                        <p>Preview: <a href="http://" /> </p>
                        <p>Github: <a href="http://" /> </p>
                    </Card>
                    <Card>
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This card has even longer content than the first to
                                show that equal height action.
                            </Card.Text>
                        </Card.Body>
                        <p>Preview: <a href="http://" /> </p>
                        <p>Github: <a href="http://" /> </p>
                    </Card>
                </CardGroup>
                <CardGroup className="mt-5 mb-5">
                    <Card>
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                        <p>Preview: <a href="http://" /> </p>
                        <p>Github: <a href="http://" /> </p>
                    </Card>
                    <Card className="me-3 ms-3">
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to additional
                                content.{' '}
                            </Card.Text>
                        </Card.Body>
                        <p>Preview: <a href="http://" /> </p>
                        <p>Github: <a href="http://" /> </p>
                    </Card>
                    <Card>
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This card has even longer content than the first to
                                show that equal height action.
                            </Card.Text>
                        </Card.Body>
                        <p>Preview: <a href="http://" /> </p>
                        <p>Github: <a href="http://" /> </p>
                    </Card>
                </CardGroup>
            </Container>
        </div>
    );
};

export default Experience;
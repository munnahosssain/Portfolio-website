import './Contacts.css'
import emailjs from 'emailjs-com'
import React from 'react';
import { Button, Card, CardGroup, Col, FloatingLabel, Form } from 'react-bootstrap';

const Contacts = () => {

    function sendEmail(event) {
        event.preventDefault();
        emailjs.sendForm(
            "service_3qsqznq",
            "template_q5k5isf",
            event.target,
            "user_xfNUhs20vrnGuuvf3BodL"
        )
            .then(res => {
                console.log(res.text);
            })
            .catch(err => console.log(err.text));
    }

    return (
        <div className="form-wrapper">
            <h1 className="text-center contact-wrapper fw-normal">contact me</h1>
            <h5 className="text-center text-white fw-normal mt-3">Please fill out the form and describe your project needs and I'll contact you as soon as possible.</h5>
            <div className="container mt-5">
                <Form onSubmit={sendEmail}>
                    <CardGroup>
                        <Col>
                            <Form.Group className="p-2 " as={Col} controlId="formGridEmail">
                                <Form.Control type="text" name="name" placeholder="Name" />
                            </Form.Group>
                            <Form.Group className="p-2 mt-3 mb-3" controlId="formGridAddress1">
                                <Form.Control type="number" name="number" placeholder="Phone Number" />
                            </Form.Group>
                            <Form.Group className="mb-3 p-2" controlId="formGridAddress2">
                                <Form.Control type="email" name="email" placeholder="Email" />
                            </Form.Group>
                            <Form.Group className="mb-3 p-2" controlId="formGridAddress2">
                                <Form.Control name="subject" placeholder="Subject" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Card.Body>
                                <FloatingLabel controlId="floatingTextarea2" label="Please describe shortly your project.">
                                    <Form.Control
                                        name="message"
                                        as="textarea"
                                        placeholder="Leave a comment here"
                                        style={{ height: '150px' }}
                                    />
                                </FloatingLabel>
                                <div className="d-grid mt-4">
                                    <Button type="submit" variant="success" size="lg">CONTACT ME</Button>
                                </div>
                            </Card.Body>
                        </Col>
                    </CardGroup>
                </Form>
            </div>
        </div >
    );
};

export default Contacts;
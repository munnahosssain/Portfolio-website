import './Contacts.css'
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Button, Card, CardGroup, Col, FloatingLabel, Form } from 'react-bootstrap';
import Footer from '../Footer/Footer';

const Contacts = () => {

    const [messages, setMessages] = useState(false);
    function sendEmail(event) {
        setMessages(true);
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
        <div id="contact" className="form-wrapper">
            <h1 className="contact-wrapper">contact me</h1>
            <h5 className="contact-h5">Please fill out the form and describe your project needs and I'll contact you as soon as possible.</h5>
            <div className="container mt-5">
                <Form onSubmit={sendEmail}>
                    <CardGroup>
                        <Col>
                            <Form.Group className="p-2 mb-3" as={Col} controlId="formGridEmail">
                                <Form.Control type="text" name="name" placeholder="Name" required />
                            </Form.Group>
                            <Form.Group className="p-2 mb-3" controlId="formGridAddress1">
                                <Form.Control type="number" name="number" placeholder="Phone Number" required />
                            </Form.Group>
                            <Form.Group className="mb-3 p-2" controlId="formGridAddress2">
                                <Form.Control type="email" name="email" placeholder="Email" required />
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
                                        required
                                    />
                                </FloatingLabel>
                                <div className="d-grid mt-3">
                                    <button type="submit" className="contact-button" size="lg">contact me</button>
                                    {
                                        messages && <p className="status text-center mt-2">Thanks, I'll replay ASAP :)</p>
                                    }
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
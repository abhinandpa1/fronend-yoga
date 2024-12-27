import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      // Form submission logic here (e.g., send the data to an API or store in local storage)
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="contact-section py-5">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <h2 className="text-center mb-4">Contact Us</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName" className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group controlId="formMessage" className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Write your message here"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Button variant="primary" type="submit" block>
                Send Message
              </Button>
            </Form>

            {isSubmitted && (
              <div className="mt-4 text-center text-success">
                <h5>Your message has been sent successfully!</h5>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;

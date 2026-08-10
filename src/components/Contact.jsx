import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact">
      <Container>
        <h2 className="heading">Contact <span>Me!</span></h2>

        <Row className="mb-5 justify-content-center text-center">
          <Col md={4} className="mb-4">
            <div className="glass-panel p-4 h-100 d-flex flex-column align-items-center justify-content-center">
              <div style={{ background: 'var(--main-color-dim)', padding: '1.5rem', borderRadius: '50%', marginBottom: '1.5rem' }}>
                <FaPhoneAlt size={40} color="var(--main-color)" />
              </div>
              <p style={{ fontSize: '1.6rem', color: '#94a3b8', margin: 0 }}>+91 8102561056</p>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div className="glass-panel p-4 h-100 d-flex flex-column align-items-center justify-content-center">
              <div style={{ background: 'var(--main-color-dim)', padding: '1.5rem', borderRadius: '50%', marginBottom: '1.5rem' }}>
                <FaEnvelope size={40} color="var(--main-color)" />
              </div>
              <p style={{ fontSize: '1.6rem', color: '#94a3b8', margin: 0 }}>aashu16nov@gmail.com</p>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div className="glass-panel p-4 h-100 d-flex flex-column align-items-center justify-content-center">
              <div style={{ background: 'var(--main-color-dim)', padding: '1.5rem', borderRadius: '50%', marginBottom: '1.5rem' }}>
                <FaMapMarkerAlt size={40} color="var(--main-color)" />
              </div>
              <p style={{ fontSize: '1.6rem', color: '#94a3b8', margin: 0 }}>Ambika Green Phase 1, Near Mind Tree School, Kharar, Mohali, 140301 (Punjab)</p>
            </div>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={8}>
            <Form>
              <Row>
                <Col md={6} className="mb-3">
                  <Form.Control type="text" placeholder="Full Name" className="bg-transparent text-light p-3 border-secondary" required style={{ fontSize: '1.6rem' }} />
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Control type="email" placeholder="Email Address" className="bg-transparent text-light p-3 border-secondary" required style={{ fontSize: '1.6rem' }} />
                </Col>
              </Row>
              <Row>
                <Col md={6} className="mb-3">
                  <Form.Control type="tel" placeholder="Mobile Number" className="bg-transparent text-light p-3 border-secondary" required style={{ fontSize: '1.6rem' }} />
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Control type="text" placeholder="Email Subject" className="bg-transparent text-light p-3 border-secondary" required style={{ fontSize: '1.6rem' }} />
                </Col>
              </Row>
              <Form.Group className="mb-4">
                <Form.Control as="textarea" rows={6} placeholder="Your Message" className="bg-transparent text-light p-3 border-secondary" required style={{ fontSize: '1.6rem' }} />
              </Form.Group>
              <div className="text-center">
                <Button variant="none" className="btn-custom" type="submit">
                  Send Message
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>

      {/* Inline styles for focus state */}
      <style>{`
        .form-control:focus {
          border-color: var(--main-color) !important;
          box-shadow: 0 0 1rem var(--main-color-dim) !important;
          background-color: transparent !important;
          color: var(--text-color) !important;
        }
        .form-control::placeholder {
          color: #94a3b8;
        }
      `}</style>
    </section>
  );
};

export default Contact;

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <section id="about" className="about-section pt-5">
      <Container>
        <Row className="align-items-center">
          <Col md={5} className="mb-4 mb-md-0">
            <div className="hero-img-box">
              <div className="hero-img-item">
                <img src="/profile.png" alt="Aashutosh" />
              </div>
            </div>
          </Col>
          <Col md={7}>
            <h2 className="heading text-start mb-3">About <span>Me</span></h2>
            <h3 className="mb-4" style={{fontSize: '2.6rem', fontWeight: 600}}>Frontend Developer | UI/UX Designer</h3>
            <p style={{fontSize: '1.6rem', color: '#94a3b8', lineHeight: 1.6, marginBottom: '3rem'}}>
              Motivated MCA professional with strong knowledge of Full-Stack Development, Data Structures, DBMS. 
              Proficient in Python, SQL, HTML, CSS, and JavaScript with hands-on experience in academic and web 
              development projects. Skilled in UI/UX design and Full-Stack Development with familiarity in Git 
              and Agile methodologies. Aspiring to pursue role as Full-Stack Developer or UI/UX Designer to 
              utilize technical skills and teamwork abilities to organizational growth within a professional environment.
            </p>
            <a href="#!" className="btn-custom">Read More</a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;

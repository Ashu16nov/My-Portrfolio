import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { TypeAnimation } from 'react-type-animation';
import { FaFacebookF, FaDribbble, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <Container>
        <Row className="align-items-center">
          <Col md={7} className="hero-content">
            <h3>Hello It's Me</h3>
            <h1>Aashutosh</h1>
            <h3>
              And I'm a{' '}
              <span className="text-main">
                <TypeAnimation
                  sequence={[
                    'Frontend Developer',
                    2000,
                    'UI/UX Designer',
                    2000,
                    'Freelancer',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </h3>
            <p>
              Motivated MCA professional with strong knowledge of Full-Stack Development, 
              Data Structures, DBMS. Proficient in Python, SQL, HTML, CSS, and JavaScript 
              with hands-on experience in academic and web development projects. 
              Skilled in UI/UX design and Full-Stack Development with familiarity in Git 
              and Agile methodologies.
            </p>
            
            <div className="social-icons">
              <a href="#!"><FaFacebookF /></a>
              <a href="#!"><FaDribbble /></a>
              <a href="#!"><FaLinkedinIn /></a>
              <a href="#!"><FaGithub /></a>
            </div>
            
            <a href="#!" className="btn-custom">Download Resume</a>
          </Col>
          <Col md={5}>
            <div className="hero-img-box">
              <div className="hero-img-item">
                <img src="/profile.png" alt="Aashutosh" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;

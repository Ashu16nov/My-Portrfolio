import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { TypeAnimation } from 'react-type-animation';
import { FaFacebookF, FaDribbble, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} md={12} className="hero-content mb-5 mb-lg-0">
            <h3>Hello It's Me</h3>
            <h1>Aashutosh</h1>
            <h3>
              And I'm a{' '}
              <span className="text-main">
                <TypeAnimation
                  sequence={[
                    'Full Stack Developer',
                    2000,
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
              <a href="https://github.com/Ashu16nov" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            </div>
            
            <a 
              href="/Aashutosh_Resume.pdf" 
              download="Aashutosh_Resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-custom"
            >
              Download Resume
            </a>
          </Col>
          <Col lg={6} md={12} className="d-flex justify-content-center">
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

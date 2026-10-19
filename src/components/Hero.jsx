import React, { useState } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import { TypeAnimation } from 'react-type-animation';
import { FaFacebookF, FaDribbble, FaLinkedinIn, FaGithub, FaEye, FaDownload, FaExternalLinkAlt } from 'react-icons/fa';

const Hero = () => {
  const [showResume, setShowResume] = useState(false);

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
            
            <button 
              type="button"
              onClick={() => setShowResume(true)}
              className="btn-custom border-0"
              style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.8rem' }}
            >
              <FaEye size={18} /> View Resume
            </button>
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

      {/* On-screen Resume Display Modal */}
      <Modal 
        show={showResume} 
        onHide={() => setShowResume(false)} 
        size="lg" 
        centered
        className="resume-modal"
      >
        <Modal.Header 
          closeButton 
          style={{ 
            background: 'var(--second-bg-color)', 
            borderBottom: '1px solid rgba(0, 243, 255, 0.25)',
            color: 'var(--text-color)',
            alignItems: 'center'
          }}
        >
          <Modal.Title style={{ fontSize: '2rem', fontWeight: 700 }}>
            Aashutosh's <span style={{ color: 'var(--main-color)' }}>Resume</span>
          </Modal.Title>
          <div className="ms-auto me-3 d-flex gap-2">
            <a 
              href="/Aashutosh_Resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-custom"
              style={{ 
                padding: '0.5rem 1.4rem', 
                fontSize: '1.3rem', 
                background: 'transparent',
                color: 'var(--main-color)',
                border: '1px solid var(--main-color)',
                boxShadow: 'none'
              }}
            >
              <FaExternalLinkAlt className="me-2" /> Open PDF
            </a>
            <a 
              href="/Aashutosh_Resume.pdf" 
              download="Aashutosh_Resume.pdf" 
              className="btn-custom"
              style={{ padding: '0.5rem 1.4rem', fontSize: '1.3rem' }}
            >
              <FaDownload className="me-2" /> Download
            </a>
          </div>
        </Modal.Header>
        <Modal.Body 
          style={{ 
            background: '#070b12', 
            padding: '1.5rem', 
            maxHeight: '80vh', 
            overflowY: 'auto',
            textAlign: 'center' 
          }}
        >
          <img 
            src="/resume-preview.png" 
            alt="Aashutosh Resume" 
            className="img-fluid rounded shadow-lg"
            style={{ 
              maxWidth: '100%', 
              backgroundColor: '#fff',
              border: '1px solid rgba(0, 243, 255, 0.2)' 
            }} 
          />
        </Modal.Body>
      </Modal>
    </section>
  );
};

export default Hero;

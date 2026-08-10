import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaCode, FaPaintBrush, FaBriefcase } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      title: 'Frontend Developer',
      icon: <FaCode size={50} color="var(--main-color)" className="mb-4" />,
      desc: 'I am a frontend developer focused on building responsive, high-performance, and user friendly web applications using modern web technologies.'
    },
    {
      title: 'UI/UX Design',
      icon: <FaPaintBrush size={50} color="var(--main-color)" className="mb-4" />,
      desc: 'Design experiences, not just interfaces. My goal is to combine creativity with usability to build seamless, engaging, and user-friendly digital products.'
    },
    {
      title: 'Freelancer',
      icon: <FaBriefcase size={50} color="var(--main-color)" className="mb-4" />,
      desc: 'As a freelancer, I deliver reliable and customized web solutions, ensuring quality work, timely delivery, and client satisfaction.'
    }
  ];

  return (
    <section id="services">
      <Container>
        <h2 className="heading">My <span>Services</span></h2>
        
        <Row className="g-4 justify-content-center">
          {services.map((service, index) => (
            <Col md={6} lg={4} key={index}>
              <Card className="glass-panel text-center h-100 p-4" style={{ 
                background: 'rgba(17, 24, 39, 0.7)', 
                border: '1px solid rgba(255,255,255,0.05)',
                transition: '0.4s'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.borderColor = 'var(--main-color)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; }}>
                <Card.Body>
                  {service.icon}
                  <Card.Title style={{fontSize: '2.4rem', fontWeight: 600, marginBottom: '1.5rem', color: 'var(--text-color)'}}>{service.title}</Card.Title>
                  <Card.Text style={{fontSize: '1.5rem', color: '#94a3b8', lineHeight: 1.6, marginBottom: '2rem'}}>
                    {service.desc}
                  </Card.Text>
                  <a href="#!" className="btn-custom" style={{padding: '0.8rem 2rem', fontSize: '1.4rem'}}>Read More</a>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;

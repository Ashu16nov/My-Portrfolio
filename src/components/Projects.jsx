import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Web Design',
      desc: 'Modern and responsive landing page design using React and Bootstrap.',
      img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&q=80'
    },
    {
      title: 'E-commerce App',
      desc: 'Full-stack web application with cart functionality and payment integration.',
      img: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=500&q=80'
    },
    {
      title: 'Portfolio Site',
      desc: 'Personal portfolio template featuring dark mode and smooth animations.',
      img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&q=80'
    }
  ];

  return (
    <section id="projects">
      <Container>
        <h2 className="heading">My <span>Projects</span></h2>
        
        <Row className="g-4">
          {projects.map((proj, index) => (
            <Col md={6} lg={4} key={index}>
              <div className="project-card">
                <img src={proj.img} alt={proj.title} className="img-fluid w-100" />
                <div className="project-overlay">
                  <h4>{proj.title}</h4>
                  <p>{proj.desc}</p>
                  <a href="#!"><FaExternalLinkAlt /></a>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;

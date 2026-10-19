import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'LUXORA E-Commerce',
      tag: 'MERN Stack • Dress Rental',
      desc: 'Modern fashion platform combining online shopping with an innovative dress rental & booking management system.',
      img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
      github: 'https://github.com/Ashu16nov/LUXORA-E-Commerce-Website'
    },
    {
      title: 'RailSetu',
      tag: 'MERN Stack • Railway Travel',
      desc: 'Smart railway travel platform with train search, ticket booking (reserved, unreserved & Tatkal), and PNR tracking.',
      img: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800&q=80',
      github: 'https://github.com/Ashu16nov/RailSetu-India-s-Smart-Railway-Travel-Platform'
    },
    {
      title: 'Smart City Portal',
      tag: 'Full-Stack • Civic Services',
      desc: 'Unified citizen platform for municipal complaint management, public services, emergency assistance, and admin dashboard.',
      img: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&q=80',
      github: 'https://github.com/Ashu16nov/Smart-City-Portal-_Minor-Project'
    },
    {
      title: 'Mr. Foodie',
      tag: 'MERN Stack • Food Delivery',
      desc: 'Online food delivery platform featuring interactive restaurant menus, dish search, cart management, and order tracking.',
      img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80',
      github: 'https://github.com/Ashu16nov/Mr-Foodie---Online-Food-Delivery-Website'
    },
    {
      title: 'Facebook UI/UX Clone',
      tag: 'React • UI/UX Design',
      desc: 'Pixel-perfect responsive social media interface featuring newsfeed layout, interactive components, and sleek modern styling.',
      img: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80',
      github: 'https://github.com/Ashu16nov/Facebook-UI-UX-Clone'
    },
    {
      title: 'CareerVerse Job Portal',
      tag: 'React.js • Bootstrap',
      desc: 'Responsive job portal web application allowing users to register, browse job listings, and filter opportunities seamlessly.',
      img: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80',
      github: 'https://github.com/Ashu16nov/CareerVerse---Mini-Project-Based-On-A-Job-Portal-Website'
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
                  <span className="project-tag">{proj.tag}</span>
                  <p>{proj.desc}</p>
                  <div className="project-links">
                    <a 
                      href={proj.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      title="View GitHub Repository"
                    >
                      <FaGithub />
                    </a>
                  </div>
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

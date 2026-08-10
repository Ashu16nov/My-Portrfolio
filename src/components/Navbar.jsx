import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      className={`glass-nav ${scrolled ? 'scrolled' : ''}`}
      variant="dark"
    >
      <Container>
        <Navbar.Brand href="#home" className="logo">Portfolio.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="home" spy={true} smooth={true} offset={0} duration={500}>Home</Nav.Link>
            <Nav.Link as={Link} to="about" spy={true} smooth={true} offset={0} duration={500}>About</Nav.Link>
            <Nav.Link as={Link} to="education" spy={true} smooth={true} offset={0} duration={500}>Education</Nav.Link>
            <Nav.Link as={Link} to="skills" spy={true} smooth={true} offset={0} duration={500}>Skills</Nav.Link>
            <Nav.Link as={Link} to="services" spy={true} smooth={true} offset={0} duration={500}>Services</Nav.Link>
            <Nav.Link as={Link} to="projects" spy={true} smooth={true} offset={0} duration={500}>Projects</Nav.Link>
            <Nav.Link as={Link} to="contact" spy={true} smooth={true} offset={0} duration={500}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;

import React from 'react';
import { Container } from 'react-bootstrap';
import { FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer style={{ padding: '2rem 0' }}>
      <Container className="d-flex justify-content-between align-items-center flex-wrap">
        <div className="footer-text">
          <p style={{ fontSize: '1.6rem', margin: 0 }}>Copyright &copy; 2026 by Aashutosh | All Rights Reserved.</p>
        </div>
        <div className="footer-iconTop">
          <Link to="home" smooth={true} duration={500} style={{ 
            display: 'inline-flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            padding: '1rem', 
            background: 'var(--main-color)', 
            borderRadius: '0.8rem', 
            color: 'var(--second-bg-color)', 
            cursor: 'pointer' 
          }}>
            <FaArrowUp size={24} />
          </Link>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

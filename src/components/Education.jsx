import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaCalendarAlt } from 'react-icons/fa';

const Education = () => {
  const eduData = [
    {
      year: '2025 - 2027',
      degree: "Master's of Computer Application (MCA)",
      college: 'Chandigarh University, Mohali (Punjab)'
    },
    {
      year: '2021 - 2024',
      degree: "Bachelor's of Computer Application (BCA)",
      college: 'Cimage Professional College, Patna (Bihar)'
    },
    {
      year: '2019 - 2021',
      degree: "Intermediate (+2)",
      college: 'ABS Inter College, Lalganj, Vaishali (Bihar)'
    },
    {
      year: '2019',
      degree: "Matriculation",
      college: 'SRT School, Muzaffarpur (Bihar)'
    }
  ];

  return (
    <section id="education">
      <Container>
        <h2 className="heading">My <span>Education</span></h2>

        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <div style={{ borderLeft: '2px solid var(--main-color)', paddingLeft: '3rem' }}>
              {eduData.map((edu, index) => (
                <div key={index} className="glass-panel mb-4 p-4 position-relative" style={{ transition: '0.4s' }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderColor = 'var(--main-color)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; }}>

                  <div style={{
                    position: 'absolute', top: '3.5rem', left: '-3.7rem', width: '1.4rem', height: '1.4rem',
                    background: 'var(--main-color)', borderRadius: '50%'
                  }}></div>

                  <div style={{ fontSize: '1.5rem', color: 'var(--main-color)', marginBottom: '1rem' }}>
                    <FaCalendarAlt className="me-2" /> {edu.year}
                  </div>
                  <h3 style={{ fontSize: '2.2rem', fontWeight: 600, marginBottom: '1rem' }}>{edu.degree}</h3>
                  <p style={{ fontSize: '1.5rem', color: '#94a3b8', margin: 0 }}>College: {edu.college}</p>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Education;

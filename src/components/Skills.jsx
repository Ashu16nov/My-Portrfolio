import React from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';

const Skills = () => {
  const codingSkills = [
    { name: 'HTML', percent: 90 },
    { name: 'CSS', percent: 80 },
    { name: 'JavaScript', percent: 75 },
    { name: 'Python', percent: 85 },
    { name: 'SQL', percent: 80 }
  ];

  const profSkills = [
    { name: 'Web Development', percent: 90 },
    { name: 'UI/UX Design', percent: 85 },
    { name: 'Data Structures', percent: 75 },
    { name: 'Agile Methodologies', percent: 80 }
  ];

  return (
    <section id="skills">
      <Container>
        <h2 className="heading">My <span>Skills</span></h2>
        
        <Row className="g-5">
          <Col md={6}>
            <h3 className="mb-4" style={{fontSize: '2.5rem'}}>Coding Skills</h3>
            <div className="glass-panel p-5">
              {codingSkills.map((skill, index) => (
                <div key={index} className="mb-4">
                  <div className="d-flex justify-content-between mb-2">
                    <h4 style={{fontSize: '1.6rem'}}>{skill.name}</h4>
                    <span style={{fontSize: '1.6rem', color: 'var(--main-color)'}}>{skill.percent}%</span>
                  </div>
                  <ProgressBar now={skill.percent} style={{height: '10px', backgroundColor: 'rgba(255,255,255,0.1)'}}>
                    <ProgressBar now={skill.percent} style={{backgroundColor: 'var(--main-color)'}} />
                  </ProgressBar>
                </div>
              ))}
            </div>
          </Col>
          <Col md={6}>
            <h3 className="mb-4" style={{fontSize: '2.5rem'}}>Professional Skills</h3>
            <div className="glass-panel p-5">
              {profSkills.map((skill, index) => (
                <div key={index} className="mb-4">
                  <div className="d-flex justify-content-between mb-2">
                    <h4 style={{fontSize: '1.6rem'}}>{skill.name}</h4>
                    <span style={{fontSize: '1.6rem', color: 'var(--main-color)'}}>{skill.percent}%</span>
                  </div>
                  <ProgressBar now={skill.percent} style={{height: '10px', backgroundColor: 'rgba(255,255,255,0.1)'}}>
                    <ProgressBar now={skill.percent} style={{backgroundColor: 'var(--main-color)'}} />
                  </ProgressBar>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;

import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import githubLogo from '../assets/images/GitHub_Logo.png'
import linkedinLogo from '../assets/images/LI-Logo.png'
import fbookLogo from '../assets/images/f_logo.png'

function Footer () {
  return (
    <div className="page-footer" id="footer">
      <Container>
      
      <Row>
          <Col lg={3} md={12}>
            <a href="https://github.com/jleitz27"><img src={githubLogo} alt="github-logo" class="icon"/></a>
          </Col>
          <Col lg={3} md={12}>
            <a href="https://www.linkedin.com/in/jason-leitz-24b7884a"><img src={linkedinLogo} alt="linkedin-logo" class="icon" /></a>
          </Col>
          <Col lg={3} md={12}>
            <a href="https://www.facebook.com/jason.leitz"><img src={fbookLogo} alt="facebook" class="icon"/></a>
          </Col>
      </Row>
      </Container>
    </div>
  )
}

export default Footer;
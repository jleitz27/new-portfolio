import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Me from '../assets/images/me1.png'

const AboutPage = (props) => {

  return (
    
    <section className="title">
      
    <div className="row justify-content-center" id="about-container">       
    <Row >
      <Col lg={6} md={12}>
        <center><img src={Me} class="Image fluid" alt="profile-jason"/></center>
      </Col>
      <Col lg={6} md={12}>
        <p class="name">Jason Leitz</p>
        <p class="job">Full Stack Web Developer</p>
      
          <h2 class="education">About Me:</h2>
            <p>
            Insightful, results driven Full Stack Web Developer who specializes in the MERN Stack with success directing a broad range of  initiatives while planning, analyzing, and implementing solutions in support of business objectives. Hands-on experience in all stages of system development efforts. Outstanding team building and organizational skills towards supporting the objectives of an organization that rewards reliability, dedication, and solid work ethics with opportunities for professional growth.
            <br></br>
            <br></br>

            </p>
        </Col>
      </Row>

    </div>
  </section> 
  )
}

export default AboutPage
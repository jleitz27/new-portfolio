import React from 'react'; 
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import resumePdf from '../assets/images/Jason_Leitz-Resume.pdf'

function Resume() {
    return(
        <>
        <h1 className="resume">RESUME</h1>
        <div class="resume-intro">
            <Row>
                <Col lg={8} md={12}>
                    Full Stack Web Developer who possesses technical skills within the MERN stack.
                </Col>
            </Row>
            <Row>
            <Col lg={3} md={12}>
            <a href={resumePdf} download><img src="https://img.icons8.com/color/96/000000/pdf-2--v1.png" alt="resume" /></a><p class="icon-text">Resume</p>
            </Col>
            </Row>
        </div>

        <div class="resume-container">
            <Row>
                <Col lg={4} md={12}>
                <h2 class="resume">FRONT END PROFICIENCIES</h2>
                <ul>
                    <li>
                        HTML
                    </li>
                    <li>
                        CSS
                    </li>
                    <li>
                        JavaScript
                    </li>
                    <li>
                        jQuery
                    </li>
                    <li>
                        React.js
                    </li>
                    <li>
                        Css Framework (Bootstrap, Bulma)
                    </li>
                    <li>
                        UI/UX Design
                    </li>
                    <li>
                        Responsive Web Design
                    </li>
                </ul>
                </Col>
        
            <Col lg={4} md={12}>
            <h2 class="resume">BACK END PROFICIENCIES</h2>
                <ul>
                    <li>
                        Node.js
                    </li>
                    <li>
                        Express.js
                    </li>
                    <li>
                        MySQL (mysql, mysql2)
                    </li>
                    <li>
                        Templating language (Handlebars)
                    </li>
                    <li>
                        NoSQL (MongoDB, Mongoose)
                    </li>
                    <li>
                        API's (web, third-party, RESTful, server-side)
                    </li>
                    
                </ul>
            </Col>
        </Row>
        </div>
        </>
)}
  
export default Resume;
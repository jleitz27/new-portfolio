import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"

const Navigation = (props) => {
  return (
    <Navbar bg="secondary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/#/new-portfolio/about" className="my-name">Jason Leitz's Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
            <Nav.Link href="/#/new-portfolio/about">About Me</Nav.Link>
            <Nav.Link href="/#/new-portfolio/projects">Projects</Nav.Link>
            
            <Nav.Link href="/#/new-portfolio/contact">Contact</Nav.Link>
            <Nav.Link href="/new-portfolio/#/resume">Resume</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation
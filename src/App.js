import { HashRouter as Router, Routes, Route } from "react-router-dom"
import Container from "react-bootstrap/Container"
import Navigation from "./components/Navigation"
//import Home from "./pages/Home"
import About from "./pages/About"
import Resume from "./pages/Resume"

import ContactForm from "./pages/Contact"
import Projects from "./pages/Projects"


import "bootstrap/dist/css/bootstrap.min.css"
import Footer from "./components/Footer"
import './App.css'


function App() {
  return (
    <div className="App">
      <Navigation />
      <Container style={{ paddingTop: "20px" }}>
        <Router>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/new-portfolio/about" element={<About />} />
            <Route path="/new-portfolio/#/resume" element={<Resume />} />
            <Route path="/new-portfolio/contact" element={<ContactForm />} />
            <Route path="/new-portfolio/projects" element={<Projects /> } />
  
          </Routes>
        </Router>
      </Container>
      <div>
        <Footer></Footer>
      </div>
    </div>
   
  );
}

export default App;

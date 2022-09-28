import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
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
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            {/* <Route path="/contact" element={<ContactForm />} /> */}
            <Route path="/projects" element={<Projects /> } />
  
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

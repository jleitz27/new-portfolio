import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Container from "react-bootstrap/Container"
import Navigation from "./components/Navigation"
import Home from "./pages/Home"
import About from "./pages/About"
import Resume from "./pages/Resume"
import User from "./pages/User"
import ContactForm from "./pages/Contact"
import Projects from "./pages/Projects"
import Test from "./pages/Test"

import "bootstrap/dist/css/bootstrap.min.css"
import Footer from "./components/Footer"


function App() {
  return (
    <div>
      <Navigation />
      <Container style={{ paddingTop: "20px" }}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/projects" element={<Projects /> } />
            <Route path="/test" element={<Test /> } />
            <Route path="/user">
              <Route path=":id" element={<User />} />
              
              
            </Route>
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

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Container from "react-bootstrap/Container"
import Navigation from "./components/Navigation"
import Home from "./pages/Home"
import About from "./pages/About"
import Products from "./pages/Products"
import User from "./pages/User"
import Login from "./pages/Login"
import Projects from "./pages/Projects"
import Test from "./pages/Test"

import "bootstrap/dist/css/bootstrap.min.css"


function App() {
  return (
    <div>
      <Navigation />
      <Container style={{ paddingTop: "20px" }}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/login" element={<Login />} />
            <Route path="/projects" element={<Projects /> } />
            <Route path="/test" element={<Test /> } />
            <Route path="/user">
              <Route path=":id" element={<User />} />
              
              
            </Route>
          </Routes>
        </Router>
      </Container>
    </div>
  );
}

export default App;

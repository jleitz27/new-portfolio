import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Container from "react-bootstrap/Container"
import Navigation from "./components/Navigation"
import Home from "./pages/Home"
import About from "./pages/About"
import Products from "./pages/Products"
import User from "./pages/User"
import Login from "./pages/Login"
import Gary from "./pages/Gary"
import Test from "./pages/Test"

import "bootstrap/dist/css/bootstrap.min.css"

/*
  TODO:
  - Create two new pages, call them whatever you like
  - Create routes for them in the App.js file
  - Add links to these pages in the Navigation component
*/

/*
  LATER TODO:
  - In one of the pagesa you created, write code that will parse any 
    url params sent to the page. For instance, if someone goes to
    http://localhost:3000/yourpage?name=fred  you want to be able 
    to display that name on the page.

  - You can find help here:
    https://ultimatecourses.com/blog/query-strings-search-params-react-router
*/

/*
  LATER LATER TODO:
  - Just like you can have wilcard routes in Express, you can also have them 
    in React. For instance, you might want to send all users to the same user 
    page, but load different data based on the id of the user.

  - You'll see a page created for you called User.

  - In the navigation, a link has been created for "/user/15"

  - Create a Route below that will detect the wildcard id value 

  - On the Users page, capture that value and display on the page.

  - You can find help here:
    https://reactrouter.com/docs/en/v6/components/route
    AND
    https://reactrouter.com/docs/en/v6/hooks/use-params
*/


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
            <Route path="/gary" element={<Gary /> } />
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

import { useState } from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container"
import login from "../utils/login"

const LoginPage = (props) => {
  const [ loginCreds, setLoginCreds ] = useState({ email: "", password: "" })

  /*
    TODO:
    - set the form fields so that they get their value from the loginCreds in state
    - write code so that typing into the form fields updates the correct value in state 
    - write code so that when the submit button is clicked, the credentials are submitted 
      to the fake login handler
    - write code to parse the response sent back from the fake login, and show a message on 
      the page that says whether the login succeeded or failed
  */


  return (
    <Container style={{ padding: "50px 200px"}}>

      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>


      {/* your success/fail message will go here. use conditional rendering, and for an extra
      challenge, use the Alert component in React Bootstrap. */}



    </Container>
  )
}

export default LoginPage
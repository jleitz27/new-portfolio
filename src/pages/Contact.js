import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { validateEmail } from '../utils/helpers';

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
    <section>
      <h1 data-testid="h1tag">Contact me</h1>
      <form id="contact-form" >
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Name"  name="name" defaultValue={name} onBlur={handleChange} />
        </Form.Group>
        
       
        <Form.Group className="mb-3" htmlFor="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" defaultValue={email} onBlur={handleChange}  />
        
        </Form.Group>
        <Form.Group className="mb-3" htmlFor="message">
          <Form.Label>Message</Form.Label>
          <Form.Control name="message" placeholder="Message" rows="5" defaultValue={message} onBlur={handleChange}  />
        </Form.Group>
        <Button data-testid="button"   variant="secondary" type="submit" onSubmit={handleSubmit} >
          Submit
        </Button>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}

    
    
        
      </form>
    </section>
  );
}

export default ContactForm;

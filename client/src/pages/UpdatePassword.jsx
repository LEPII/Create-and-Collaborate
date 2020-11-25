import axios from 'axios';
import React, { useState } from 'react';
import { Form, Container, Button } from 'react-bootstrap';

const UpdatePassword = ({ history }) => {
  const [password, setPassword] = useState(null);

  const handleChange = (e) => {
    setPassword({ ...password, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.password !== password.confirmPassword) {
      throw Error('Error!');
      return;
    }
    await axios.put(
      '/users/password',
      { password: password.password },
      { withCredentials: true }
    );
    history.push('/login');
  };
  return (
    <Container className="container d-flex flex-column align-items-center justify-content-center fullscreen">
      <h1 className="mb-4">Update Password</h1>
      <Form style={{ width: 300 }} onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>New Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter new password"
            onChange={handleChange}
            name="password"
            autoComplete="off"
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter new password"
            onChange={handleChange}
            name="confirmPassword"
            required
            autoComplete="off"
          ></Form.Control>
        </Form.Group>
        <Form.Group className="d-flex justify-content-center">
          <Button variant="primary" type="submit">
            Update Password
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default UpdatePassword;

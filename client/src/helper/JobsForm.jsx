import React, { useState, useContext } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import Navbar from '../components/Navbar';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import axios from 'axios';

const JobsForm = () => {
  const history = useHistory();
  const [formData, setFormData] = useState(null);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.patch('/jobs', formData);
      history.push(`/events`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="">
      <Navbar />
      <Form style={{ padding: '10rem' }} onSubmit={handleSubmit}>
        <Form.Row>
          <Form.Group as={Col} md="4" controlId="validationFormik01">
            <Form.Label>Title</Form.Label>
            <Form.Control
              htmlFor="title"
              type="text"
              name="title"
              onChange={handleChange}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationFormik02">
            <Form.Label>Location</Form.Label>
            <Form.Control
              htmlFor="location"
              type="text"
              name="location"
              onChange={handleChange}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationFormik02">
            <Form.Label>Company</Form.Label>
            <Form.Control
              htmlFor="company"
              type="text"
              name="company"
              onChange={handleChange}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="6" controlId="validationFormik03">
            <Form.Label>Compensation</Form.Label>
            <Form.Control
              type="text"
              placeholder="$$$"
              name="prices"
              htmlFor="compensation"
              onChange={handleChange}
            />

            <Form.Control.Feedback></Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationFormik04">
            <Form.Label>Start Date</Form.Label>
            <Form.Control
              type="date"
              htmlFor="startDate"
              placeholder=""
              name="date"
              onChange={handleChange}
            />
          </Form.Group>
        </Form.Row>
        <Form.Group>
          <textarea
            rows="3"
            htmlFor="description"
            class="form-control form-control-alternative"
            placeholder="Describe your event!"
            name="description"
            onChange={handleChange}
          ></textarea>
        </Form.Group>
        <Button
          type="submit"
          style={{ marginLeft: '30px', marginTop: '50px', position: 'center' }}
          onClick={() => history.push('/portfolio-edit')}
        >
          {' '}
          Create Job{' '}
        </Button>
      </Form>
    </div>
  );
};

export default JobsForm;

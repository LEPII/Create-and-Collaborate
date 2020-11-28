import React, { useState, useContext } from 'react';
import { Form, Button, Col, InputGroup } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import swal from 'sweetalert';

const UserEditForm = () => {
  const history = useHistory();
  const [formData, setFormData] = useState(null);
  const [mentor, setMentor] = useState(false);
  const { setCurrentUser, currentUser } = useContext(AppContext);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch('/users/me', { ...formData, mentor });
      setCurrentUser(response.data);
      sessionStorage.setItem('user', JSON.stringify(response.data));
      history.push(`/profile/${currentUser.user._id}`);
    } catch (error) {
      swal(`Oops!`, 'Something went wrong.');
    }
  };

  return (
    <Form style={{ padding: '10rem' }} onSubmit={handleSubmit}>
      <Form.Row>
        <Form.Group as={Col} md="4" controlId="validationFormik01">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            htmlFor="name"
            type="text"
            name="firstName"
            onChange={handleChange}
            defaultValue={currentUser?.user?.name}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationFormik02">
          <Form.Label>Email</Form.Label>
          <Form.Control
            htmlFor="email"
            type="text"
            name="email"
            defaultValue={currentUser?.user?.email} //
            onChange={handleChange}
          />

          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationFormikUsername">
          <Form.Label>Username</Form.Label>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              type="text"
              placeholder="BabyMama45"
              aria-describedby="inputGroupPrepend"
              name="username"
              htmlFor="username"
              defaultValue={currentUser?.user?.username}
              onChange={handleChange}
            />
            <Form.Control.Feedback></Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} md="6" controlId="validationFormik03">
          <Form.Label>City and State</Form.Label>
          <Form.Control
            type="text"
            placeholder="location"
            name="location"
            htmlFor="location"
            onChange={handleChange}
          />

          <Form.Control.Feedback></Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationFormik04">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            htmlFor="number"
            placeholder="010-101-0101"
            name="number"
            onChange={handleChange}
          />
          <Form.Control.Feedback></Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationFormik05">
          <Form.Label>Password</Form.Label>
          <Form.Control
            htmlFor="password"
            type="text"
            placeholder="Please do not make it password"
            name="password"
            defaultValue={currentUser?.user?.password}
            onChange={handleChange}
          />
          <Form.Control.Feedback></Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationFormik05">
          <Form.Label>Website</Form.Label>
          <Form.Control
            htmlFor="website"
            type="text"
            placeholder="www.Pineappletimer"
            name="zip"
            onChange={handleChange}
          />
          <Form.Control.Feedback></Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
      <Form.Group controlId="exampleForm.ControlSelect2">
        <Form.Label className="Create">What's your Passion?</Form.Label>
        <Form.Control as="select" htmlFor="category" onChange={handleChange}>
          <option>Exhibition</option>
          <option>Film and Television</option>
          <option>Broadcasting</option>
          <option>Animation</option>
          <option>Music</option>
          <option>News Media</option>
          <option>Fashion</option>
          <option>Video</option>
          <option>Games</option>
          <option>Sports</option>
          <option>Cultural Event</option>
          <option>Performance Arts</option>
          <option>Art</option>
          <option>Design</option>
          <option>Writing</option>
          <option>Other</option>
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Check
          htmlFor="mentor"
          name="Mentor"
          label="Mentor"
          onChange={() => setMentor(!mentor)}
          id="validationFormik0"
        />
      </Form.Group>
      <Form.Group>
        <textarea
          rows="3"
          htmlFor="bio"
          class="form-control form-control-alternative"
          placeholder="Share what you are all about!"
          name="bio"
          onChange={handleChange}
        ></textarea>
      </Form.Group>

      <Button
        style={{ marginLeft: '345px', marginTop: '50px', position: 'center' }}
        type="submit"
      >
        Finish Creating Profile
      </Button>

      <Button
        style={{ marginLeft: '30px', marginTop: '50px', position: 'center' }}
        onClick={() => history.push('/portfolio-edit')}
      >
        {' '}
        Create Portfolio - Optional{' '}
      </Button>
    </Form>
  );
};

export default UserEditForm;

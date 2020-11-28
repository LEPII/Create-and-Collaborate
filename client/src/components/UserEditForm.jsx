import React, { useState, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
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

  const handleLogin = async (e) => {
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
    <div className="portfolios">
      <form onSubmit={handleLogin}>
        <h6 className="Create">User information</h6>
        <div class="pl-lg-4">
          <div class="row">
            <div class="col-lg-6">
              <div class="form-group focused">
                <label className="Create" htmlFor="input-username">
                  Username
                </label>
                <input
                  defaultValue={currentUser?.user?.username}
                  type="text"
                  id="input-username"
                  name="username"
                  class="form-control form-control-alternative"
                  placeholder="Username"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="form-group">
                <label className="Create" htmlFor="input-email">
                  Email address
                </label>
                <input
                  defaultValue={currentUser?.user?.email}
                  type="email"
                  id="input-email"
                  name="email"
                  class="form-control form-control-alternative"
                  placeholder="Enter Email"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <div class="form-group focused">
                <label className="Create" for="input-first-name">
                  Name
                </label>
                <input
                  defaultValue={currentUser?.user?.name}
                  type="text"
                  id="input-first-name"
                  name="name"
                  class="form-control form-control-alternative editPortfolioBox"
                  placeholder="Name"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div class="col-lg-4">
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check
                  className="Create"
                  type="checkbox"
                  label="Mentor"
                  name="mentor"
                  onChange={() => setMentor(!mentor)}
                />
              </Form.Group>
            </div>
            <div class="col-lg-6">
              <div class="form-group focused editPortfolioBox">
                <div>
                  <Form.Group controlId="exampleForm.ControlSelect2">
                    <Form.Label className="Create">Art Category</Form.Label>
                    <Form.Control as="select" multiple>
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
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="pl-lg-4">
          <div class="row">
            <div class="col-md-12"></div>
          </div>
          <div class="row">
            <div class="col-lg-4">
              <div class="form-group focused">
                <label className="Create" for="input-city">
                  City
                </label>
                <input
                  type="text"
                  id="input-city"
                  class="form-control form-control-alternative"
                  placeholder="City"
                  name="location"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div class="col-lg-4"></div>
          </div>
        </div>
        <hr class="my-4" />
        <h6 className="Create">About me</h6>
        <div class="pl-lg-4">
          <div class="form-group focused">
            <textarea
              rows="4"
              class="form-control form-control-alternative"
              placeholder="A few words about you ..."
              name="bio"
              onChange={handleChange}
            ></textarea>
            <Button className="Create" variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserEditForm;

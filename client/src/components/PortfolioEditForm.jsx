import React, { useState, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import swal from 'sweetalert';

const PortfolioEditForm = () => {
  const history = useHistory();
  const [formData, setFormData] = useState(null);
  const { setCurrentUser, currentUser } = useContext(AppContext);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    console.log(formData);
    console.log(event);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/users/me', formData);
      setCurrentUser(response.data);
      sessionStorage.setItem('user', response.data);
      history.push(`/profile/${currentUser.user._id}`);
    } catch (error) {
      swal(`Oops!`, 'Something went wrong.');
    }
  };
  console.log(currentUser);
  return (
    <div class="card-body">
      <form>
        <h3 className="Create">User Portfolio</h3>
        <div class="pl-lg-4">
          <div class="row">
            <div class="col-lg-6">
              <div class="form-group focused">
                <label className="Create" for="input-username">
                  Company
                </label>
                <input
                  type="text"
                  id="input-username"
                  name="company"
                  class="form-control form-control-alternative"
                  placeholder="Company"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="form-group">
                <label className="Create" for="input-email">
                  Position
                </label>
                <input
                  type="text"
                  id="input-email"
                  name="position"
                  class="form-control form-control-alternative"
                  placeholder="Enter Job Position"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <div class="form-group focused">
                <label className="Create" for="input-first-name">
                  Type Of Employment
                </label>
                <input
                  type="text"
                  id="input-first-name"
                  name="typeOfEmployment"
                  class="form-control form-control-alternative"
                  placeholder="Enter Type Of Employment"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="form-group focused">
                <label className="Create" for="input-last-name">
                  Date Of Employment
                </label>
                <input
                  type="date"
                  id="input-last-name"
                  name="dateOfEmployment"
                  class="form-control form-control-alternative"
                  placeholder="Date Of Employment"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
        <hr class="my-4" />
        <div class="pl-lg-4">
          <div class="row">
            <div class="col-md-12">
              <div class="form-group focused">
                <label className="Create" for="input-address">
                  Location
                </label>
                <input
                  id="input-address"
                  class="form-control form-control-alternative"
                  placeholder="Enter Location"
                  name="location"
                  onChange={handleChange}
                  type="text"
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4">
              <div class="form-group focused">
                <label className="Create" for="input-city">
                  Description
                </label>
                <input
                  type="text"
                  id="input-city"
                  class="form-control form-control-alternative"
                  placeholder="Description"
                  name="description"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div class="col-lg-4">
              <div class="form-group focused">
                <label className="Create" for="input-country">
                  School
                </label>
                <input
                  type="text"
                  id="input-country"
                  class="form-control form-control-alternative"
                  placeholder="School"
                  name="school"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div class="col-lg-4">
              <div class="form-group">
                <label className="Create" for="input-country">
                  School Date
                </label>
                <input
                  type="Date"
                  id="input-postal-code"
                  name="schoolDate"
                  class="form-control form-control-alternative"
                  placeholder="School Date"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
        <hr class="my-4" />
        <h6 className="Create">Media</h6>
        <div class="pl-lg-4">
          <div class="form-group focused">
            <label className="Create">Video or Image</label>
            <form>
              <div className="mb-3">
                <Form.File id="formcheck-api-custom" custom>
                  <Form.File.Input
                    isValid
                    onChange={handleChange}
                    name="image"
                  />
                  <Form.File.Label className="Button" data-browse="Add File">
                    Add your file
                  </Form.File.Label>
                  <Form.Control.Feedback type="valid">
                    You did it!
                  </Form.Control.Feedback>
                </Form.File>
              </div>
            </form>
            <Button
              className="Create"
              variant="primary"
              type="submit"
              onClick={handleLogin}
            >
              Submit
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PortfolioEditForm;

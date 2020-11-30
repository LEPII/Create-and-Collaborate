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
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/portfolios`, formData, {
        withCredentials: true
      });
      setCurrentUser(response.data);
      sessionStorage.setItem('user', JSON.stringify(response.data));
      history.push(`/profile/${currentUser._id}`);
    } catch (error) {
      swal(`Oops!`, 'Something went wrong.');
    }
  };

  return (
    <div className="card-body">
      <form onSubmit={handleLogin}>
        <h3 className="Create">User Portfolio</h3>
        <div className="pl-lg-4">
          <div className="row">
            <div className="col-lg-6">
              <div className="form-group focused">
                <label className="Create" htmlFor="company">
                  Name of the Company
                </label>
                <input
                  type="text"
                  id="input-username"
                  name="company"
                  className="form-control form-control-alternative"
                  placeholder="Los Pollos Hermanos"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <label className="Create" htmlFor="position">
                  Position
                </label>
                <input
                  type="text"
                  id="input-email"
                  name="position"
                  className="form-control form-control-alternative"
                  placeholder="Enter Job Position"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="form-group focused">
                <label className="Create" htmlFor="typeOfEmployment">
                  Type Of Employment
                </label>
                <input
                  type="text"
                  id="input-first-name"
                  name="typeOfEmployment"
                  className="form-control form-control-alternative"
                  placeholder="Contract, Part Time, Full Time, For Life...."
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group focused">
                <label className="Create" htmlFor="input-last-name">
                  Date Of Employment
                </label>
                <input
                  type="date"
                  id="input-last-name"
                  name="dateOfEmployment"
                  className="form-control form-control-alternative"
                  placeholder="Date Of Employment"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
        <hr className="my-4" />
        <div className="pl-lg-4">
          <div className="row">
            <div className="col-md-12">
              <div className="form-group focused">
                <label className="Create" htmlFor="input-address">
                  Location
                </label>
                <input
                  id="input-address"
                  className="form-control form-control-alternative"
                  placeholder="Enter Location"
                  name="location"
                  onChange={handleChange}
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="form-group focused">
                <label className="Create" htmlFor="input-city">
                  Description
                </label>
                <input
                  type="text"
                  id="input-city"
                  className="form-control form-control-alternative"
                  placeholder="Description"
                  name="description"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="form-group focused">
                <label className="Create" htmlFor="input-country">
                  School
                </label>
                <input
                  type="text"
                  id="input-country"
                  className="form-control form-control-alternative"
                  placeholder="School"
                  name="school"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="form-group">
                <label className="Create" htmlFor="input-country">
                  School Date
                </label>
                <input
                  type="Date"
                  id="input-postal-code"
                  name="schoolDate"
                  className="form-control form-control-alternative"
                  placeholder="School Date"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
        <hr className="my-4" />
        <h6 className="Create">Media</h6>
        <div className="pl-lg-4">
          <div className="form-group focused">
            <label className="Create">Video or Image</label>

            <div className="mb-3">
              <Form.File id="formcheck-api-custom" custom>
                <Form.File.Input isValid onChange={handleChange} name="image" />
                <Form.File.Label className="Button" data-browse="Add File">
                  Add your file
                </Form.File.Label>
                <Form.Control.Feedback type="valid">
                  You did it!
                </Form.Control.Feedback>
              </Form.File>
            </div>

            <Button className="Create" variant="primary" type="submit">
              Submit Your Craft
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PortfolioEditForm;

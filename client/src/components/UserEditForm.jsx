import React from 'react';
import { Form, Button } from 'react-bootstrap';

const UserEditForm = () => {
  return (
    <div class="card-body">
      <form>
        <h6 className="Create" class="heading-small text-muted mb-4">
          User information
        </h6>
        <div class="pl-lg-4">
          <div class="row">
            <div class="col-lg-6">
              <div class="form-group focused">
                <label
                  className="Create"
                  class="form-control-label"
                  for="input-username"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="input-username"
                  class="form-control form-control-alternative"
                  placeholder="Username"
                  value="lucky.jesse"
                />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="form-group">
                <label
                  className="Create"
                  class="form-control-label"
                  for="input-email"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="input-email"
                  class="form-control form-control-alternative"
                  placeholder="jesse@example.com"
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <div class="form-group focused">
                <label
                  className="Create"
                  class="form-control-label"
                  for="input-first-name"
                >
                  First name
                </label>
                <input
                  type="text"
                  id="input-first-name"
                  class="form-control form-control-alternative"
                  placeholder="First name"
                  value="Lucky"
                />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="form-group focused">
                <label
                  className="Create"
                  class="form-control-label"
                  for="input-last-name"
                >
                  Last name
                </label>
                <input
                  type="text"
                  id="input-last-name"
                  class="form-control form-control-alternative"
                  placeholder="Last name"
                  value="Jesse"
                />
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
        <hr class="my-4" />
        <h6 className="Create" class="heading-small text-muted mb-4">
          Contact information
        </h6>
        <div class="pl-lg-4">
          <div class="row">
            <div class="col-md-12">
              <div class="form-group focused">
                <label
                  className="Create"
                  class="form-control-label"
                  for="input-address"
                >
                  Address
                </label>
                <input
                  id="input-address"
                  class="form-control form-control-alternative"
                  placeholder="Home Address"
                  value="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4">
              <div class="form-group focused">
                <label
                  className="Create"
                  class="form-control-label"
                  for="input-city"
                >
                  City
                </label>
                <input
                  type="text"
                  id="input-city"
                  class="form-control form-control-alternative"
                  placeholder="City"
                  value="New York"
                />
              </div>
            </div>
            <div class="col-lg-4">
              <div class="form-group focused">
                <label
                  className="Create"
                  class="form-control-label"
                  for="input-country"
                >
                  Country
                </label>
                <input
                  type="text"
                  id="input-country"
                  class="form-control form-control-alternative"
                  placeholder="Country"
                  value="United States"
                />
              </div>
            </div>
            <div class="col-lg-4">
              <div class="form-group">
                <label
                  className="Create"
                  class="form-control-label"
                  for="input-country"
                >
                  Postal code
                </label>
                <input
                  type="number"
                  id="input-postal-code"
                  class="form-control form-control-alternative"
                  placeholder="Postal code"
                />
              </div>
            </div>
          </div>
        </div>
        <hr class="my-4" />
        <h6 className="Create" class="heading-small text-muted mb-4">
          About me
        </h6>
        <div class="pl-lg-4">
          <div class="form-group focused">
            <textarea
              rows="4"
              class="form-control form-control-alternative"
              placeholder="A few words about you ..."
            >
              A beautiful Dashboard for Bootstrap 4. It is Free and Open Source.
            </textarea>
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

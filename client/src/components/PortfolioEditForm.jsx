import React from 'react';
import { Form, Button } from 'react-bootstrap';

const PortfolioEditForm = () => {
  return (
    <div class="card-body">
      <form>
        <h3 className="Create" class="heading-small text-muted mb-4">
          User Portfolio
        </h3>
        <div class="pl-lg-4">
          <div class="row">
            <div class="col-lg-6">
              <div class="form-group focused">
                <label
                  className="Create"
                  class="form-control-label"
                  for="input-username"
                >
                  Company
                </label>
                <input
                  type="text"
                  id="input-username"
                  class="form-control form-control-alternative"
                  placeholder="Username"
                  value="Enter Company"
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
                  Position
                </label>
                <input
                  type="text"
                  id="input-email"
                  class="form-control form-control-alternative"
                  placeholder="Enter Job Position"
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
                  Type Of Employment
                </label>
                <input
                  type="text"
                  id="input-first-name"
                  class="form-control form-control-alternative"
                  placeholder="Enter Type Of Employment"
                  value=""
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
                  Date Of Employment
                </label>
                <input
                  type="date"
                  id="input-last-name"
                  class="form-control form-control-alternative"
                  placeholder="Date Of Employment"
                  value=""
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
                <label
                  className="Create"
                  class="form-control-label"
                  for="input-address"
                >
                  Location
                </label>
                <input
                  id="input-address"
                  class="form-control form-control-alternative"
                  placeholder="Enter Location"
                  value=""
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
                  Description
                </label>
                <input
                  type="text"
                  id="input-city"
                  class="form-control form-control-alternative"
                  placeholder="Description"
                  value=""
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
                  School
                </label>
                <input
                  type="text"
                  id="input-country"
                  class="form-control form-control-alternative"
                  placeholder="School"
                  value=""
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
                  School Date
                </label>
                <input
                  type="Date"
                  id="input-postal-code"
                  class="form-control form-control-alternative"
                  placeholder="School Date"
                />
              </div>
            </div>
          </div>
        </div>
        <hr class="my-4" />
        <h6 className="Create" class="heading-small text-muted mb-4">
          Media
        </h6>
        <div class="pl-lg-4">
          <div class="form-group focused">
            <label className="Create">Video or Image</label>
            <form>
              <div className="mb-3">
                <Form.File id="formcheck-api-custom" custom>
                  <Form.File.Input isValid />
                  <Form.File.Label className="Button" data-browse="Add File">
                    Add your file
                  </Form.File.Label>
                  <Form.Control.Feedback type="valid">
                    You did it!
                  </Form.Control.Feedback>
                </Form.File>
              </div>
            </form>
            <Button className="Create" variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PortfolioEditForm;

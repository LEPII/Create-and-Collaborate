import React, { useState, useContext } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { AppContext } from '../context/AppContext';
import swal from 'sweetalert';
// import CompleteButton from '../components/CompleteButton';
// import DeleteButton from '../components/DeleteButton';

const AddEventModal = (props) => {
  const { setLoading } = useContext(AppContext);
  const [description, setDescription] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      axios.post(
        '/events',
        { dateOfEvent: props.date, description },
        { withCredentials: true }
      );
      setLoading(false);
      props.onHide();
    } catch (error) {
      swal('Oops', 'Something went wrong');
    }
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add Event</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter an Event"
              name="description"
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicDueDate">
            <Form.Label>Event Date</Form.Label>
            <Form.Control
              type="date"
              placeholder="Enter a Event"
              name="dueDate"
              defaultValue={props.date}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Button type="submit">Add Event</Button>
            <Button type="submit">Add Event</Button>
          </Form.Group>
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Cancel</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddEventModal;

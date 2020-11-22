import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { AppContext } from '../context/AppContext';
import swal from 'sweetalert';

const CompleteButton = ({ event }) => {
  const { setLoading } = useContext(AppContext);

  // Renders a button that will toggle from true to false
  const toggleComplete = async () => {
    setLoading(true);
    try {
      await axios({
        method: 'PUT',
        url: `/events/${event._id}`,
        withCredentials: true,
        data: { completed: !event.completed }
      });
      swal('Updated', 'Your event has been updated!', 'success');
      setLoading(false);
    } catch (error) {
      swal(`Oops!`, 'Something went wrong.');
    }
  };

  return (
    <Button
      className="mr-2"
      style={{ width: 150 }}
      variant={event.completed ? 'success' : 'secondary'}
      onClick={toggleComplete}
    >
      {event.completed ? 'Mark Incomplete' : 'Mark Complete'}
    </Button>
  );
};

export default CompleteButton;

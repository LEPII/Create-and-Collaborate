import React, { useContext } from 'react';
import moment from 'moment';
import DeleteButton from './DeleteButton';
import CompleteButton from './CompleteButton';
import { AppContext } from '../context/AppContext';

const Event = ({ events }) => {
  const { search } = useContext(AppContext);

  const filteredEvent = events?.filter((event) => {
    return event.description.toLowerCase().includes(search.toLowerCase());
  });
  return (
    <>
      {filteredEvent.map((event) => (
        <tr key={event._id}>
          <td>
            {event.completed ? (
              <strike>{event.description}</strike>
            ) : (
              event.description
            )}
          </td>
          <td>
            {event.dateOfEvent
              ? moment(event.dateOfEvent).format('MMM Do, YYYY')
              : 'No Due Date'}
          </td>
          <td>
            <DeleteButton id={event._id} />
            <CompleteButton event={event} />
          </td>
        </tr>
      ))}
    </>
  );
};

export default Event;

import React, { useContext, useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Container } from 'react-bootstrap';
import AddEventModal from '../components/AddEventModal';
import { AppContext } from '../context/AppContext';
import axios from 'axios';

const Calendar = () => {
  const [newEvent, setNewEvent] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const [eventDate, setEventDate] = useState(null);
  const { loading, setLoading } = useContext(AppContext);
  const { events, setEvents } = useState([]);

  useEffect(() => {
    axios
      .get('/events', { withCredentials: true })
      .then((response) => {
        setEvents(response.data);
        setLoading(false);

        const updateEvents = events.map((event) => {
          const title = event.description;
          const date = event.dateOfEvent;
          const color = event.datePassedCompleted ? '#32B679' : '#059CE5';
          return { title, date, color };
        });
        setNewEvent(updateEvents);
      })
      .catch((error) => console.log(error));
  }, [setEvents, loading, setLoading, eventDate, modalShow]);

  const handleDateClick = (e) => {
    setEventDate(e.dateStr);
    console.log(e.dateStr);
    setModalShow(true);
  };

  return (
    <>
      <Container>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          newEvent={newEvent}
          dateClick={handleDateClick}
        />
        <AddEventModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          date={eventDate}
        />
      </Container>
    </>
  );
};

export default Calendar;

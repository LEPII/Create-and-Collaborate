import React, { useContext, useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Container } from 'react-bootstrap';

const Calendar = () => {
  return (
    <>
      <Container>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
        />
      </Container>
    </>
  );
};

export default Calendar;

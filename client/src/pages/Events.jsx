import React from 'react';
import Navbar from '../components/Navbar';
import EventsHead from '../components/EventsHead';
import EventCalendar from '../helper/EventCalendar';

function Events() {
  return (
    <div className="jobContainer">
      <Navbar />
      <EventsHead />
      <EventCalendar />
    </div>
  );
}

export default Events;

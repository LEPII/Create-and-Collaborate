import React from 'react';
import Navbar from '../components/Navbar';
import EventsHead from '../components/EventsHead';
import EventCalendar from '../helper/EventCalendar';
import '../events.css';

function Events() {
  return (
    <div className="jobForm">
      <Navbar />
      <EventsHead />
      <EventCalendar />
    </div>
  );
}

export default Events;

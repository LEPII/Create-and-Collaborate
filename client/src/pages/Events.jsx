import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import EventsHead from '../components/EventsHead';
import EventCalendar from '../helper/EventCalendar';
import EventSearch from '../components/EventSearch';

function Events() {
  return (
    <div className="jobContainer">
      <Navbar />
      <EventsHead />
      <EventCalendar />
      {/* <Footer /> */}
    </div>
  );
}

export default Events;

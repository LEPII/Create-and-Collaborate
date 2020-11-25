import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import EventsHead from '../components/EventsHead';
import Calendar from '../components/Calendar';
import EventSearch from '../components/EventSearch';

function Events() {
  return (
    <>
      <Navbar />
      <EventsHead />
      <EventSearch />
      <Calendar />
      <Footer />
    </>
  );
}

export default Events;

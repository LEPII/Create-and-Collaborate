import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import EventsHead from '../components/EventsHead';
import EventSearch from '../components/EventSearch';

function Events() {
  return (
    <>
      <Navbar />
      <EventsHead />
      <EventSearch />
      {/* <Calendar /> */}
      <Footer />
      <video width={320} height={320} controls>
        <source
          src="https://res.cloudinary.com/dgipapqks/video/upload/v1606157767/vtxesocaib9uvihh0bhe.mov"
          type="video/mp4"
        />
      </video>
    </>
  );
}

export default Events;

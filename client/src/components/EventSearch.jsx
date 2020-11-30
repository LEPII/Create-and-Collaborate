import React from 'react';
import { Form } from 'react-bootstrap';
import '../searchForm.css';

const EventSearch = ({ setArtist }) => {
  return (
    <Form style={{ margin: '2rem' }}>
      <div className="searchContainer">
        <input
          type="text"
          placeholder=" Collaborate with other creatives!!"
          className="searchInput"
          onChange={(e) => setArtist(e.target.value)}
        />
        <div className="search"></div>
      </div>
    </Form>
  );
};
export default EventSearch;

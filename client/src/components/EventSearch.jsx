import React from 'react';
import { Form } from 'react-bootstrap';
import '../searchForm.css';

const EventSearch = ({ handleSubmitProp, setArtist }) => {
  return (
    <Form style={{ margin: '2rem' }}>
      <div className="searchContainer">
        <input
          type="text"
          placeholder="Search..."
          className="searchInput"
          onChange={(e) => setArtist(e.target.value)}
        />
        <div className="search"></div>
      </div>
    </Form>
  );
};
export default EventSearch;

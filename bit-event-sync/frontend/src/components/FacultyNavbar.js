// src/components/FacultyNavbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const FacultyNavbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li>
          Event
          <ul>
            <li><Link to="/create-event">Create Event</Link></li>
            <li><Link to="/event-history">Event History</Link></li>
            <li><Link to="/current-event">Current Event</Link></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default FacultyNavbar;


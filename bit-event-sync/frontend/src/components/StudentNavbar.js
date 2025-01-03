// src/components/StudentNavbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const StudentNavbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/points">Points Container</Link></li>
        <li>
          Event Master
          <ul>
            <li><Link to="/register">Event Register</Link></li>
            <li><Link to="/my-events">My Events</Link></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default StudentNavbar;

import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const FacultyDashboard = () => {
  return (
    <div style={{ display: 'flex' }}>
      <nav style={{ width: '200px', height: '100vh', backgroundColor: '#f4f4f4', padding: '10px' }}>
        <h2>Faculty Dashboard</h2>
        <ul>
          <li><Link to="/">Dashboard</Link></li>
          <li>
            Event
            <ul>
              <li><Link to="create-event">Create Event</Link></li>
              <li><Link to="event-history">Event History</Link></li>
              <li><Link to="current-event">Current Event</Link></li>
            </ul>
          </li>
        </ul>
      </nav>
      <div style={{ marginLeft: '20px', padding: '10px' }}>
        <h2>Welcome to the Faculty Dashboard</h2>
        {/* Outlet for nested routing */}
        <Outlet />
      </div>
    </div>
  );
};

export default FacultyDashboard;

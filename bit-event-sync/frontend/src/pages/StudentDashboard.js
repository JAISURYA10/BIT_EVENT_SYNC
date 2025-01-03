// src/pages/StudentDashboard.js
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const StudentDashboard = () => {
  return (
    <div style={{ display: 'flex' }}>
      <nav style={{ width: '200px', height: '100vh', backgroundColor: '#f4f4f4', padding: '10px' }}>
        <h2>Student Dashboard</h2>
        <ul>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/dashboard/points">Points Container</Link></li>
          <li>
            Event Master
            <ul>
              <li><Link to="/dashboard/events/register">Event Register</Link></li>
              <li><Link to="/dashboard/events/my">My Events</Link></li>
            </ul>
          </li>
        </ul>
      </nav>
      <div style={{ marginLeft: '20px', padding: '10px', flex: 1 }}>
        <h2>Welcome to the Student Dashboard</h2>
        {/* Render the matched component here */}
        <Outlet />
      </div>
    </div>
  );
};

export default StudentDashboard;

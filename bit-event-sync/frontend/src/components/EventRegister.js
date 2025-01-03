// src/components/EventRegister.js
import React from 'react';

const EventRegister = () => {
  return (
    <div>
      <h2>Event Registration</h2>
      {/* Add your event registration form and logic here */}
      <form>
        <div>
          <label htmlFor="eventName">Event Name:</label>
          <input type="text" id="eventName" required />
        </div>
        <div>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
};

export default EventRegister;

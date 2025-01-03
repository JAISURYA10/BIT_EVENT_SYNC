import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EventHistory = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/events');
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div>
      <h2>Event History</h2>
      <ul>
        {events.map(event => (
          <li key={event._id}>
            <strong>{event.title}</strong> - {event.date} at {event.location} <br />
            <em>{event.description}</em>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventHistory;

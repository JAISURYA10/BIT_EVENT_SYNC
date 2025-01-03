import React from 'react';

const CurrentEvent = () => {
  // Sample current event data; in a real application, this would be fetched from your backend
  const currentEvent = {
    name: 'Tech Symposium 2024',
    date: '2024-03-10',
    description: 'A symposium featuring leading experts in technology.',
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Current Event</h2>
      <div>
        <h3>{currentEvent.name}</h3>
        <p><strong>Date:</strong> {currentEvent.date}</p>
        <p>{currentEvent.description}</p>
      </div>
    </div>
  );
};

export default CurrentEvent;

// src/components/PointsContainer.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PointsContainer = () => {
  const [pointsData, setPointsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPointsData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/points'); // Adjust the API endpoint as needed
        setPointsData(response.data);
      } catch (error) {
        console.error("Error fetching points data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPointsData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Reward Points Earned</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Points Earned</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {pointsData.length > 0 ? (
            pointsData.map((point) => (
              <tr key={point.id}>
                <td>{point.date}</td>
                <td>{point.points}</td>
                <td>{point.description}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No points data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PointsContainer;

import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import StudentDashboard from './pages/StudentDashboard';
import FacultyDashboard from './pages/FacultyDashboard';
import PointsContainer from './components/PointsContainer';
import EventRegister from './components/EventRegister';
import MyEvents from './components/MyEvents';
import CreateEvent from './components/CreateEvent';
import EventHistory from './components/EventHistory';
import CurrentEvent from './components/CurrentEvent';
import { auth, signInWithGoogle } from './firebase';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    // Clean up subscription on unmount
    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  // If user is not logged in, display login button
  if (!user) {
    return (
      <div>
        <h2>Login</h2>
        <button onClick={handleLogin}>Sign in with Google</button>
      </div>
    );
  }

  const userEmail = user.email;

  return (
    <Router>
      <Routes>
        {userEmail === 'jaisurya.cb22@bitsathy.ac.in' ? (
          <Route path="/dashboard" element={<StudentDashboard />}>
            <Route path="points" element={<PointsContainer />} />
            <Route path="events/register" element={<EventRegister />} />
            <Route path="events/my" element={<MyEvents />} />
          </Route>
        ) : userEmail === 'jaisurya6392@gmail.com' ? (
          <Route path="/dashboard" element={<FacultyDashboard />}>
            <Route path="create-event" element={<CreateEvent />} />
            <Route path="event-history" element={<EventHistory />} />
            <Route path="current-event" element={<CurrentEvent />} />
          </Route>
        ) : (
          <Route path="*" element={<h2>Access Denied</h2>} />
        )}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="*" element={<h2>404 Not Found</h2>} />
      </Routes>
    </Router>
  );
};

export default App;

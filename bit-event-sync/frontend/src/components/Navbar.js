// src/components/Navbar.js
import React from 'react';
import StudentNavbar from './StudentNavbar';
import FacultyNavbar from './FacultyNavbar';

const Navbar = ({ userType }) => {
  return (
    <div className="navbar">
      {userType === "student" ? <StudentNavbar /> : <FacultyNavbar />}
    </div>
  );
};

export default Navbar;

import React from 'react';
import './Profile.css';

function Profile() {
  return (
    <div className="profile-container">
      <img src="https://via.placeholder.com/150" alt="Profile Picture" />
      <h2>John Doe</h2>
      <p>Software Developer</p>
      <p>San Francisco, CA</p>
      <div className="social-links">
        <a href="#">Twitter</a>
        <a href="#">LinkedIn</a>
        <a href="#">GitHub</a>
      </div>
    </div>
  );
}

export default Profile;

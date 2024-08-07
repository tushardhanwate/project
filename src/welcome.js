import React, { useState } from 'react';

function WelcomePage() {
  const [userName, setUserName] = useState('');

  function handleNameInput(event) {
    setUserName(event.target.value);
  }

  return (
    <div>
      <h1>Welcome to our news app</h1>
      <p>Our app is designed to provide you with up-to-date news articles from various sources in one convenient location.</p>
      <p>With personalized news feeds based on your preferences, search functionality, bookmarking, push notifications for breaking news, and dark mode for easier reading in low-light conditions, we aim to provide you with the best news experience possible.</p>
      <label>
        Please enter your name:
        <input type="text" value={userName} onChange={handleNameInput} />
      </label>
      <p>{userName ? `Welcome, ${userName}!` : ''}</p>
      <p>To get started, simply download and install the app from the App Store or Google Play Store. Once you have created an account or logged in, you will be prompted to select your preferred news categories. From there, you can browse through the latest news articles, search for specific articles, bookmark articles for later reading, receive push notifications for breaking news, and share articles via social media or messaging apps.</p>
      <p>We hope you enjoy using our app and that it helps you stay informed about the latest news and events. If you have any questions or issues, please don't hesitate to contact our support team.</p>
      <p>Thank you for choosing our news app!</p>
    </div>
  );
}

export default WelcomePage;

import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <h1>Doable</h1>
        <p>Manage your tasks!</p>
        <Link to="/todos" className="start-btn">Start Organizing →</Link>
      </div>

      <div className="features">
        <div className="feature">
          <span className="emoji">✓</span>
          <h3>Track Tasks</h3>
          <p>List what needs to be done.</p>
        </div>
        <div className="feature">
          <span className="emoji">𖣠</span>
          <h3>Focus Pocus</h3>
          <p>Get stuff done!</p>
        </div>
        <div className="feature">
          <span className="emoji">✎</span>
          <h3>Stay Productive</h3>
          <p>You can do this!</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
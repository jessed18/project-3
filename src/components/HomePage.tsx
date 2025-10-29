import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <h1>Welcome to TaskFlow ✨</h1>
        <p>Your simple, colorful task manager</p>
        <Link to="/todos" className="start-btn">Start Organizing →</Link>
      </div>

      <div className="features">
        <div className="feature">
          <span className="emoji">insert checkmart icon</span>
          <h3>track tasks</h3>
          <p>list all your tasks.</p>
        </div>
        <div className="feature">
          <span className="emoji">another icon</span>
          <h3>focus pocus</h3>
          <p>organize!</p>
        </div>
        <div className="feature">
          <span className="emoji">lol</span>
          <h3>stay productive</h3>
          <p>you can do this</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
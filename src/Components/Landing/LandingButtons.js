import React from 'react';
import { Link } from 'react-router-dom';
import './landing.css';

export default function Landing() {
  return (
    <div className="centered-container">
      <h1 className="heading">Welcome to the Online Library</h1>
      <p className="subheading">Explore, Learn, and Discover</p>
      <p className="instruction">Login or Register to continue</p>
      <div className="button-container">
        <Link to="/login">
          <button className="button">Login</button>
        </Link>
        <Link to="/register">
          <button className="button">Register</button>
        </Link>
      </div>
    </div>
  );
}

import React from 'react';
import './Home.css';
export default function Home() {
  return (
    <div
      className="home"
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/kickball.jpg)` }}
    >
      <h1>Welcome to the Kickball League Directory</h1>
    </div>
  );
}

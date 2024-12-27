import React from 'react';

function About() {
  return (
    <div className="about-page">
      <h1>About Us</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.
      </p>
      <h2>Our Mission</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.
      </p>
      <h2>Our Team</h2>
      <div className="team-members">
        <div className="team-member">
          <h3>John Doe</h3>
          <p>Founder & CEO</p>
        </div>
        <div className="team-member">
          <h3>Jane Smith</h3>
          <p>Co-Founder & CTO</p>
        </div>
      </div>
    </div>
  );
}

export default About;
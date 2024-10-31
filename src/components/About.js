import React from "react";
import { image, username, city } from "../data/user"; // Ensure this is correct

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I Made This</p>
      <p>Hello! My name is {username} and I'm from {city}.</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About; // Default export of the About component

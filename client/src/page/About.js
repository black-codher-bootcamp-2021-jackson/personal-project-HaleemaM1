import React from "react";
import "../style/About.css";
import images from "../images/stretch.png";

export default function About() {
  return (
    <div id="aboutbody">
      <h1 className = "Abouth1"> About Page </h1>

      <p>
        Use the Her Fitness App to find the nearest and best female fitness spaces for you

        
      </p>

      <img src = {images} alt ="stretch"/>
    </div>
  );
}

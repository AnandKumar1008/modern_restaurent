import React from "react";
import "./About.css";
import knife from "../Images/knife.png";

const About = () => {
  return (
    <div className="about_container section__padding">
      <div className="about_container-about">
        <div className="about_container-about_us">
          <h1>About us</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.
          </p>
          <button>Know More</button>
        </div>
      </div>
      <div className="about_container-img">
        <img src={knife} alt="" />
      </div>
      <div className="about_container-history">
        <div className="about_container-history_our">
          <h1>Our History</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
            voluptatum porro impedit, praesentium asperiores, hic cum iure
            tenetur ea eveniet minus provident. Officiis nemo nihil dolorum modi
            possimus. Odit
          </p>
          <button>Know More</button>
        </div>
      </div>
    </div>
  );
};

export default About;

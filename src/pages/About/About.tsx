import React, { useState, useCallback } from "react";

import "./About.scss";
import about1 from "../../images/about/about1.jpg";
import about2 from "../../images/about/about2.jpg";
import about3 from "../../images/about/about3.jpg";
import about4 from "../../images/about/about4.jpg";
import about5 from "../../images/about/about5.jpg";
import about6 from "../../images/about/about6.jpg";

import Gallery from "react-photo-gallery";

const photos = [
  {
    src: about1,
    width: 4,
    height: 3,
  },
  {
    src: about2,
    width: 4,
    height: 3,
  },
  {
    src: about3,
    width: 4,
    height: 3,
  },
  {
    src: about4,
    width: 4,
    height: 3,
  },
  {
    src: about5,
    width: 554,
    height: 739,
  },
  {
    src: about6,
    width: 6,
    height: 13,
  },
];

const About = () => {
  return (
    <div className="about_wrapper">
      <div>
        <h1>About Me</h1>
        <Gallery photos={photos} direction="column" />
        {/* <h2>Education</h2>
        <h3>
          Bachelar's degree of computer science in&nbsp;
          <a href="https://u-aizu.ac.jp/en/">the University of Aizu</a>
        </h3>
        <h2>Study</h2>
        <h3>
          Creating more human likely AI agent by reinforcement learning in&nbsp;
          <a href="https://github.com/google-research/football">
            google football environment
          </a>
        </h3>
        <h2>Hobby</h2>
        <h3>
          Watching Soccer Game⚽️, especialy Premier League, &nbsp;
          <a href="https://www.brightonandhovealbion.com/">
            Brighton & Hove Albion FC
          </a>
          is my favorite team ever!
        </h3> */}
      </div>
    </div>
  );
};

export default About;

import React, { useState, useCallback } from "react";

import "./About.scss";

import { slides, advancedSlides } from "../../data/slides";

import PhotoAlbum from "react-photo-album";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Video from "yet-another-react-lightbox/plugins/video";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const About = () => {
  const [index, setIndex] = useState(-1);

  return (
    <div className="about_wrapper fadeInUp">
      <div>
        <h1>About Me</h1>
        <PhotoAlbum
          layout="masonry"
          photos={slides}
          targetRowHeight={150}
          onClick={({ index: current }) => setIndex(current)}
        />

        <Lightbox
          slides={advancedSlides.map((slide) => {
            const a = `📍${slide.description}`;
            const slideCopy = { ...slide };
            slideCopy.description = a;
            return slideCopy;
          })}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          // enable optional lightbox plugins
          plugins={[Video, Captions, Fullscreen, Slideshow, Thumbnails, Zoom]}
          // captions={{ showToggle, descriptionTextAlign, descriptionMaxLines }}
        />
        {/* <Gallery photos={slides} directsion={"column"} /> */}
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

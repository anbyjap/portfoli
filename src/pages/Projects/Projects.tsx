import CarouselItem from "../../components/CarouselItem/CarouselItem";
import { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import React from "react";

import "./Projects.scss";
import { Box, Modal } from "@material-ui/core";
import { SkillsIcon } from "../../components/SkillsIcon";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { NewlineText } from "../../components/NewLineText";
import { projects } from "../../data/projects";

const Projects = () => {
  const [expandedItemIndex, setExpandedItemIndex] = useState<null | number>(
    null
  );
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Function to update the window width in the state
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener to track window resize
    window.addEventListener("resize", handleWindowResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []); //

  const toggleExpand = (index: number | null) => {
    if (windowWidth <= 768) {
      return;
    }
    if (expandedItemIndex === index) {
      setExpandedItemIndex(null);
    } else {
      setExpandedItemIndex(index);
    }
  };

  return (
    <div>
      <h1>Projects</h1>
      <div className="project_wrapper fadeInUp">
        {projects.map((project, i) => (
          <CarouselItem
            key={i}
            name={project.name}
            description={project.description}
            skills={project.skills}
            imgSrc={project.imgSrc}
            link={project.link}
            expanded={i === expandedItemIndex}
            expandedItemIndex={expandedItemIndex}
            hidden={expandedItemIndex !== null && i !== expandedItemIndex}
            onExpand={() => toggleExpand(i)}
            windowWidth={windowWidth}
          />
        ))}
      </div>
      {expandedItemIndex !== null && (
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={expandedItemIndex !== null}
          onClose={() => toggleExpand(null)}
          closeAfterTransition
        >
          <Box
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "white",
              padding: "3%",
              maxWidth: "80%",
              width: "50%",
              height: "80%",
            }}
            className="modal"
          >
            <Carousel showThumbs={false} useKeyboardArrows={true}>
              {projects[expandedItemIndex]?.projectScreenshots?.map(
                (screenshot, index) => (
                  <div key={index}>
                    <img
                      style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "contain",
                      }}
                      src={screenshot}
                      alt="aaa"
                      key={index}
                    />
                  </div>
                )
              )}
            </Carousel>
            <Box style={{ backgroundColor: "white" }}>
              <h2>{projects[expandedItemIndex].name}</h2>
              <Box>
                <h2>
                  {projects[expandedItemIndex].skills.map((skillName) => (
                    <SkillsIcon key={skillName} name={skillName} />
                  ))}
                </h2>
                <p>
                  <NewlineText text={projects[expandedItemIndex].description} />
                </p>
              </Box>
              {projects[expandedItemIndex].link !== "" && (
                <Box style={{ display: "flex", justifyContent: "end" }}>
                  <a href={projects[expandedItemIndex].link} target="_blank">
                    ⇒Go and see it
                  </a>
                </Box>
              )}
            </Box>
          </Box>
        </Modal>
      )}
    </div>
  );
};

export default Projects;

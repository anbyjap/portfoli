import CarouselItem from "../../components/CarouselItem/CarouselItem";
import { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import React from "react";
import { CarouselItemProps } from "../../types";
import coiasImage from "../../images/coias.jpg";
import coiasImage1 from "../../images/coias1.png";
import coiasImage2 from "../../images/coias2.png";
import classroomImage from "../../images/classroom.jpg";
import spogocchiImage from "../../images/spogocchi.png";
import spogocchiImage1 from "../../images/spogocchi_1.png";
import spogocchiImage2 from "../../images/spogocchi_2.png";
import spogocchiImage3 from "../../images/spogocchi_3.png";
import spogocchiImage4 from "../../images/spogocchi_4.png";
import "./Projects.scss";
import { Box, Modal } from "@material-ui/core";
import { Typography } from "@mui/material";
import { SkillsIcon } from "../../components/SkillsIcon";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const items: CarouselItemProps[] = [
  {
    name: "COIAS(Come On! Impacting ASteroids)",
    description:
      "COIAS is a web application that democratizes the discovery of potentially hazardous, undiscovered asteroids, making it accessible to both experts and non-experts, including students. It leverages technologies like React, Python, and Docker.      As a full-stack engineer, I played a vital role in this project. COIAS is already live and widely used. One notable achievement was significantly improving the user experience. I reduced the asteroid discovery process from 10 minutes in the desktop version to just 2-3 minutes.   COIAS is a crucial tool for asteroid threat awareness, and my UX enhancements have made it more user-friendly and efficient.",
    skills: ["React", "TypeScript", "Python", "Mysql", "Docker"],
    imgSrc: coiasImage,
    projectScreenshots: [coiasImage, coiasImage1, coiasImage2],
    link: "https://web-coias.u-aizu.ac.jp/",
  },
  {
    name: "SupoGotchi",
    description:
      "SupoGotchi is a mobile app designed for enjoyable exercise management, primarily built using React Native and Go. During a hackathon, I collaborated with a team of about 10 university peers to develop this app. In SupoGotchi, users can track exercise records and watch their avatars evolve or devolve based on performance. Users can also manage weight and height. I participated as a frontend engineer using React Native and TypeScript. My role involved designing a user-friendly interface and creating a cross-platform app. This project allowed me to enhance my frontend development skills and contribute to team efforts.SupoGotchi promotes a healthy lifestyle and fun for users, showcasing my growth in frontend development and teamwork experience.",
    skills: ["React", "TypeScript", "Go", "Docker"],
    imgSrc: spogocchiImage,
    projectScreenshots: [
      spogocchiImage,
      spogocchiImage1,
      spogocchiImage2,
      spogocchiImage3,
      spogocchiImage4,
    ],
    link: "https://github.com/aizuHackathon",
  },
  {
    name: "Student Management System",
    description:
      "This is a student management application for teachers of junior high school students, using web and Android devices. web is made in React and typescript for teachers, and students can write test results, class comments, diaries, etc. on their Android devices. The system streamlines the work in the field of education, which used to be done manually.",
    skills: ["React", "Python", "Aws"],
    imgSrc: classroomImage,
    projectScreenshots: [classroomImage],
    link: "",
  },
];

const Projects = () => {
  const [expandedItemIndex, setExpandedItemIndex] = useState<null | number>(
    null
  );
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const a = [coiasImage, coiasImage1, coiasImage2];

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
      <div className="project_wrapper">
        {items.map((item, i) => (
          <CarouselItem
            key={i}
            name={item.name}
            description={item.description}
            skills={item.skills}
            imgSrc={item.imgSrc}
            link={item.link}
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
            }}
          >
            <Carousel showThumbs={false} useKeyboardArrows={true}>
              {items[expandedItemIndex].projectScreenshots.map(
                (item, index) => (
                  <div key={index}>
                    <img
                      style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "contain",
                      }}
                      src={item}
                      alt="aaa"
                      key={index}
                    />
                  </div>
                )
              )}
            </Carousel>
            <Box style={{ backgroundColor: "white" }}>
              <Typography gutterBottom variant="h5" component="div">
                {items[expandedItemIndex].name}
              </Typography>
              <Box>
                <Typography variant="body2" color="text.secondary">
                  {items[expandedItemIndex].skills.map((skillName) => (
                    <SkillsIcon key={skillName} name={skillName} />
                  ))}
                </Typography>
                <Typography gutterBottom component="div">
                  {items[expandedItemIndex].description}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Modal>
      )}
    </div>
  );
};

export default Projects;

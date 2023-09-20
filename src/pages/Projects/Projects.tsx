import CarouselItem from "../../components/CarouselItem/CarouselItem";
import { useState } from "react";
import React from "react";
import { CarouselItemProps } from "../../types";
import coiasImage from "../../images/coias.jpg";
import classroomImage from "../../images/classroom.jpg";
import spogocchiImage from "../../images/spogocchi.png";
import "./Projects.scss";

const items: CarouselItemProps[] = [
  {
    name: "COIAS(Come On! Impacting ASteroids)",

    description:
      "COIAS is a web application that democratizes the discovery of potentially hazardous, undiscovered asteroids, making it accessible to both experts and non-experts, including students. It leverages technologies like React, Python, and Docker.      As a full-stack engineer, I played a vital role in this project. COIAS is already live and widely used. One notable achievement was significantly improving the user experience. I reduced the asteroid discovery process from 10 minutes in the desktop version to just 2-3 minutes.   COIAS is a crucial tool for asteroid threat awareness, and my UX enhancements have made it more user-friendly and efficient.",
    skills: ["React", "TypeScript", "Python", "Mysql", "Docker"],
    imgSrc: coiasImage,
    link: "https://web-coias.u-aizu.ac.jp/",
  },
  {
    name: "SupoGotchi",
    description:
      "SupoGotchi is a mobile app designed for enjoyable exercise management, primarily built using React Native and Go. During a hackathon, I collaborated with a team of about 10 university peers to develop this app. In SupoGotchi, users can track exercise records and watch their avatars evolve or devolve based on performance. Users can also manage weight and height. I participated as a frontend engineer using React Native and TypeScript. My role involved designing a user-friendly interface and creating a cross-platform app. This project allowed me to enhance my frontend development skills and contribute to team efforts.SupoGotchi promotes a healthy lifestyle and fun for users, showcasing my growth in frontend development and teamwork experience.",
    skills: ["React", "TypeScript", "Go", "Docker"],
    imgSrc: spogocchiImage,
    link: "https://github.com/aizuHackathon",
  },
  {
    name: "Student Management System",
    description:
      "This is a student management application for teachers of junior high school students, using web and Android devices. web is made in React and typescript for teachers, and students can write test results, class comments, diaries, etc. on their Android devices. The system streamlines the work in the field of education, which used to be done manually.",
    skills: ["React", "Python", "Aws"],
    imgSrc: classroomImage,
    link: "",
  },
];

const Projects = () => {
  const [expandedItemIndex, setExpandedItemIndex] = useState<null | number>(
    null
  );

  const toggleExpand = (index: number) => {
    if (window.innerWidth <= 768) {
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
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;

import CarouselItem from "../../components/CarouselItem/CarouselItem";
import { useState } from "react";
import { CarouselItemProps } from "../../types";
import coiasImage from "../../images/coias.jpg";
import classroomImage from "../../images/classroom.jpg";
import "./Projects.scss";

const items: CarouselItemProps[] = [
  {
    name: "COIAS",
    description:
      "COIAS, stands for 'Come On! Impacting ASteroid', is aimed to find new star with archive data taken by SUBARU telescope.\nThis is mainly deployed for biginners of cosmology and making it easy to operate.",
    skills: ["React", "TypeScript", "Python", "Mysql", "Docker"],
    imgSrc: coiasImage,
    link: "https://web-coias.u-aizu.ac.jp/",
  },
  {
    name: "Managing junior high school students",
    description:
      "This is a student management application for teachers of junior high school students, using web and Android devices. web is made in React and typescript for teachers, and students can write test results, class comments, diaries, etc. on their Android devices. The system streamlines the work in the field of education, which used to be done manually.",
    skills: ["React", "Python", "Aws"],
    imgSrc: classroomImage,
    link: "",
  },
  {
    name: "Managing junior high school students",
    description:
      "This is a student management application for teachers of junior high school students, using web and Android devices. web is made in React and typescript for teachers, and students can write test results, class comments, diaries, etc. on their Android devices. The system streamlines the work in the field of education, which used to be done manually.",
    skills: ["React", "Python", "Aws"],
    imgSrc: classroomImage,
    link: "",
  },
  {
    name: "Managing junior high school students",
    description:
      "This is a student management application for teachers of junior high school students, using web and Android devices. web is made in React and typescript for teachers, and students can write test results, class comments, diaries, etc. on their Android devices. The system streamlines the work in the field of education, which used to be done manually.",
    skills: ["React", "Python", "Aws"],
    imgSrc: classroomImage,
    link: "",
  },
  {
    name: "Managing junior high school students",
    description:
      "This is a student management application for teachers of junior high school students, using web and Android devices. web is made in React and typescript for teachers, and students can write test results, class comments, diaries, etc. on their Android devices. The system streamlines the work in the field of education, which used to be done manually.",
    skills: ["React", "Python", "Aws"],
    imgSrc: classroomImage,
    link: "",
  },
  {
    name: "Managing junior high school students",
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
